import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path, isMobile = false) => {
    const baseClass = isMobile 
      ? "font-label text-lg tracking-[0.2em] uppercase transition-colors duration-300 w-full text-center py-4 "
      : "font-label text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ";
    
    const activeClass = "text-white border-b border-white/50 hover:text-white";
    const inactiveClass = "text-white/90 hover:text-white";

    return location.pathname === path ? baseClass + activeClass : baseClass + inactiveClass;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/about' },
    { name: 'Collections', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header className="bg-stone-900/60 backdrop-blur-xl text-amber-200 fixed top-0 left-0 right-0 z-40 rounded-none shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500">
      <nav className="flex items-center justify-between px-8 py-6 max-w-full">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden material-symbols-outlined text-amber-200 cursor-pointer hover:scale-95 duration-200 z-[60]"
          >
            {isOpen ? 'close' : 'menu'}
          </button>
          <Link to="/" className="text-xl font-headline tracking-[0.2em] text-amber-200 uppercase">RADHE STONEX</Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <Link key={link.path} className={getLinkClass(link.path)} to={link.path}>{link.name}</Link>
          ))}
        </div>

        <button 
          onClick={() => window.open('https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20your%20premium%20marble%20collections', '_blank')}
          className="hidden sm:block bg-primary text-on-primary px-6 py-2 rounded-lg font-label text-[10px] tracking-[0.15em] uppercase hover:bg-primary-fixed-dim transition-all"
        >
          Get Quote
        </button>
      </nav>
    </header>

    {/* Mobile Nav Overlay - Premium Top-aligned Full-screen */}
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex flex-col items-center justify-start pt-24 gap-8 px-8 md:hidden overflow-y-auto text-white"
        >
          <div className="text-red-500 font-bold">DEBUG: MENU RENDERED</div>
          <div className="flex flex-col items-center gap-8 w-full mt-10">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                className={getLinkClass(link.path, true)} 
                to={link.path}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-8 w-64 pb-20">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  window.open('https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20your%20premium%20marble%20collections', '_blank');
                }}
                className="w-full bg-primary text-on-primary py-4 rounded-lg font-label text-sm tracking-[0.2em] uppercase hover:bg-primary-fixed-dim transition-all shadow-xl"
              >
                Get Quote
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
