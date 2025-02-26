import React from 'react';
import Hero from '../Hero/Hero';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Hero2 from '../Hero2/Hero2';
import Hero3 from '../Hero3/Hero3';
import Hero4 from '../Hero4/Hero4';
import Footer from '../Footer/Footer';

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Hero3/>
    
    <Hero2/>
    
    <Footer/>
    </>
  );
}
