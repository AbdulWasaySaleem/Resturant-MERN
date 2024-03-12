import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import { AiOutlineCloseCircle } from "react-icons/ai";

const EditPage = () => {
  const { id } = useParams(); // Assuming you're using React Router for routing
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  // //all data
  const [foodDetails, setFoodDetails] = useState(null);

  const navigate = useNavigate();
  console.log(id);

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchFoodDetails = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/find/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        setTitle(data?.title);
        setDescription(data?.description);
        setPrice(data?.price);
        setCategory(data?.category);
        setImage(data?.image);
        setFoodDetails(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching food details:", error.message);
      }
    };

    fetchFoodDetails();
  }, [id, token]);

  const onChangeFile = (e) => {
    //return 1st file
    setImage(e.target.files[0]);
  };

  //if uplodided wrong
  const handleCloseImg = () => {
    setImage("");
  };

  
const update = async (e) => {
  try {
    e.preventDefault();

    const formData = new FormData();
    let filename = null;

    if (image) {
      filename = Date.now() + image.name;
      formData.append("filename", filename);
      formData.append("image", image);

      await axios.post(`http://localhost:3000/images/image`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });
    }

    await axios.patch(`http://localhost:3000/products/update/${id}`, {
      title,
      description,
      category,
      img: filename,
      price,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    navigate("/adminpanel");
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
      <div className="flex flex-col bg-gray-50">
        <div className="flex-grow py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-center text-2xl font-bold">Edit</h1>
            <div className="flex flex-col md:flex-row -mx-4 border border-black rounded items-center">
              <div className="md:flex-1 px-4">
                <div className="h-[460px] md:h-auto rounded-lg mb-4 flex justify-center items-center my-auto">
                  {foodDetails && (
                    <img
                      className="max-w-full max-h-full object-cover mt-3"
                      src={`http://localhost:3000/pictures/${foodDetails.img}`}
                      alt="Product Image"
                    />
                  )}
                </div>
                <div className="mb-4">
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
                          className="inline-block align-middle ml-1 text-red-500 "
                          onClick={handleCloseImg}
                        />
                      </>
                    ) : (
                      <span>Upload Image</span>
                    )}
                  </label>
                </div>
              </div>

              <div className="md:flex-1 px-4">
                <form onSubmit={update}>
                  <div className="mb-4">
                    <label className="block mb-2 font-semibold">Title:</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                      Description:
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border rounded-md"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-semibold">Price:</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border rounded-md"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 font-semibold">
                      Category:
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-md"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full"
                  >
                    Update Product
                  </button>
                </form>
              </div>
            </div>
          <button onClick={()=>{navigate('/adminpanel')}} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600  m-2">Go back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
