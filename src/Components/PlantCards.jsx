import React, { Suspense } from 'react';
import PlantCard from './PlantCard';

const PlantCards = ({data}) => {
  return (
    <div  className='mt-15  p-2'>
       <h1 className='text-2xl md:text-4xl text-center font-bold mb-2 '>Top Rated Indoor Plants</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-6 p-6">
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