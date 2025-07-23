import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const sections = ['home', 'about', 'skills', 'projects', 'gallery', 'contact'];

const Navbar = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (

    <nav className="bg-white dark:bg-backgroundDark text-textMainLight dark:text-textMainDark shadow fixed top-0 w-full z-50">
      <div className="w-full max-w-screen-xl mx-auto px-4" >
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Jesse Mucheke</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={`relative hover:text-primaryLight dark:hover:text-primaryDark transition ${activeSection === section ? 'text-primaryLight dark:text-primaryDark' : ''
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primaryLight dark:bg-primaryDark transition-all"></span>
                )}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="ml-4 text-xl p-2 rounded hover:bg-surfaceLight dark:hover:bg-surfaceDark transition"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white dark:bg-backgroundDark px-4 py-2">
            {sections.map(section => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 hover:text-primaryLight dark:hover:text-primaryDark ${activeSection === section ? 'text-primaryLight dark:text-primaryDark font-semibold' : ''
                  }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-2 text-xl p-2 rounded hover:bg-surfaceLight dark:hover:bg-surfaceDark transition w-full text-left"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
