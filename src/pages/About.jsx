import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Users } from 'lucide-react';
import './About.css';

import storyImg from '../assets/About/first.webp';

const About = () => {
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
      className="about-page pt-100"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <div className="page-header text-center section-padding bg-dark">
        <div className="container">
          <motion.h1 
            className="gold-text" 
            style={{fontSize: '3rem', marginBottom: '10px'}}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Suvarna Jewellers
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Crafting Purity & Trust Since 40 Years
          </motion.p>
        </div>
      </div>

      <section className="story-section section-padding">
        <div className="container grid-2 align-center">
          <motion.div 
            className="story-content"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
          >
            <h2 className="section-title">Our Journey</h2>
            <p className="mb-20">Suvarna Jewellers has been serving the jewellery industry for over 40 years. From sourcing raw gold to crafting pure gold jewellery, we have built a legacy of trust and quality.</p>
            <p>Now entering the retail segment, we proudly offer premium jewellery collections to the people of Uttarakhand. Our focus is on purity, craftsmanship, and customer satisfaction. We believe that jewellery is not just an accessory, but a timeless memory handed down through generations.</p>
          </motion.div>
          <motion.div 
            className="story-img"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
          >
            <img src={storyImg} alt="Suvarna Jewellers Masterpiece" />
          </motion.div>
        </div>
      </section>

      <section className="values-section bg-dark section-padding">
        <div className="container text-center">
          <motion.h2 
            className="section-title"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
          >
            Mission & Values
          </motion.h2>
          <motion.div 
            className="grid-3 values-grid" style={{marginTop: '50px'}}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {[
              { icon: <ShieldCheck size={50} className="gold-text mx-auto" style={{margin: '0 auto 20px'}}/>, title: "Uncompromised Purity", desc: "Every piece is certified and hallmarked, ensuring you receive the exact purity of gold you pay for." },
              { icon: <Heart size={50} className="gold-text mx-auto" style={{margin: '0 auto 20px'}}/>, title: "Exquisite Craftsmanship", desc: "Our artisans blend traditional Indian techniques with modern aesthetics to create true masterpieces." },
              { icon: <Users size={50} className="gold-text mx-auto" style={{margin: '0 auto 20px'}}/>, title: "Customer Trust", desc: "Your satisfaction is our priority. Honest pricing, warm service, and lasting relationships." }
            ].map((v, i) => (
              <motion.div key={i} className="value-card" variants={fadeInUp}>
                {v.icon}
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="reviews section-padding">
         <div className="container">
           <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
             <h2 className="section-title text-center">Customer Trust</h2>
             <p className="section-subtitle text-center">Hear from the people who made us a part of their beautiful moments.</p>
           </motion.div>
           <motion.div 
             className="grid-3 reviews-grid" style={{marginTop: '40px'}}
             initial="hidden" whileInView="visible" viewport={{ once: true }}
             variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
           >
             {[
               { quote: "Nice jewellery collection in Raipur area, satisfied with staff service." },
               { quote: "The best jewellery store and quality service providers in town." },
               { quote: "The owner is very soft spoken and kind in nature. Really loved the variety." }
             ].map((r, i) => (
               <motion.div key={i} className="review-card-light" variants={fadeInUp}>
                  <div className="stars gold-text">★★★★★</div>
                  <p>"{r.quote}"</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
      </section>

    </motion.div>
  );
};

export default About;
