import React from 'react';
import rdlogo1 from './asset/rdlogo1.png';
import rdlogo2 from './asset/rdlogo2.png';
import rdlogo3 from './asset/rdlogo3.png';

const RediscoverExcellence = () => {
  const cards = [
    {
      icon: rdlogo1,
      title: 'Benchmark\nPerformance',
      description: 'Evaluate business processes for alignment with best practices and industry standards.'
    },
    {
      icon: rdlogo2,
      title: 'Uncover\nImprovement Areas',
      description: 'Measure gaps in Oracle Cloud or eBS configurations based on strategic objectives.'
    },
    {
      icon: rdlogo3,
      title: 'Enable Strategic\nClarity',
      description: 'Link operational metrics to strategic outcomes for better alignment and growth.'
    }
  ];

  return (
    <section className="py-10 md:py-20 w-full bg-[#F2F3F5]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 md:mb-16">
          Rediscover <span className="text-[#B01B2E]">Operational Excellence</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-[1200px] mx-auto">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center min-h-[380px] md:min-h-[450px] relative border-b-4 border-[#B01B2E]"
            >
              <div className="bg-[#FBE9EB] p-[10px] md:p-[10px] rounded-lg mb-6 md:mb-8">
                <img 
                  src={card.icon} 
                  alt={card.title} 
                  className="w-[28px] h-[28px] md:w-[72px] md:h-[72px]"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#B01B2E] whitespace-pre-line">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RediscoverExcellence; 