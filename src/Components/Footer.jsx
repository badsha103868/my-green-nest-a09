import React from 'react';
import logoImg from '../assets/logo5.jpeg'
 import fbImg from '../assets/fb.png'
 import twitterImg from '../assets/twitter.png'
 import linkedinImg from '../assets/linkedIn.png'

const Footer = () => {
  return (
     <footer className="footer flex flex-col sm:flex-row sm:flex-wrap md:justify-between lg:justify-evenly bg-[#001931] text-base-content p-10">
  {/* Hero Apps Section */}
  <nav className="mb-6 sm:mb-0 max-w-xs">
    <div  className='flex  gap-1'>
      <img className='w-[30px] h-[30px] rounded-2xl' src={logoImg} alt="" />
    <h6 className="footer-title text-lg font-semibold text-white">Green Nest</h6>
    </div>
    <p className="text-sm leading-relaxed text-white">
      GreenNest is an elegant single-page web application built for plant lovers who want to nurture and decorate their homes with healthy indoor plants. The platform allows users to explore plant care guides, buy plants, and book expert consultations — ensuring a greener and healthier living space during any season
    </p>
  </nav>

  {/*Quick Links  */}
  <nav className="mb-6 sm:mb-0 text-white">
    <h6 className="text-white footer-title text-lg font-semibold">Quick Links</h6>
    <a className="link link-hover">About</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Privacy Policy</a>
    
    
  </nav>

  
  {/* Social */}
  <nav className='text-white'> <h6 className="footer-title">Social</h6>
   <div className="grid grid-flow-col gap-4"> 
  
       <a> <img src={fbImg} alt="" /></a>
       <a> <img src={twitterImg} alt="" /></a>
       <a> <img src={linkedinImg} alt="" /></a>
       <a> <img className='w-5 h-5 rounded-full' src="https://i.ibb.co.com/LXGcLXFB/instagram.jpg" alt="" /></a>


    </div> </nav>
   {/*  Copyright Bar */}
 <div className="w-full text-center flex items-center justify-center mt-8 border-t border-gray-700 pt-4 text-white">
        © 2025 Green Nest. All Rights Reserved.
      </div>
</footer>
  );
};

export default Footer;