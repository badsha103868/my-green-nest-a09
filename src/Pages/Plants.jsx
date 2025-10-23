import React from 'react';
import PlantCards from '../Components/PlantCards';
import { useLoaderData } from 'react-router';

const Plants = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <PlantCards  data={data}></PlantCards>
    </div>
  );
};

export default Plants;