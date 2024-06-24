import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/background.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex items-center justify-center h-full">
                <div className="text-center text-white">
                    <img
                        className="h-20 w-auto mx-auto"
                        src="/images/logo-white.png"
                        alt="Logo"
                    />
                    <h1 className="text-4xl font-bold mt-4">Visionary Archistry</h1>
                    <p className="mt-2">We provide quality and innovative architectural solutions.</p>
                </div>
            </div>
        </section>

    )
}

export default Hero;