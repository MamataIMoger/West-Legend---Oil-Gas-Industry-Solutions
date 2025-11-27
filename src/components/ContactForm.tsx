import { useEffect } from "react";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  TrendingUp,
  Headset,
  Truck,
  Droplets,
  ShieldCheck,
  Globe2,
} from "lucide-react";

import productsData from "@/data/products.json";
import { motion } from "framer-motion";

const Home = () => {
  const featuredProducts = productsData.slice(0, 3); // (not used yet, ok for future)

  // 👇 make sure Home always starts from very top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <Hero />

      {/* CATEGORY STRIP */}
      <motion.section
        className="w-full bg-primary -mt-10 relative z-30 shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {[
            {
              title: "Valves & Flow Control",
              desc: "Gate, Globe, Ball, Safety & Check Valves.",
              Icon: Award,
            },
            {
              title: "Pipes & Fittings",
              desc: "CS/SS, ERW/Seamless, Elbows, Tees.",
              Icon: Droplets,
            },
            {
              title: "Flanges & Gaskets",
              desc: "Weld Neck, Blind, Slip-On, Spiral Wound.",
              Icon: ShieldCheck,
            },
            {
              title: "Marine & Offshore",
              desc: "Shackles, Ropes, Chain Blocks, Lifting Gear.",
              Icon: Truck,
            },
            {
              title: "Safety & Maintenance",
              desc: "PPE, Tools, Lubricants & Equipment.",
              Icon: Globe2,
            },
          ].map(({ title, desc, Icon }, index) => (
            <motion.div
              key={index}
              className="group px-5 py-8 text-center border-r border-white/10 last:border-r-0 transition-all duration-300 hover:bg-secondary"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
            >
              <div className="flex justify-center mb-4">
                <Icon
                  size={40}
                  strokeWidth={1.5}
                  className="text-white group-hover:text-[#003049] transition-all"
                />
              </div>

              <h3 className="text-base md:text-lg font-semibold text-white group-hover:text-[#003049] transition-all">
                {title}
              </h3>

              <div className="mx-auto mt-2 mb-3 h-[3px] w-10 bg-secondary group-hover:bg-[#003049] transition-all" />

              <p className="text-xs md:text-base text-white/80 group-hover:text-[#003049]/90">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WELCOME SECTION */}
      <motion.section
        className="relative bg-gradient-to-b from-[#fff4e5] via-white to-white pt-20 pb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
          {/* TEXT SIDE */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-3 py-1 shadow-sm border border-orange-100">
              <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">
                Welcome
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#0b2a45]">
              Welcome to{" "}
              <span className="text-secondary">WEST LEGEND TRADING LLC</span>
            </h2>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              A premier supplier dedicated to serving the marine, oilfield, and
              petroleum industries with top-quality products and exceptional
              service across the UAE and GCC region. We specialize in providing
              a comprehensive range of industrial equipment and materials that
              meet stringent API, ASTM, and ISO standards, helping businesses
              operate smoothly, safely, and efficiently.
            </p>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              With a strong commitment to reliability, quality, and customer
              satisfaction, WEST LEGEND TRADING LLC is your go-to source for all
              your marine and oilfield supply needs. Our extensive product
              portfolio includes valves, pipes, flanges, fittings, gaskets,
              safety gear, and much more—sourced from globally recognized
              manufacturers to ensure superior performance in the most demanding
              environments.
            </p>

            {/* Highlights */}
            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              {[
                {
                  title: "Marine & Offshore",
                  desc: "Specialized equipment for tough environments.",
                  Icon: Droplets,
                },
                {
                  title: "Certified Quality",
                  desc: "Products meeting API / ASTM / ISO standards.",
                  Icon: ShieldCheck,
                },
                {
                  title: "GCC Wide Reach",
                  desc: "Delivering to UAE, Qatar, KSA, Oman & more.",
                  Icon: Globe2,
                },
              ].map(({ title, desc, Icon }, i) => (
                <motion.div
                  key={i}
                  className="space-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                    <Icon className="text-secondary" size={20} />
                  </div>
                  <p className="text-xl font-semibold text-[#0b2a45]">
                    {title}
                  </p>
                  <p className="text-base md:text-base text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/products">
                <Button className="text-base gap-2">
                  Explore Products <ArrowRight size={16} />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#ffb347]/40 blur-3xl opacity-70 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-100">
              <img
                src="/images/01.jpg"
                className="h-72 md:h-80 lg:h-96 w-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS SECTION */}
      <motion.section
        className="bg-[#0b2a45] py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            {
              label: "Certified Products",
              desc: "API • ASTM • ISO Standards",
            },
            {
              label: "Trusted Across GCC",
              desc: "Serving UAE & GCC Region",
            },
            {
              label: "Fast Delivery",
              desc: "Strong Logistics Network",
            },
            {
              label: "Technical Support",
              desc: "Expert Guidance & Service",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="px-3"
            >
              <p className="text-2xl font-bold text-secondary">{item.label}</p>
              <p className="text-xl text-slate-200 mt-1">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHY CHOOSE US */}
      <motion.section
        className="relative py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[url('/images/service1.jpg')] bg-fixed bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#0b2a45]/85" />

        <div className="relative max-w-6xl mx-auto px-4">
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base text-secondary uppercase tracking-wider">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose WEST LEGEND?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                title: "Certified Product Range",
                desc: "Quality that meets global API, ASTM & ISO standards.",
                Icon: Award,
              },
              {
                title: "Competitive Pricing",
                desc: "Affordable solutions without compromising quality.",
                Icon: TrendingUp,
              },
              {
                title: "Technical Support",
                desc: "Expert assistance for your equipment needs.",
                Icon: Headset,
              },
              {
                title: "Strong Logistics",
                desc: "Fast delivery across UAE, KSA, Qatar, Oman & more.",
                Icon: Truck,
              },
            ].map(({ title, desc, Icon }, i) => (
              <motion.div
                key={i}
                className="group bg.white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-secondary transition shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-4 group-hover:bg-white/20 transition">
                  <Icon
                    size={24}
                    className="text-secondary group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-2xl font-semibold text.white mb-2">
                  {title}
                </h3>
                <p className="text-xl text-slate-200">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        className="bg-secondary py-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-base uppercase text-white/80">Get Started</p>
            <h2 className="text-2xl md:text-3xl font-bold text.white">
              Need industrial supplies? We’re here to support you.
            </h2>
            <p className="text-xl text-white/80 mt-2 max-w-lg">
              Send us your requirements and our team will share options,
              pricing, and delivery timelines.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/contact">
              <Button className="text-xl bg-white text-secondary hover:bg-white/90">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
