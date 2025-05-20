import { useState } from "react";
import { useTheme } from "next-themes";
import boxicon from '../../../Assets/DashboardTools.svg';

const DashboardTools = () => {
  const { theme } = useTheme();
  const currentTheme = theme || "light";
  
  const tools = [
    {
      id: 1,
      title: "Standard",
      description: "Mint standard tokens on ETH, BSC, AVAX, Fantom, Polygon.",
      image: boxicon
    },
    {
      id: 2,
      title: "Deflationary",
      description: "Generate deflationary tokens with tax and/or charity functions.",
      image: boxicon
    },
    {
      id: 3,
      title: "Customization",
      description: "Create a token sale for your own custom token easily.",
      image: boxicon
    },
    {
      id: 4,
      title: "Launchpad",
      description: "Use the token you mint to create a launchpad with just a few clicks",
      image: boxicon
    },
    {
      id: 5,
      title: "Branding",
      description: "Adding logo, social links, description, listing on PinkSale.",
      image: boxicon
    },
    {
      id: 6,
      title: "Management",
      description: "The portal to help you easily update content for your launchpad.",
      image: boxicon
    },
    {
      id: 7,
      title: "Community",
      description: "Promote your launchpad to millions of buyers on PinkSale.",
      image: boxicon
    },
    {
      id: 8,
      title: "Locking",
      description: "Lock your liquidity to PinkSwap, PancakeSwap after presale.",
      image: boxicon
    }
  ];

  return (
    <div className={`Dashboard__Tools py-8 px-4 ${
      currentTheme === "light" 
        ? "bg-white" 
        : currentTheme === "dark" 
          ? "bg-gray-900" 
          : "bg-gray-800"
    }`}>
      <div className="Dashboard__Tools-container max-w-7xl mx-auto">
        <div className="Dashboard__Tools-header text-center mb-10">
          <h2 className={`Dashboard__Tools-title text-3xl font-bold mb-4 ${
            currentTheme === "light" 
              ? "text-gray-900" 
              : "text-gray-100"
          }`}>
            A Suite of Tools for Token Sales
          </h2>
          <p className={`Dashboard__Tools-subtitle max-w-3xl mx-auto ${
            currentTheme === "light" 
              ? "text-gray-600" 
              : "text-gray-300"
          }`}>
            A suite of tools were built to help you create your own tokens and launchpads in a fast, 
            simple and cheap way, with no prior code knowledge required and 100% decentralized!
          </p>
        </div>
        
        <div className="Dashboard__Tools-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className={`Dashboard__Tools-card p-6 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-1 ${
                currentTheme === "light" 
                  ? "bg-gray-50 border border-gray-200" 
                  : currentTheme === "dark" 
                    ? "bg-gray-800 border border-gray-700" 
                    : "bg-gray-700 border border-gray-600"
              }`}
            >
              <div className="Dashboard__Tools-iconWrapper mb-4 flex justify-center">
                <div className={`Dashboard__Tools-icon w-16 h-16 flex items-center justify-center rounded-full ${
                  currentTheme === "light" 
                    ? "bg-pink-100" 
                    : "bg-pink-900"
                }`}>
                  <img 
                    src={tool.image} 
                    alt={`${tool.title} icon`} 
                    className="Dashboard__Tools-image w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className={`Dashboard__Tools-cardTitle text-xl font-semibold text-center mb-2 ${
                currentTheme === "light" 
                  ? "text-gray-900" 
                  : "text-gray-100"
              }`}>
                {tool.title}
              </h3>
              <p className={`Dashboard__Tools-cardDescription text-center text-sm ${
                currentTheme === "light" 
                  ? "text-gray-600" 
                  : "text-gray-300"
              }`}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTools;