import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="home">
            <nav className='navbar'>
                <a>Ing. René Kafka</a>
                <ul>
                    <li><Link to="/o-mne">o mně</Link></li>
                    <li><Link to="/sluzby">služby</Link></li>
                    <li><Link to="/kontakt">kontakt</Link></li>
                </ul>
            </nav>
            <h1>Home</h1>
        </div>
    );
};

export default Home;