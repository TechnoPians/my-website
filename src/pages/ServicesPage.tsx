import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, Crown, Shirt, FileImage } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'mugs',
      title: 'Customized Mugs',
      description: 'Personalized ceramic and travel mugs for every occasion',
      icon: Coffee,
      color: 'from-blue-500 to-purple-600',
      image: 'https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'hats',
      title: 'Custom Hats',
      description: 'Stylish caps and beanies with your unique designs',
      icon: Crown,
      color: 'from-green-500 to-teal-600',
      image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'shirts',
      title: 'Custom Shirts',
      description: 'Premium quality t-shirts and apparel printing',
      icon: Shirt,
      color: 'from-purple-500 to-pink-600',
      image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 'tarpaulins',
      title: 'Custom Tarpaulins',
      description: 'Large format banners and signage for events',
      icon: FileImage,
      color: 'from-orange-500 to-red-600',
      image: 'https://images.pexels.com/photos/1040658/pexels-photo-1040658.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide cutting-edge custom printing solutions tailored to your unique needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-[#327fe9]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#327fe9] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex items-center text-[#327fe9] group-hover:text-white transition-colors duration-300">
                    <span className="font-semibold">View Products</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;