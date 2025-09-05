import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
          </div>

          {/* Main Content */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                <p className="text-xl md:text-2xl text-white font-semibold mb-8">
                  Welcome to Arts & Prints - Your Premier Custom Printing Partner
                </p>

                <p>
                  Founded in 2019 by Maria Santos, Arts & Prints has grown from a small home-based operation 
                  into one of the region's most trusted custom printing businesses. Maria's passion for 
                  creating unique, high-quality custom products began when she started making personalized 
                  gifts for family and friends, and quickly realized there was a significant demand for 
                  professional custom printing services in the community.
                </p>

                <p>
                  With over 5 years of experience in the printing industry, Maria has built Arts & Prints 
                  on the foundation of exceptional quality, personalized customer service, and innovative 
                  printing techniques. What started as a dream to help people express their creativity 
                  through custom products has evolved into a full-service printing shop specializing in 
                  mugs, hats, shirts, and large format tarpaulins.
                </p>

                <p>
                  At Arts & Prints, we understand that every customer has a unique vision. Whether you're 
                  looking to create promotional materials for your business, personalized gifts for loved 
                  ones, or branded merchandise for your organization, we work closely with each client to 
                  bring their ideas to life. Our state-of-the-art printing equipment and premium materials 
                  ensure that every product meets our exacting standards for quality and durability.
                </p>

                <p>
                  Maria's commitment to excellence extends beyond just printing. She believes in building 
                  lasting relationships with customers, providing design consultation, and ensuring complete 
                  satisfaction with every order. Our team takes pride in attention to detail, from the 
                  initial design concept through final production and delivery.
                </p>

                <div className="bg-white/10 rounded-xl p-6 mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <div className="space-y-3 text-lg">
                    <p>
                      <strong className="text-[#327fe9]">Owner:</strong> Maria Santos
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Business Address:</strong><br />
                      1247 Printing Way, Suite 15<br />
                      Creative District, CA 92503
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Phone:</strong> (555) 123-4567
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Email:</strong> maria@artsandprints.com
                    </p>
                    <p>
                      <strong className="text-[#327fe9]">Business Hours:</strong><br />
                      Monday - Friday: 8:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <p>
                  We invite you to experience the Arts & Prints difference. Whether you need a single 
                  custom mug or a large order of branded merchandise, we're here to exceed your expectations. 
                  Contact us today to discuss your custom printing needs and discover why businesses and 
                  individuals throughout the region choose Arts & Prints for their most important projects.
                </p>

                <div className="text-center mt-12">
                  <p className="text-xl text-[#327fe9] font-semibold">
                    "Your Vision, Our Expertise - Arts & Prints Where Quality Meets Creativity"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;