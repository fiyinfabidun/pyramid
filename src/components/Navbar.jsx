/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar Container */}
      <div
        className={`nav grid grid-cols-2 lg:grid-cols-3 py-6 items-center px-6 lg:px-16 fixed top-0 w-full z-100 transition-colors duration-300 ${
          isScrolled ? "bg-bg shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" className="w-[204px] h-[14px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-between items-center gap-8 border border-[#2F2F2F] rounded-full p-6 lg:w-[564px] h-[15px] text-white">
          <p className="cursor-pointer hover:text-gray-400">Home</p>
          <p className="cursor-pointer hover:text-gray-400">Projects</p>
          <p className="cursor-pointer hover:text-gray-400">Our Studio</p>
          <p className="cursor-pointer hover:text-gray-400">Our Clients</p>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-end">
          <button onClick={() => setIsOpen(!isOpen)} className="relative z-50">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX className="text-white text-3xl" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu className="text-white text-3xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-screen bg-bg flex flex-col items-center justify-center text-white z-40"
          >
            <nav className="text-2xl space-y-6 text-center">
              <p className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</p>
              <p className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</p>
              <p className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Our Studio</p>
              <p className="cursor-pointer hover:text-gray-400" onClick={() => setIsOpen(false)}>Our Clients</p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
