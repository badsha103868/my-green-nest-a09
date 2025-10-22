
import React from 'react';

const PlantTip = ({tipsData}) => {
  return (
     <div className="max-w-sm mx-auto bg-[#E6F4EA] shadow-md rounded-lg p-6 flex flex-col items-center text-center space-y-3">
      <div className="text-4xl">{tipsData.icon}</div>
      <h3 className="text-xl font-bold">{tipsData.title}</h3>
      <p className="text-gray-700">{tipsData.tip}</p>
      <span className="text-sm text-gray-500 italic">
        Frequency: {tipsData.frequency}
      </span>
    </div>
)};

export default PlantTip;