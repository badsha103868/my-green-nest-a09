import React from 'react';
import PlantOfTheWeek from './PlantOfTheWeak';

const PlantOfTheWeeks = ({ data }) => {
  if (!data || data.length === 0) return null;

  //  Randomly pick one plant
  const randomPlant = data[Math.floor(Math.random() * data.length)];

  return (
    <div className="mt-10">
      <h1 className="text-2xl md:text-4xl text-center text-green-700 font-bold mb-6">
        🌿 Plant of the Week
      </h1>

      <PlantOfTheWeek plant={randomPlant}></PlantOfTheWeek>
    </div>
  );
};

export default PlantOfTheWeeks;
