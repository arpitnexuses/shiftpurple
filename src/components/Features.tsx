import logo1 from './asset/360logo1.png';
import logo2 from './asset/360logo2.png';
import logo3 from './asset/360logo3.png';

const Features = () => {
  const features = [
    {
      icon: (
        <img 
          src={logo1} 
          alt="360° Performance Diagnostics" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "360° Performance Diagnostics",
      description: "Gain a holistic view of operational health with a thorough analysis of current performance metrics and configurations."
    },
    {
      icon: (
        <img 
          src={logo2} 
          alt="Actionable Insights" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Actionable Insights for Risk Mitigation",
      description: "Identify and mitigate risks associated with adopting new systems and workflows."
    },
    {
      icon: (
        <img 
          src={logo3} 
          alt="Tailored Improvement Strategies" 
          className="w-12 h-12 object-contain"
        />
      ),
      title: "Tailored Improvement Strategies",
      description: "Receive customized recommendations for technology enhancements, process optimizations, and KPI alignment."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side - Text content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-normal mb-6">
            Your Roadmap<br />
            To Excellence<br />
            With <span className="text-[#8B0000]">Calibrate</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            With Calibrate, organizations gain a structured path to operational and strategic transformation
          </p>
        </div>

        {/* Right side - Feature cards */}
        <div className="space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="flex-shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-normal text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 