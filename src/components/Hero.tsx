import React from 'react';
import heroGif from './asset/newhero.mp4';

const Hero = () => {
  return (
    <div className="hero-section py-16 text-center">
      <div className="px-4 mb-8">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Discover the Power of <span className="text-[#8B0000]">Calibrate</span>
        </h1>
        
        <p className="text-3xl md:text-2xl mb-12 max-w-5xl mx-auto">
          Calibrate automates performance data capture and summarization in 
          Oracle ERP, eliminating manual effort.
        </p>
        
        <div className="flex justify-center gap-4">
          <a 
            href="https://calendly.com/-shiftpurple-ae/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#8B0000] text-white rounded-md hover:bg-[#6B0000] transition-colors text-xl font-semibold font-inter"
          >
            Request A Demo
          </a>
        </div>
      </div>

      <div className="w-full">
        <video 
          src={heroGif} 
          autoPlay
          muted
          loop
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero; 