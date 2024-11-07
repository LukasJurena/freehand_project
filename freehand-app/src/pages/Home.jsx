import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <h1>Home</h1>
        </div>
    );
};

export default Home;