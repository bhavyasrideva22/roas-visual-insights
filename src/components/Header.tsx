
import React from 'react';
import { ChartBar, BadgeIndianRupee } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary py-4 px-6 md:px-12 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <BadgeIndianRupee className="text-white h-8 w-8" />
          <span className="text-white font-bold text-2xl">ROAS Visual Insights</span>
        </div>
        <div className="hidden md:flex items-center space-x-4 text-white">
          <a href="/" className="hover:text-accent transition-colors flex items-center">
            <ChartBar className="mr-1 h-5 w-5" />
            <span>Break-even ROAS Calculator</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
