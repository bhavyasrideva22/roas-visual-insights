
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CalculatorForm, { CalculatorInputs, CalculatorResults } from '@/components/ROASCalculator/CalculatorForm';
import ResultsDisplay from '@/components/ROASCalculator/ResultsDisplay';
import ExplainerContent from '@/components/ExplainerContent';

const Index = () => {
  const [calculatorInputs, setCalculatorInputs] = useState<CalculatorInputs | null>(null);
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = (inputs: CalculatorInputs, results: CalculatorResults) => {
    setCalculatorInputs(inputs);
    setCalculatorResults(results);
    setShowResults(true);
    
    // Scroll to results after a short delay
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-mainbg">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">Facebook Ads Break-even ROAS Calculator</h1>
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            Quickly calculate the minimum ROAS needed for your Facebook ad campaigns to break even and determine your ideal target ROAS for profitability.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <CalculatorForm onCalculate={handleCalculate} />
          </div>
          
          <div className="lg:col-span-2" id="results-section">
            {calculatorInputs && calculatorResults && (
              <ResultsDisplay 
                inputs={calculatorInputs} 
                results={calculatorResults} 
                isVisible={showResults} 
              />
            )}
          </div>
        </div>
        
        <ExplainerContent />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
