import React from 'react';
import whyCalibrate from './asset/whycalibrate.png';

const WhyCalibrate = () => {
  const features = [
    {
      title: 'Transparent\nPerformance Analysis',
      description: 'Monitor and compare operational efficiencies across business units and regions',
      icon: '📊',
      position: { top: '10%', left: '15%' }
    },
    {
      title: 'Automated\nPerformance Capture',
      description: 'Effortlessly collect and summarize monthly performance metrics without manual intervention.',
      icon: '⚙️',
      position: { top: '40%', left: '5%' }
    },
    {
      title: 'Comprehensive\nMetrics Coverage',
      description: 'Gain visibility across key processes like Procure-to-Pay (P2P), Order-to-Cash (O2C), Record-to-Report (R2R), Asset-to-Retire (A2R), and Sales & Operations Planning (S&OP).',
      icon: '📈',
      position: { top: '0%', left: '50%' }
    },
    {
      title: 'Data-Driven\nDecision Making',
      description: 'Assess cycle times, efficiency, and technology utilization with in-depth analytics',
      icon: '💻',
      position: { top: '10%', right: '15%' }
    },
    {
      title: 'Continuous\nImprovement',
      description: 'Track progress through monthly trends, ensuring alignment with strategic goals.',
      icon: '🔄',
      position: { top: '40%', right: '5%' }
    }
  ];

  return (
    <section className="relative py-16 w-full bg-white">
      {/* Text Content Section */}
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 px-4">
          <h2 className="text-5xl font-bold mb-4">
            Why <span className="text-[#B01B2E]">Calibrate</span>?
          </h2>
          <p className="text-2xl text-gray-700 mb-8">
            Revolutionize Operations with Data-Driven Insights
          </p>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Comprehensive Metrics Coverage
            </h3>
            <p className="text-lg text-gray-600">
              Gain visibility across key processes like Procure-to-Pay (P2P), Order-to-Cash (O2C), 
              Record-to-Report (R2R), Asset-to-Retire (A2R), and Sales & Operations Planning (S&OP).
            </p>
          </div>
        </div>
      </div>

      {/* Image Section - Full Width */}
      <div className="w-full flex justify-center">
        <div className="max-w-[1400px] w-full px-4">
          <img 
            src={whyCalibrate} 
            alt="Calibrate Dashboard" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyCalibrate; 