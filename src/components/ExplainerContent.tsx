
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ExplainerContent = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary mb-4">Understanding Break-even ROAS for Facebook Ads</h2>
      
      <div className="space-y-6 text-charcoal">
        <section>
          <h3 className="text-xl font-semibold mb-3">What is Break-even ROAS?</h3>
          <p className="mb-3">
            Break-even Return on Ad Spend (ROAS) is the minimum ROAS required for your Facebook advertising campaign to recover all costs without generating profit or loss. It represents the point where your revenue from ads exactly equals your total costs (product costs, shipping, fees, and ad spend).
          </p>
          <p>
            For example, if your break-even ROAS is 2.5x, it means you need to generate ₹2.50 in revenue for every ₹1 spent on Facebook ads just to cover all your costs.
          </p>
        </section>
        
        <Separator />
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Why Break-even ROAS Matters</h3>
          <p className="mb-3">
            Understanding your break-even ROAS provides several critical benefits for your Facebook advertising strategy:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-2">Budget Planning</h4>
                <p className="text-sm">
                  Set realistic ad budgets based on the minimum performance needed to avoid losses.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-2">Campaign Evaluation</h4>
                <p className="text-sm">
                  Quickly determine if your campaigns are performing above or below the minimum threshold for profitability.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-2">Profit Targeting</h4>
                <p className="text-sm">
                  Calculate your target ROAS by adding your desired profit margin to your break-even ROAS.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h4 className="font-semibold text-primary mb-2">Competitive Edge</h4>
                <p className="text-sm">
                  Optimize product pricing, reduce costs, or improve conversion rates to lower your break-even ROAS and gain competitive advantage.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <Separator />
        
        <section>
          <h3 className="text-xl font-semibold mb-3">How to Calculate Break-even ROAS</h3>
          <p className="mb-3">
            The break-even ROAS formula is:
          </p>
          <div className="bg-gray-50 p-4 rounded-md text-center mb-3">
            <p className="font-semibold">Break-even ROAS = Total Costs (including ad spend) ÷ Ad Spend</p>
          </div>
          <p>
            For example, if you sell a product for ₹3,000, with ₹1,500 in product costs, ₹200 in other costs (shipping, fees), and ₹800 in Facebook ad spend:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2">
            <li>Total costs = ₹1,500 (product) + ₹200 (other costs) + ₹800 (ad spend) = ₹2,500</li>
            <li>Break-even ROAS = ₹2,500 ÷ ₹800 = 3.13x</li>
            <li>This means you need to generate ₹3.13 in revenue for every ₹1 spent on ads to break even.</li>
          </ul>
        </section>
        
        <Separator />
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Strategies to Improve Your ROAS</h3>
          <p className="mb-3">
            If your Facebook ads aren't meeting your break-even ROAS, consider these optimization strategies:
          </p>
          
          <div className="space-y-3 mt-4">
            <div>
              <h4 className="font-semibold text-primary">1. Reduce Product Costs</h4>
              <p className="text-sm">
                Negotiate better rates with suppliers or find alternative sourcing options to lower your cost of goods.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary">2. Optimize Ad Targeting</h4>
              <p className="text-sm">
                Refine your audience targeting to reach people more likely to convert, reducing wasted ad spend.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary">3. Improve Conversion Rate</h4>
              <p className="text-sm">
                Enhance your landing pages, product descriptions, and checkout process to convert more visitors into customers.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary">4. Increase Average Order Value</h4>
              <p className="text-sm">
                Implement upsells, cross-sells, and bundle offers to increase the revenue generated per customer acquisition.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary">5. Test Different Ad Creatives</h4>
              <p className="text-sm">
                Regularly test new ad creatives, copy, and formats to identify the most cost-effective combinations.
              </p>
            </div>
          </div>
        </section>

        <Separator />
        
        <section>
          <h3 className="text-xl font-semibold mb-3">Advanced ROAS Concepts</h3>
          <p className="mb-3">
            Beyond basic break-even analysis, consider these advanced ROAS concepts for comprehensive campaign optimization:
          </p>
          
          <div className="space-y-3 mt-4">
            <div>
              <h4 className="font-semibold text-primary">Customer Lifetime Value (CLTV)</h4>
              <p className="text-sm">
                Factor in repeat purchases and customer retention when evaluating ROAS, as the initial acquisition cost may be offset by future purchases.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary">Attribution Modeling</h4>
              <p className="text-sm">
                Understand how different touchpoints contribute to conversions to more accurately assess Facebook ads' impact within your marketing mix.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-primary">Seasonal Adjustments</h4>
              <p className="text-sm">
                Adjust your target ROAS expectations during peak seasons when competition and costs may increase but conversion rates might improve.
              </p>
            </div>
          </div>
        </section>
        
        <div className="bg-secondary/20 p-4 rounded-md mt-8">
          <h3 className="text-lg font-semibold mb-2">Use Our Calculator</h3>
          <p>
            Our interactive Break-even ROAS Calculator helps you quickly determine the minimum ROAS needed for your Facebook ad campaigns to be profitable. Simply enter your product details and ad spend to receive instant insights and visualizations that make complex ROAS calculations easy to understand.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExplainerContent;
