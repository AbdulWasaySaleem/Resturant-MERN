import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Test = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  //console.log(token)

  const onChangeFile = (e) => {
    //return 1st file
    setImage(e.target.files[0]);
    console.log("image:", image);
  };

  //if uplodided wrong
  const handleCloseImg = () => {
    setImage("");
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      let filename = null;

      if (image) {
        filename = Date.now() + image.name;
        //console.log("filename", filename);
        //console.log("image:", image);
        formData.append("filename", filename);
        formData.append("image", image);

        await axios.post("http://localhost:3000/images/image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
      }

      const response = await axios.post(
        "http://localhost:3000/products/create",
        {
          title,
          description: desc,
          category,
          img: filename,
          price,
          review,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("food:", response.data);
      toast("Post created successfully...")
      navigate(`/adminpanel`);
    } catch (error) {
      console.error("Error with Create", error.message);
    }
  };

  return (
    <>
      <div className="bg-orange-100 min-h-screen">
        <div className="container mx-auto mt-8">
          <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
            <h2 className="text-xl font-bold mb-4">Create Food</h2>
            <form onSubmit={handleCreateProduct} encType="multipart/form-data">
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Title:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Title..."
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Description:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Description..."
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Category:
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Category..."
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Image:
                </label>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={onChangeFile}
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer border border-gray-300 rounded px-4 py-2 block w-full text-center"
                >
                  {image ? (
                    <>
                      {image.name}{" "}
                      <AiOutlineCloseCircle
                        className="inline-block align-middle ml-1 text-red-500"
                        onClick={handleCloseImg}
                      />
                    </>
                  ) : (
                    <span>Upload Image</span>
                  )}
                </label>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Price:
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Price..."
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-1">
                  Review:
                </label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  placeholder="Review..."
                  onChange={(e) => setReview(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                  onClick={() => {
                    handleCreateProduct()
                    // navigate("/test");
                    // window.location.reload();
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <button onClick={()=>{navigate('/adminpanel')}} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Go back to admin panel</button>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Test;
