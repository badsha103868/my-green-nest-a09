import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData, useRouteLoaderData } from 'react-router';
import PlantCards from '../Components/PlantCards';
import PlantTips from '../Components/PlantTips';
import GreenExperts from '../Components/GreenExperts';

const Home = () => {
   
  const data = useLoaderData()
  console.log(data)

  const tips = useRouteLoaderData("root")
  console.log(tips)



  return (
    <div>
      <Banner></Banner>
      <PlantCards data={data}></PlantCards>
      <PlantTips tips={tips}></PlantTips>
      <GreenExperts></GreenExperts>
    </div>
  );
};

export default Home;