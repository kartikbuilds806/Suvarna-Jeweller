import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          <h2>Suvarna <span>Jewellers</span></h2>
        </Link>
        
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active-link' : ''}>Home</Link></li>
          <li><Link to="/about" className={location.pathname === '/about' ? 'active-link' : ''}>About</Link></li>
          <li><Link to="/collections" className={location.pathname === '/collections' ? 'active-link' : ''}>Collections</Link></li>
          <li><Link to="/gallery" className={location.pathname === '/gallery' ? 'active-link' : ''}>Gallery</Link></li>
          <li><Link to="/contact" className={location.pathname === '/contact' ? 'active-link' : ''}>Contact</Link></li>
          <li>
            <Link to="/book-appointment" className="btn btn-primary nav-btn">
              Book Appointment
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
