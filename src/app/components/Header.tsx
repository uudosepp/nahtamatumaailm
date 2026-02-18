import { Link } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "figma:asset/cb9bd409e5440c4a2bc148d6f4f076eff4d6af15.png";

export function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu when clicking on a link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 border-b border-[#0a0e1a]/10 bg-white transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group transition-colors" onClick={closeMenu}>
            <div className="relative">
              <img 
                src={logo} 
                alt="Nähtamatu Maailm" 
                className="w-10 h-10 object-contain transition-all duration-300 group-hover:brightness-0 group-hover:sepia group-hover:saturate-[500%] group-hover:hue-rotate-[350deg] group-hover:brightness-[0.6]"
              />
            </div>
            <span className="text-lg tracking-wide text-[#0a0e1a] transition-colors duration-300 group-hover:text-[#7b553d]">NÄHTAMATU MAAILM</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8">
            <Link 
              to="/#meist" 
              className="text-sm font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
            >
              Meist
            </Link>
            <Link 
              to="/#videod" 
              className="text-sm font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
            >
              Videod
            </Link>
            <Link 
              to="/#raamatud" 
              className="text-sm font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
            >
              Raamatud
            </Link>
            <Link 
              to="/#nõustamine" 
              className="text-sm font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
            >
              Nõustamine
            </Link>
            <Link 
              to="/saated" 
              className="text-sm font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
            >
              Raadiosaated
            </Link>
          </nav>

          {/* Animated Hamburger Button */}
          <button 
            className="lg:hidden relative z-50 p-2 text-[#7b553d] hover:bg-[#7b553d]/5 rounded-lg transition-colors w-12 h-12 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menüü"
          >
            <motion.span
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-0.5 bg-current rounded-full"
            />
            <motion.span
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-7 h-0.5 bg-current rounded-full"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#0a0e1a]/10 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-6">
              <Link 
                to="/#meist" 
                className="text-lg font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
                onClick={closeMenu}
              >
                Meist
              </Link>
              <Link 
                to="/#videod" 
                className="text-lg font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
                onClick={closeMenu}
              >
                Videod
              </Link>
              <Link 
                to="/#raamatud" 
                className="text-lg font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
                onClick={closeMenu}
              >
                Raamatud
              </Link>
              <Link 
                to="/#nõustamine" 
                className="text-lg font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
                onClick={closeMenu}
              >
                Nõustamine
              </Link>
              <Link 
                to="/saated" 
                className="text-lg font-medium uppercase tracking-wider text-[#0a0e1a]/70 hover:text-[#7b553d] transition-colors"
                onClick={closeMenu}
              >
                Raadiosaated
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
