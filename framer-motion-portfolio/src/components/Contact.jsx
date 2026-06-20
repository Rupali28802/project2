import { motion } from "framer-motion";
import { FiMail, FiPhone, FiArrowUpRight } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 min-h-screen bg-white flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm uppercase tracking-widest text-gray-500"
        >
          Get In Touch
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mt-3"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-500 mt-5 max-w-xl mx-auto"
        >
          Open to internships, freelance projects, and full-stack developer opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="mailto:rupaliwakhare26@gmail.com"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            <FiMail />
            Email Me
          </a>

          <a
            href="tel:+919356235644"
            className="inline-flex items-center gap-2 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition"
          >
            <FiPhone />
            Call Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="https://www.linkedin.com/in/rupali-wakhare-b51205287"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition"
          >
            Connect on LinkedIn
            <FiArrowUpRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;