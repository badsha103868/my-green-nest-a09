import React from 'react';
import { FaStar } from 'react-icons/fa';

const PlantCard = ({plantData}) => {

  const {plantName,image,price,rating,} = plantData

  return (
   <div className=" bg-[#E6F4EA] rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow ">
          <div className="w-full h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-800">{plantName}</h2>

        <div className="flex items-center justify-between">
          <p className="text-green-600 font-bold text-lg">${price}</p>

          <div className="flex items-center gap-1">
            <FaStar className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        </div>

        <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PlantCard;