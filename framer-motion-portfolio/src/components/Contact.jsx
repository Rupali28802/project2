import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiArrowUpRight,
} from "react-icons/fi";
import emailjs from "@emailjs/browser"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState,useRef } from "react";


function Contact() {
  const formref = useRef(null);

  const [issending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (issending) return;
    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formref.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      formref.current.reset();
    } catch (error) {
      console.log("Email sending failed:", error);
      setStatus({
        type: "error",
        message: "Message could not be sent. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section
      id="contact"
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
        {/* Background CONTACT */}
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
            whitespace-nowrap
            select-none
            pointer-events-none
            z-0
            font-extrabold
            text-[#bd0202]
            leading-none
            text-[70px]
            sm:text-[90px]
            md:text-[130px]
            lg:text-[170px]
            tracking-widest
          "
          style={{
            fontFamily: "Playfair Display, serif",
          }}
        >
          CONTACT
        </motion.h1>

        {/* Main Heading */}
        <motion.h2
          style={{
            fontFamily: "Playfair Display, serif",
          }}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
            relative
            z-10
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-bold
            pt-16
            md:pt-24
            mb-20
          "
        >
          / LET'S CONTACT
        </motion.h2>

        {/* Contact Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-start
          "
        >
          {/* LEFT SIDE */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-5">
              Get In <span className="text-gray-400">Touch.</span>
            </h3>

            <p className="text-gray-500 leading-7 max-w-lg mb-8">
              Have a project in mind or want to discuss an opportunity? I'd love
              to hear from you.
            </p>

            {/* Email */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-11 h-11 flex items-center justify-center bg-gray-200 rounded-full">
                <FiMail className="text-xl" />
              </div>

              <span className="text-gray-600">rupaliwakhare184@gmail.com</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-11 h-11 flex items-center justify-center bg-gray-200 rounded-full">
                <FiPhone className="text-xl" />
              </div>

              <span className="text-gray-600">+91 9356235644</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-11 h-11 flex items-center justify-center bg-gray-200 rounded-full">
                <FiMapPin className="text-xl" />
              </div>

              <span className="text-gray-600">Buldana, Maharashtra, India</span>
            </div>

            {/* Social */}
            <h4 className="font-semibold text-lg mb-4">Follow Me</h4>

            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/rupali-wakhare-b51205287/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11 h-11
                  flex items-center justify-center
                  bg-gray-200
                  rounded-full
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                <FaLinkedin className="text-xl" />
              </a>

              <a
                href="https://github.com/Rupali28802"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11 h-11
                  flex items-center justify-center
                  bg-gray-200
                  rounded-full
                  hover:bg-black
                  hover:text-white
                  transition
                "
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-black text-white rounded-2xl p-7 md:p-10">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center">
                <FiSend className="text-xl" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Send a Message</h3>

                <p className="text-gray-400 mt-1">
                  I usually reply within 24 hours.
                </p>
              </div>
            </div>

            <form ref={formref} onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="user_name"
                placeholder="👨🏻‍💼 Your Name"
                required
                className="
                  w-full
                  bg-transparent
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:border-white
                  transition
                "
              />

              <input
                type="email"
                name="user_email"
                placeholder="📧 Your Email"
                required
                className="
                  w-full
                  bg-transparent
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:border-white
                  transition
                "
              />

              <textarea
                name="message"
                rows="5"
                placeholder="✉ Your Message"
                required
                className="
                  w-full
                  bg-transparent
                  border
                  border-gray-700
                  rounded-lg
                  px-4
                  py-3
                  outline-none
                  focus:border-white
                  transition
                  resize-none
                "

              />
              {status.message &&(
                <p role="status"
                className={
                  status.type === "success"
                  ? "text-green-400 text-sm"
                  :"text-red-400 text-sm"
                }>
                  {status.message}
                </p>
              )}

              <button
                type="submit"
                disabled={issending}
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-white
                  text-black
                  py-3
                  rounded-lg
                  font-semibold
                  hover:bg-gray-200
                  transition
                "
              >
                {issending?"Sending...":"Send Message"}
               {!issending && <FiArrowUpRight />}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
