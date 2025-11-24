import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div>

      {/* -------------------------------------- */}
      {/* PAGE HEADER (BANNER) */}
      {/* -------------------------------------- */}
      <section
        className="py-40 bg-cover bg-center bg-no-repeat text-primary-foreground"
        style={{
          backgroundImage: "url('/images/contact13.jpg')",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-primary-foreground">Contact Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            WEST LEGEND TRADING LLC
          </p>
        </div>
      </section>



      {/* -------------------------------------- */}
      {/* CONTACT CARDS BELOW BANNER */}
      {/* -------------------------------------- */}
      <section className="relative z-20 -mt-16 mb-16">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            { icon: <MapPin size={28} />, title: "Our Address", text: "P.O. Box 19088, Deira\n Dubai – UAE" },
            { icon: <Phone size={28} />, title: "Our Number", text: "+971 4 266 4574 \n+971 4 272 1901" },
            { icon: <img src="/icons/FaxWhite.svg" alt="Fax" className="w-7 h-7" />, title: "Our Fax", text: "+971 4 273 8912" },
            { icon: <Mail size={28} />, title: "Our Email", text: "westlegendtrdg@hotmail.com" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-[#0a1a2f] text-white p-6 rounded-lg shadow-xl overflow-hidden group"
            >

              {/* ORANGE SWIPE HOVER */}
              <div
                className="absolute inset-0 bg-secondary -translate-y-full group-hover:translate-y-0 
                transition-transform duration-500 ease-out"
              ></div>

              <div className="relative z-10 space-y-3">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-white/80 whitespace-pre-line text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>

            </motion.div>
          ))}

        </div>
      </section>



{/* -------------------------------------- */}
{/* CONTACT FORM SECTION */}
{/* -------------------------------------- */}
<section
  className="relative py-56 bg-cover bg-center bg-no-repeat"   // ⬅ Increased height
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
    className="relative z-20 max-w-3xl mx-auto bg-white/90 backdrop-blur-md p-10 rounded-xl shadow-2xl"
  >

    <h2 className="text-3xl font-bold text-[#0a1a2f] text-center mb-10">
      Drop Us A Line
    </h2>

    <ContactForm />
  </motion.div>
</section>



{/* SPLIT RECTANGLE MAP — now placed ON TOP OF HEADER IMAGE */}
<section className="relative z-30 -mt-32 mb-20">
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="
      mx-auto
      w-[95%]
      max-w-7xl
      h-[360px]       /* ⬅ Reduced height */
      rounded-2xl
      shadow-2xl
      border-[6px]
      border-secondary
      overflow-hidden
      relative
    "
  >
    <iframe
  width="100%"
  height="100%"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.819436490034!2d55.310090874839894!3d25.276658828478684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4362719be409%3A0x2782c54eae3d1243!2sWest%20Legend%20Trading%20LLC!5e0!3m2!1sen!2sin!4v1763958740957!5m2!1sen!2sin"
>
    &q=West+Legend+Trading+LLC
    &zoom=15
    &maptype=roadmap
    &style=feature:all%7Celement:labels.text.fill%7Ccolor:0xffffff
    &style=feature:all%7Celement:labels.text.stroke%7Ccolor:0x000000
    &style=feature:landscape%7Celement:geometry%7Ccolor:0x1d2c4d
    &style=feature:poi%7Celement:geometry%7Ccolor:0x1d2c4d
    &style=feature:road%7Celement:geometry%7Ccolor:0x304a7d
    &style=feature:road%7Celement:labels.text.fill%7Ccolor:0xffffff
    &style=feature:road.highway%7Celement:geometry%7Ccolor:0x2c6675
    &style=feature:water%7Celement:geometry%7Ccolor:0x0e1626
  `
</iframe>

  </motion.div>
</section>

    </div>
  );
};

export default Contact;
