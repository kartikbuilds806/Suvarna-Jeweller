import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.8 } },
    out: { opacity: 0 }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="contact-page pt-100"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="page-header text-center section-padding bg-dark">
        <div className="container">
          <motion.h1 
            className="gold-text" style={{fontSize: '3rem', marginBottom: '10px'}}
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
          >
            Visit Our Store
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
            We would love to welcome you to our showroom
          </motion.p>
        </div>
      </div>

      <section className="contact-details section-padding">
        <div className="container grid-2">
          
          <motion.div 
            className="contact-info-wrapper"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle" style={{marginLeft: 0, textAlign: 'left'}}>
              Whether you're looking for a special piece or need expert repair services, our team is here to assist you.
            </p>
            
            <motion.div className="info-item" variants={fadeInUp}>
              <div className="info-icon">
                <MapPin size={24} className="gold-text" />
              </div>
              <div>
                <h4>Our Address</h4>
                <p>Raipur Chowk, Chaki No. 4, Next to Punjab National Bank, Dehradun, Uttarakhand – 248008</p>
              </div>
            </motion.div>

            <motion.div className="info-item" variants={fadeInUp}>
              <div className="info-icon">
                <Phone size={24} className="gold-text" />
              </div>
              <div>
                <h4>Call Us / WhatsApp</h4>
                <p>+91 96340 72072</p>
              </div>
            </motion.div>

            <motion.div className="info-item" variants={fadeInUp}>
              <div className="info-icon">
                <Clock size={24} className="gold-text" />
              </div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 10:30 AM – 8:00 PM</p>
                <p className="gold-text">Sun: 12:00 PM – 8:00 PM</p>
              </div>
            </motion.div>

            <motion.div 
              className="contact-actions" 
              style={{marginTop: '30px', display: 'flex', gap: '20px', flexWrap: 'wrap'}}
              variants={fadeInUp}
            >
               <motion.a 
                 href="tel:+919634072072" 
                 className="btn btn-primary"
                 whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(212, 175, 55, 0.5)' }}
                 whileTap={{ scale: 0.95 }}
               >
                 Call Now
               </motion.a>
               <motion.a 
                 href="https://wa.me/919634072072" 
                 target="_blank" rel="noreferrer" 
                 className="btn btn-outline" 
                 style={{backgroundColor: '#25D366', color: '#fff', borderColor: '#25D366'}}
                 whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(37, 211, 102, 0.5)' }}
                 whileTap={{ scale: 0.95 }}
               >
                 WhatsApp
               </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="map-container"
            initial="hidden" whileInView="visible" viewport={{ once: true }} 
            variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
          >
            <div className="map-overlay">
               <h3>Suvarna Jewellers Location</h3>
               <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn btn-primary">Open in Google Maps</a>
            </div>
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Map View" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
};

export default Contact;
