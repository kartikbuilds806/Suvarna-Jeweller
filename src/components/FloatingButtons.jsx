import React from 'react';
import { Phone } from 'lucide-react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a href="tel:+919634072072" className="float-btn call-btn">
        <Phone size={24} />
      </a>
      <a href="https://wa.me/919634072072" target="_blank" rel="noreferrer" className="float-btn wa-btn">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </div>
  );
};

export default FloatingButtons;
