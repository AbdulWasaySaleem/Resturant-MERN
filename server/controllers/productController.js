import Product from "../Model/Product.js";
import {
  successResponse,
  errorResponse,
  handleResponse,
  handleError,
} from "../utils/responseHandler.js";

// Get all products with optional query filter
export const getAllProductCategoryController = async (req, res) => {
  try {
    const products = await Product.find(req.query); // e.g., { category: "pizza" }
    return handleResponse(res, 200, products, "Products fetched successfully");
  } catch (error) {
    return handleError(res, error, "Failed to fetch products");
  }
};

// Get all products (no filter)
export const getAllproductController = async (req, res) => {
  try {
    const products = await Product.find({});
    return handleResponse(res, 200, products, "All products retrieved");
  } catch (error) {
    return handleError(res, error, "Failed to fetch all products");
  }
};

// Get a single product by ID
export const getOneProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return errorResponse(res, 400, "No product ID provided");
    }

    const product = await Product.findById(productId);
    if (!product) {
      return errorResponse(res, 404, "Product not found");
    }

    return successResponse(res, 200, product, "Product fetched successfully");
  } catch (error) {
    return handleError(res, error, "Error fetching product");
  }
};

// Create a new product
export const createProductController = async (req, res) => {
  try {
    // ✅ Block demo admin write
    if (req.user?.isDemoAdmin) {
      return errorResponse(res, 403, "Demo admin has read-only access");
    }

    const { title, description, price, review, category } = req.body;
    const imageUrl = req.file?.path;

    if (!title || !description || !price || !review || !category || !imageUrl) {
      return errorResponse(res, 400, "All fields including image are required");
    }

    const newProduct = await Product.create({
      title,
      description,
      price,
      review,
      category,
      img: imageUrl,
    });

    return successResponse(res, 201, newProduct, "Product created successfully");
  } catch (error) {
    return handleError(res, error, "Product creation failed");
  }
};


// Update product by ID
export const updateProductController = async (req, res) => {
  try {
    if (req.user?.isDemoAdmin) {
      return errorResponse(res, 403, "Demo admin has read-only access");
    }
    const productId = req.params.id;
    const { title, description, price, review, category } = req.body;

    const updates = {
      title,
      description,
      price,
      review,
      category,
    };

    // If a new image is uploaded, include it in the updates
    if (req.file?.path) {
      updates.img = req.file.path;
    }
    

    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, {
      new: true,
    });

    if (!updatedProduct) {
      return errorResponse(res, 404, "Product not found");
    }

    return successResponse(
      res,
      200,
      updatedProduct,
      "Product updated successfully"
    );
  } catch (error) {
    return handleError(res, error, "Error updating product");
  }
};

// Delete product by ID
export const deleteProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    if (req.user?.isDemoAdmin) {
      return errorResponse(res, 403, "Demo admin has read-only access");
    }
    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return errorResponse(res, 404, "Product not found");
    }

    return successResponse(res, 200, {}, "Product deleted successfully");
  } catch (error) {
    return handleError(res, error, "Error deleting product");
  }
};
