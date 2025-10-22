import React, { Suspense } from 'react';
import PlantTip from './PlantTip';

const PlantTips = ({tips}) => {
  
  return (
    <div className='mt-10'>
       <h1 className='text-2xl md:text-4xl text-center font-bold mb-5 text-green-700 '>Plant Care Tips</h1>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 justify-center gap-6 p-6">
         <Suspense fallback={<span>Loading....</span>}>
       {
        tips.map(tipsData => <PlantTip key={tipsData.id } tipsData={tipsData } ></PlantTip>)
       }

       </Suspense>
      </div>
    </div>
  );
};

export default PlantTips;