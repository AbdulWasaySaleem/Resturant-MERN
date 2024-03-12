import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";


const Create = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("wasy");
  const [price, setPrice] = useState("");
  const [review, setReview] = useState("");
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  //console.log(token)

  const onChangeFile = (e) => {
    //return 1st file
    setImage(e.target.files[0]);
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
      console.log("filename", filename);
      console.log("image:", image);
      formData.append("filename", filename);
      formData.append("image", image);

      await axios.post('http://localhost:3000/images/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
    }

    const response = await axios.post('http://localhost:3000/products/create', {
      title,
      description: desc,
      category,
      img: filename,
      price,
      review,
    }, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("food:", response.data);
    //navigate(`/food/${response.data._id}`);
    navigate(`/admin`);
  } catch (error) {
    console.error("Error with Create", error.message);
  }
};
  return (
    <>
      <div className="bg-orange-100 min-h-screen">
        <div className="bg-white text-blue-800 px-10 py-1 z-10 w-full">
          <div className="items-center justify-between py-2 text-5xl">
            <div className="font-bold text-blue-900 text-xl">
              Admin<span className="text-orange-600">Panel</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-4 ">
          <div className="w-full md:w-1/4 mr-0 md:mr-6 mb-6 md:mb-0">
            <div className="bg-white rounded-xl shadow-lg mb-6 px-6 py-4">
              <a
                className={
                  "inline-block text-gray-600 hover:text-black my-4 w-full"
                }
                onClick={() => {
                  navigate("/adminpanel");
                }}
              >
                <span className="material-icons-outlined float-left pr-2"></span>
                Home
              </a>

              <a
                className={
                  "inline-block text-gray-600 hover:text-black my-4 w-full"
                }
              >
                Create Item
              </a>
            </div>
          </div>

          <div className="container mx-auto mt-8">
            <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
              <h2 className="text-xl font-bold mb-4">Create Food</h2>
              <form
                onSubmit={handleCreateProduct}
                encType="multipart/form-data"
              >
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
                      navigate("/adminpanel");
                      window.location.reload();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
