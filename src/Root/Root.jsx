import React from 'react';

import { Outlet, } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';


const Root = () => {
  

  return (
    <div className='w-11/12 mx-auto '>
      <Navbar></Navbar>
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