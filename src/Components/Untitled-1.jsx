import React from "react";
import Button from "./Button";
import { Resume } from "../utils";


const Navbar = () => {

  // Navigation links data
  const navLinks = [
    { link: "About", id: "#about" },
    { link: "Work", id: "#project" },
    { link: "Contact", id: "#contact" },
  ];

  // Smooth scroll to sections of the page
  const smoothScroll = (e, id) => {
    e.preventDefault();
    if (id !== "#") {
      const targetElement = document.querySelector(id);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="nav fixed top-0 left-0 z-40 w-full bg-transparent backdrop-blur-lg">
      <div className="max-w-screen-xl mx-auto  border-b border-zinc-700 flex items-center justify-between py-2 px-4 md:px-14 md:py-6 lg:px-0">

        {/* Logo Section */}
        <div className="nav-logo">
          <div className="nav-cont flex items-center justify-center w-8 h-8 text-black bg-white rounded-full">
            <a href="/">JG</a>
          </div>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="nav-link hidden md:block">
          <div className="nav-links flex gap-16">
            {navLinks.map((item, i) => (
              <div key={i} className="flex items-center gap-1">
                <a
                  className="link text-[1.5vw] uppercase"
                  href={item.id}
                  onClick={(e) => smoothScroll(e, item.id)}
                >
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Button for Desktop */}
        <div className="w-[10vw] hidden md:block">
          <a
            className="Resume btn"
            href={Resume}
            download="JainishGamit_Resume.pdf"
          >
            <Button text="Resume" />
          </a>
        </div>

        {/* Toggle Menu for Mobile */}
        <div className="nav-link md:hidden">
          <div className="nav-links gap-5">
            {navLinks.map((item, i) => (
              <div key={i} className="flex justify-end gap-2">
                <a
                  className="link text-[3.4vw] uppercase"
                  href={item.id}
                  onClick={(e) => smoothScroll(e, item.id)}
                >
                  {item.link}
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;




// 

import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { Resume } from "../utils";


const Navbar = () => {


const [isMobile, setIsMobile] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

useEffect(() => {
const handleResize = () => {
setIsMobile(window.innerWidth <= 768);
       if (window.innerWidth > 768) {
         setIsMobileMenuOpen(false);
       }
};

handleResize();
@@ -21,6 +23,31 @@ const Navbar = () => {

}, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);


// Navigation links data
const navLinks = useMemo(() => [
@@ -87,24 +114,138 @@ const Navbar = () => {
</a>
</div>

        {/* Toggle Menu for Mobile */}
        <div className="nav-link md:hidden">
          <div className="nav-links gap-5">
            {navLinks.map((item, i) => (
              <div key={i} className="flex justify-end gap-2">
                <a
                  className="link text-[3.4vw] uppercase"
                  href={item.id}
                  onClick={(e) => smoothScroll(e, item.id)}
                >
                  {item.link}
                </a>
              </div>
            ))}
        {/* Hamburger Menu Button for Mobile */}
        <motion.button
          className="hamburger-btn md:hidden z-50 relative p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                translateY: isMobileMenuOpen ? '2px' : 0
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full origin-left"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                translateY: isMobileMenuOpen ? '-2px' : 0
              }}
              transition={{ duration: 0.3 }}
            />
</div>
        </div>
        </motion.button>

</div>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className="mobile-menu fixed top-0 right-0 w-80 h-full bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl z-50 md:hidden border-l border-white/10 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
                    JG
                  </div>
                  <div className="text-white">
                    <h3 className="font-semibold text-lg">AI & Automation</h3>
                    <p className="text-sm text-gray-400">Creator</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-8 space-y-4">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                  >
                    <a
                      className="block py-4 px-4 text-xl font-medium text-white uppercase tracking-wide hover:bg-white/10 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-yellow-400 hover:text-yellow-400 group"
                      href={item.id}
                      onClick={(e) => {
                        smoothScroll(e, item.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span className="flex items-center justify-between">
                        {item.link}
                        <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Resume Button */}
              <div className="absolute bottom-8 left-6 right-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                >
                  <a
                    className="block w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-xl text-center uppercase tracking-wide hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg"
                    href={Resume}
                    download="JainishGamit_Resume.pdf"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Download Resume
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
</nav>
);
};