import React from 'react';
import whiteLogo from './asset/whitelogo.png';

interface FooterSection {
  title: string;
  links?: string[];
  social?: boolean;
}

interface FooterLinks {
  [key: string]: FooterSection;
}

const Footer = () => {
  const footerLinks: FooterLinks = {
    product: {
      title: 'Product',
      links: ['Platform', 'Use Cases']
    },
    solutions: {
      title: 'Solutions',
      links: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum']
    },
    explore: {
      title: 'Explore',
      links: ['Home', 'About Us', 'Partners', 'Contact', 'Blog']
    },
    connect: {
      title: 'Connect',
      social: true
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <img 
              src={whiteLogo} 
              alt="ShiftPurple Logo" 
              className="h-14 mb-6"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>

          {/* Vertical Line */}
          <div className="hidden md:block md:col-span-1">
            <div className="w-px h-full bg-white"></div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-6">{section.title}</h3>
              {section.social ? (
                <div className="flex gap-8">
                  <a href="#" className="text-white hover:text-gray-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-gray-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              ) : (
                <ul className="space-y-4">
                  {section.links?.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-300 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 