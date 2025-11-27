import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Contact = () => {

  // 👇 Scroll to top when Contact page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const items = [
    { icon: <MapPin size={32} />, title: "Our Address", text: "P.O. Box 19088, Deira\nDubai – UAE" },
    { icon: <Phone size={32} />, title: "Our Number", text: "+971 4 266 4574\n+971 4 272 1901" },
    { icon: <img src="/icons/FaxBlack.svg" className="w-8 h-8" />, title: "Our Fax", text: "+971 4 273 8912" },
    { icon: <Mail size={32} />, title: "Our Email", text: "westlegendtrdg@hotmail.com" }
  ];

  return (
    <div>

      {/* ---------------------- PAGE HEADER ---------------------- */}
      <section
        className="bg-cover bg-center bg-no-repeat text-primary-foreground
        py-32 sm:py-40 md:py-52"
        style={{ backgroundImage: "url('/images/contact13.jpg')" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-primary-foreground text-3xl md:text-4xl lg:text-8xl">
            Contact Us
          </h1>

          <p className="text-lg md:text-2xl text-primary-foreground/90 max-w-3xl">
            WEST LEGEND TRADING LLC
          </p>
        </div>
      </section>

      {/* ---------------------- CONTACT CARDS ---------------------- */}
      <section className="relative mt-0 bg-secondary/90 py-16 z-20">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="backdrop-blur-md bg-white/10 
                         border border-white/20 rounded-xl
                         p-6 text-center shadow-xl bg-primary-foreground/30
                         transition-transform"
            >

              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                whileHover={{ rotate: 10, scale: 1.1 }}
                className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center"
              >
                {item.icon}
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="font-semibold text-white"
              >
                {item.title}
              </motion.h3>

              {/* Text */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-white/80 whitespace-pre-line"
              >
                {item.text}
              </motion.p>

            </motion.div>
          ))}

        </div>
      </section>

      {/* ---------------------- FORM SECTION ---------------------- */}
      <section
        className="relative py-32 sm:py-40 md:py-48 lg:py-56 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/contact8.avif')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 120 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
            type: "spring",
            bounce: 0.25,
          }}
          className="relative z-20 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold text-[#0a1a2f] text-center mb-10">
            Drop Us A Line
          </h2>

          <ContactForm />
        </motion.div>
      </section>

      {/* ---------------------- MAP ---------------------- */}
      <section className="relative z-30 -mt-20 sm:-mt-24 md:-mt-28 lg:-mt-32 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="
            mx-auto
            w-[95%]
            max-w-7xl
            h-[260px] sm:h-[300px] md:h-[340px] lg:h-[380px]
            rounded-2xl
            shadow-2xl
            border-[6px]
            border-secondary
            overflow-hidden
            relative"
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="
              https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!
              1d3607.819436490034!
              2d55.310090874839894!
              3d25.276658828478684!
              2m3!1f0!2f0!3f0!
              3m2!1i1024!2i768!
              4f13.1!
              3m3!1m2!
              1s0x3e5f4362719be409%3A0x2782c54eae3d1243!
              2sWest%20Legend%20Trading%20LLC!
              5e0!3m2!1sen!2sin!
              4v1763958740957!5m2!1sen!2sin"
          ></iframe>
        </motion.div>
      </section>

    </div>
  );
};

export default Contact;
