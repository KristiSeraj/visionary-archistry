import React from 'react';
import ServicesList from './ServicesList';

const ServicesSection = () => {
    return (
        <section id='service' className="py-16 leading-7 bg-gray-100 sm:py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Our Services</h2>
            </div>
            <div className="box-border px-4 lg:mx-6 border-solid sm:px-6 md:px-6 lg:px-0 max-w-7xl">
                <ServicesList />
            </div>
        </section>
    );
}
 
export default ServicesSection;