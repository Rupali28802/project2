import { easeInOut, motion } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";

function Service() {
  const services = [
    {
      title: "Full Stack Development",
      desc: "I build scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). From designing responsive user interfaces to implementing secure backend APIs and managing databases, I handle the complete development cycle to deliver modern, production‑ready solutions.",
      img:Service1,
    },
    {
      title: "Frontend Development",
      desc: "I specialize in creating responsive, interactive, and visually appealing user interfaces using React.js, TailwindCSS, and Framer Motion. My focus is on performance, accessibility, and delivering seamless user experiences across devices.",
      img: Service2,
    },
    {
      title: "Backend Development",
      desc: "I develop robust server‑side applications with Node.js and Express.js, implementing RESTful APIs, authentication systems (JWT, Clerk), and database architectures using MongoDB. My backend solutions ensure scalability, security, and smooth integration with frontend applications.",
      img: Service3,
    },
  ];

  return (
    <section className="relative w-[90%] m-auto ">
      <div className="relative">
        <h1
          className="
          
      text-left
      text-[70px]
      md:text-[80px]
      font-extrabold
      text-gray-300
      leading-none
      m-0
      select-none
      pointer-events-none
    "
        >
          PORTFOLIO
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
          relative
          left-0
       
          -translate-y-1/3
      text-start
      text-3xl
      md:text-5xl
      font-bold

 
      ml-3
      
      z-10
    "
        >
          /SERVICE
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 gap-5 w-full mt-5">
        {services.map((srv, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
            className="
        group relative p-8 rounded-xl shadow transition
        bg-white text-black hover:bg-black hover:text-white
        cursor-pointer overflow-hidden
        flex flex-col lg:flex-row md:items-center lg:justify-between gap-6
      "
          >
            {/* Left side content */}
            <div className="w-full lg:w-[35%] pr-10 lg:pr-0">
              <h3 className="text-2xl font-semibold mb-2">{srv.title}</h3>

              {/* Paragraph visible on mobile, hidden by default on desktop, visible on hover */}
              <p
                className="
            text-sm leading-7 opacity-100 text-justify
            lg:opacity-0 lg:group-hover:opacity-100
            transition-opacity duration-500
          "
              >
                {srv.desc}
              </p>
            </div>

            {/* Middle image (visible on mobile below text, hidden by default on desktop, visible on hover) */}
            <div
              className="
              self-center lg:self-auto
              opacity-100 
          lg:opacity-0 lg:group-hover:opacity-100
          transition-all duration-500
        "
            >
              {srv.img && (
                <img
                  src={srv.img}
                  alt={srv.title}
                  className="
              w-[180px] h-[180px] lg:mx-6
              object-cover rounded-xl
              transition-transform duration-500 
              lg:group-hover:rotate-12 lg:group-hover:scale-105
            "
                />
              )}
            </div>

            {/* Right side icon toggle */}
            <div className="absolute top-8 right-8 flex justify-end">
              <FiArrowUpRight
                className="
            text-2xl transition-opacity duration-500
            group-hover:opacity-0 absolute
          "
              />
              <FiX
                className="
            text-2xl opacity-0 transition-opacity duration-500
            group-hover:opacity-100
          "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Service;
