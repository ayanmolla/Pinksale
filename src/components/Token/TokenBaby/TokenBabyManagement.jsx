import React from 'react';
import { useTheme } from "next-themes";
import { Check, BarChart3, History, Users, TrendingUp } from 'lucide-react';

const TokenBabyManagement = () => {
  const { theme } = useTheme();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  const features = [
    {
      id: 1,
      icon: <History className="w-6 h-6" />,
      title: "Reward History",
      description: "View detailed history of all reward distributions.",
      className: "reward-history-tokenbabymanagement"
    },
    {
      id: 2,
      icon: <Users className="w-6 h-6" />,
      title: "Holder Analytics", 
      description: "Monitor the number of holders and their distribution.",
      className: "holder-analytics-tokenbabymanagement"
    },
    {
      id: 3,
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Tax Revenue Tracking",
      description: "See how much tax has been collected and distributed.",
      className: "tax-revenue-tracking-tokenbabymanagement"
    },
    {
      id: 4,
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Distribution Stats",
      description: "Track automatic distribution statistics and performance.",
      className: "distribution-stats-tokenbabymanagement"
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 ${
      currentTheme === "light"
        ? "bg-white"
        : currentTheme === "dark"
          ? "bg-gray-900"
          : "bg-gray-800" // For dim theme
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${
            currentTheme === "light"
              ? "text-gray-800"
              : currentTheme === "dark"
                ? "text-gray-200"
                : "text-gray-200" // For dim theme
          }`}>
            TokenBaby Management Features
          </h1>
          <p className={`text-lg ${
            currentTheme === "light"
              ? "text-gray-500"
              : currentTheme === "dark"
                ? "text-gray-400"
                : "text-gray-400" // For dim theme
          }`}>
            Comprehensive tools for managing your token ecosystem
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${feature.className} bg-sub-card border-custom-border`}
            >
              {/* Feature Icon */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl border-2 border-pink-500 flex items-center justify-center ${
                  currentTheme === "light"
                    ? "bg-pink-50 text-pink-600"
                    : currentTheme === "dark"
                      ? "bg-pink-900/20 text-pink-400"
                      : "bg-pink-800/20 text-pink-300" // For dim theme
                }`}>
                  {feature.icon}
                </div>
                <div className={`w-6 h-6 rounded-full border-2 border-pink-500 flex items-center justify-center flex-shrink-0 ${
                  currentTheme === "light"
                    ? "bg-pink-500 text-white"
                    : currentTheme === "dark"
                      ? "bg-pink-500 text-white"
                      : "bg-pink-400 text-white" // For dim theme
                }`}>
                  <Check className="w-3 h-3" />
                </div>
              </div>

              {/* Feature Content */}
              <div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  currentTheme === "light"
                    ? "text-gray-800"
                    : currentTheme === "dark"
                      ? "text-gray-200"
                      : "text-gray-200" // For dim theme
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-base leading-relaxed ${
                  currentTheme === "light"
                    ? "text-gray-500"
                    : currentTheme === "dark"
                      ? "text-gray-400"
                      : "text-gray-400" // For dim theme
                }`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center p-12 rounded-2xl border bg-sub-card border-custom-border cta-section-tokenbabymanagement`}>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
            currentTheme === "light"
              ? "text-gray-800"
              : currentTheme === "dark"
                ? "text-gray-400"
                : "text-gray-400" // For dim theme
          }`}>
            Ready to Manage Your TokenBaby?
          </h2>
          <p className={`text-lg mb-8 ${
            currentTheme === "light"
              ? "text-gray-500"
              : currentTheme === "dark"
                ? "text-gray-400"
                : "text-gray-400" // For dim theme
          }`}>
            Start utilizing these powerful management tools today
          </p>
          <button className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg get-started-btn-tokenbabymanagement">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenBabyManagement;