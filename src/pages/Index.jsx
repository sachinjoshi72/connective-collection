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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-800">Jane Doe</h1>
          <p className="text-xl text-gray-600">Professional Model</p>
        </div>
      </header>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">About Me</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          I'm Jane Doe, a passionate and versatile model with over 5 years of experience in fashion, commercial, and editorial work. My goal is to bring your vision to life through captivating imagery.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
              <img src={photo} alt={`Model photo ${index + 1}`} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">Let's Connect</h2>
          <p className="text-lg text-center mb-8">
            Interested in working together? Get in touch with me through any of the following channels:
          </p>
          <div className="flex justify-center space-x-8">
            <a href="#" className="flex items-center hover:text-gray-300 transition-colors duration-300">
              <Instagram className="mr-2" />
              Instagram
            </a>
            <a href="#" className="flex items-center hover:text-gray-300 transition-colors duration-300">
              <Linkedin className="mr-2" />
              LinkedIn
            </a>
            <a href="mailto:jane@example.com" className="flex items-center hover:text-gray-300 transition-colors duration-300">
              <Mail className="mr-2" />
              Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Jane Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;