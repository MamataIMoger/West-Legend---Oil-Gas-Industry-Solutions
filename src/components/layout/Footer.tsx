import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      Icon: Facebook,
      label: "Visit our Facebook page",
      title: "Facebook",
      href: "#",
    },
    {
      Icon: Twitter,
      label: "Visit our X (Twitter) profile",
      title: "X (Twitter)",
      href: "#",
    },
    {
      Icon: Linkedin,
      label: "Visit our LinkedIn page",
      title: "LinkedIn",
      href: "#",
    },
    {
      Icon: Instagram,
      label: "Visit our Instagram page",
      title: "Instagram",
      href: "#",
    },
  ];

  return (
    <footer className="bg-primary text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-3 items-start">
          {/* LEFT – Logo + intro + socials */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div>
                <p className="text-lg font-bold leading-tight tracking-wide">
                  WEST LEGEND TRADING LLC
                </p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 mt-1">
                  Marine • Offshore • Oil &amp; Gas Supply
                </p>
              </div>
            </div>

            {/* Short description */}
            <p className="text-base text-white/80 max-w-sm leading-relaxed">
              Trusted supplier of marine, offshore and oilfield equipment across
              the UAE and GCC — delivering certified products, reliable service
              and on-time project support.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, label, title, href }) => (
                <a
                  key={title}
                  href={href}
                  aria-label={label}
                  title={title}
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-[#003049] transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE – Quick links + Products */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 text-xs text-white/80">
            {/* Quick Links */}
            <div>
              <h4 className="text-base font-semibold mb-2 text-white/90">
                Quick Links
              </h4>
             <ul className="space-y-1.5 text-[15px] text-white/80">

                <li>
                  <Link
                    to="/"
                    className="hover:text-secondary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-secondary transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Products
                  </Link>
                </li>
               
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-secondary transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-base font-semibold mb-2 text-white/90">
                Product Categories
              </h4>
              <ul className="space-y-1.5 text-[15px] text-white/80">
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Valves &amp; Flow Control
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Pipes, Tubes &amp; Fittings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Flanges &amp; Gaskets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Marine &amp; Offshore Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Safety &amp; PPE
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT – Contact info */}
          <div className="space-y-4 text-sm text-white/85">

            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span className="font-semibold text-base">Phone</span>
              </div>
              <p className="ml-11 pb-1.5">+971 4 272 1901</p>
              <p className="ml-11 border-b border-white/25 pb-1.5">
                +971 4 266 4574
              </p>
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <span className="font-semibold text-base">Email</span>
              </div>
              <p className="ml-11 border-b border-white/25 pb-1.5">
                westlegendtrdg@hotmail.com
              </p>
            </div>

            {/* Address */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <span className="font-semibold text-base">Address</span>
              </div>
              <p className="ml-11 border-b border-white/25 pb-1.5 leading-relaxed">
                P.O. Box 19088, Deira, Dubai - UAE
                <br />
                Serving UAE &amp; GCC Region
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/15 pt-4 text-center text-xs  text-white/70">
          &copy; {new Date().getFullYear()} WEST LEGEND TRADING LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
