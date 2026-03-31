import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Info } from 'lucide-react';
import './Collections.css';

import colGold from '../assets/OurCollection/Gold_Collection.png';
import colBridal from '../assets/OurCollection/Bridal_jewellery.png';
import colNeckless from '../assets/OurCollection/Neckless.png';
import colRings from '../assets/OurCollection/Rings.png';
import colEarings from '../assets/OurCollection/Earings.png';
import colCustom from '../assets/OurCollection/Custom Jewellery.png';

const Collections = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const collections = [
    { 
      id: 1, 
      name: "Gold Jewellery", 
      img: colGold,
      description: "Our signature gold collection featuring intricate traditional designs crafted by master artisans.",
      purity: "22K BIS Hallmarked Gold",
      weight: "Starts from 15gms",
      type: "Necklaces, Bangles, Earrings"
    },
    { 
      id: 2, 
      name: "Bridal Jewellery", 
      img: colBridal,
      description: "Complete heavy bridal sets designed to make your special day truly unforgettable.",
      purity: "22K Pure Gold & Precious Stones",
      weight: "Starts from 80gms",
      type: "Full Set (Choker, Long Haar, Earrings, Maang Tikka)"
    },
    { 
      id: 3, 
      name: "Necklaces", 
      img: colNeckless,
      description: "Elegant daily wear and occasional wear necklaces with modern and classic motifs.",
      purity: "18K & 22K Options",
      weight: "Starts from 10gms",
      type: "Chains, Pendants, Chokers"
    },
    { 
      id: 4, 
      name: "Rings", 
      img: colRings,
      description: "Exquisite rings for engagements, weddings, and casual luxury fashion.",
      purity: "22K Gold / Platinum Options",
      weight: "Starts from 3gms",
      type: "Engagement, Wedding Bands, Solitaire"
    },
    { 
      id: 5, 
      name: "Earrings", 
      img: colEarings,
      description: "From simple studs to heavy jhumkas, find the perfect pair for any outfit.",
      purity: "22K Gold & Diamond options",
      weight: "Starts from 2gms",
      type: "Studs, Drops, Jhumkas"
    },
    { 
      id: 6, 
      name: "Custom Jewellery", 
      img: colCustom,
      description: "Bring your dream design to life with our bespoke jewellery crafting service.",
      purity: "Customizable (18k/22k/24k)",
      weight: "As Per Design",
      type: "Made to Order"
    }
  ];

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
      className="collections-page pt-100"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="page-header text-center section-padding bg-dark">
        <div className="container">
          <h1 className="gold-text" style={{fontSize: '3rem', marginBottom: '10px'}}>Explore Our Collections</h1>
          <p>Handcrafted Masterpieces for Every Occasion</p>
        </div>
      </div>

      <section className="collections-grid-section section-padding">
        <div className="container">
          <motion.div 
            className="grid-3"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {collections.map((item) => (
              <motion.div variants={fadeInUp} className="collection-item-card" key={item.id}>
                <div className="item-img-wrapper" onClick={() => setSelectedItem(item)}>
                  <img src={item.img} alt={item.name} />
                  <div className="item-overlay">
                    <button className="btn btn-outline gold-outline-btn">View Details</button>
                  </div>
                </div>
                <div className="item-info">
                  <h3>{item.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div 
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { type: 'spring', damping: 25 } }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedItem(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-grid">
                <div className="modal-image">
                  <img src={selectedItem.img} alt={selectedItem.name} />
                </div>
                <div className="modal-details">
                  <h2 className="gold-text">{selectedItem.name}</h2>
                  <p className="modal-desc">{selectedItem.description}</p>
                  
                  <div className="specs-list">
                    <div className="spec-item">
                      <span className="spec-label">Purity:</span>
                      <span className="spec-value">{selectedItem.purity}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Approx Weight:</span>
                      <span className="spec-value">{selectedItem.weight}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Types Available:</span>
                      <span className="spec-value">{selectedItem.type}</span>
                    </div>
                  </div>

                  <div className="modal-actions">
                    <a href="https://wa.me/919634072072" target="_blank" rel="noreferrer" className="btn btn-primary" style={{width: '100%', display: 'block', textAlign: 'center', marginBottom: '10px'}}>
                      Enquire on WhatsApp
                    </a>
                    <a href="tel:+919634072072" className="btn btn-outline" style={{width: '100%', display: 'block', textAlign: 'center', borderColor: '#ccc', color: '#333'}}>
                      Call Branch
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="repair-services bg-dark section-padding text-center">
        <motion.div 
          className="container"
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
        >
           <Settings size={60} className="gold-text mx-auto" style={{marginBottom: '20px'}}/>
           <h2 className="section-title gold-text">Jewellery Repair & Polishing Services Available</h2>
           <p className="section-subtitle" style={{color: '#fff'}}>Restore the natural shine and elegance of your old jewellery. We provide expert repair, reshaping, and polishing services to breathe new life into your precious metals.</p>
           <a href="tel:+919634072072" className="btn btn-primary">Enquire Now</a>
        </motion.div>
      </section>

    </motion.div>
  );
};

export default Collections;
