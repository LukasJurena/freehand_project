import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import './Contact.css'; // Nezapomeňte přidat soubor pro styly
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  // Vytvoření referencí pro jednotlivé elementy
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // Animace pro celé kontaktní sekci
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1 }
    );

    // Animace pro nadpis
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: -50 }, 
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );

    // Animace pro podnadpis
    gsap.fromTo(subtitleRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1 }
    );

    // Animace pro odkazy
    gsap.fromTo(linksRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 1.5 }
    );
  }, []);

  return (
    <>
      <Navbar />
      <div className="contact" ref={containerRef}>
        <h1 ref={titleRef}>Kontakt</h1>
        <div className="contact-info" ref={subtitleRef}>
          <div className="contact-item">
            <h3>Telefonní číslo:</h3>
            <p><a href="tel:+420727941697">+420 727 941 697</a></p>
          </div>
          <div className="contact-item">
            <h3>Email:</h3>
            <p><a href="mailto:kafka@roeders.cz">kafka@roeders.cz</a></p>
          </div>
          <div className="contact-item">
            <h3>Homepage:</h3>
            <p><a href="https://mesitroeders.cz/cs" target="_blank" rel="noopener noreferrer">www.mesitroeders.com</a></p>
          </div>
          <div className="contact-item">
            <h3>Adresa:</h3>
            <p>Mesit & Roders, Náměstí 123, 110 00 Praha, Česká republika</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
