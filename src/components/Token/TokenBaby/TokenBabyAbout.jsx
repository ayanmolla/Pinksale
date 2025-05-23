import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { DollarSign, RefreshCw, Shield } from "lucide-react";

const TokenBabyAbout = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  const steps = [
    {
      number: "1",
      title: "Tax Collection",
      description: "A small percentage fee is collected from every transaction.",
      icon: DollarSign
    },
    {
      number: "2", 
      title: "Conversion to SOL",
      description: "Tax is automatically converted to SOL, ready for distribution.",
      icon: RefreshCw
    },
    {
      number: "3",
      title: "Automatic Distribution", 
      description: "SOL rewards are distributed to all token holders every 5 minutes, proportional to their holdings.",
      icon: Shield
    }
  ];

  return (
    <div className={`TokenBabyAbout px-6 py-12 ${
      currentTheme === "light"
        ? "bg-white text-gray-800"
        : currentTheme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-800 text-gray-200" // For dim theme
    }`}>
      <div className="TokenBabyAbout max-w-6xl mx-auto">
        {/* Header */}
        <div className="TokenBabyAbout text-center mb-16">
          <h2 className={`TokenBabyAbout text-4xl font-bold mb-4 ${
            currentTheme === "light"
              ? "text-gray-800"
              : currentTheme === "dark"
                ? "text-gray-100"
                : "text-gray-100" // For dim theme
          }`}>
            How It Works
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="TokenBabyAbout grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className={`TokenBabyAbout relative p-8 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 ${
                  currentTheme === "light"
                    ? "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                    : currentTheme === "dark"
                      ? "bg-gray-800 hover:bg-gray-750 border border-gray-700"
                      : "bg-gray-700 hover:bg-gray-650 border border-gray-600" // For dim theme
                }`}
              >
                {/* Step Number Circle */}
                <div className="TokenBabyAbout flex justify-center mb-6">
                  <div className={`TokenBabyAbout w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold ${
                    currentTheme === "light"
                      ? "bg-pink-100 text-pink-600"
                      : currentTheme === "dark"
                        ? "bg-pink-900/30 text-pink-400"
                        : "bg-pink-800/30 text-pink-400" // For dim theme
                  }`}>
                    {step.number}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`TokenBabyAbout text-xl font-semibold text-center mb-4 ${
                  currentTheme === "light"
                    ? "text-gray-800"
                    : currentTheme === "dark"
                      ? "text-gray-100"
                      : "text-gray-100" // For dim theme
                }`}>
                  {step.title}
                </h3>

                {/* Description */}
                <p className={`TokenBabyAbout text-center text-sm leading-relaxed mb-6 ${
                  currentTheme === "light"
                    ? "text-gray-600"
                    : currentTheme === "dark"
                      ? "text-gray-400"
                      : "text-gray-400" // For dim theme
                }`}>
                  {step.description}
                </p>

                {/* Icon */}
                <div className="TokenBabyAbout flex justify-center">
                  <div className={`TokenBabyAbout w-12 h-12 rounded-full flex items-center justify-center ${
                    currentTheme === "light"
                      ? "bg-pink-500 text-white"
                      : currentTheme === "dark"
                        ? "bg-pink-600 text-white"
                        : "bg-pink-600 text-white" // For dim theme
                  }`}>
                    <IconComponent className="TokenBabyAbout w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="TokenBabyAbout text-center">
          <button className={`TokenBabyAbout inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 ${
            currentTheme === "light"
              ? "bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl"
              : currentTheme === "dark"
                ? "bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl"
                : "bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl" // For dim theme
          }`}>
            Create Your Baby Token
            <svg 
              className="TokenBabyAbout w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M13 5H21M21 5V13M21 5L13 13" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TokenBabyAbout;