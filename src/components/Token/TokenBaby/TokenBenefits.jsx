import React from 'react';
import { Plus, DollarSign, Clock, BarChart3 } from 'lucide-react';
import { useTheme } from "next-themes";

const TokenBenefits = () => {
  const { theme } = useTheme();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  const benefits = [
    {
      icon: Plus,
      title: "Easy Token Creation",
      description: "Streamlined token deployment with built-in metadata like token name, logo, and social links.",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500"
    },
    {
      icon: DollarSign,
      title: "Configurable Transaction Fees",
      description: "Set custom transaction fees that automatically generate rewards for token holders.",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500"
    },
    {
      icon: Clock,
      title: "Automatic Rewards",
      description: "SOL rewards are automatically distributed to holders every 5 minutes, no manual claiming required.",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500"
    },
    {
      icon: BarChart3,
      title: "Transparent Analytics",
      description: "Track metrics like holder count, tax revenue, and reward distributions via the PinkSale dashboard.",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500"
    }
  ];

  return (
    <div className={`py-16 px-6 ${
      currentTheme === "light"
        ? "bg-white"
        : currentTheme === "dark"
          ? "bg-gray-900"
          : "bg-gray-800" // For dim theme
    } TokenBenefits`}>
      <div className="max-w-6xl mx-auto TokenBenefits">
        <h2 className={`text-4xl font-bold text-center mb-16 ${
          currentTheme === "light"
            ? "text-gray-900"
            : currentTheme === "dark"
              ? "text-white"
              : "text-gray-100" // For dim theme
        } TokenBenefits`}>
          The Benefits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 TokenBenefits">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className={`text-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                  currentTheme === "light"
                    ? "bg-gray-50 hover:bg-gray-100"
                    : currentTheme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-700 hover:bg-gray-600" // For dim theme
                } TokenBenefits`}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                  currentTheme === "light"
                    ? "bg-pink-100"
                    : currentTheme === "dark"
                      ? "bg-pink-900/30"
                      : "bg-pink-800/30" // For dim theme
                } TokenBenefits`}>
                  <IconComponent className={`w-8 h-8 ${
                    currentTheme === "light"
                      ? "text-pink-500"
                      : currentTheme === "dark"
                        ? "text-pink-400"
                        : "text-pink-300" // For dim theme
                  } TokenBenefits`} />
                </div>
                
                <h3 className={`text-xl font-semibold mb-4 ${
                  currentTheme === "light"
                    ? "text-gray-900"
                    : currentTheme === "dark"
                      ? "text-white"
                      : "text-gray-100" // For dim theme
                } TokenBenefits`}>
                  {benefit.title}
                </h3>
                
                <p className={`text-sm leading-relaxed ${
                  currentTheme === "light"
                    ? "text-gray-600"
                    : currentTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-400" // For dim theme
                } TokenBenefits`}>
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TokenBenefits;