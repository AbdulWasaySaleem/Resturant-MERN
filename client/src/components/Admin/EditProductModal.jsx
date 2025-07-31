import React from "react";
import { toast } from "react-toastify";
import axiosInstance from "../../utils/axiosinstance";
import getErrorMessage from "../common/getErrorMessage";

const EditProductModal = ({ product, visible, onClose, onSave }) => {
  const [editedProduct, setEditedProduct] = React.useState(product);
  const [newImage, setNewImage] = React.useState(null);

  React.useEffect(() => {
    setEditedProduct(product);
    setNewImage(null);
  }, [product]);

  if (!visible || !editedProduct) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setNewImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", editedProduct.title);
      formData.append("description", editedProduct.description);
      formData.append("category", editedProduct.category);
      formData.append("price", editedProduct.price);
      formData.append("review", editedProduct.review);

      if (newImage) {
        formData.append("image", newImage);
      }

      const res = await axiosInstance.patch(
        `/products/update/${editedProduct._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Product updated successfully!");
      onSave(res.data.data); // send updated product to parent
      onClose(); // close modal
    } catch (error) {
      toast.error(getErrorMessage(error));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
          Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          <div className="text-sm text-gray-700">
            <p className="mb-1">Current Image:</p>
            <img
              src={newImage ? URL.createObjectURL(newImage) : editedProduct.img}
              alt="preview"
              className="h-32 w-full object-cover rounded border mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-600"
            />
          </div>
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Title"
            value={editedProduct.title}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, title: e.target.value })
            }
            required
          />
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Description"
            value={editedProduct.description}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, description: e.target.value })
            }
            required
          />
          <input
            type="text"
            className="border p-2 w-full rounded"
            placeholder="Category"
            value={editedProduct.category}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, category: e.target.value })
            }
            required
          />
          <input
            type="number"
            className="border p-2 w-full rounded"
            placeholder="Price"
            value={editedProduct.price}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, price: e.target.value })
            }
            required
          />
          <input
            type="number"
            className="border p-2 w-full rounded"
            placeholder="Review"
            value={editedProduct.review}
            onChange={(e) =>
              setEditedProduct({ ...editedProduct, review: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 w-full font-semibold"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
