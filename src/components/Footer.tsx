
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8 mt-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ROAS Visual Insights</h3>
            <p className="text-sm">
              Professional calculators for digital marketers and advertisers to optimize their Facebook ad campaigns.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/" className="hover:text-accent transition-colors">Break-even ROAS Calculator</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm">
              Questions or feedback about our calculators? 
              <br />
              Email us at <a href="mailto:contact@roasvisualinsights.com" className="text-accent hover:underline">contact@roasvisualinsights.com</a>
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© {currentYear} ROAS Visual Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
