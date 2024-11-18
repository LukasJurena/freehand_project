import React, {  useState ,useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const containerRef = useRef(null);
    const headerImageRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const linksRef = useRef([]);
    const hpdcRef = useRef(null);

    useEffect(() => {
        document.title = "Home - Ing. René Kafka";
        
        // Animace pro hlavní kontejner
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

        // Animace pro typing efekt
        const letters = titleRef.current.querySelectorAll('span');
        gsap.fromTo(letters, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,  // Postupné "psaní"
            duration: 0.3,
            ease: "power3.out",
            delay: 2 // Zpoždění pro spuštění typing efektu až po opacity animaci
        });

        // Animace pro každý jednotlivý písmenek při najetí myší s různými efekty
        const handleMouseEnter = (event) => {
            const letter = event.target;

            // Zvednutí písmenka a jeho sousedních
            const index = Array.from(letter.parentNode.children).indexOf(letter);
            const lettersArray = Array.from(letter.parentNode.children);

            // Animace pro vybraný písmeno a jeho sousedy
            const staggeredLetters = [
                lettersArray[index - 1], // Předchozí písmeno
                letter,
                lettersArray[index + 1]  // Následující písmeno
            ];

            staggeredLetters.forEach((el, i) => {
                if (el) {
                    gsap.to(el, {
                        y: i === 1 ? -10 : -5, // Hlavní písmeno víc, sousední méně
                        duration: 0.3,
                        ease: "power3.out"
                    });
                }
            });
        };

        // Animace pro návrat písmenka do původního stavu po opuštění
        const handleMouseLeave = (event) => {
            const letter = event.target;

            // Zvednutí písmenka a jeho sousedních zpět
            const index = Array.from(letter.parentNode.children).indexOf(letter);
            const lettersArray = Array.from(letter.parentNode.children);

            const staggeredLetters = [
                lettersArray[index - 1], // Předchozí písmeno
                letter,
                lettersArray[index + 1]  // Následující písmeno
            ];

            staggeredLetters.forEach((el) => {
                if (el) {
                    gsap.to(el, {
                        y: 0, // Vrácení zpět
                        duration: 0.3,
                        ease: "power3.out"
                    });
                }
            });
        };

    
        // Přidání event listeneru pro každé písmeno
        const titleLetters = titleRef.current.querySelectorAll('span');
        titleLetters.forEach((letter) => {
            letter.addEventListener('mouseenter', handleMouseEnter);
            letter.addEventListener('mouseleave', handleMouseLeave); // Přidání event listeneru pro opuštění
        });

        // Cleanup event listeneru
        return () => {
            titleLetters.forEach(letter => {
                letter.removeEventListener('mouseenter', handleMouseEnter);
                letter.removeEventListener('mouseleave', handleMouseLeave); // Odstranění event listeneru pro opuštění
            });
        };
        //
        
    }, []);

    return (
        <div className="home" ref={containerRef}>
            <Navbar />
            <div className="home-container">
                <h1 className="home-title" ref={titleRef}>
                    {"Ing. René Kafka".split('').map((char, index) => (
                        <span key={index}>{char === " " ? "\u00A0" : char}</span> // Přidání mezer jako span
                    ))}
                </h1>
                <p className="sub-title" ref={subtitleRef}>
                    Expert v oboru slévárenství 
                    <span 
                        className="hpdc" 
                        ref={hpdcRef}  // Přidáme ref pro HPDC text
                        onMouseEnter={() => setShowTooltip(true)} 
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                         (HPDC)
                    </span>
                    {showTooltip && <span className="tooltip">High Pressure Die Casting</span>}
                </p>
                <div className="links" ref={el => linksRef.current.push(el)}>
                    <Link to="/o-mne" className="link"><span></span>o mně</Link>
                    <Link to="/sluzby" className="link"><span></span>služby</Link>
                    <Link to="/kontakt" className="link"><span></span>kontakt</Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
