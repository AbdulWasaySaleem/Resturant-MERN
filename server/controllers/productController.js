import Product from "../Model/Product.js";

export const getAllProductController = async (req, res) => {
  try {
    //req.query = {category:"pizza"}, {category:"burger"}
    const products = await Product.find(req.query);
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
};

//get one product bassis of id
export const getOneProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ msg: "No product ID provided!" });
    }

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ msg: "Product not found!" });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

//creating of product
export const createProductController = async (req, res) => {
  try {
    const newProduct = await Product.create({ ...req.body });
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

//get all product
export const getAllproductController = async (req,res)=>{
  try {
    const product = await Product.find({})
    return res.status(201).json(product)
  } catch (error) {
    console.log(error);
  }
}

//edit 
export const updateProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    const updates = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(productId, updates, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found!" });
    }
    return res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

//delete 
export const deleteProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found!" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};