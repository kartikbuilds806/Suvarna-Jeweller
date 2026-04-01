import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, MessageSquare } from 'lucide-react';
import './BookAppointment.css';

import aptImg from '../assets/HeroImages/Second.webp';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.8 } },
    out: { opacity: 0 }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, phone, date, message } = formData;
    const text = `*New Appointment Request*
Name: ${name}
Phone: ${phone}
Preferred Date: ${date}
Requirements: ${message}`;
    
    const whatsappUrl = `https://wa.me/919634072072?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', date: '', message: '' });
    }, 5000);
  };

  return (
    <motion.div 
      className="appointment-page pt-100"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="page-header text-center section-padding bg-dark">
        <div className="container">
          <h1 className="gold-text" style={{fontSize: '3rem', marginBottom: '10px'}}>Book Your Appointment</h1>
          <p>Schedule a visit for a personalized jewellery viewing experience.</p>
        </div>
      </div>

      <section className="appointment-form-section section-padding">
        <div className="container grid-2 align-center">
          
          <div className="appointment-img">
            <img src={aptImg} alt="Jewellery Consultation" />
          </div>

          <div className="form-container">
            <h2 className="section-title">Schedule a Visit</h2>
            <p className="mb-20">Fill out the form below and our team will get back to you to confirm your appointment details.</p>
            
            {submitted ? (
              <div className="success-message">
                <h3>Thank You, {formData.name || 'friend'}!</h3>
                <p>Your appointment request has been received. Our team will contact you shortly to confirm the timing.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-group">
                  <label htmlFor="name"><User size={18} /> Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone"><Phone size={18} /> Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required placeholder="Enter your mobile number" />
                </div>

                <div className="form-group">
                  <label htmlFor="date"><Calendar size={18} /> Preferred Date</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message"><MessageSquare size={18} /> Message / Requirements</label>
                  <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Tell us what you are looking for..."></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">Book Now</button>
              </form>
            )}
          </div>
        </div>
      </section>

    </motion.div>
  );
};

export default BookAppointment;
