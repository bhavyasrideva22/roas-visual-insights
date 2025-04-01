
import React from 'react';
import { BadgeIndianRupee, Download, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { CalculatorInputs, CalculatorResults } from './CalculatorForm';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { generatePDF } from '@/utils/pdfGenerator';
import { sendEmail } from '@/utils/emailSender';
import { toast } from '@/components/ui/use-toast';
import ResultChart from './ResultChart';
import RoasVisual from './RoasVisual';

interface ResultsDisplayProps {
  inputs: CalculatorInputs;
  results: CalculatorResults;
  isVisible: boolean;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ inputs, results, isVisible }) => {
  if (!isVisible) return null;

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number): string => {
    return `${value.toFixed(2)}%`;
  };

  const formatRoas = (value: number): string => {
    return value.toFixed(2);
  };

  const handleDownloadPDF = async () => {
    try {
      await generatePDF(inputs, results);
      toast({
        title: "Success!",
        description: "Your report has been downloaded.",
      });
    } catch (error) {
      console.error("PDF generation error:", error);
      toast({
        title: "Download Failed",
        description: "There was a problem generating your PDF.",
        variant: "destructive"
      });
    }
  };

  const handleSendEmail = async () => {
    try {
      const emailRef = document.getElementById('email') as HTMLInputElement;
      const email = emailRef.value.trim();
      
      // Simple email validation
      if (!email || !email.includes('@') || !email.includes('.')) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive"
        });
        return;
      }
      
      await sendEmail(email, inputs, results);
      toast({
        title: "Email Sent!",
        description: "Your report has been sent to your email.",
      });
      emailRef.value = ''; // Clear the email input
    } catch (error) {
      console.error("Email sending error:", error);
      toast({
        title: "Email Failed",
        description: "There was a problem sending your email.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary mb-6">Your Break-even ROAS Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Break-even ROAS</h3>
                <p className="text-3xl font-bold text-primary">{formatRoas(results.breakEvenRoas)}x</p>
                <p className="text-sm text-gray-600 mt-2">
                  This is the minimum ROAS you need to achieve to cover all costs and break even.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-accent">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Target ROAS (20% Profit)</h3>
                <p className="text-3xl font-bold text-accent">{formatRoas(results.targetRoas)}x</p>
                <p className="text-sm text-gray-600 mt-2">
                  To achieve a 20% profit margin, aim for this ROAS on your Facebook ad campaigns.
                </p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-md font-semibold mb-1">Profit per Sale</h3>
                  <p className="text-xl font-bold text-charcoal">{formatCurrency(results.profit)}</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-md font-semibold mb-1">Profit Margin</h3>
                  <p className="text-xl font-bold text-charcoal">{formatPercentage(results.profitMargin)}</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Input Summary</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Product Price:</span>
                <span className="font-medium">{formatCurrency(inputs.productPrice)}</span>
              </div>
              <Separator className="my-1" />
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Product Cost:</span>
                <span className="font-medium">{formatCurrency(inputs.productCost)}</span>
              </div>
              <Separator className="my-1" />
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Other Costs:</span>
                <span className="font-medium">{formatCurrency(inputs.otherCosts)}</span>
              </div>
              <Separator className="my-1" />
              <div className="flex justify-between py-2">
                <span className="text-gray-600">Ad Spend:</span>
                <span className="font-medium">{formatCurrency(inputs.adSpend)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="h-64">
            <ResultChart results={results} />
          </div>
          
          <div className="h-64">
            <RoasVisual breakEvenRoas={results.breakEvenRoas} targetRoas={results.targetRoas} />
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-3">Save or Share Your Results</h3>
            
            <Button 
              onClick={handleDownloadPDF}
              className="w-full mb-3 bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" /> Download PDF Report
            </Button>
            
            <div className="flex items-center gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button 
                onClick={handleSendEmail}
                className="bg-secondary hover:bg-secondary/90 text-charcoal flex items-center gap-1"
              >
                <Mail className="h-4 w-4" /> Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add the Input component here since it's used in the email form
const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

export default ResultsDisplay;
