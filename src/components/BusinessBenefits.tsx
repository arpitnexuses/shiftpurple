import bblogo1 from './asset/bblogo1.png';
import bblogo2 from './asset/bblogo2.png';
import bblogo3 from './asset/bblogo3.png';

const BusinessBenefits = () => {
  const benefits = [
    {
      icon: bblogo3,
      title: "Streamline Operations",
      description: "Improve procurement schedules, supplier collaboration, and cost efficiency."
    },
    {
      icon: bblogo1,
      title: "Optimize Resources",
      description: "Benchmark and enhance operational maturity using industry-standard KPIs."
    },
    {
      icon: bblogo2,
      title: "Increase ROI",
      description: "A 1% improvement in operating margins could generate millions in additional cash flow."
    }
  ];

  return (
    <section className="py-16 bg-[#8B141A]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl text-white mb-3">
            <span className="font-light">Business Benefits of</span> <span className="font-bold">Calibrate</span>
          </h2>
          <p className="text-white text-xl font-light">
            Transform Data into Measurable Results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg px-6 py-8 flex flex-col items-center shadow-lg max-w-[320px] mx-auto w-full"
            >
              <div className="flex justify-center mb-5">
                <div className="bg-[#FAEBEC] p-[10px] rounded-lg">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    className="w-[28px] h-[28px] md:w-[72px] md:h-[72px]"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits; 