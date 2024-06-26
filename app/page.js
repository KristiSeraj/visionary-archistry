import Footer from "@/components/Footer";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services/ServicesSection";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
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

        <Services />
        <Testimonials />
        <Contact />
        <Footer />
</ >

  );
}
