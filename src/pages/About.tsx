import React, { useEffect } from "react";
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  Anchor,
  Truck,
  Settings,
  Clock,
  Lightbulb,
} from "lucide-react";

import { motion, easeOut } from "framer-motion";

const values = [
  {
    // Quality & Compliance
    title: "Quality & Compliance",
    description:
      "Upholding the highest standards, meeting API, ASTM, and ISO specifications.",
    icon: CheckCircle,
    group: "left",
    number: 1,
  },
  {
    // Innovation & Improvement
    title: "Innovation &  Continuous Improvement",
    description:
      "Listening to client feedback and adapting to industry advancements to serve you better.  ",
    icon: Target,
    group: "left",
    number: 2,
  },
  {
    // Ethical Practices
    title: "Transparent & Ethical Business Practices ",
    description:
      "We believe in honesty, integrity, and fair dealings in every transaction.",
    icon: Eye,
    group: "right",
    number: 3,
  },
  {
    // Long-Lasting Partnerships
    title: "Long-Lasting Partnerships",
    description:
      "Building relationships based on trust, reliability, and mutual value creation.",
    icon: Heart,
    group: "right",
    number: 4,
  },
];

// Animation variants for smooth fade-in effects
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const About = () => {
  // 👇 Scroll to top whenever About page loads
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const leftValues = values.filter((v) => v.group === "left");
  const rightValues = values.filter((v) => v.group === "right");

  // Utility component for the value cards
  const ValueCard = ({ value, index }) => {
    const Icon = value.icon;

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.1 * index }}
        className="value-pill"
      >
        {/* This wrapper ensures the content stays on top of the animated fill layer */}
        <div className="value-pill-content">
          <div className="icon-wrapper">
            <Icon size={32} className="text-secondary" />
          </div>
          <h4 className="title">{value.title}</h4>
          <p className="description">{value.description}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="font-sans antialiased bg-background overflow-x-hidden w-full">
      {/* Tailwind Color Configuration for Industrial Theme (Shadcn style) */}
      <style>{`
        /* Global brand palette
           Primary = deep navy, Accent = bright orange hsl(var(--secondary))
        */
        /* Responsive container width */
        .container {
          max-width: 1280px;
        }

        /* --- Infographic Specific Styles (Horizontal Pill Layout) --- */

        .infographic-section-new {
          background-color: hsl(var(--primary));
          position: relative;
          min-height: 800px;
          overflow: hidden;
        }

        .infographic-section-new::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/images/company.jpg'); /* subtle texture */
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.04;
          z-index: 1;
        }

        .infographic-content-new {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          padding-top: 5rem;
          padding-bottom: 5rem;
        }

        /* Central Hub Styles */
        .hub-ring {
          width: 350px;
          height: 350px;
          background: linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--secondary)) 100%);
          border-radius: 9999px;
          box-shadow: 0 0 80px hsl(var(--secondary) / 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.4s ease;
        }
        .hub-ring:hover {
          transform: scale(1.05);
        }

        .hub-center {
          width: 250px;
          height: 250px;
          background-color: hsl(var(--primary));
          border-radius: 9999px;
          box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 1.5rem;
        }

        /* Value Card (Pill) Styles */
        .value-pill {
          background-color: hsl(var(--primary-foreground) / 0.05);
          color:white;
          margin: 0.75rem;
          border-radius: 30px;
          width: 200px;
          min-height: 200px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
          cursor: pointer; 
          position: relative; 
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease;
          z-index: 1;
        }
        .value-pill:hover {
          transform: translateY(-10px);
          box-shadow: 0 12px 30px hsl(var(--secondary) / 0.4);
        }
        
        /* Top-to-bottom ORANGE gradient fill on hover */
        .value-pill::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(180deg, hsl(var(--secondary)) 0%, hsl(var(--secondary)) 100%);
          transform: scaleY(0);
          transform-origin: top;
          transition: transform 0.35s ease-in-out; 
          z-index: 2; 
        }

        .value-pill:hover::before {
          transform: scaleY(1);
        }
        
        .value-pill-content {
          position: relative;
          z-index: 3;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
        }

        .value-pill .icon-wrapper {
          background-color: white;
          border: 2px solid hsl(var(--secondary));          padding: 10px;
          border-radius: 50%;
          margin-bottom: 1rem;
          display: inline-flex;
          transition: background-color 0.35s ease, border-color 0.35s ease;
        }
        .value-pill:hover .icon-wrapper {
          background-color: rgba(255,255,255,0.18);
          border-color: hsl(var(--secondary));
        }

        .value-pill .title {
          font-weight: 700;
          font-size: 1rem;
          color: hsl(var(--secondary));
          margin-bottom: 0.5rem;
          transition: color 0.35s ease;
        }

        .value-pill:hover .title,
        .value-pill:hover .description {
          color: white;
        }
                  
        .value-pill .description {
          font-size: 0.9rem;
          color: white;
          opacity: 0.85;
        }

        .card-group-left {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          margin-right: 2rem; 
        }
        .card-group-right {
          display: flex;
          flex-direction: row;
          gap: 1.5rem;
          margin-left: 2rem;
        }

        /* Mobile layout */
        @media (max-width: 1023px) {
          .infographic-section-new {
            min-height: auto;
            padding-top: 3rem;
            padding-bottom: 3rem;
          }
          .infographic-content-new {
            flex-direction: column;
          }
          
          .hub-ring {
            order: 0;
            margin-bottom: 3rem;
            width: 300px;
            height: 300px;
          }

          .card-group-left {
            order: 1;
            flex-direction: column;
            margin: 0;
            gap: 1rem;
            align-items: center;
            margin-bottom: 1rem;
          }
          
          .card-group-right {
            order: 2;
            flex-direction: column;
            margin: 0;
            gap: 1rem;
            align-items: center;
          }
          
          .value-pill {
            width: 90%; 
            max-width: 350px; 
            text-align: center;
            align-items: center;
          }
          .value-pill .icon-wrapper {
            margin-right: 0; 
            margin-bottom: 0.75rem; 
          }
          .value-pill .title {
            margin-bottom: 0.2rem;
            line-height: 1.2;
            text-align: center;
          }
          .value-pill .description {
            display: block; 
            margin-top: 0.5rem;
            text-align: center;
          }
        }

        /* ------------ HERO INDUSTRIAL STYLES (Updated to ORANGE brand) ------------ */

        .hero-industrial {
          position: relative;
          background-color: #0A1D33; /* Navy from your design */
        }

        .hero-orbit-wrapper {
          position: relative;
          width: 260px;
          height: 260px;
          margin: 0 auto;
        }

        .hero-orbit-core {
          position: absolute;
          inset: 40px;
          border-radius: 9999px;
          background:
            radial-gradient(circle at 30% 20%, rgba(255,255,255,0.12), transparent 60%),
            linear-gradient(145deg, #111827, #020617);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 25px 60px rgba(0,0,0,0.6);
          border: 1px solid rgba(148,163,184,0.4);
          overflow: hidden;
          animation: orbit-core-pulse 3.2s ease-in-out infinite;
        }

        /* Make the image inside the circle perfectly circular and cover fully */
        .hero-orbit-core img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 9999px;
        }

        .hero-orbit-ring {
          position: absolute;
          inset: 8px;
          border-radius: 9999px;
          border: 1px dashed rgba(255,122,0,0.6); /* orange dashed ring */
        }

        .hero-orbit-ring::before {
          content: '';
          position: absolute;
          inset: 18%;
          border-radius: 9999px;
          border: 1px solid rgba(15,23,42,0.8);
        }

        .hero-orbit-rotating {
          animation: hero-orbit-spin 24s linear infinite;
          transform-origin: center;
        }

        .hero-orbit-icon {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 30% 0%, hsl(var(--secondary) / 0.45), rgba(15,23,42,0.98));
          border: 1px solid rgba(255,122,0,0.8);
          box-shadow: 0 0 20px rgba(255,122,0,0.4);
        }

        .hero-hex {
          position:absolute;
          inset: 0;
          opacity: 0.18;
          background-image:
            linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px),
            linear-gradient(120deg, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(60deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 24px 24px;
          mix-blend-mode: screen;
        }

        @keyframes hero-orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* 🧲 HERO SECTION WITH MOVING SHAPES + CIRCLE IMAGE */}
      <section className="relative hero-industrial text-primary-foreground py-20 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-70">
          <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-[hsl(var(--secondary))]/20 blur-3xl"></div>
          <div className="absolute -left-16 bottom-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            {/* LEFT — Orbiting Icons + Circle Image */}
            <div className="hero-orbit-wrapper relative flex items-center justify-center">
              {/* Hex Outline Behind */}
              <div className="hero-hex" />

              {/* Orbit with Icons */}
              <div className="hero-orbit-ring hero-orbit-rotating">
                {/* Top */}
                <div
                  className="hero-orbit-icon"
                  style={{ top: "-12px", left: "50%", transform: "translateX(-50%)" }}
                >
                  <Settings size={18} className="text-[hsl(var(--secondary))]" />
                </div>

                {/* Right */}
                <div
                  className="hero-orbit-icon"
                  style={{ top: "50%", right: "-12px", transform: "translateY(-50%)" }}
                >
                  <Clock size={18} className="text-[hsl(var(--secondary))]" />
                </div>

                {/* Bottom */}
                <div
                  className="hero-orbit-icon"
                  style={{ bottom: "-12px", left: "50%", transform: "translateX(-50%)" }}
                >
                  <Lightbulb size={18} className="text-[hsl(var(--secondary))]" />
                </div>

                {/* Left */}
                <div
                  className="hero-orbit-icon"
                  style={{ top: "50%", left: "-14px", transform: "translateY(-50%)" }}
                >
                  <Anchor size={18} className="text-[hsl(var(--secondary))]" />
                </div>
              </div>

              {/* Circular Image with Bold Border */}
              <div className="hero-orbit-core rounded-full border-[6px] border-[hsl(var(--secondary))] shadow-[0_0_30px_hsl(var(--secondary)/0.35)] overflow-hidden">
                <motion.img
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  src="/images/company.jpg"
                  alt="West Legend Trading LLC"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* RIGHT — Text */}
            <div className="md:flex-1 text-center md:text-left">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5 }}
                className="uppercase tracking-[0.35em] text-xs mb-3 text-[hsl(var(--secondary))]"
              >
                Marine &amp; Oilfield Excellence
              </motion.p>

              <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={fadeUpVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
              >
                About WEST LEGEND TRADING LLC
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-base sm:text-lg text-primary-foreground/80 max-w-xl mx-auto md:mx-0"
              >
                Leading Marine &amp; Oilfield Supplier | Delivering Quality, Building Trust
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Sequential Content Block 1: Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariants}
          >
            <h2 className="text-3xl sm:text-4xl mb-6 font-extrabold text-primary">
              Our Foundation
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founded with a commitment to support the evolving needs of the marine, industrial, and 
              petroleum sectors, WEST LEGEND TRADING LLC has grown into a trusted supplier known for 
              quality, integrity, and professionalism. Headquartered in the United Arab Emirates, we proudly 
              serve clients across the Gulf Cooperation Council (GCC) and neighbouring regions. 
            </p>
          </motion.div>
        </div>
      </section>

      {/* Infographic Style Core Values Section */}
      <section className="infographic-section-new py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-xl text-primary-foreground/70 max-w-3xl mx-auto">
              The principles that drive our quality and professionalism
            </p>
          </div>
          
          <div className="infographic-content-new">
            {/* Left Card Group (Values 1 & 2) */}
            <div className="card-group-left">
              {leftValues.map((value, index) => (
                <ValueCard key={value.number} value={value} index={index} />
              ))}
            </div>

            {/* Central Hub */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="hub-ring"
            >
              <div className="hub-center">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white text-center leading-tight">
                  WEST LEGEND TRADING
                </h3>
                <p className="text-sm text-white/80 mt-2">
                  Driving value through core commitment
                </p>
                <div className="flex space-x-3 mt-4">
                  <Anchor className="text-[hsl(var(--secondary))]" size={20} />
                  <Truck className="text-[hsl(var(--secondary))]" size={20} />
                </div>
              </div>
            </motion.div>

            {/* Right Card Group (Values 3 & 4) */}
            <div className="card-group-right">
              {rightValues.map((value, index) => (
                <ValueCard
                  key={value.number}
                  value={value}
                  index={index + leftValues.length}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sequential Content Block 3: Conclusion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeUpVariants}
          >
            <h3 className="text-2xl sm:text-3xl mb-4 font-extrabold text-primary">
              Your Project's Success is Our Priority
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At WEST LEGEND TRADING LLC, your project's success is our priority. Whether you're in oil & 
              gas exploration, marine operations, petrochemical processing, or industrial manufacturing, 
              we're here to provide the products and support you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brand Logos – Responsive + Background + Headline + Pulse Glow */}
      <section className="relative py-20 bg-[hsl(var(--primary))] overflow-hidden">
        {/* Soft Background Pattern */}
        <div className="absolute inset-0 bg-[url('/images/company1.jpg')] bg-cover bg-center opacity-[0.07] pointer-events-none"></div>

        {/* Glow accents */}
        <div className="absolute -top-20 right-10 w-72 h-72 bg-[hsl(var(--secondary))] blur-[150px] opacity-30"></div>
        <div className="absolute bottom-10 left-5 w-64 h-64 bg-white blur-[120px] opacity-10"></div>

        {/* Section Heading */}
        <h2 className="relative z-10 text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)] mb-12">
          Trusted by Top Global Brands
        </h2>

        {/* Logos Grid */}
        <div
          className="
            relative z-10 
            max-w-7xl mx-auto 
            px-4 
            grid 
            grid-cols-3 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 
            gap-x-6 gap-y-11 
            place-items-center"
        >
          {[
            "/logos/3m.png","/logos/abco.png","/logos/alfa_flex_italy.png","/logos/delta.png",
            "/logos/dewalt.png","/logos/dormer.png","/logos/enerpac.png","/logos/expert.png",
            "/logos/fluke.png","/logos/groz.png","/logos/honeywell.png","/logos/inteva.png",
            "/logos/irwin.png","/logos/kokon.png","/logos/makita.png","/logos/mann.png",
            "/logos/mitutoyo.png","/logos/msa.png","/logos/north_sun_pool.png",
            "/logos/north.png","/logos/parker.png","/logos/ridgid.png","/logos/sel.png",
            "/logos/sgs.png","/logos/starrett.png","/logos/sun_pool.png","/logos/wika.png",
            "/logos/windlass.png"
          ].map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="relative group"
            >
              {/* Pulse Glow */}
              <span
                className="
                  absolute inset-0 
                  rounded-xl 
                  bg-[hsl(var(--secondary))] 
                  opacity-0 
                  group-hover:opacity-30 
                  blur-xl 
                  transition-all 
                  duration-500"
              ></span>

              <img
                src={logo}
                alt="Brand Logo"
                className="
                  relative z-10
                  bg-white 
                  rounded-xl 
                  p-2 
                  shadow-lg 
                  object-contain
                  hover:scale-110 
                  transition-all duration-300
                  
                  h-12 xs:h-14 sm:h-14 md:h-12 lg:h-14 xl:h-14
                  w-auto"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section (above your global footer) */}
      <section className="py-20 bg-[hsl(var(--secondary))] text-primary-foreground rounded-t-3xl shadow-2xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold mb-6 text-primary-foreground"
          >
            Partner with West Legend
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8"
          >
            Explore our catalog or connect with our specialized team to discuss your project requirements.
          </motion.p>

          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.07, boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="inline-block bg-primary text-primary-foreground font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:bg.white/95 transition duration-300 hover:text-primary"
          >
            Contact Sales Team
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
