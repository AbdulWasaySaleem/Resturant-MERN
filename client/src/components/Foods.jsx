import React from 'react';
import { foodTypes } from '../data/data';
import { Link } from 'react-router-dom';

const Foods = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">What we offer</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-16">Best meals in the city</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {foodTypes.map((foodType) => (
          <Link to={`/foods/${foodType.name}`} key={foodType.id}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105">
              <img src={foodType.img} alt={foodType.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{foodType.name}</h3>
                <p className="text-sm text-gray-700 leading-snug">{foodType.description}</p>
                <Link to={`/foods/${foodType.id}`} className="block mt-4 text-blue-500 font-semibold hover:text-blue-600">See Details</Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Foods;
