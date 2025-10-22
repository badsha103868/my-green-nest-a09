
import React from 'react';
const experts = [
  {
    "id": 1,
    "name": "Amina Rahman",
    "specialization": "Indoor Plant Specialist",
    "image": "https://i.postimg.cc/8kQy1y0P/expert-amina.png"
  },
  {
    "id": 2,
    "name": "Rafiq Ahmed",
    "specialization": "Succulent & Cactus Expert",
    "image": "https://i.postimg.cc/FHqP8kF0/expert-rafiq.png"
  },
  {
    "id": 3,
    "name": "Tania Chowdhury",
    "specialization": "Air Purifying Plants Consultant",
    "image": "https://i.postimg.cc/Mp1F3Q1y/expert-tania.png"
  },
  {
    "id": 4,
    "name": "Shahriar Hossain",
    "specialization": "Flowering Indoor Plants",
    "image": "https://i.postimg.cc/3Jz6L2qk/expert-shahriar.png"
  }
]

const GreenExperts = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Meet Our Green Experts
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-green-100">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{expert.name}</h3>
            <p className="text-sm text-gray-500">{expert.specialization}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GreenExperts;


 