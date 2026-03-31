import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>Suvarna <span>Jewellers</span></h3>
          <p className="footer-tagline">Crafting Purity & Trust Since 40 Years</p>
          <div className="footer-contact">
            <div className="contact-item">
              <MapPin size={20} className="gold-text" />
              <p>Raipur Chowk, Chaki No. 4, Next to Punjab National Bank, Dehradun, Uttarakhand – 248008</p>
            </div>
            <div className="contact-item">
              <Phone size={20} className="gold-text" />
              <p>+91 96340 72072</p>
            </div>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Working Hours</h4>
          <ul>
            <li>Monday - Saturday: <br/> 10:30 AM – 8:00 PM</li>
            <li className="gold-text">Sunday: <br/> 12:00 PM – 8:00 PM</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <a href="https://www.instagram.com/suvarnajewellersdehradun" target="_blank" rel="noreferrer" className="social-link">
            <span>📷 @suvarnajewellersdehradun</span>
          </a>
          <div className="footer-cta" style={{marginTop: '20px'}}>
             <Link to="/book-appointment" className="btn btn-outline" style={{width: '100%', textAlign: 'center'}}>Book Visit</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Suvarna Jewellers. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
