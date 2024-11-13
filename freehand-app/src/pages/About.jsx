import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const events = [
    { year: '2018', description: 'Stáž v oboru slévarenství.' },
    { year: '2019', description: 'Maturitní zkouška na SŠPHZ.' },
    { year: '2022', description: 'Bakalářský titul v oboru procesní inženírství.' },
    { year: '2022', description: 'Seřizovač - technolog (HDPC).' },
    { year: '2024', description: 'Inženýrský titul v oboru procesní inženírstvý a technologická zařízení.' },
    { year: '2024', description: 'Procesní inženýr výroby.' },
  ];

  useEffect(() => {
    document.title = "O mně - Ing. René Kafka";
    // ScrollTrigger pro animaci postupného zobrazování
    events.forEach((_, index) => {
        gsap.fromTo(
            `.timeline-item:nth-child(${index + 1})`,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,  // Zkrátit dobu trvání animace pro rychlejší efekt
              scrollTrigger: {
                trigger: `.timeline-item:nth-child(${index + 1})`,
                start: 'top 90%',  // Zobrazí se, když bude 85% položky na obrazovce
                end: 'top 50%',    // Končí, když se dostane na 20% obrazovky
                scrub: true,
                toggleActions: 'play none none reverse',
                markers: false,
              },
            }
          );
    });
  }, [events]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="AboutNadpis"><h1>O mně</h1></div>
        <div className="timeline">
          {events.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{event.year}</div>
              <div className="timeline-content">
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
