import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import heroImg from "../assets/hero.jpeg";

function Hero() {
  return (
    <section className=" flex  items-center justify-center min-h-[350px]  ">
      <div className="bg-white p-10 w-full m-0  ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-[30px] md:text-[95px] lg:text-[95px] font-black leading-none whitespace-nowrap"
        >
          <span className="text-transparent [-webkit-text-stroke:2px_black]">
            RUPALI
          </span>
          <span className="ml-4 text-black">WAKHARE</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_500px_200px] mt-5 items-center w-full gap-5">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="space-y-5"
          >
            <h2 className=" text-xl md:text-2xl font-bold">
              Full-Stack Developer || MERN
            </h2>
            <p className="text-gray-500 text-justify leading-5 tracking-normal text-[13px] w-[330px]">
              Aspiring Full Stack MERN Developer with hands-on experience in
              React.js, Node.js, Express.js, and MongoDB. Passionate about
              creating responsive, user-centric applications and continuously
              learning modern web technologies.
            </p>
            <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full">
              Let’s Collaborate
              <FiArrowUpRight />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="flex justify-center"
          >
            <img
              src={heroImg}
              alt="hero"
              className=" w-58 h-48
      md:w-[360px] h-[360px] object-cover 
      filter grayscale
      hover:grayscale-0
      hover:animate-fire
      transition duration-700 ease-in-out
    "
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="flex flex-row md:flex-col items-center gap:5 md:gap-3"
          >
            <button className="w-10  h-10 md:w-40 md:h-12 flex items-center justify-center gap-2 rounded-full shadow hover:bg-gray-100 transition">
              <FaGithub /> <span>GitHub</span>
            </button>
            <button className="w-10 h-10 md:w-40 md:h-12 flex items-center justify-center gap-2 rounded-full shadow hover:bg-gray-100 transition">
              <FaLinkedin /> LinkedIn
            </button>
            <button className="w-10 h-10 md:w-40 md:h-12 flex items-center justify-center gap-2 rounded-full shadow hover:bg-gray-100 transition">
              <FaInstagram /> Instagram
            </button>
            <button className="w-10 h-10md:w-40 md:h-12 flex items-center justify-center gap-2 rounded-full shadow hover:bg-gray-100 transition">
              <FaTwitter /> Twitter
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
