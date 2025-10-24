import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const PlantsDetailsCard = ({ plants }) => {
  const { plantName, image, price, rating, availableStock, description } = plants;

  return (
    <div className="max-w-3xl mx-auto min-h-screen bg-white rounded-2xl shadow-lg  overflow-hidden mt-5 md:mt-10 ">
      {/* Full Image Display */}
      <div className="bg-gray-100 flex justify-center items-center p-4">
        <img
          src={image}
          alt={plantName}
          className="w-full  object-contain rounded-xl"
        />
      </div>

      {/* Details Section */}
      <div className="p-6 space-y-4">
        {/* Name & Price */}
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-green-800">{plantName}</h2>
          <span className="text-2xl font-bold text-green-600">${price}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center  gap-1 text-yellow-500">
          
            <FaStar size={24} className="text-yellow-500 "></FaStar>
            <FaStar size={24} className="text-yellow-500 "></FaStar>
            <FaStar size={24} className="text-yellow-500 "></FaStar>
            <FaStar size={24} className="text-yellow-500 "></FaStar>
            <FaStar size={24} className="text-yellow-500 "></FaStar>
           
          
          <span className="ml-2 text-orange-500 text-xl font-bold">{rating} / 5</span>
        </div>

        {/* Stock Info */}
        <p className="font-medium text-green-500 text-xl">
          In Stock: {availableStock} 
        </p>
         
        {/* Description */}
        <p className="text-gray-700 leading-relaxed">{description}</p>

        {/* Add to Cart Button */}
        <Link to='/formPage' className='btn bg-green-600 hover:bg-green-700 w-full mt-4 py-3 rounded-xl text-white font-semibold text-xl'>
           Book Consultation
        </Link>
      </div>
    </div>
  );
};

export default PlantsDetailsCard;
