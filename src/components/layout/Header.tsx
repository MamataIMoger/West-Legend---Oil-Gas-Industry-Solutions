import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

// put the PDF in /public and use this path, not /mnt/data
const catalogUrl = "/westlegend.pdf";

const productGroups = [
  {
    title: "Hoses & Connectors",
    sectionId: "hoses-connectors",
    items: [
      { label: "Hydraulic Hose", productId: 101 },
      { label: "Industrial Rubber Hoses", productId: 102 },
      { label: "Hammer Unions", productId: 103 },
      { label: "Swivel Joints", productId: 104 },
      { label: "Trelleborg Composite Hoses", productId: 105 }, // maps to Trelleborg France Industrial & Composite Hoses
      { label: "Rotary Drilling Hoses", productId: 109 },
    ],
  },
  {
    title: "Fittings & Adaptors",
    sectionId: "fittings-adaptors",
    items: [
      { label: "Hose Fittings", productId: 110 },
      { label: "Ferrules", productId: 110 }, // same product details
      { label: "BSP / NPT / JIC / ORFS", productId: 110 }, // same product
      { label: "Stainless Steel Fittings", productId: 112 },
      { label: "Camlock Fittings", productId: 113 },
    ],
  },
  {
    title: "Gaskets & Sealing",
    sectionId: "gaskets-sealing",
    items: [{ label: "Ring Joint Gaskets (API 16A)", productId: 106 }],
  },
  {
    title: "Fasteners",
    sectionId: "fasteners",
    items: [{ label: "Bolts, Nuts, Washers, Locknuts", productId: 201 }],
  },
  {
    title: "Hand Tools",
    sectionId: "hand-tools",
    items: [
      { label: "Wrenches & Spanners", productId: 301 },
      { label: "Cutting Tools", productId: 304 },
      { label: "Gripping & Clamping Tools", productId: 310 },
      { label: "Measuring Tools", productId: 317 },
    ],
  },
  {
    title: "Safety Items",
    sectionId: "safety-items",
    items: [
      { label: "Safety Shoes", productId: 401 },
      { label: "Gloves", productId: 406 }, // general gloves
      { label: "Safety Helmets", productId: 417 },
      { label: "Jackets", productId: 413 },
      { label: "Coveralls", productId: 412 },
      { label: "Full Body Harness", productId: 414 },
    ],
  },
  {
    title: "Lifting & Rigging",
    sectionId: "lifting-rigging",
    items: [{ label: "Nylon Slings", productId: 501 }],
  },
  {
    title: "Warning & Safety Gear",
    sectionId: "warning-safety-gear",
    items: [
      { label: "Warning Tape", productId: 415 },
      { label: "Safety Nets", productId: 416 },
      { label: "Traffic Cones", productId: 419 },
    ],
  },
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
                  className={`font-semibold relative px-1 transition-colors ${
                    isActive(link.path)
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
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
                  aria-haspopup="true"
                  aria-expanded={desktopProductsOpen}
                  className={`flex items-center gap-1 font-semibold px-1 transition-colors ${
                    location.pathname.startsWith("/products")
                      ? "text-secondary"
                      : "text-foreground hover:text-secondary"
                  }`}
                >
                  Products
                  {desktopProductsOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                {/* Desktop Mega Menu */}
                {desktopProductsOpen && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[90vw] max-w-[760px] bg-white border rounded-md shadow-xl p-4 z-50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">

                      {productGroups.map((group) => (
                        <div key={group.title}>
                          <h4 className="font-semibold text-slate-800 mb-2">
                            {group.title}
                          </h4>
                          <ul className="space-y-1">
                            {group.items.map((item) => (
                              <li key={item.label}>
                                <Link
                                  to={`/products?id=${item.productId}`}
                                  onClick={() => setDesktopProductsOpen(false)}
                                  className="block py-1 text-slate-600 hover:text-blue-600"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Quick Links column */}
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-2">
                          Quick Links
                        </h4>
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/products"
                              onClick={() => setDesktopProductsOpen(false)}
                              className="text-blue-600 font-medium"
                            >
                              View All Products
                            </Link>
                          </li>
                          <li>
                            <a
                              href={catalogUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 py-1 hover:text-blue-600"
                            >
                              <FileText size={16} />
                              Download Catalog
                            </a>
                          </li>
                          <li>
                            <Link
                              to="/contact"
                              onClick={() => setDesktopProductsOpen(false)}
                              className="block py-1 text-slate-600 hover:text-blue-600"
                            >
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
             <a
  href={catalogUrl}
  target="_blank"
  rel="noreferrer"
  className="p-2 text-slate-700"
  aria-label="Download product catalog PDF"
  title="Download product catalog PDF"
>
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
                  <span>Products</span>
                  {mobileProductsOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    mobileProductsOpen ? "max-h-[1500px] mt-2" : "max-h-0"
                  }`}
                >
                  <div className="grid gap-4">
                    {productGroups.map((g) => (
                      <div key={g.title}>
                        <h5 className="text-sm font-semibold text-slate-800">
                          {g.title}
                        </h5>
                        <ul className="mt-2 space-y-1">
                          {g.items.map((item) => (
                            <li key={item.label}>
                              <Link
                                to={`/products?id=${item.productId}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-slate-600 text-sm py-1"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    <a
                      href={catalogUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 font-medium"
                    >
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
