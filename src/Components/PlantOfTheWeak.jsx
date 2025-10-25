import React from 'react';

const PlantOfTheWeak = ({ plant }) => {
  return (
    <section className="bg-green-50 py-10">
      <div className=" mx-auto px-2 md:px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-green-700 mb-4">
          🌿 Plant of the Week
        </h2>
        <p className="text-gray-600 mb-6">
          Discover this week’s featured plant — fresh, beautiful, and full of green energy!
        </p>

        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden transition-transform duration-300 ">
          {/* image */}
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full md:w-1/2 h-72 object-cover"
          />

          {/* content */}
          <div className="p-6 text-left md:w-1/2">
            <h3 className="text-2xl font-semibold text-green-600 mb-2">
              {plant.plantName}
            </h3>
            <p className="text-gray-700 mb-3">{plant.description}</p>

            <p className="text-sm text-gray-500 mb-4">
              <span className='text-gray-600 font-semibold'>Category:</span> {plant.category} |{" "}
              <span className='text-gray-600 font-semibold'>Care:</span> {plant.careLevel} |{" "}
              <span className='text-gray-600 font-semibold'>Rating:</span> ⭐ {plant.rating}
            </p>

            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
              Buy Now - ${plant.price}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeak;
