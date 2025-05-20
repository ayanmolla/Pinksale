import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import CreatePresaleImg1 from '../../../Assets/CreatePresaleImg1.svg';
import CreatePresaleImg2 from '../../../Assets/CreatePresaleImg2.svg';
import CreatePresaleImg3 from '../../../Assets/CreatePresaleImg3.svg';
import CreatePresaleImg4 from "../../../Assets/CreatePresaleImg4.png";
import CreatePresaleImg5 from '../../../Assets/CreatePresaleImg5.svg';
import CreatePresaleImg6 from '../../../Assets/CreatePresaleImg6.svg';
import CreatePresaleImg7 from '../../../Assets/CreatePresaleImg7.svg';
import CreatePresaleImg8 from '../../../Assets/CreatePresaleImg8.png';
import CreatePresaleImg9 from '../../../Assets/CreatePresaleImg9.png';
import CreatePresaleImg10 from '../../../Assets/CreatePresaleImg10.png';
import CreatePresaleImg11 from '../../../Assets/CreatePresaleImg11.png';
import CreatePresaleImg from '../../../Assets/CreatePresaleImg.png';
import CreatePresaleImg13 from '../../../Assets/CreatePresaleImg13.png';
import CreatePresaleImg14 from '../../../Assets/CreatePresaleImg14.svg';
import SolanaImg from '../../../Assets/CreatePresaleImg15.png';
import EclipseImg from '../../../Assets/CreatePresaleImg16.png';

const CreateSubscriptionHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [selectedChainGroup, setSelectedChainGroup] = useState("evm");
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  // Chain data
  const chainGroups = [
    {
      id: "evm",
      label: t("presale.evm_chain"),
      info: "(ETH, BNB, POL, AVAX...)",
      chains: [
        { id: "bnb", label: t("BNB Chain"), icon: CreatePresaleImg1 },
        { id: "ethereum", label: t("Ethereum"), icon: CreatePresaleImg2 },
        { id: "arbitrum", label: t("Arbitrum"), icon: CreatePresaleImg3 },
        { id: "polygon", label: t("Polygon"), icon: CreatePresaleImg4 },
        { id: "avax", label: t("AVAX"), icon: CreatePresaleImg5 },
        { id: "cronos", label: t("Cronos"), icon: CreatePresaleImg6 },
        { id: "alvey", label: t("Alvey"), icon: CreatePresaleImg7 },
        { id: "bitrock", label: t("Bitrock"), icon: CreatePresaleImg8 },
        { id: "core", label: t("Core"), icon: CreatePresaleImg9 },
        { id: "dogechain", label: t("Dogechain"), icon: CreatePresaleImg10 },
        { id: "pulsechain", label: t("PulseChain"), icon: CreatePresaleImg11 },
        { id: "base", label: t("Base"), icon: CreatePresaleImg },
        { id: "zetachain", label: t("ZetaChain"), icon: CreatePresaleImg13 },
        { id: "unichain", label: t("Unichain"), icon: CreatePresaleImg14 },
      ]
    },
    {
      id: "solana",
      label: t("Solana"),
      info: "",
      chains: [
        { id: "solana-mainnet", label: t("Solana Mainnet"), icon: SolanaImg }
      ]
    },
    {
      id: "eclipse",
      label: t("Eclipse"),
      info: "",
      chains: [
        { id: "eclipse-mainnet", label: t("Eclipse Mainnet"), icon: EclipseImg }
      ]
    },
  ];

  // Style based on theme
  const getCardStyle = () => {
    if (currentTheme === "light") {
      return "bg-white border border-gray-200";
    } else if (currentTheme === "dark") {
      return "bg-gray-900 border border-gray-700";
    } else {
      return "bg-gray-800 border border-gray-700"; // For dim theme
    }
  };

  const getTextStyle = () => {
    if (currentTheme === "light") {
      return "text-gray-800";
    } else {
      return "text-gray-200";
    }
  };

  const getRadioStyle = (isSelected) => {
    if (isSelected) {
      return "ring-2 ring-pink-500";
    } else {
      return currentTheme === "light" ? "border-gray-300" : "border-gray-600";
    }
  };

  const handleConnect = () => {
    // Handle wallet connection logic here
    console.log("Connecting wallet");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className={`text-2xl font-bold mb-6 ${getTextStyle()}`}>
        {t("Create Subscription")}
      </h1>
      
      <div className={`p-6 rounded-lg shadow-sm mb-8 ${getCardStyle()}`}>
        <h2 className={`text-xl font-medium mb-4 ${getTextStyle()}`}>
          {t("Chain")}
        </h2>
        
        {/* Chain Group Selection */}
        <div className="space-y-4">
          {chainGroups.map((group) => (
            <div 
              key={group.id}
              className={`rounded-lg border p-4 cursor-pointer transition-all ${
                selectedChainGroup === group.id
                  ? `border-pink-500 ${currentTheme === "light" ? "bg-pink-50" : "bg-pink-900 bg-opacity-20"}`
                  : currentTheme === "light" ? "border-gray-200 hover:border-pink-300" : "border-gray-700 hover:border-pink-800"
              }`}
              onClick={() => setSelectedChainGroup(group.id)}
            >
              <div className="flex items-center">
                <div className={`h-5 w-5 rounded-full border flex items-center justify-center ${getRadioStyle(selectedChainGroup === group.id)}`}>
                  {selectedChainGroup === group.id && (
                    <div className="h-2.5 w-2.5 rounded-full bg-pink-500"></div>
                  )}
                </div>
                <div className="ml-3 flex items-center">
                  <span className={`font-medium ${getTextStyle()}`}>{group.label}</span>
                  {group.info && <span className={`ml-2 text-sm ${currentTheme === "light" ? "text-gray-500" : "text-gray-400"}`}>{group.info}</span>}
                </div>
              </div>
              
              {/* Display chain options only for selected group with chains */}
              {selectedChainGroup === group.id && group.chains.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
                  {group.chains.map((chain) => (
                    <div 
                      key={chain.id}
                      className={`p-3 rounded-md border flex items-center space-x-2 hover:bg-opacity-50 transition-colors ${
                        currentTheme === "light" 
                          ? "border-gray-200 hover:bg-gray-50" 
                          : "border-gray-700 hover:bg-gray-800"
                      }`}
                    >
                      <div className={`w-6 h-6 flex items-center justify-center rounded-full ${
                        currentTheme === "light" ? "bg-gray-100" : "bg-gray-800"
                      }`}>
                        <img src={chain.icon} alt={chain.label} className="w-5 h-5" />
                      </div>
                      <span className={getTextStyle()}>{chain.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Wallet Connection */}
        <div className="mt-8">
          <p className={`mb-4 ${getTextStyle()}`}>
            {t("You need to connect wallet first.")}
          </p>
          <button
            onClick={handleConnect}
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-6 rounded-md transition-colors font-medium"
          >
            {t("connect_wallet")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSubscriptionHero;