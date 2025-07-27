import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const CreateSocialHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [tokenAddress, setTokenAddress] = useState("");
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";
  
  // Show token address input if no address is entered
  if (!tokenAddress.trim()) {
    return (
      <div className={`max-w-4xl mx-auto w-full py-8 px-6 mt-10 ${
        currentTheme === "light" 
          ? "bg-white" 
          : currentTheme === "dark"
            ? "bg-gray-900"
            : "bg-gray-800"
      }`}>
        <h1 className={`text-xl font-semibold mb-6 ${
          currentTheme === "light"
            ? "text-gray-900"
            : "text-white"
        }`}>
          {t("createSocial.title")}
        </h1>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("createSocial.tokenAddress")}
            </label>
            <input
              type="text"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              placeholder="Enter token address"
              className={`w-full px-3 py-2 text-sm border rounded-md ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                  : "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`max-w-4xl mx-auto w-full py-8 px-6 mt-10 ${
      currentTheme === "light" 
        ? "bg-white" 
        : currentTheme === "dark"
          ? "bg-gray-900"
          : "bg-gray-800"
    }`}>
      <h1 className={`text-xl font-semibold mb-6 ${
        currentTheme === "light"
          ? "text-gray-900"
          : "text-white"
      }`}>
        {t("createSocial.title")}
      </h1>
      
      <div className="space-y-4">
        {/* Token Address */}
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <label className={`block text-sm font-medium mb-1 ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("createSocial.tokenAddress")}
            </label>
            <div className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              {tokenAddress}
            </div>
            <div className="text-pink-500 text-sm mt-1">{t("createSocial.creationFee")}</div>
          </div>
        </div>

        {/* Name */}
        <div className="flex justify-between items-center">
          <label className={`text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.name")}
          </label>
          <div className={`text-sm ${
            currentTheme === "light"
              ? "text-gray-800"
              : "text-white"
          }`}>
            OFFICIAL TRUMP
          </div>
        </div>

        {/* Symbol */}
        <div className="flex justify-between items-center">
          <label className={`text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.symbol")}
          </label>
          <div className={`text-sm ${
            currentTheme === "light"
              ? "text-gray-800"
              : "text-white"
          }`}>
            TRUMP
          </div>
        </div>

        {/* Total Supply */}
        <div className="flex justify-between items-center">
          <label className={`text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.totalSupply")}
          </label>
          <div className={`text-sm ${
            currentTheme === "light"
              ? "text-gray-800"
              : "text-white"
          }`}>
            999,999,335.9039
          </div>
        </div>

        {/* Decimals */}
        <div className="flex justify-between items-center">
          <label className={`text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.decimals")}
          </label>
          <div className={`text-sm ${
            currentTheme === "light"
              ? "text-gray-800"
              : "text-white"
          }`}>
            6
          </div>
        </div>

        {/* Your Balance */}
        <div className="flex justify-between items-center">
          <label className={`text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.yourBalance")}
          </label>
          <div className={`text-sm ${
            currentTheme === "light"
              ? "text-gray-800"
              : "text-white"
          }`}>
            0
          </div>
        </div>

        {/* Currency */}
        <div className="space-y-2">
          <label className={`block text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.currency")}
          </label>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-pink-500 bg-pink-500"></div>
            <span className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              SOL
            </span>
          </div>
          <div className="text-pink-500 text-sm">{t("createSocial.usersWillPay")}</div>
        </div>

        {/* Fee Options */}
        <div className="space-y-2">
          <label className={`block text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.feeOptions")}
          </label>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-pink-500 bg-pink-500"></div>
            <span className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              {t("createSocial.fivePercentSOL")}
            </span>
          </div>
        </div>

        {/* Listing Options */}
        <div className="space-y-2">
          <label className={`block text-sm font-medium ${
            currentTheme === "light"
              ? "text-gray-700"
              : "text-gray-300"
          }`}>
            {t("createSocial.listingOptions")}
          </label>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-pink-500 bg-pink-500"></div>
            <span className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              {t("createSocial.autoListing")}
            </span>
          </div>
          <div className={`text-sm ml-6 ${
            currentTheme === "light"
              ? "text-gray-400"
              : "text-gray-500"
          }`}>
            {t("createSocial.manualListing")}
          </div>
        </div>

        {/* Warning Messages */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 space-y-2 mt-6">
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
            <div className="text-sm text-gray-700">
              {t("createSocial.warning1")}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
            <div className="text-sm text-gray-700">
              {t("createSocial.warning2")}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div className="text-sm text-red-600">
              {t("createSocial.warning3")}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
            <div className="text-sm text-red-600">
              {t("createSocial.warning4")}
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
            <div className="text-sm text-gray-700">
              {t("createSocial.warning5")}
            </div>
          </div>
        </div>

        {/* Next Button */}
        <div className="flex justify-center pt-6">
          <button 
            disabled
            className="px-8 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed text-sm"
          >
            {t("createSocial.next")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSocialHero;