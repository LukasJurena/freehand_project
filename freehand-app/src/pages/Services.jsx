import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../components/Navbar"; // Import navbar komponenty
import Footer from "../components/Footer"; // Import footer komponenty
import { Link } from 'react-router-dom';
const Services = () => {
  // Odkazy na elementy pro animace
  const titleRef1 = useRef(null);
  const titleRef2 = useRef(null);
  const subtitleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);  // Odkaz na tlačítko

  useEffect(() => {
    document.title = "Služby - Ing. René Kafka";
    // Animace pro první nadpis
    gsap.fromTo(
      titleRef1.current, 
      { opacity: 0, x: -200 }, // Začátek animace - text je mimo obrazovku
      { opacity: 1, x: 0, duration: 1.5 } // Konec animace - text se objeví
    );

    // Animace pro text po prvním nadpisu
    gsap.fromTo(
      subtitleRef.current, 
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1.5, delay: 0 } // Začíná po 1s
    );

    // Animace pro druhý nadpis po textu
    gsap.fromTo(
      titleRef2.current, 
      { opacity: 0, x: -200 }, 
      { opacity: 1, x: 0, duration: 1.5, delay: 1 } // Začíná po 2.5s
    );

    // Animace pro druhý text po druhém nadpisu
    gsap.fromTo(
      textRef.current, 
      { opacity: 0, x: -200 }, 
      { opacity: 1, x: 0, duration: 1.5, delay: 1 } // Začíná po 4s
    );

    // Animace pro tlačítko po textu
    gsap.fromTo(
      buttonRef.current, 
      { opacity: 0, y: 50 }, // Začátek animace - tlačítko bude posunuté dolů a skryté
      { opacity: 1, y: 0, duration: 1.5, delay: 2 } // Začíná po 5s
    );
  }, []);

  return (
    <div className="services-container">
      <Navbar /> {/* Navbar */}
      <div className="container">
        <h1 className="service-title" ref={titleRef1}>Nabízím</h1>
        <p className="service-subtitle" ref={subtitleRef}>
          Technická a technologická podpora v oblasti HPDC se specializací na
          vysokotlaké licí stroje Bühler. Možnost zavádění nových výrobních
          zakázek, kompletní programace automatických licích center s vysokými
          požadavky na odlitky v automotivu a dalších oblastech. Optimalizace
          výrobního procesu, úspora energií, zavádění mikropostřikové technologie,
          vakuových systémů Fondarex a programování robotů Kuka/Reis.
          Taktéž nabízím školení v rozsáhlé oblasti slévárenství
          týkajících se konstrukce forem strojních mechanismů a licího procesu.
        </p>
        <h1 className="service-title" ref={titleRef2}>Profesionální přístup k výrobě a kvalitě</h1>
        <p className="service-text" ref={textRef}>
          Ve výrobním procesu to společně dotáhneme od začátku až dokonce, začneme u tavení materiálu a náročných chemických analýz za pomocí spektrometru, přes udržování kovu a jeho standardizaci kvality, provedu vás kompletním nastavením a sežízením licího centra pro automatický provoz pro váš produkt a v neposlední řadě splníme všechny požadavky na kvalitu. Vnitřní struktura odlitku za pomocí RTG a CT, rozměrové klasifikace za pomocí 3D měření a nakonec následné opracování finální produktu a dodání k zákazníkovi.
        </p>

        {/* Tlačítko "Máte zájem?" */}
        <div className="contact-button-container" ref={buttonRef}>
        <a><Link to="/kontakt" className="contact-button"><span></span>kontakt</Link></a>
        </div>
      </div>
      <Footer /> {/* Footer */}
    </div>
  );
};

export default Services;
