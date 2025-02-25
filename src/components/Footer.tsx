import React from 'react';
import whiteLogo from './asset/whitelogo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black via-[#2A0202] to-[#4A0404] text-white py-12 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 relative">
          {/* Left Column - Logo and Description */}
          <div className="max-w-2xl">
            <img 
              src={whiteLogo} 
              alt="ShiftPurple Logo" 
              className="h-12 md:h-16 mb-6 md:mb-8 transform hover:scale-105 transition-transform duration-300 filter brightness-110 mx-auto md:mx-0"
            />
            <p className="text-base md:text-lg leading-relaxed text-gray-200 font-light tracking-wide text-center md:text-left">
              ShiftPurple is a Business Advisory and Technology Implementation firm bridging the gap between strategy and technology adoption. As an Oracle Partner, our expert team brings over two decades of deep domain and implementation experience.
            </p>
          </div>

          {/* Vertical Divider - Hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-[2%] bottom-[2%] transform -translate-x-1/2">
            <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#ffffff60] to-transparent 
                          shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-white/20 blur-sm"></div>
              <div className="absolute inset-[2px] rounded-full bg-white/40"></div>
            </div>
          </div>

          {/* Right Column - Optimized Layout */}
          <div className="md:pl-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-4">
              {/* Locations Section */}
              <div className="text-center md:text-right">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wider relative inline-block">
                  Locations
                  <span className="absolute bottom-0 left-0 md:left-auto md:right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></span>
                </h3>
                <div className="space-y-3">
                  <div className="group">
                    <div className="flex flex-col items-center md:items-end relative">
                      <span className="text-base font-medium text-gray-100">India</span>
                      <div className="flex flex-col items-center md:items-end text-sm text-gray-300 mt-1">
                        <span className="hover:text-white transition-colors">Gurgaon, Haryana</span>
                        <span className="hover:text-white transition-colors">Noida, Uttar Pradesh</span>
                      </div>
                      <div className="absolute -left-2 top-0 bottom-0 w-[1px] scale-y-0 group-hover:scale-y-100 
                                    bg-gradient-to-b from-transparent via-red-400/30 to-transparent 
                                    transition-transform duration-300 origin-top md:block hidden"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col items-center md:items-end relative">
                      <span className="text-base font-medium text-gray-100">UAE</span>
                      <span className="text-sm text-gray-300 mt-1 hover:text-white transition-colors">Sharjah</span>
                      <div className="absolute -left-2 top-0 bottom-0 w-[1px] scale-y-0 group-hover:scale-y-100 
                                    bg-gradient-to-b from-transparent via-red-400/30 to-transparent 
                                    transition-transform duration-300 origin-top md:block hidden"></div>
                    </div>
                  </div>
                  
                  <div className="group">
                    <div className="flex flex-col items-center md:items-end relative">
                      <span className="text-base font-medium text-gray-100">USA</span>
                      <span className="text-sm text-gray-300 mt-1 hover:text-white transition-colors">Herndon, VA</span>
                      <div className="absolute -left-2 top-0 bottom-0 w-[1px] scale-y-0 group-hover:scale-y-100 
                                    bg-gradient-to-b from-transparent via-red-400/30 to-transparent 
                                    transition-transform duration-300 origin-top md:block hidden"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect Section */}
              <div className="text-center md:text-right">
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white tracking-wider relative inline-block">
                  Connect
                  <span className="absolute bottom-0 left-0 md:left-auto md:right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></span>
                </h3>
                <div className="space-y-3">
                  <div className="group relative">
                    <a 
                      href="mailto:ales@shiftpurple.com" 
                      className="text-base text-gray-200 hover:text-white transition-all duration-300 
                               tracking-wide relative inline-block group-hover:translate-x-[-4px]"
                    >
                      sales@shiftpurple.com
                      <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-white/40 
                                     group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </div>
                  <div className="group relative">
                    <a 
                      href="tel:+919899240010" 
                      className="text-base text-gray-200 hover:text-white transition-all duration-300 
                               tracking-wide relative inline-block group-hover:translate-x-[-4px]"
                    >
                      +91 989 924 0010
                      <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-white/40 
                                     group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </div>
                  <div className="flex justify-center md:justify-end mt-6">
                    <a 
                      href="https://www.linkedin.com/company/shiftpurple/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group relative p-1"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-white/20 rounded-full blur-md transform 
                                    group-hover:scale-110 transition-transform duration-300"></div>
                      <div className="relative bg-black/30 p-3 rounded-full transform 
                                    group-hover:bg-black/40 transition-all duration-300 backdrop-blur-sm">
                        <svg 
                          className="w-6 h-6 fill-current text-gray-200 group-hover:text-white transition-colors" 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 