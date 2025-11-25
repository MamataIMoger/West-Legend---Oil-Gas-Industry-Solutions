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
<section className="relative z-20 -mt-20 mb-16">
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    {[
      { icon: <MapPin size={32} />, title: "Our Address", text: "P.O. Box 19088, Deira\nDubai – UAE" },
      { icon: <Phone size={32} />, title: "Our Number", text: "+971 4 266 4574\n+971 4 272 1901" },
      { icon: <img src="/icons/FaxWhite.svg" className="w-8 h-8" />, title: "Our Fax", text: "+971 4 273 8912" },
      { icon: <Mail size={32} />, title: "Our Email", text: "westlegendtrdg@hotmail.com" }
    ].map((item, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="
  relative mx-auto 

  /* MOBILE SIZE (smaller) */
  w-56 h-56

  /* TABLET */
  sm:w-56 sm:h-56 

  /* DESKTOP (original) */
  lg:w-64 lg:h-64 

  rounded-full 
  bg-[#0a1a2f] 
  text-white 
  shadow-xl 
  overflow-hidden 
  flex flex-col items-center justify-center
  group
  transition-transform
"

      >

        {/* 🔥 ROTATING NEON GLOW BORDER */}
        <motion.div
          animate={{ rotate: 360 }}          // continuous rotation
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "linear"
          }}
          whileHover={{
            rotate: 360 + 45,                  // extra spin on hover
            scale: 1.05,                       // subtle bump
            boxShadow: "0 0 25px #ff9500, 0 0 50px #ff9500",  // NEON glow
          }}
          className="
            absolute inset-0 
            rounded-full 
            border-[6px] border-secondary
            border-t-transparent border-r-transparent
          "
          style={{
            filter: "drop-shadow(0 0 8px #ff9500)"  // slight glow even at rest
          }}
        />

        {/* Circle Content */}
        <div className="relative z-10 text-center px-4 space-y-2">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto">
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
