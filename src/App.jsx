import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Books from './components/Books';
import Signup from './components/Signup';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Add smooth scrolling behavior for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App" id="page-top">
      <Navbar />
      <Hero />
      <Books />
      <Signup />
      <Footer />
    </div>
  );
}

export default App;
