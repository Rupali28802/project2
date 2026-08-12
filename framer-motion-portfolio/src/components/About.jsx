import { motion } from "framer-motion";
import aboutImg from "../assets/about-img.png";

function About() {
  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        py-20
        px-5
        sm:px-8
        md:px-12
        overflow-hidden
        [font-family:Arial,Helvetica,sans-serif]
      "
    >
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Background ABOUT ME */}
        <motion.h1
          style={{
            fontFamily: "Playfair Display, serif",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            whitespace-nowrap
            select-none
            pointer-events-none
            z-0
            font-extrabold
           text-[#bd0202]
            leading-none
            text-[70px]
            tracking-widest
            sm:text-[90px]
            md:text-[130px]
            lg:text-[170px] 
            
           
          "
        >
          ABOUT
        </motion.h1>

        {/* /ABOUT ME */}
        <motion.h2
          style={{
            fontFamily: "Playfair Display, serif",
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="
            relative
            z-3
            text-center
            font-bold
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            pt-16
            md:pt-28
            mb-24
            
          "
        >
          /ABOUT ME
        </motion.h2>

        {/* Main Content */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            items-center
            gap-12
            md:gap-14
            lg:gap-20
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="relative z-10"
          >
            <motion.h3
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="
                font-bold
                leading-tight
                text-3xl
                sm:text-4xl
                md:text-4xl
                lg:text-5xl
              "
            >
              A Deep Dive into My <br />
              Life's Experiences and <br />
              Lessons Learned
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="
                mt-8
                max-w-xl
                text-gray-600
                text-sm
                sm:text-base
                leading-7
                md:leading-8
                text-justify
                tracking-normal
                md:tracking-wide
              "
            >
              I'm a <strong>Rupali Narayan Wakhare</strong>{" "}
              <strong>Full Stack MERN Developer</strong> focused on building{" "}
              <strong>scalable</strong>, <strong>responsive</strong>, and{" "}
              <strong>user-centric web applications</strong>.
              <br />
              <br />I have hands-on experience developing full-stack projects
              using <strong>React.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>Express.js</strong>, and <strong>MongoDB</strong>. My
              expertise includes <strong>REST APIs</strong>,{" "}
              <strong>Authentication Systems</strong>,{" "}
              <strong>Database Management</strong>, and{" "}
              <strong>Modern UI Development</strong>.
              <br />
              <br />I enjoy solving <strong>
                real-world problems
              </strong> through <strong>clean, maintainable code</strong> and
              continuously improving my skills by building{" "}
              <strong>practical projects</strong> and exploring{" "}
              <strong>new technologies</strong>.
            </motion.p>
          </motion.div>

          {/* RIGHT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2 }}
            className="
              relative
              z-10
              flex
              justify-center
              md:justify-end
              items-center
            "
          >
            <motion.img
              src={aboutImg}
              alt="About me"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="
                w-full
                max-w-[320px]
                sm:max-w-[380px]
                md:max-w-[430px]
                lg:max-w-[500px]
                xl:max-w-[550px]
                h-auto
                object-contain
                rounded-2xl
                md:rounded-3xl
              "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;