// src/components/Hero.tsx
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[620px] lg:min-h-[760px] flex items-center overflow-hidden">
      {/* Background image with pull-down */}
      <motion.div
        initial={{ scale: 1.06, y: -40 }}
        animate={{ scale: 1.0, y: 0 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: "url('/images/oilhero.jpg')",
          backgroundPosition: "center 30%",
          filter: "brightness(0.45) contrast(0.95)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-3 bg-secondary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-secondary font-semibold text-sm">Leading Marine • Oilfield • Industrial Supplier</span>
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold mb-5 leading-tight drop-shadow-lg">
            West Legend Trading LLC
            <span className="block text-lg md:text-2xl font-medium text-white/80 mt-2">
              Trusted supplier of certified industrial & marine equipment across the GCC
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
            Supplying API, ASTM and ISO-certified valves, hoses, fittings, safety gear and industrial components. Trusted by marine, oilfield and industrial clients across the UAE & GCC — competitive pricing, quick delivery and expert technical support.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 shadow-md">
              <Link to="/products" aria-label="View products">
                View Products
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="border-2 border-white text-primary hover:bg-white hover:text-primary text-lg px-8">
              <Link to="/contact" aria-label="Contact West Legend">Get a Quote</Link>
            </Button>
          </motion.div>

          
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-0 bottom-0 w-1/3 h-1/3 bg-secondary/20 rounded-tl-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
};

export default Hero;
