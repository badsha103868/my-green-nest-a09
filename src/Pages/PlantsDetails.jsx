import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import PlantsDetailsCard from '../Components/PlantsDetailsCard';

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
       <PlantsDetailsCard plants={plants}></PlantsDetailsCard>
       <Link to='/' className='flex justify-center my-5'>
        <button className='btn bg-gray-500 text-white'>Back to Home</button>
        </Link>
    </div>
  );
};

export default PlantsDetails;