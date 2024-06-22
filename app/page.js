import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
  <Navbar />
  <Hero />
    {/* <header class="bg-white shadow">
        <div class="container mx-auto px-4 py-6 flex justify-between items-center">
            <a href="/" class="text-2xl font-bold">Architect Firm</a>
            <nav class="space-x-4">
                <a href="#about" class="text-gray-600 hover:text-gray-900">About</a>
                <a href="#portfolio" class="text-gray-600 hover:text-gray-900">Portfolio</a>
                <a href="#services" class="text-gray-600 hover:text-gray-900">Services</a>
                <a href="#blog" class="text-gray-600 hover:text-gray-900">Blog</a>
                <a href="#contact" class="text-gray-600 hover:text-gray-900">Contact</a>
            </nav>
        </div>
    </header> */}
    
    {/* <section class="hero bg-cover bg-center h-screen text-white flex items-center justify-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
        <div class="text-center">
            <h1 class="text-5xl font-bold">Visionary Architecture</h1>
            <p class="mt-4 text-xl">Transforming Spaces, Creating Timeless Designs</p>
            <a href="#portfolio" class="mt-6 px-8 py-3 bg-blue-600 text-white rounded shadow hover:bg-blue-700">View Portfolio</a>
        </div>
    </section> */}
    
    <section id="about" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center">About Us</h2>
            <p class="mt-4 text-center">We are a team of passionate architects dedicated to creating innovative and sustainable designs...</p>
        </div>
    </section>
    
    <section id="portfolio" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center">Portfolio Highlights</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            </div>
            <div class="text-center mt-8">
                <a href="/portfolio" class="text-blue-600 hover:text-blue-800">View Full Portfolio</a>
            </div>
        </div>
    </section>
    
    <section id="services" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center">Our Services</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
            </div>
        </div>
    </section>
    
    <section id="testimonials" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center">Testimonials</h2>
            <div class="mt-8 space-y-8">
                
            </div>
        </div>
    </section>
    
    <section id="blog" class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center">Latest Blog Posts</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
            </div>
        </div>
    </section>
    
    <section id="contact" class="py-16 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center">Get in Touch</h2>
            <form class="mt-8 max-w-lg mx-auto">
                
            </form>
        </div>
    </section>
    
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4 text-center">
            <p>&copy; 2024 Architect Firm. All rights reserved.</p>
        </div>
    </footer>
</ >

  );
}
