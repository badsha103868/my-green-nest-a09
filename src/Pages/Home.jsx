import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import PlantCards from '../Components/PlantCards';

const Home = () => {
   
  const data = useLoaderData()
  console.log(data)



  return (
    <div>
      <Banner></Banner>
      <PlantCards data={data}></PlantCards>
    </div>
  );
};

export default Home;