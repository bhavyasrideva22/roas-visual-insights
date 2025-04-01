
import React, { useState } from 'react';
import { BadgeIndianRupee } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from '@/components/ui/use-toast';

export interface CalculatorInputs {
  productPrice: number;
  productCost: number;
  otherCosts: number;
  adSpend: number;
}

export interface CalculatorResults {
  profit: number;
  profitMargin: number;
  breakEvenRoas: number;
  targetRoas: number;
}

interface CalculatorFormProps {
  onCalculate: (inputs: CalculatorInputs, results: CalculatorResults) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    productPrice: 3000,
    productCost: 1500,
    otherCosts: 200,
    adSpend: 800,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value) || 0;
    setInputs(prev => ({ ...prev, [name]: numValue }));
  };

  const calculateResults = () => {
    try {
      // Validation
      if (inputs.productPrice <= 0) {
        toast({
          title: "Invalid Input",
          description: "Product price must be greater than zero.",
          variant: "destructive"
        });
        return;
      }

      if (inputs.adSpend <= 0) {
        toast({
          title: "Invalid Input",
          description: "Ad spend must be greater than zero.",
          variant: "destructive"
        });
        return;
      }

      // Calculations
      const revenue = inputs.productPrice;
      const totalCosts = inputs.productCost + inputs.otherCosts;
      
      const profit = revenue - totalCosts;
      const profitMargin = (profit / revenue) * 100;
      
      // Break-even ROAS = Total costs including ad spend / Ad spend
      const breakEvenRoas = (totalCosts + inputs.adSpend) / inputs.adSpend;
      
      // Target ROAS (with 20% profit margin target)
      const targetRoas = ((totalCosts + inputs.adSpend) + (revenue * 0.2)) / inputs.adSpend;

      const results: CalculatorResults = {
        profit,
        profitMargin,
        breakEvenRoas,
        targetRoas
      };

      onCalculate(inputs, results);
    } catch (error) {
      console.error("Calculation error:", error);
      toast({
        title: "Calculation Error",
        description: "An error occurred while calculating results.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in">
      <h2 className="text-xl font-semibold text-primary mb-6">Enter Your Values</h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="productPrice" className="text-charcoal">Product Selling Price (₹)</Label>
          <div className="relative">
            <BadgeIndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              id="productPrice"
              name="productPrice"
              type="number"
              value={inputs.productPrice}
              onChange={handleInputChange}
              className="pl-10"
              min="0"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="productCost" className="text-charcoal">Product Cost (₹)</Label>
          <div className="relative">
            <BadgeIndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              id="productCost"
              name="productCost"
              type="number"
              value={inputs.productCost}
              onChange={handleInputChange}
              className="pl-10"
              min="0"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="otherCosts" className="text-charcoal">Other Costs (₹)</Label>
          <div className="relative">
            <BadgeIndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              id="otherCosts"
              name="otherCosts"
              type="number"
              value={inputs.otherCosts}
              onChange={handleInputChange}
              className="pl-10"
              min="0"
            />
          </div>
          <p className="text-xs text-gray-500">Shipping, packaging, transaction fees, etc.</p>
        </div>

        <div className="space-y-3">
          <Label htmlFor="adSpend" className="text-charcoal">Facebook Ad Spend (₹)</Label>
          <div className="relative">
            <BadgeIndianRupee className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
            <Input
              id="adSpend"
              name="adSpend"
              type="number"
              value={inputs.adSpend}
              onChange={handleInputChange}
              className="pl-10"
              min="0"
            />
          </div>
        </div>

        <Button 
          onClick={calculateResults}
          className="w-full bg-accent hover:bg-accent/90 text-charcoal font-semibold py-2"
        >
          Calculate Break-even ROAS
        </Button>
      </div>
    </div>
  );
};

export default CalculatorForm;
