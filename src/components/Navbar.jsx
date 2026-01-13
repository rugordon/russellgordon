import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Books', href: '#books' },
    { name: 'Contact', href: '#signup' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="nav-brand" onClick={() => window.scrollTo(0, 0)}>
            Russell Gordon
          </a>

          <div className="nav-links">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.name} href={link.href} className="nav-link" onClick={handleLinkClick} style={{ fontSize: '1.5rem' }}>
            {link.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
