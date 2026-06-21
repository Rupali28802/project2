import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-gray-500"
        >
          About Me
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="text-4xl md:text-6xl font-bold mt-3"
        >
          Passionate MERN Stack Developer
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 2 }}
          >
            <p className="text-gray-600 leading-8 text-justify tracking-wider">
              I'm a <strong>Full Stack MERN Developer</strong> focused on
              building
              <strong> scalable</strong>, <strong>responsive</strong>, and
              <strong> user-centric web applications</strong>.
              <br />
              <br />I have hands-on experience developing full-stack projects
              using
              <strong> React.js</strong>, <strong>Node.js</strong>,
              <strong> Express.js</strong>, and <strong>MongoDB</strong>. My
              expertise includes <strong>REST APIs</strong>,
              <strong> Authentication Systems</strong>,
              <strong> Database Management</strong>, and
              <strong> Modern UI Development</strong>.
              <br />
              <br />I enjoy solving <strong>real-world problems</strong> through
              <strong> clean, maintainable code</strong> and continuously
              improving my skills by building{" "}
              <strong>practical projects</strong> and exploring
              <strong> new technologies</strong>.
            </p>

           
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-500">Projects Built</p>
            </div>

            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-3xl font-bold">MERN</h3>
              <p className="text-gray-500">Tech Stack</p>
            </div>

            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-gray-500">Learning Mindset</p>
            </div>

            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-3xl font-bold">Open</h3>
              <p className="text-gray-500">For Opportunities</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
