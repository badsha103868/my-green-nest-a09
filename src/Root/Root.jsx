import React from 'react';

import { Outlet, useNavigation, } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';

import Loading from '../Pages/Loading';


const Root = () => {
    
  const navigation = useNavigation()
  const isNavigating = Boolean(navigation.location)

  return (
    <div className='w-11/12 mx-auto '>
      <Navbar></Navbar> 
        
         {/* Loading spinner */}
        {
          isNavigating&& (<Loading></Loading>)
        }
       



       <Outlet ></Outlet>
       <Footer></Footer>



         {/* ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Root;