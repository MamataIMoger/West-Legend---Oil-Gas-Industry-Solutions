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

const Home = () => {
  const featuredProducts = productsData.slice(0, 3);

  return (
    <div className="bg-white text-slate-900">
      {/* HERO */}
      <Hero />

      {/* CATEGORY STRIP */}
      <section className="w-full bg-primary -mt-10 relative z-30 shadow-lg">
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
            <div
              key={index}
              className="group px-5 py-8 text-center border-r border-white/10 last:border-r-0 transition-all duration-300 hover:bg-secondary"
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

              <p className="text-xs md:text-sm text-white/80 group-hover:text-[#003049]/90">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WELCOME SECTION */}
      <section className="relative bg-gradient-to-b from-[#fff4e5] via-white to-white pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4 grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
          {/* TEXT SIDE */}
          <div className="space-y-6">
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
              WEST LEGEND TRADING LLC is a premier supplier dedicated to serving
              the marine, oilfield, and petroleum industries with top-quality
              products and exceptional service across the UAE and GCC region.
            </p>

            <p className="text-base md:text-lg text-slate-700 leading-relaxed">
              We provide a comprehensive range of industrial equipment and
              materials aligned with API, ASTM, and ISO standards—ensuring
              safety, efficiency, and reliability.
            </p>

            {/* Highlights */}
            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div>
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                  <Droplets className="text-secondary" size={20} />
                </div>
                <p className="font-semibold text-[#0b2a45]">Marine & Offshore</p>
                <p className="text-xs text-slate-600">
                  Specialized equipment for tough environments.
                </p>
              </div>

              <div>
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                  <ShieldCheck className="text-secondary" size={20} />
                </div>
                <p className="font-semibold text-[#0b2a45]">Certified Quality</p>
                <p className="text-xs text-slate-600">
                  Products meeting API / ASTM / ISO standards.
                </p>
              </div>

              <div>
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                  <Globe2 className="text-secondary" size={20} />
                </div>
                <p className="font-semibold text-[#0b2a45]">GCC Wide Reach</p>
                <p className="text-xs text-slate-600">
                  Delivering to UAE, Qatar, KSA, Oman & more.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3">
              <Link to="/products">
                <Button className="gap-2">
                  Explore Products <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#ffb347]/40 blur-3xl opacity-70 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-orange-100">
              <img
                src="/images/01.jpg"
                className="h-72 md:h-80 lg:h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-[#0b2a45] py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl font-bold text-secondary">15+</p>
            <p className="text-xs text-slate-200 uppercase">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">500+</p>
            <p className="text-xs text-slate-200 uppercase">Projects</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">300+</p>
            <p className="text-xs text-slate-200 uppercase">Products</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-secondary">6</p>
            <p className="text-xs text-slate-200 uppercase">GCC Countries</p>
          </div>
        </div>
      </section>

     

      {/* WHY CHOOSE US */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/images/service1.jpg')] bg-fixed bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#0b2a45]/85" />

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <p className="text-xs text-secondary uppercase tracking-wider">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose WEST LEGEND?
            </h2>
          </div>

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
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-secondary transition shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-4 group-hover:bg-white/20 transition">
                  <Icon
                    size={24}
                    className="text-secondary group-hover:text-white transition"
                  />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {title}
                </h3>
                <p className="text-sm text-slate-200">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-secondary py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase text-white/80">Get Started</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Need industrial supplies? We’re here to support you.
            </h2>
            <p className="text-sm text-white/80 mt-2 max-w-lg">
              Send us your requirements and our team will share options,
              pricing, and delivery timelines.
            </p>
          </div>

          <Link to="/contact">
            <Button className="bg-white text-secondary hover:bg-white/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
