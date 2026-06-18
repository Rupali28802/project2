import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Work1 from "../assets/work1.jpg";
import Work2 from "../assets/work2.jpg";
import Work3 from "../assets/work3.jpg";
import Work4 from "../assets/work4.jpg";
import { useState } from "react";

function SelectedWork() {
  const [filter,setFilter] =  useState("All")
  const projects = [
    {
      title: "BloomCare - Mental Health App Landing Page",
      desc: "Emotional Engine for Your Personal Growth",
      studio: "Kumpin Studio",
      tag: "Landing Page",
      img: Work1,
    },
    {
      title: "FragWater - Luxury Fragrance Landing Page",
      desc: "Premium Unisex Fragrance",
      studio: "Kumpin Studio",
      tag: "Landing Page",
      img: Work2,
    },
    {
      title: "BloomCare - Mental Health App Landing Page",
      desc: "Emotional Engine for Your Personal Growth",
      studio: "Kumpin Studio",
      tag: "Landing Page",
      img: Work3
    },
    {
      title: "FragWater - Luxury Fragrance Landing Page",
      desc: "Premium Unisex Fragrance",
      studio: "Kumpin Studio",
      tag: "Landing Page",
      img: Work4,
    },
  ];

  const filteredProjects = 
  filter == "All"
  ? projects
  : projects.filter((proj) => proj.tag === filter);

  return (
    <section className="relative w-[95%] m-auto py-24">
      <motion.h1
        initial={{ opacity: 0 }}
        // animate={{ opacity: 0.15 }}
        whileInView={{ opacity: 0.1 }}
        viewport={{ once: false}}
        transition={{ duration: 2, 
          
        }}
        className="
    absolute
    left-1/2
    top-6 md:top-10   
    -translate-x-1/2
   text-[80px]
    md:text-9xl
    font-extrabold
    text-gray-400      
    select-none
    pointer-events-none
    whitespace-nowrap
    z-0
  "
      >
        PORTFOLIO
      </motion.h1>

      <motion.h2
        // animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        className="text-center text-3xl md:text-6xl font-bold relative md:z-10 mb-12 md:mt-6"
      >
        /PROJECTS
      </motion.h2>

      <div className="flex justify-between items-center mb-12 relative z-10">
        <div className="flex gap-4 md:gap-6 text-gray-600 font-medium">
          <button onClick={()=>setFilter("All")} className="` hover:text-black `">All</button>
          <button onClick={()=>setFilter("Real Project")} className="hover:text-black">Real Project</button>
          <button onClick={()=>setFilter("Exploration")} className="hover:text-black">Exploration</button>
        </div>

        <button className="hidden text-[15px] md:text-base lg:text-lg md:flex items-center gap-2 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          View All Projects
          <FiArrowUpRight className="text-white" />
        </button>
        {/* Mobile CTA */}
        <div className="flex md:hidden justify-center mt-3">
          <button className="flex items-center gap-2 px-6 py-2 text-white text-sm bg-black rounded-3xl">
            View All Projects
            <FiArrowUpRight className="text-white"/>
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
           
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0.2 }}
            viewport={{ once: true }}
            transition={{
              duration: 2,
      
              ease:"easeOut"
              
            }}
            className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-6">
              <span className="text-xs uppercase text-gray-400">
                {proj.tag}
              </span>
              <h3 className="text-xl font-semibold mt-2">{proj.title}</h3>
              <p className="text-gray-500 mb-2">{proj.desc}</p>
              <span className="text-sm text-gray-400">{proj.studio}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;
