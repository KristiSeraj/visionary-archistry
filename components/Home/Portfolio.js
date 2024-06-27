import React from 'react';

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Portfolio Highlights</h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                </div>
                <div className="text-center mt-8">
                    <a href="/portfolio" className="text-blue-600 hover:text-blue-800">View Full Portfolio</a>
                </div>
            </div>
        </section>
    );
}
 
export default Portfolio;