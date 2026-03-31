import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Award, ThumbsUp, Wrench, PlayCircle } from 'lucide-react';
import './Home.css';

// Import local assets
import heroImg1 from '../assets/HeroImages/first.webp';
import heroImg2 from '../assets/HeroImages/Second.webp';
import catGold from '../assets/OurCollection/Gold_Collection.png';
import catBridal from '../assets/OurCollection/Bridal_jewellery.png';
import catRings from '../assets/OurCollection/Rings.png';
import catNeckless from '../assets/OurCollection/Neckless.png';
import vid1 from '../assets/Videos/video1.mp4';
import vid2 from '../assets/Videos/video2.mp4';
import vid3 from '../assets/Videos/video3.mp4';
import whyImg from '../assets/About/third.png';

const Home = () => {
  const heroImages = [heroImg1, heroImg2];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const slideVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.8 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="home-page">
      
      {/* Hero Section with Split Layout & Image Slider */}
      <section className="hero bg-dark">
        <div className="container grid-2 align-center hero-split">
          <div className="hero-content">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Timeless Jewellery Crafted with <span>Purity & Elegance</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Serving Dehradun with premium gold jewellery for over 40 years. Experience trust, craftsmanship, and beauty in every piece.
            </motion.p>
            <motion.div 
              className="hero-btns"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/collections" className="btn btn-primary">Explore Collection</Link>
              <Link to="/book-appointment" className="btn btn-outline">Book Appointment</Link>
            </motion.div>
          </div>

          <div className="hero-image-slider">
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentSlide}
                src={heroImages[currentSlide]}
                alt="Luxury Jewellery"
                className="hero-slide-img"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
            
            <div className="slide-indicators">
              {heroImages.map((_, index) => (
                <div 
                  key={index} 
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features section-padding">
        <div className="container">
          <motion.div 
            className="grid-4 features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { icon: <Award size={40} className="gold-text" />, title: "40+ Years Experience", desc: "Generations of expertise in crafting fine jewellery." },
              { icon: <ShieldCheck size={40} className="gold-text" />, title: "Premium Gold", desc: "100% hallmarked and certified pure gold pieces." },
              { icon: <ThumbsUp size={40} className="gold-text" />, title: "Trusted Brand", desc: "Loved by hundreds of happy customers in Dehradun." },
              { icon: <Wrench size={40} className="gold-text" />, title: "Repair Services", desc: "Expert repair and polishing services available." }
            ].map((feat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="feature-card">
                {feat.icon}
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Collection Preview */}
      <section className="collection-preview section-padding bg-dark">
        <div className="container">
          <motion.div 
            className="section-header text-center"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            <h2 className="section-title">Our Collections</h2>
            <p className="section-subtitle">Discover our exquisite range of handcrafted jewellery, designed to make your special moments unforgettable.</p>
          </motion.div>
          <motion.div 
            className="grid-4 collection-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {[
              { title: "Gold Jewellery", img: catGold },
              { title: "Bridal Jewellery", img: catBridal },
              { title: "Rings", img: catRings },
              { title: "Necklaces", img: catNeckless }
            ].map((cat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="collection-card">
                <div className="card-img" style={{backgroundImage: `url('${cat.img}')`}}></div>
                <div className="card-content">
                  <h3>{cat.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div className="text-center" style={{marginTop: '40px'}} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
             <Link to="/collections" className="btn btn-outline">View All Collections</Link>
          </motion.div>
        </div>
      </section>

      {/* Video Section (Instagram Reels alternative) */}
      <section className="video-section section-padding">
        <div className="container">
          <motion.div className="section-header text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="section-title">Sparkle in Motion</h2>
            <p className="section-subtitle">Watch our latest jewellery videos and Instagram features.</p>
          </motion.div>
          
          <motion.div 
            className="grid-3 video-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {[vid1, vid2, vid3].map((videoSrc, idx) => (
              <motion.a 
                 key={idx} 
                 variants={fadeInUp} 
                 className="video-card"
                 href="https://www.instagram.com/suvarnajewellersdehradun"
                 target="_blank"
                 rel="noreferrer"
                 style={{ display: 'block' }}
              >
                 <video autoPlay loop muted playsInline className="ig-video">
                   <source src={videoSrc} type="video/mp4" />
                 </video>
                 <div className="video-overlay">
                    <PlayCircle size={40} className="gold-text" />
                    <span>Watch Reel</span>
                 </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us section-padding bg-dark">
        <div className="container grid-2 align-center">
          <motion.div className="why-us-img" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
            <img src={whyImg} alt="Suvarna Jewellers Store" />
          </motion.div>
          <motion.div className="why-us-content" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6 } } }}>
            <h2 className="section-title">Why Choose Suvarna?</h2>
            <ul className="why-list">
              <li>
                <ShieldCheck className="gold-text" size={30} />
                <div>
                  <h4>Trusted Legacy</h4>
                  <p>Serving our community with honesty and integrity for over four decades.</p>
                </div>
              </li>
              <li>
                <Award className="gold-text" size={30} />
                <div>
                  <h4>Pure Gold Craftsmanship</h4>
                  <p>Uncompromising quality and attention to detail in every piece we create.</p>
                </div>
              </li>
              <li>
                <ThumbsUp className="gold-text" size={30} />
                <div>
                  <h4>Honest Pricing</h4>
                  <p>Transparent pricing with no hidden charges, giving you the best value for gold.</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews section-padding">
         <div className="container">
           <motion.h2 className="section-title text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>What Our Customers Say</motion.h2>
           <motion.div 
             className="grid-3 reviews-grid" style={{marginTop: '40px'}}
             initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
           >
             {[
               { quote: "Nice jewellery collection in Raipur area, satisfied with staff service.", author: "Happy Customer" },
               { quote: "The best jewellery store and quality service providers in town.", author: "Satisfied Client" },
               { quote: "The owner is very soft spoken and kind in nature. Great experience.", author: "Regular Patron" }
             ].map((rev, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="review-card">
                  <div className="stars gold-text">★★★★★</div>
                  <p>"{rev.quote}"</p>
                  <h5>- {rev.author}</h5>
               </motion.div>
             ))}
           </motion.div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section-padding text-center bg-dark">
        <motion.div className="container" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <h2 className="section-title">Visit Our Store or Book an Appointment</h2>
          <p className="section-subtitle">Experience the luxury of pure gold in person. Our experts are ready to assist you.</p>
          <div className="cta-btns">
            <a href="tel:+919634072072" className="btn btn-primary">Call Now</a>
            <a href="https://wa.me/919634072072" target="_blank" rel="noreferrer" className="btn btn-outline" style={{backgroundColor: '#25D366', color: '#fff', borderColor: '#25D366'}}>WhatsApp Now</a>
            <Link to="/contact" className="btn btn-outline">Get Directions</Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
