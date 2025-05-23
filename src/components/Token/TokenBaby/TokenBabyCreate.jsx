import React from "react";
import { Wallet, Coins, Edit, Image, Eye, Settings } from "lucide-react";

const TokenBabyCreate = ({ theme }) => {
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  const steps = [
    {
      number: "1",
      title: "Connect Your Wallet",
      description: "Visit the PinkSale Create Token page and connect your Solana wallet to get started.",
      icon: Wallet
    },
    {
      number: "2",
      title: "Choose Baby Token",
      description: "Select \"BABY TOKEN\" from the token program option.",
      icon: Coins
    },
    {
      number: "3",
      title: "Enter Token Details",
      description: "Fill in required information: name, symbol, decimals, total supply, and the tax percentage.",
      icon: Edit
    },
    {
      number: "4",
      title: "Add Additional Info",
      description: "Add logo, social links, and other details to enhance your token's appearance.",
      icon: Image
    },
    {
      number: "5",
      title: "Review & Create",
      description: "Review your token configuration and click \"Create\" to deploy it on the Solana blockchain.",
      icon: Eye
    },
    {
      number: "6",
      title: "Manage & Monitor",
      description: "Use PinkSale's dashboard to track holder count, reward distributions, and other metrics.",
      icon: Settings
    }
  ];

  return (
    <div className="TokenBabyCreate px-6 py-12 bg-transparent text-text-color">
      <div className="TokenBabyCreate max-w-4xl mx-auto">
        {/* Header */}
        <div className="TokenBabyCreate text-center mb-12">
          <h2 className="TokenBabyCreate text-4xl font-bold mb-4 text-text-color">
            Create Your Baby Token in Minutes
          </h2>
        </div>

        {/* Timeline Steps */}
        <div className="TokenBabyCreate relative">
          {/* Vertical Line */}
          <div className="TokenBabyCreate absolute left-8 top-0 bottom-0 w-0.5 bg-custom-border"></div>

          {steps.map((step, index) => (
            <div key={index} className="TokenBabyCreate relative flex items-start mb-8 last:mb-0">
              {/* Step Number Circle */}
              <div className="TokenBabyCreate flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold z-10 bg-pink-500 text-white">
                {step.number}
              </div>

              {/* Content */}
              <div className="TokenBabyCreate ml-8 flex-1">
                <div className="TokenBabyCreate p-6 rounded-xl border border-custom-border bg-sub-card shadow-lg dark:shadow-[#212121]">
                  <h3 className="TokenBabyCreate text-xl font-semibold mb-3 text-text-color">
                    {step.title}
                  </h3>
                  <p className="TokenBabyCreate text-sm leading-relaxed text-dispute-color">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="TokenBabyCreate text-center mt-12">
          <button className="TokenBabyCreate inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:transform hover:scale-105 bg-pink-500 hover:bg-pink-600 text-white shadow-lg hover:shadow-xl">
            Start Creating Now
            <svg 
              className="TokenBabyCreate w-5 h-5" 
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

export default TokenBabyCreate;