import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features'
import BusinessBenefits from './components/BusinessBenefits';
import WhyCalibrate from './components/WhyCalibrate';
import RediscoverExcellence from './components/RediscoverExcellence';
import StartJourney from './components/StartJourney';
import KeyBusinessInsights from './components/KeyBusinessInsights';
import MeasuringOutcome from './components/MeasuringOutcome';
import BookDemo from './components/BookDemo';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <Features />
        <BusinessBenefits />
        <WhyCalibrate />
        <RediscoverExcellence />
        <StartJourney />
        <KeyBusinessInsights />
        <MeasuringOutcome />
        <BookDemo />
        <Footer />
      </div>
    </Router>
  );
}

export default App;