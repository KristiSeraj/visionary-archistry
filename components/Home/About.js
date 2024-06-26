import React from 'react';

const About = () => {
    return (  
        <section id="about" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">About Us</h2>
                <p className="mt-4 text-center">We are a team of passionate architects dedicated to creating innovative and sustainable designs...</p>
            </div>
            <div className="sm:flex items-center mx-auto max-w-screen-xl">
                <div className="sm:w-1/2 p-10">
                    <div className="image object-center text-center">
                        <img src="https://i.imgur.com/WbQnbas.png" />
                    </div>
                </div>
                <div className="sm:w-1/2 p-5">
                    <div className="text">
                        <span className="text-gray-500 border-b-2 border-[#1D1D1D] uppercase">About us</span>
                        <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">About <span className="text-primary">Our Company</span></h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                            doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                            voluptatum.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;