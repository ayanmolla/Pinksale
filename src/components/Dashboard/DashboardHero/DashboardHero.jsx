import React from "react";
import { useTheme } from "next-themes";
import TokenCarousel from "../TokenCarousel/TokenCarousel";

const DashboardHero = () => {
  const { theme } = useTheme();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  return (
    <div className={`w-full py-12 px-4 md:px-8 lg:px-16 DashboardHero ${
      currentTheme === "light" 
        ? "bg-white text-gray-800" 
        : currentTheme === "dark" 
          ? "bg-gray-900 text-white" 
          : "bg-gray-800 text-gray-200" // For dim theme
    }`}>
      {/* Announcement Banner */}
      <div className="relative max-w-7xl mx-auto mb-12">
        <div className={`relative rounded-xl p-4 flex items-center justify-between ${
          currentTheme === "light"
            ? "bg-pink-50 text-pink-600"
            : currentTheme === "dark"
              ? "bg-pink-900/20 text-pink-400"
              : "bg-pink-900/30 text-pink-300"
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-pink-500">🚀</span>
            <p className="font-medium text-sm">New PINKSALE token features coming ✨</p>
          </div>
          <div className="flex gap-2">
            <button className="p-1 rounded hover:bg-pink-100 dark:hover:bg-pink-800/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-pink-100 dark:hover:bg-pink-800/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text Content */}
        <div className="space-y-6 DashboardHero-content">
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${
            currentTheme === "light" ? "text-gray-900" : "text-white"
          }`}>
            The Launchpad Protocol for Everyone
          </h1>
          
          <p className={`text-lg ${
            currentTheme === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
            PinkSale helps everyone to create their own tokens and token sales in few seconds.
            <br />
            Tokens created on PinkSale will be verified and published on explorer websites.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-3 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-medium transition-colors">
              Create now
            </button>
            <button className={`px-6 py-3 rounded-lg border font-medium transition-colors ${
              currentTheme === "light"
                ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                : "border-gray-700 text-gray-300 hover:bg-gray-800"
            }`}>
              Learn more
            </button>
          </div>
        </div>
        
        {/* Right side - Stats */}
        <div className={`grid grid-cols-2 gap-6 DashboardHero-stats ${
          currentTheme === "light"
            ? "text-gray-800"
            : "text-gray-200"
        }`}>
          {/* Stats Card Row 1 */}
          <div className={`rounded-xl p-5 flex flex-col items-center justify-center ${
            currentTheme === "light"
              ? "bg-gray-50 border border-gray-100"
              : currentTheme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-700 border border-gray-600"
          }`}>
            <h3 className="text-4xl font-bold text-pink-500">$1.7B</h3>
            <p className={`text-sm ${
              currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>Total Liquidity Raised</p>
          </div>
          
          <div className={`rounded-xl p-5 flex flex-col items-center justify-center ${
            currentTheme === "light"
              ? "bg-gray-50 border border-gray-100"
              : currentTheme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-700 border border-gray-600"
          }`}>
            <h3 className="text-4xl font-bold text-pink-500">31.5K</h3>
            <p className={`text-sm ${
              currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>Total Projects</p>
          </div>
          
          {/* Stats Card Row 2 */}
          <div className={`rounded-xl p-5 flex flex-col items-center justify-center ${
            currentTheme === "light"
              ? "bg-gray-50 border border-gray-100"
              : currentTheme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-700 border border-gray-600"
          }`}>
            <h3 className="text-4xl font-bold text-pink-500">3.5M</h3>
            <p className={`text-sm ${
              currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>Total Participants</p>
          </div>
          
          <div className={`rounded-xl p-5 flex flex-col items-center justify-center ${
            currentTheme === "light"
              ? "bg-gray-50 border border-gray-100"
              : currentTheme === "dark"
                ? "bg-gray-800 border border-gray-700"
                : "bg-gray-700 border border-gray-600"
          }`}>
            <h3 className="text-4xl font-bold text-pink-500">$173.7M</h3>
            <p className={`text-sm ${
              currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>Total Values Locked</p>
          </div>

          {/* PinkSale Badge */}
          <div className="col-span-2 flex justify-center items-center gap-4 mt-2">
            <div className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
              currentTheme === "light"
                ? "bg-pink-50 text-pink-600"
                : "bg-pink-900/20 text-pink-400"
            }`}>
              <span className="text-pink-500">🚀</span>
              <span className="font-medium">PINKSALE</span>
            </div>
            
            <div className={`px-4 py-2 rounded-lg font-medium ${
              currentTheme === "light"
                ? "text-pink-600"
                : "text-pink-400"
            }`}>
              $253.91
            </div>
          </div>

          {/* Explore Button */}
          <div className="col-span-2 mt-2">
            <button className={`w-full py-3 px-6 rounded-lg border-2 border-pink-500 font-medium text-pink-500 hover:bg-pink-500/10 transition-colors ${
              currentTheme === "light"
                ? "bg-white"
                : currentTheme === "dark"
                  ? "bg-gray-900"
                  : "bg-gray-800"
            }`}>
              Explore Pink Ecosystem
            </button>
          </div>
        </div>
      </div>
      <TokenCarousel/>
    </div>
  );
};

export default DashboardHero;