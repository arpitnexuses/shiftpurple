import React from 'react';

const KeyBusinessInsights = () => {
  const insights = [
    {
      number: '4.6x',
      title: 'Customer\nExperience',
      description: 'Since 2000, companies with top customer experiences have shown superior stock growth, boosted by loyalty, revenue gains, and higher valuations.'
    },
    {
      number: '46%',
      title: 'Ops Excellence &\nAutomation',
      description: 'Implementing automation and eliminating manual tasks can lead to cost reductions of up to 46% in operational expenses.'
    },
    {
      number: '79%',
      title: 'Compliance',
      description: 'CFOs express concern over fraud risks stemming from inadequate internal compliance measures within their organizations.'
    }
  ];

  return (
    <section className="py-24 w-full bg-[#F2F3F5]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Key <span className="text-[#B01B2E]">Business Insights</span>:
          </h2>
          <p className="text-xl text-gray-700">
            Customer Experience, Automation, and Compliance Trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[380px] relative border-b-4 border-[#B01B2E]"
            >
              <div className="mb-6">
                <h3 className="text-[56px] font-bold text-[#B01B2E] leading-tight">
                  {insight.number}
                </h3>
                <h4 className="text-[22px] font-semibold text-[#B01B2E] whitespace-pre-line mb-10 mt-4">
                  {insight.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {insight.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-left max-w-[1200px] mx-auto">
          <p className="text-[#B01B2E] font-semibold">
            Source: <span className="text-gray-700 font-normal">Forrester customer survey 2022</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyBusinessInsights; 