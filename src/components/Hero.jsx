import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content">
                <h1 className="sr-only">Russell Gordon - Horror Author</h1>
            </div>

            <a href="#books" className="scroll-indicator">
                <FaChevronDown size={24} />
            </a>
        </header>
    );
};

export default Hero;
