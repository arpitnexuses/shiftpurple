import React from 'react';
import whiteLogo from './asset/whitelogo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#4A0404] text-white py-12">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex justify-center items-center flex-col text-center">
          <div className="max-w-3xl">
            <img 
              src={whiteLogo} 
              alt="ShiftPurple Logo" 
              className="h-16 mb-8 mx-auto transform hover:scale-105 transition-transform duration-300"
            />
            <div className="space-y-6">
              <p className="text-gray-200 text-base leading-relaxed font-light">
                ShiftPurple is an Oracle Partner and Business Advisory & Technology Implementation company 
                with over two decades of expertise. Our passionate team strives to make 'Customer of Customer' 
                successful through visionary solutions.
              </p>
              <p className="text-gray-300 text-base leading-relaxed font-light">
                Ready to take your business to the next level? 
                <a 
                  href="https://calendly.com/shiftpurple/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-red-400 hover:text-red-300 transition-colors cursor-pointer ml-2"
                >
                  Schedule a consultation with ShiftPurple today.
                </a>
              </p>
              <p className="text-gray-200 text-base leading-relaxed font-light">
                Let us customize solutions that drive efficiency, enhance agility, and maximize your 
                competitive edge in today's dynamic market.
              </p>
            </div>
            <div className="mt-8 border-t border-red-900/30 pt-6">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} ShiftPurple. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 