const Hero = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/background.jpg')" }}>
            <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                    <img
                        className="h-20 w-auto mx-auto"
                        src="/images/logo1.png"
                        alt="Logo"
                    />
                    <span className="text-4xl font-bold mt-4">Visionary Archistry</span>
                    <p className="mt-2">We provide quality and stuff blablalbalblalblalballb</p>
                </div>
            </div>
        </section>

    )
}

export default Hero;