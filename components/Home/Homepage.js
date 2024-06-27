import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import ServicesSection from './Services/ServicesSection';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact';
import Footer from '../Footer';

const Homepage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <ServicesSection />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    );
}
 
export default Homepage;