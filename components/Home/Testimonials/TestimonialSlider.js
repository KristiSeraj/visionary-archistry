'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import { testimonials } from '@/lib/testimonials';


const TestimonialsSlider = () => {
    return (
        <div className="mx-auto p-8">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        <blockquote className="flex flex-col items-center p-4 mb-10">
                            <p className="max-w-4xl text-xl font-medium text-center md:text-2xl lg:text-3xl">{testimonial.text}</p>
                            <footer className="flex items-center gap-3 mt-6 md:mt-12">
                                <img className="flex-shrink-0 w-12 h-12 border rounded-full border-black/10" src={testimonial.image} alt={testimonials.name} loading="lazy" />
                                    <div className="inline-block font-bold tracking-tight">
                                        <p>{testimonial.name}</p>
                                        <p className="font-medium text-black/60">{testimonial.title}</p>
                                    </div>
                            </footer>
                        </blockquote>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;