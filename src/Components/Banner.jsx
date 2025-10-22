import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import img1 from "../assets/images1.jpeg";
import img2 from "../assets/images2.jpg";
import img3 from "../assets/images3.jpeg";
import img4 from "../assets/images4.jpeg";
import img5 from "../assets/images5.jpeg";
import img6 from "../assets/images6.jpeg";


const slides = [
  { title: "Grow Green, Live Clean", subtitle: "Discover the beauty of nurturing nature at home.", img: img1 },
  { title: "Nature in Every Corner", subtitle: "Bring freshness to your living space with easy-care plants.", img: img2 },
  { title: "Care for Plants, Care for Earth", subtitle: "Eco-friendly tools and love for your leafy friends.", img: img3 },
  { title: "Green Thumb Starts Here", subtitle: "Beginner-friendly plants and simple guides to grow confidence.", img: img4 },
{ title: "Small Plants, Big Joy", subtitle: "Compact pots and low-maintenance greens that brighten any desk.", img: img5 },
{ title: "From Seed to Smile", subtitle: "Everything you need to grow a healthy plant — seeds, tips, and care kits.", img: img6 },

  
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full h-screen overflow-hidden">
  <Swiper
    modules={[Autoplay, Pagination, EffectFade]}
    effect="fade"
    autoplay={{ delay: 4000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    loop={true}
    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    className="h-full"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div
          className="relative flex items-center justify-start h-full w-full"
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          {activeIndex === index && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 max-w-xl px-10 md:px-20"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 text-gray-200 text-lg">{slide.subtitle}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg"
              >
                Explore Now
              </motion.button>
            </motion.div>
          )}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>

  );
};

export default Banner;
