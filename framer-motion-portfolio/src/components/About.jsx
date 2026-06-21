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
          viewport={{ once: false}}
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
            viewport={{ once: false}}
            transition={{ duration: 2}}

          >
            <p className="text-gray-600 leading-8 text-justify tracking-wider ">
              I'm Rupali Wakhare, a Full Stack MERN Developer passionate about
              building modern, scalable, and user-friendly web applications. I
              have hands-on experience with React.js, Node.js, Express.js,
              MongoDB, and Tailwind CSS.
            </p>

            <p className="text-gray-600 leading-8 mt-5">
              I enjoy transforming ideas into real-world digital products,
              focusing on clean code, responsive design, and great user
              experiences.
            </p>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 2}}
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
