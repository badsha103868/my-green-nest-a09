import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaLightbulb, FaSun } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

const ideas = [
  {
    id: 1,
    title: "Create a Mini Jungle",
    desc: "Layer tall floor plants with smaller tabletop ones to create a lush, tropical corner that refreshes your room instantly.",
    icon: <FaHome className="text-green-600 text-2xl" />,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
  },
  {
    id: 2,
    title: "Bright Corners, Happy Leaves",
    desc: "Use natural sunlight to your advantage — place your plants near windows for a warm and inviting look.",
    icon: <FaSun className="text-yellow-500 text-2xl" />,
    img: "https://i.ibb.co.com/5XVzgN8J/photo-1722080348821-724e0d11dd10.jpg",
  },
  {
    id: 3,
    title: "Eco-Friendly Decor",
    desc: "Reuse old jars, wooden boxes, or baskets as plant pots for a rustic yet sustainable aesthetic.",
    icon: <FaLightbulb className="text-amber-500 text-2xl" />,
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1200",
  },
  {
    id: 4,
    title: "Add Water Elements",
    desc: "Combine plants with small water features like fountains or glass vases for a calming natural vibe.",
    icon: <GiWaterDrop className="text-blue-500 text-2xl" />,
    img: "https://i.ibb.co.com/DDNxQK56/images-small-water-plants-for-mini-container-water-gardens.jpg",
  },
];

const EcoDecorIdeas = () => {
  return (
    <section className="my-10 bg-gray-50 rounded-xl p-2">
      <div className="text-center mb-10">
        <h2 className="text-3xl  md:text-4xl font-bold text-green-700 mb-3">
          Eco-Decor Ideas
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Transform your living space into a green haven with these easy and sustainable plant styling ideas.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-10">
        {ideas.map((idea, index) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl duration-300"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={idea.img}
                alt={idea.title}
                className="w-full h-full object-cover hover:scale-105 duration-500"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                {idea.icon}
                <h3 className="font-semibold text-lg text-green-700">{idea.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{idea.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcoDecorIdeas;
