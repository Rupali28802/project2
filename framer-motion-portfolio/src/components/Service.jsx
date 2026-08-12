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
      img:Service3,
    },
    {
      title: "Frontend Development",
      desc: "I specialize in creating responsive, interactive, and visually appealing user interfaces using React.js, TailwindCSS, and Framer Motion. My focus is on performance, accessibility, and delivering seamless user experiences across devices.",
      img: Service1,
    },
    {
      title: "Backend Development",
      desc: "I develop robust server‑side applications with Node.js and Express.js, implementing RESTful APIs, authentication systems (JWT, Clerk), and database architectures using MongoDB. My backend solutions ensure scalability, security, and smooth integration with frontend applications.",
      img: Service2,
    },
  ];

  return (
    <section className="relative w-[90%] m-auto ">
      <div
        style={{
          fontFamily: "Playfair Display, serif",
        }}
        className="relative pt-20 md:pt-28"
      >
        {/* Background SERVICE */}
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          className="
      absolute
      left-1/2
      top-0
      -translate-x-1/2
      text-[80px]
      md:text-9xl
      font-extrabold
      text-[#bd0202]
      select-none
      pointer-events-none
      whitespace-nowrap
      tracking-widest
      z-0
    "
        >
          SERVICE
        </motion.h1>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
      relative
      z-5
      text-center
      text-3xl
      md:text-5xl
      font-bold
       -translate-y-9
      
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
