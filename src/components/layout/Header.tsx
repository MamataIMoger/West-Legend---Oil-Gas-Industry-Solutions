import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const catalogUrl = "/westlegend.pdf";

const productGroups = [
  { title: "Hoses & Connectors", items: ["Hydraulic Hose", "Industrial Rubber Hoses", "Hammer Unions", "Swivel Joints", "Trelleborg Composite Hoses", "Rotary Drilling Hoses"] },
  { title: "Fittings & Adaptors", items: ["Hose Fittings", "Ferrules", "BSP / NPT / JIC / ORFS", "Stainless Steel Fittings", "Camlock Fittings"] },
  { title: "Gaskets & Sealing", items: ["Ring Joint Gaskets (API 16A)"] },
  { title: "Fasteners", items: ["Bolts, Nuts, Washers, Locknuts"] },
  { title: "Hand Tools", items: ["Wrenches & Spanners", "Cutting Tools", "Gripping Tools", "Measuring Tools"] },
  { title: "Safety Items", items: ["Safety Shoes", "Gloves", "Safety Helmets", "Coveralls"] },
  { title: "Lifting & Rigging", items: ["Nylon Slings"] },
  { title: "Warning & Safety Gear", items: ["Warning Tape", "Safety Nets", "Traffic Cones"] },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [desktopProductsOpen, setDesktopProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const closeTimeout = useRef<number | null>(null);

  /* Sticky scroll effect */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!(e.target instanceof Node)) return;
      if (!dropdownRef.current.contains(e.target)) {
        setDesktopProductsOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
  ];

  const isActive = (p: string) => location.pathname === p;

  const openDropdown = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDesktopProductsOpen(true);
  };

  const scheduleCloseDropdown = (delay = 150) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = window.setTimeout(() => {
      setDesktopProductsOpen(false);
      closeTimeout.current = null;
    }, delay) as unknown as number;
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-lg ${
          isScrolled ? "bg-white/90 shadow-md" : "bg-white/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/westlegend.png"
                alt="West Legend Logo"
                className={`transition-all h-12 sm:h-16 md:h-20 ${
                  isScrolled ? "scale-90" : "scale-100"
                }`}
              />
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">

              {/* Home & About */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold text-sm md:text-base relative px-1 ${
                    isActive(link.path)
                      ? "text-secondary"
                      : "text-slate-800 hover:text-secondary"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary" />
                  )}
                </Link>
              ))}

              {/* Products Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={() => scheduleCloseDropdown(120)}
              >
                <button
                  onClick={() => setDesktopProductsOpen((s) => !s)}
                  className="flex items-center gap-1 font-semibold text-sm md:text-base text-slate-800 hover:text-secondary"
                >
                  Products
                  {desktopProductsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {/* Desktop Mega Menu */}
                {desktopProductsOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[90vw] max-w-[760px] bg-white border rounded-md shadow-xl p-4 z-50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

                      {productGroups.map((group) => (
                        <div key={group.title}>
                          <h4 className="font-semibold text-slate-800 mb-2">{group.title}</h4>
                          <ul className="space-y-1">
                            {group.items.map((it) => (
                              <li key={it}>
                                <Link
                                  to={`/products`}
                                  state={{ category: group.title, item: it }}
                                  className="block py-1 text-slate-600 hover:text-blue-600"
                                >
                                  {it}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Quick Links */}
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">Quick Links</h4>
                        <ul className="space-y-3">
                          <li>
                            <Link
                              to="/products"
                              className="text-blue-600 font-medium"
                            >
                              View All Products
                            </Link>
                          </li>

                          <li>
                            <a href={catalogUrl} download className="flex items-center gap-2 text-slate-700 hover:text-blue-600">
                              <FileText size={16} /> Download Catalog
                            </a>
                          </li>

                          <li>
                            <Link to="/contact" className="text-slate-700 hover:text-blue-600">
                              Contact
                            </Link>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Contact Button */}
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Contact</Link>
              </Button>
            </div>

            {/* MOBILE HEADER ICONS */}
            <div className="flex items-center gap-3 lg:hidden">
              <a href={catalogUrl} target="_blank" rel="noreferrer" className="p-2 text-slate-700">
                <FileText size={22} />
              </a>

              <button
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className="text-slate-800"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t animate-fade-in">
            <nav className="px-4 py-4 flex flex-col gap-4">

              {/* Home & About */}
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold py-2 ${
                    isActive(link.path)
                      ? "text-secondary"
                      : "text-slate-800 hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen((s) => !s)}
                  className="w-full flex items-center justify-between py-2 font-semibold text-slate-800"
                >
                  Products
                  {mobileProductsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    mobileProductsOpen ? "max-h-[1500px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="grid gap-4 py-2">

                    {productGroups.map((group) => (
                      <div key={group.title}>
                        <h5 className="text-sm font-semibold text-slate-900">{group.title}</h5>
                        <ul className="mt-2 space-y-1">
                          {group.items.map((it) => (
                            <li key={it}>
                              <Link
                                to="/products"
                                state={{ category: group.title, item: it }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-slate-600 text-sm py-1"
                              >
                                {it}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <a href={catalogUrl} download className="text-blue-600 font-medium">
                      Download Catalog
                    </a>

                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <Button asChild className="bg-secondary hover:bg-secondary/90 w-full">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
              </Button>

            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
