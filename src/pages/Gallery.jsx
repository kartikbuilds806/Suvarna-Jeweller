import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

import colGold from '../assets/OurCollection/Gold_Collection.png';
import colBridal from '../assets/OurCollection/Bridal_jewellery.png';
import colNeckless from '../assets/OurCollection/Neckless.png';
import colRings from '../assets/OurCollection/Rings.png';
import colEarings from '../assets/OurCollection/Earings.png';
import colCustom from '../assets/OurCollection/Custom Jewellery.png';

const Gallery = () => {
  const images = [
    colGold,
    colBridal,
    colNeckless,
    colRings,
    colEarings,
    colCustom
  ];

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.8 } },
    out: { opacity: 0 }
  };

  return (
    <motion.div 
      className="gallery-page pt-100"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="page-header text-center section-padding bg-dark">
        <div className="container">
          <h1 className="gold-text" style={{fontSize: '3rem', marginBottom: '10px'}}>Our Latest Designs</h1>
          <p>A Glimpse into the World of Suvarna Jewellers</p>
        </div>
      </div>

      <section className="masonry-gallery section-padding">
        <div className="container">
          <div className="masonry-grid">
            {images.map((src, index) => (
              <div className="masonry-item" key={index}>
                <div className="masonry-overlay">
                  <span className="gold-text"><i className="lucide-zoom-in"></i></span>
                </div>
                <img src={src} alt={`Jewellery Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
