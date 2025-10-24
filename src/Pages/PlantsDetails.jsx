import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import PlantsDetailsCard from '../Components/PlantsDetailsCard';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const PlantsDetails = () => {
  
  const [plants, setPlants] = useState({})
  const {id} = useParams();
  const data = useLoaderData();

  //id, data(id, data)

  useEffect(()=>{
    const plantsDetails = data.find(singlePlant=> singlePlant.plantId == id)
    setPlants(plantsDetails)

  },[id, data])
   
  console.log(plants)
  return (
    <div >
       <Navbar></Navbar>
       <div className='p-2'>
        <PlantsDetailsCard plants={plants}></PlantsDetailsCard>
       </div>

       <Footer></Footer>
      
    </div>
  );
};

export default PlantsDetails;