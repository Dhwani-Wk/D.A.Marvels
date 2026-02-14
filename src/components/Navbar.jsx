import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-slate-900/90 backdrop-blur-xl shadow-lg shadow-sky-500/5 py-2'
            : 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <div className="flex items-center cursor-pointer group" onClick={() => setPage('home')}>
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center mr-3 transition-all duration-300 gradient-accent-glow group-hover:scale-110 group-hover:rotate-3`}>
              <span className="text-white font-black text-lg">M</span>
            </div>
            <div>
              <span className={`text-xl font-black tracking-tight transition-colors duration-300 ${
                scrolled
                  ? isDark ? 'text-white' : 'text-slate-900'
                  : 'text-white'
              }`}>
                D.A.MARVEL
              </span>
              <span className={`block text-[9px] font-medium tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled
                  ? isDark ? 'text-sky-400' : 'text-amber-600'
                  : isDark ? 'text-sky-400' : 'text-amber-400'
              }`}>
                Enterprise
              </span>
            </div>
          </div>


          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`relative px-5 py-2.5 text-sm font-semibold uppercase tracking-wider transition-all duration-300 rounded-lg ${
                  currentPage === link.id
                    ? scrolled
                      ? isDark ? 'text-sky-400 bg-sky-500/10' : 'text-amber-600 bg-amber-50'
                      : isDark ? 'text-sky-400 bg-sky-500/10' : 'text-amber-400 bg-white/10'
                    : scrolled
                      ? isDark ? 'text-slate-300 hover:text-sky-400 hover:bg-sky-500/10' : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50/50'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full ${isDark ? 'bg-sky-400' : 'bg-amber-500'}`}></span>
                )}
              </button>
            ))}


            <button
              onClick={toggleTheme}
              className="theme-toggle ml-4"
              aria-label="Toggle theme"
            >
              <div className="theme-toggle-knob">
                {isDark ? (
                  <Moon size={12} className="text-sky-400" />
                ) : (
                  <Sun size={12} className="text-amber-500" />
                )}
              </div>
            </button>
          </div>


          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
              <div className="theme-toggle-knob">
                {isDark ? <Moon size={12} className="text-sky-400" /> : <Sun size={12} className="text-amber-500" />}
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all ${
                scrolled
                  ? isDark ? 'text-white hover:bg-slate-800' : 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>


      <div className={`md:hidden overflow-hidden transition-all duration-400 ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`border-t shadow-xl ${isDark ? 'bg-slate-900/95 backdrop-blur-xl border-slate-800' : 'bg-white/95 backdrop-blur-xl border-slate-100'}`}>
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setPage(link.id); setIsOpen(false); }}
                className={`block w-full text-left px-4 py-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all ${
                  currentPage === link.id
                    ? isDark ? 'text-sky-400 bg-sky-500/10' : 'text-amber-600 bg-amber-50'
                    : isDark ? 'text-slate-300 hover:bg-slate-800 hover:text-sky-400' : 'text-slate-700 hover:bg-slate-50 hover:text-amber-600'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
