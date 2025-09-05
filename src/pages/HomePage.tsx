import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Mugs',
      description: 'Personalized designs for every occasion'
    },
    {
      image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Hats',
      description: 'Stylish headwear with your unique touch'
    },
    {
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Shirts',
      description: 'Premium quality apparel printing'
    },
    {
      image: 'https://images.pexels.com/photos/1040658/pexels-photo-1040658.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Custom Tarpaulins',
      description: 'Large format printing for events'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="flex-1 text-left mb-12 lg:mb-0 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Arts and Prints
              <br />
              <span className="text-[#327fe9]">by Jover</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Discover extraordinary custom printing services and innovative 
              solutions that will transform your ideas into reality
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-[#327fe9] hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center"
              >
                View Our Services
              </Link>
              <Link
                to="/about"
                className="border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-white/10 text-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Right - Product Slideshow */}
          <div className="flex-1 lg:max-w-md">
            <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/10">
              <div className="relative h-80 md:h-96 overflow-hidden rounded-xl">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {slides[currentSlide].description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">
                    {currentSlide + 1} / {slides.length}
                  </span>
                </div>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-4">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#327fe9] w-8' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;