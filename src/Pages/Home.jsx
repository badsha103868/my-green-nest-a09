import React from 'react';
import Banner from '../Components/Banner';
import { useLoaderData, useRouteLoaderData } from 'react-router';
import PlantCards from '../Components/PlantCards';
import PlantTips from '../Components/PlantTips';
import GreenExperts from '../Components/GreenExperts';
import EcoDecorIdeas from '../Components/EcoDecorIdeas';
import PlantOfTheWeek from '../Components/PlantOfTheWeak';
import PlantOfTheWeeks from '../Components/PlantOfTheWeeks';


const Home = () => {
   
  const data = useLoaderData()
  console.log(data)

  const tips = useRouteLoaderData("root")
  console.log(tips)



  return (
    <div>
      
      <Banner></Banner>
      <PlantOfTheWeeks data={data}></PlantOfTheWeeks>
      <PlantCards data={data}></PlantCards>
      <PlantTips tips={tips}></PlantTips>
      <GreenExperts></GreenExperts>
      <EcoDecorIdeas></EcoDecorIdeas>
    </div>
  );
};

export default Home;