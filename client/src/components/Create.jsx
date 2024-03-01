import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Create = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [review, setReview] = useState('');
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const onChangeFile = (e) => {
    //return 1st file 
    setImage(e.target.files[0]);
  };

  //if uplodided wrong
  const handleCloseImg = () => {
    setImage('');
  };

  const handleCreateProduct = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      let filename = null;
  
      if (image) {
        filename = Date.now() + image.name;
        formData.append('filename', filename);
        formData.append('image', image);
  
        await fetch(`http://localhost:3000/images/image`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });
      }
  
      const res = await fetch(`http://localhost:3000/products/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description: desc, 
          category,
          img: filename,
          price,
          review,
        }),
      });
  
      const food = await res.json();
  
      navigate(`/food/${food._id}`);
    } catch (error) {
      console.error(error.message);
    }
  };
  

  return (
    <div className="container mx-auto mt-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
        <h2 className="text-xl font-bold mb-4">Create Food</h2>
        <form onSubmit={handleCreateProduct} encType="multipart/form-data">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Title:</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Title..." onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Description:</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Description..." onChange={(e) => setDesc(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Category:</label>
            <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Category..." onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Image:</label>
            <input type="file" id="image" className="hidden" onChange={onChangeFile} />
            <label htmlFor="image" className="cursor-pointer border border-gray-300 rounded px-4 py-2 block w-full text-center">
              {image ? (
                <>
                  {image.name} <AiOutlineCloseCircle className="inline-block align-middle ml-1 text-red-500" onClick={handleCloseImg} />
                </>
              ) : (
                <span>Upload Image</span>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Price:</label>
            <input type="number" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Price..." onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Review:</label>
            <input type="number" className="w-full border border-gray-300 rounded px-4 py-2" placeholder="Review..." onChange={(e) => setReview(e.target.value)} />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
