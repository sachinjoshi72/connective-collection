import React from 'react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const Index = () => {
  const photos = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 font-sans">
      {/* Header with background image */}
      <header className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{backgroundImage: "url('/placeholder.svg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center relative z-10">
          <h1 className="text-7xl font-bold text-white mb-4 font-serif">Jane Doe</h1>
          <p className="text-3xl text-gray-200 font-light">Professional Model</p>
        </div>
      </header>

      {/* About Section with Parallax */}
      <section className="relative py-32 bg-fixed bg-center bg-cover" style={{backgroundImage: "url('/placeholder.svg')"}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-semibold text-white mb-8 text-center font-serif">About Me</h2>
          <p className="text-2xl text-white max-w-3xl mx-auto leading-relaxed">
            I'm Jane Doe, a passionate and versatile model with over 5 years of experience in fashion, commercial, and editorial work. My goal is to bring your vision to life through captivating imagery. With a keen eye for detail and a natural ability to connect with the camera, I strive to create unforgettable moments in every shoot.
          </p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-5xl font-semibold text-gray-800 mb-12 text-center font-serif">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={photo} alt={`Model photo ${index + 1}`} className="w-full h-80 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="bg-gray-800 text-white py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-semibold mb-12 text-center font-serif">Let's Connect</h2>
          <p className="text-2xl text-center mb-12 max-w-2xl mx-auto">
            Interested in working together? Get in touch with me through any of the following channels:
          </p>
          <div className="flex justify-center space-x-12">
            <a href="#" className="flex items-center text-xl hover:text-gray-300 transition-colors duration-300">
              <Instagram className="mr-3 h-8 w-8" />
              Instagram
            </a>
            <a href="#" className="flex items-center text-xl hover:text-gray-300 transition-colors duration-300">
              <Linkedin className="mr-3 h-8 w-8" />
              LinkedIn
            </a>
            <a href="mailto:jane@example.com" className="flex items-center text-xl hover:text-gray-300 transition-colors duration-300">
              <Mail className="mr-3 h-8 w-8" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl">&copy; 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;