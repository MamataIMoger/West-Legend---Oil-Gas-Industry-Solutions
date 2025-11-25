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
        <div className="grid gap-8 lg:grid-cols-[1fr,1.1fr,1fr] items-start">
          {/* LEFT – Logo + intro + socials + product links */}
          <div className="space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div>
                <p className="text-lg font-bold leading-tight">
                  WEST LEGEND TRADING LLC
                </p>
              </div>
            </div>

            {/* Short description */}
            <p className="text-xs text-white/80 max-w-sm leading-relaxed">
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

            {/* Product Links */}
            <div className="pt-2">
              <h4 className="text-sm font-semibold mb-2 text-white/90">
                Products
              </h4>

              <ul className="space-y-1 text-xs text-white/75">
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Valves & Flow Control
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Pipes, Tubes & Fittings
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Flanges & Gaskets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Marine & Offshore Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="hover:text-secondary transition-colors"
                  >
                    Safety & PPE
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* MIDDLE – Write Us form */}
          <div className="bg-white text-[#003049] rounded-xl shadow-xl px-6 py-7 mx-auto w-full max-w-sm">
            <h2 className="text-xl font-bold text-center mb-5">Write Us</h2>

            <form className="space-y-3">
              <input
                type="text"
                name="footerName"
                id="footerName"
                autoComplete="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
              <input
                type="tel"
                name="footerPhone"
                id="footerPhone"
                autoComplete="tel"
                placeholder="Phone Number"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-secondary focus:border-secondary"
              />
              <textarea
                rows={3}
                name="footerMessage"
                id="footerMessage"
                autoComplete="off"
                placeholder="Your Message"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs outline-none resize-none focus:ring-2 focus:ring-secondary focus:border-secondary"
              />

              <div className="pt-1 flex justify-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-8 py-2.5 rounded-full bg-gradient-to-r from-[#ff7e32] to-[#ffb347] text-white text-xs font-semibold shadow-md hover:brightness-105 transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* RIGHT – Contact info */}
          <div className="space-y-4 text-xs text-white/85">
            {/* Phone */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span className="font-semibold text-sm">Phone</span>
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
                <span className="font-semibold text-sm">Email</span>
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
                <span className="font-semibold text-sm">Address</span>
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
        <div className="mt-8 border-t border-white/15 pt-4 text-center text-[11px] text-white/70">
          &copy; {new Date().getFullYear()} WEST LEGEND TRADING LLC. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
