import { motion } from "framer-motion";
import React from "react";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "REST APIs",
    "JWT Auth",
    "Postman",
    "Responsive Design",
    "MERN Stack",
  ];

  return (
    <section id="skills" className="py-20 px-4 overflow-hidden ">
      <div className="max-w-6xl ">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: 280 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 2,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="ml-4 mb-12"
        >
          <span className="text-sm uppercase tracking-widest text-gray-500">
            My Expertise
          </span>

          <h2 className=" text-4xl md:text-5xl font-bold mt-2">
            Skills & Technologies
          </h2>

          <p className="text-gray-500 mt-4 w-[380px] ">
            Technologies and tools I use to build modern, scalable, and
            user-friendly web applications.
          </p>
        </motion.div>

        
        <div className="relative overflow-hidden ">
          <div className="flex gap-4 w-max mx-aut animate-marquee">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="
                  px-6 py-3
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  shadow-sm
                  hover:shadow-md
                  transition-all
                  whitespace-nowrap
                  font-medium
                "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;