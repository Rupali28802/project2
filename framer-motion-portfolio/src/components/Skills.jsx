import { motion } from "framer-motion";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt, FaJs, FaReact, FaNode, FaGitAlt } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiThreedotjs,
  SiBootstrap,
  SiGoogle,
  SiVercel,
  SiNetlify,
  SiClerk,
  SiFramer,
  SiMui,
} from "react-icons/si";

function Skills() {
 const skills = [
   { name: "HTML5", icon: ImHtmlFive, color: "#e34c26" },
   { name: "CSS3", icon: FaCss3Alt, color: "#264de4" },
   { name: "JavaScript", icon: FaJs, color: "#f0db4f" },
   { name: "React.js", icon: FaReact, color: "#61dbfb" },
   { name: "Node.js", icon: FaNode, color: "#215732" },
   { name: "Express.js", icon: SiExpress, color: "#303030" },
   { name: "MongoDB", icon: DiMongodb, color: "#00ed64" },
   { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8" },
   { name: "Git", icon: FaGitAlt, color: "#f05032" },
   { name: "GitHub", icon: BsGithub, color: "#000000" },
   { name: "REST APIs", icon: SiThreedotjs, color: "#333333" },
   { name: "Postman", icon: SiPostman, color: "#ff6c37" },
   { name: "Bootstrap", icon: SiBootstrap, color: "#7952b3" },
   { name: "Vercel", icon: SiVercel, color: "#000000" },
   { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
   { name: "Clerk", icon: SiClerk, color: "#6c47ff" },
   { name: "Framer Motion", icon: SiFramer, color: "#0055ff" },
   { name: "Material UI", icon: SiMui, color: "#007fff" },
 ];

  return (
    <section id="skills" className="  py-4 md:py-20 px-4 overflow-hidden ">
      <div className="max-w-6xl ">
        {/* Heading */}
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
            EXPERTISE
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
            /SKILLS & TECHNOLOGIES
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="
    relative
    z-10
    max-w-2xl
    mx-auto
    -mt-2
    mb-10
    px-4
    text-center
    text-sm
    md:text-base
    leading-7
    text-gray-500
    tracking-widest
  "
        >
          Technologies I use to build modern, responsive, and scalable web
          applications. I enjoy combining clean frontend experiences with
          powerful backend solutions to create real-world digital products.
        </motion.p>

        <div className="relative overflow-hidden mt-10">
          <div className="flex gap-4 w-max mx-aut animate-marquee">
            {[...skills, ...skills].map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={`marquee-${index}`}
                  className="
        flex
        items-center
        gap-3
        px-5
        py-3
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
                  <Icon
                    style={{
                      color: skill.color,
                      fontSize: "28px",
                    }}
                  />

                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
