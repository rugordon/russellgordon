import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <header className="hero">
            <div className="hero-content"></div>

            <a href="#books" className="scroll-indicator">
                <FaChevronDown size={24} />
            </a>
        </header>
    );
};

export default Hero;
