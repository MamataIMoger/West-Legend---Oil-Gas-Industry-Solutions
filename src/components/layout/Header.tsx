import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const catalogUrl = "/mnt/data/WEST LEGEND CONTENT (2) (1).pdf"; // <-- local uploaded PDF path

const productGroups = [
  { title: "Hoses & Connectors", items: ["Hydraulic Hose", "Industrial Rubber Hoses", "Hammer Unions", "Swivel Joints", "Trelleborg Composite Hoses", "Rotary Drilling Hoses"] },
  { title: "Fittings & Adaptors", items: ["Hose Fittings", "Ferrules", "BSP / NPT / JIC / ORFS", "Stainless Steel Fittings", "Camlock Fittings"] },
  { title: "Gaskets & Sealing", items: ["Ring Joint Gaskets (API 16A)"] },
  { title: "Fasteners", items: ["Bolts, Nuts, Washers, Locknuts"] },
  { title: "Hand Tools", items: ["Wrenches & Spanners", "Cutting Tools", "Gripping & Clamping Tools", "Measuring Tools"] },
  { title: "Safety Items", items: ["Safety Shoes", "Gloves", "Safety Helmets", "Jackets", "Coveralls", "Full Body Harness"] },
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown on outside click
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
    // products handled separately
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  // helpers to manage hover delayed close (prevents flicker)
  const openDropdown = () => {
    if (closeTimeout.current) {
      window.clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setDesktopProductsOpen(true);
  };
  const scheduleCloseDropdown = (delay = 150) => {
    if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
    closeTimeout.current = window.setTimeout(() => {
      setDesktopProductsOpen(false);
      closeTimeout.current = null;
    }, delay) as unknown as number;
  };

  return (
    <>
    
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background shadow-industrial backdrop-blur-sm" : "bg-background/95"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded flex items-center justify-center transition-all ${isScrolled ? "scale-90" : "scale-100"} bg-secondary`}>
                <span className="text-secondary-foreground font-bold text-xl">W</span>
              </div>
              <span className={`text-2xl font-bold ${isScrolled ? "text-lg" : "text-2xl"}`}>WEST LEGEND</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold relative px-1 transition-colors ${
                    isActive(link.path) ? "text-secondary" : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.label}
                  {isActive(link.path) && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary" />}
                </Link>
              ))}

              {/* Products Dropdown (desktop) */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={() => scheduleCloseDropdown(150)}
              >
                <button
                  onClick={() => setDesktopProductsOpen((s) => !s)}
                  aria-haspopup="true"
                  aria-expanded={desktopProductsOpen}
                  className={`flex items-center gap-1 font-semibold px-1 transition-colors ${
                    location.pathname.startsWith("/products") ? "text-secondary" : "text-foreground hover:text-secondary"
                  }`}
                >
                  Products
                  {desktopProductsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                {desktopProductsOpen && (
                  <div
                    className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[760px] bg-white border rounded-md shadow-lg p-4 z-50 pointer-events-auto"
                    // keep open while user interacts
                    onMouseEnter={openDropdown}
                    onMouseLeave={() => scheduleCloseDropdown(120)}
                  >
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      {productGroups.map((group) => (
                        <div key={group.title}>
                          <h4 className="font-semibold text-slate-800 mb-2">{group.title}</h4>
                          <ul className="space-y-1">
                            {group.items.map((it) => (
                              <li key={it}>
                                <Link
                                  to={`/products`}
                                  state={{ category: group.title, item: it }}
                                  className="block py-1 text-slate-600 hover:text-blue-600 transition-colors"
                                  onClick={() => setDesktopProductsOpen(false)}
                                >
                                  {it}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      <div className="col-span-1">
                        <h4 className="font-semibold text-slate-800 mb-2">Quick Links</h4>
                        <ul className="space-y-3">
                          <li>
                            <Link to="/products" className="text-blue-600 font-medium" onClick={() => setDesktopProductsOpen(false)}>
                              View All Products
                            </Link>
                          </li>
                          <li>
                            <a href={catalogUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 py-1 hover:text-blue-600">
                              <FileText size={16} /> Download Catalog
                            </a>
                          </li>
                          <li>
                            <Link to="/contact" className="block py-1 text-slate-600 hover:text-blue-600" onClick={() => setDesktopProductsOpen(false)}>
                              Request a Quote
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* CTA Button (desktop) */}
            <div className="hidden lg:block">
              <Button asChild className="bg-secondary hover:bg-secondary/90">
                <Link to="/contact">Get A Quote</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <a href={catalogUrl} target="_blank" rel="noreferrer" className="p-2 text-foreground">
                <FileText size={20} />
              </a>

              <button
                className="text-foreground"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border animate-fade-in">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-semibold py-2 transition-colors ${
                    isActive(link.path) ? "text-secondary" : "text-foreground hover:text-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen((s) => !s)}
                  className="w-full flex items-center justify-between py-2 font-semibold text-foreground"
                >
                  <span>Products</span>
                  {mobileProductsOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? "max-h-[1200px] mt-2" : "max-h-0"}`}>
                  <div className="grid gap-4">
                    {productGroups.map((g) => (
                      <div key={g.title}>
                        <h5 className="text-sm font-semibold text-slate-800">{g.title}</h5>
                        <ul className="mt-2 space-y-1">
                          {g.items.map((it) => (
                            <li key={it}>
                              <Link
                                to="/products"
                                state={{ category: g.title, item: it }}
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
                    <a href={catalogUrl} target="_blank" rel="noreferrer" className="text-blue-600 font-medium">
                      Download Catalog
                    </a>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-secondary hover:bg-secondary/90 w-full">
                <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Get A Quote</Link>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
