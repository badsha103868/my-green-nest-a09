
import React from 'react';
const experts = [
  {
    "id": 1,
    "name": "Amina Rahman",
    "specialization": "Indoor Plant Specialist",
    "image": "https://i.ibb.co.com/bg0pnwFG/expert-amena.jpg"
  },
  {
    "id": 2,
    "name": "Rafiq Ahmed",
    "specialization": "Succulent & Cactus Expert",
    "image": "https://i.ibb.co.com/fGDSMCd5/expert-rafiq.jpg"
  },
  {
    "id": 3,
    "name": "Tania Chowdhury",
    "specialization": "Air Purifying Plants Consultant",
    "image": "https://i.ibb.co.com/20DSGN3b/expert-taniya.jpg"
  },
  {
    "id": 4,
    "name": "Shahriar Hossain",
    "specialization": "Flowering Indoor Plants",
    "image": "https://i.ibb.co.com/GvL4qd1P/expert-sharirar.jpg"
  }
]

const GreenExperts = () => {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
        Meet Our Green Experts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {experts.map((expert) => (
          <div
            key={expert.id}
            className="bg-[#E6F4EA] rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow text-center"
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


 