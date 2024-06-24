import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <About />
    
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
    
    {/* <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Our Services</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
            </div>
        </div>
    </section> */}

    <Services />
    
    <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Testimonials</h2>
            <div className="mt-8 space-y-8">
                
            </div>
        </div>
    </section>
    
    
    <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
            <form className="mt-8 max-w-lg mx-auto">
                
            </form>
        </div>
    </section>
    
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Visionary Archistry. All rights reserved.</p>
        </div>
    </footer>
</ >

  );
}
