import React from 'react';
import TestimonialsSlider from './TestimonialSlider';

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Testimonials</h2>
                <div className="mt-8 space-y-8">
                    <TestimonialsSlider />
                </div>
            </div>
        </section>
    );
}
 
export default Testimonials;