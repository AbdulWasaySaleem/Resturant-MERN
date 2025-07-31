import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosinstance";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const onChangeFile = (e) => setImage(e.target.files[0]);
  const handleCloseImg = () => setImage(null);

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      if (!image) {
        return console.error("Image is required");
      }

      formData.append("image", image); 

      formData.append("title", title);
      formData.append("description", desc);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("review", review);

      await axiosInstance.post("/products/create", formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/adminpanel");
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white mt-8 p-6 rounded shadow-md border border-indigo-100">
      <h2 className="text-3xl font-semibold mb-4 text-center text-indigo-700">
        Create Product
      </h2>
      <form
        onSubmit={handleCreateProduct}
        encType="multipart/form-data"
        className="space-y-4"
      >
        <input
          type="text"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Title..."
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Description..."
          onChange={(e) => setDesc(e.target.value)}
          required
        />
        <input
          type="text"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Category..."
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <div className="relative border border-indigo-300 rounded px-4 py-2 text-sm text-center text-indigo-700 bg-indigo-50">
          <label htmlFor="image" className="cursor-pointer block font-medium">
            {image ? `${image.name}` : "Upload Image"}
          </label>
          {image && (
            <AiOutlineCloseCircle
              onClick={handleCloseImg}
              className="absolute right-2 top-2 text-red-500 cursor-pointer text-lg"
            />
          )}
          <input
            type="file"
            id="image"
            className="hidden"
            onChange={onChangeFile}
          />
        </div>
        <input
          type="number"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Price..."
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Review..."
          onChange={(e) => setReview(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700 w-full font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
