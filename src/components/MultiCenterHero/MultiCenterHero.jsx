import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const MultiSenderHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  const [currentStep, setCurrentStep] = useState(1);
  const [tokenAddress, setTokenAddress] = useState("");
  const [allocations, setAllocations] = useState("");
  
  const handleNext = () => {
    setCurrentStep(2);
  };
  
  return (
    <div className={` max-w-4xl mx-auto container mx-auto p-6 ${
      currentTheme === "light" 
        ? "bg-white" 
        : currentTheme === "dark"
          ? "bg-gray-900 text-gray-100"
          : "bg-gray-800 text-gray-100"
    }`}>
      <h1 className={`text-2xl font-semibold mb-8 ${
        currentTheme === "light" ? "text-gray-800" : "text-gray-100"
      }`}>
        {t("multiSender.title")}
      </h1>
      
      <div className={`border rounded-lg overflow-hidden ${
        currentTheme === "light" 
          ? "bg-white border-gray-200" 
          : "bg-gray-800 border-gray-700"
      }`}>
        <div className="flex items-center justify-start px-6 py-4 border-b">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
              currentStep >= 1 ? "bg-pink-500" : "bg-gray-400"
            }`}>
              <span>1</span>
            </div>
            <span className={`ml-3 font-medium ${
              currentStep >= 1 
                ? currentTheme === "light" ? "text-pink-600" : "text-pink-400" 
                : currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              {t("multiSender.step1.title")}
            </span>
          </div>
          
          <div className="mx-4 border-t border-gray-300 w-12"></div>
          
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              currentStep >= 2 
                ? "bg-pink-500 text-white" 
                : currentTheme === "light" ? "bg-gray-200 text-gray-600" : "bg-gray-700 text-gray-400"
            }`}>
              <span>2</span>
            </div>
            <span className={`ml-3 font-medium ${
              currentStep >= 2 
                ? currentTheme === "light" ? "text-pink-600" : "text-pink-400" 
                : currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              {t("multiSender.step2.title")}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          {currentStep === 1 ? (
            <>
              <p className={`mb-2 ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-300"
              }`}>
                {t("multiSender.step1.description")}
              </p>
              
              <div className="mb-6">
                <label className={`block mb-2 text-sm font-medium ${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {t("multiSender.tokenAddress")} <span className="text-gray-500">({t("common.optional")})</span>
                </label>
                <input 
                  type="text" 
                  className={`w-full px-4 py-2 border rounded-md ${
                    currentTheme === "light" 
                      ? "border-gray-300 bg-white text-gray-800" 
                      : "border-gray-600 bg-gray-800 text-gray-100"
                  }`}
                  placeholder={t("multiSender.tokenAddressPlaceholder")}
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                />
                <p className="mt-2 text-sm text-pink-500">
                  {t("multiSender.tokenAddressHint")}
                </p>
              </div>
              
              <div className="mb-6">
                <label className={`block mb-2 text-sm font-medium ${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {t("multiSender.allocations")}
                </label>
                <textarea 
                  className={`w-full px-4 py-2 border rounded-md h-40 ${
                    currentTheme === "light" 
                      ? "border-gray-300 bg-white text-gray-800" 
                      : "border-gray-600 bg-gray-800 text-gray-100"
                  }`}
                  placeholder={t("multiSender.allocationsPlaceholder")}
                  value={allocations}
                  onChange={(e) => setAllocations(e.target.value)}
                />
                <p className="mt-1 text-sm text-red-500">
                  {t("multiSender.allocationsRequired")}
                </p>
              </div>
              
              <div className="flex items-center space-x-4 mb-6">
                <button 
                  className={`px-4 py-2 border rounded-md ${
                    currentTheme === "light" 
                      ? "border-gray-300 bg-white text-gray-800" 
                      : "border-gray-600 bg-gray-700 text-gray-300"
                  }`}
                >
                  {t("multiSender.chooseCsv")}
                </button>
                <button 
                hidden
                type="file"
                accept=".csv"
                className="px-4 py-2 text-pink-500 hover:text-pink-600"
                >
                  {t("multiSender.sampleCsv")}
                </button>
              </div>
              
              <div className={`p-4 mb-6 border rounded-md ${
                currentTheme === "light" 
                  ? "bg-yellow-50 border-yellow-100 text-yellow-800" 
                  : "bg-yellow-900/30 border-yellow-800/50 text-yellow-200"
              }`}>
                <p className="text-sm">
                  {t("multiSender.excludeNotice")}
                </p>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={handleNext}
                  className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  {t("common.next")}
                </button>
              </div>
            </>
          ) : (
            <>
              <p className={`mb-6 ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-300"
              }`}>
                {t("multiSender.step2.description")}
              </p>
              
              {/* Confirmation content would go here */}
              <div className="flex justify-between">
                <button 
                  onClick={() => setCurrentStep(1)}
                  className={`px-6 py-2 border rounded-md ${
                    currentTheme === "light" 
                      ? "border-gray-300 bg-white text-gray-800" 
                      : "border-gray-600 bg-gray-700 text-gray-300"
                  }`}
                >
                  {t("common.back")}
                </button>
                <button 
                  className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  {t("common.confirm")}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiSenderHero;