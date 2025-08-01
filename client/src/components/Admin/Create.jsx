import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosinstance";
import { toast } from "react-toastify";

const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loading state
  const navigate = useNavigate();

  const onChangeFile = (e) => setImage(e.target.files[0]);
  const handleCloseImg = () => setImage(null);

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Image is required");
      return;
    }

    try {
      setLoading(true); // ✅ Start loading
      const formData = new FormData();

      formData.append("image", image);
      formData.append("title", title);
      formData.append("description", desc);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("review", review);

      const response = await axiosInstance.post("/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product created successfully!");
      navigate("/adminpanel");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong";

      toast.error(message);
    } finally {
      setLoading(false); // ✅ End loading
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
          disabled={loading}
        />
        <input
          type="text"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Description..."
          onChange={(e) => setDesc(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="text"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Category..."
          onChange={(e) => setCategory(e.target.value)}
          required
          disabled={loading}
        />
        <div className="relative border border-indigo-300 rounded px-4 py-2 text-sm text-center text-indigo-700 bg-indigo-50">
          <label htmlFor="image" className="cursor-pointer block font-medium">
            {image ? `${image.name}` : "Upload Image"}
          </label>
          {image && !loading && (
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
            disabled={loading}
          />
        </div>
        <input
          type="number"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Price..."
          onChange={(e) => setPrice(e.target.value)}
          required
          disabled={loading}
        />
        <input
          type="number"
          className="input border border-violet-300 p-2 w-full rounded"
          placeholder="Review..."
          onChange={(e) => setReview(e.target.value)}
          required
          disabled={loading}
        />
        <button
          type="submit"
          className={`bg-indigo-600 text-white py-2 px-6 rounded w-full font-semibold ${
            loading ? "opacity-60 cursor-not-allowed" : "hover:bg-indigo-700"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Create;
