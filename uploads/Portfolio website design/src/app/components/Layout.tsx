import { Outlet, NavLink } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-neutral-800 selection:text-white">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold tracking-tight z-50 relative group">
            JD.<span className="text-neutral-500 group-hover:text-white transition-colors">studio</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-white ${
                    isActive ? "text-white" : "text-neutral-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href="mailto:hello@example.com"
              className="ml-4 px-4 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 p-2 text-neutral-400 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-40 bg-neutral-950 flex flex-col justify-center items-center gap-8"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-3xl font-bold transition-colors ${
                      isActive ? "text-white" : "text-neutral-500 hover:text-neutral-300"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a
                href="mailto:hello@example.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 text-lg font-medium bg-white text-black rounded-full hover:bg-neutral-200 transition-colors"
              >
                Let's Talk
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-900 bg-neutral-950 pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">Ready to build something?</h2>
            <p className="text-neutral-500">Let's create digital experiences that matter.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@example.com" className="p-3 bg-neutral-900 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
          <p>© {new Date().getFullYear()} John Doe Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with React</p>
        </div>
      </footer>
    </div>
  );
}
