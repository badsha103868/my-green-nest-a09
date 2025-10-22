import React, { Suspense } from 'react';
import PlantCard from './PlantCard';

const PlantCards = ({data}) => {
  return (
    <div  className='mt-15  '>
       <h1 className='text-2xl md:text-4xl text-center text-green-700 font-bold mb-5 '>Top Rated Indoor Plants</h1>

      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center gap-6 p-6">
         <Suspense fallback={<span>Loading....</span>}>
       {
        data.map(plantData => <PlantCard key={plantData.plantId } plantData={plantData } ></PlantCard>)
       }

       </Suspense>
      </div>
    </div>
  );
};

export default PlantCards;