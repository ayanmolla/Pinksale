import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const BuyCryptoFiatHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";

  return (
    <div className={`w-full flex flex-col items-center justify-center py-16 px-4`}>
      <div className="max-w-3xl w-full text-center">
        <h1 className={`text-3xl md:text-4xl font-bold mb-6 ${
          currentTheme === "light" 
            ? "text-gray-900" 
            : "text-white"
        }`}>
          {t("buyCryptoFiat.title")}
        </h1>
        
        <p className={`text-lg mb-8 mx-auto max-w-2xl ${
          currentTheme === "light" 
            ? "text-gray-700" 
            : "text-gray-300"
        }`}>
          {t("buyCryptoFiat.description")}
        </p>
        
        <button 
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
        >
          {t("buyCryptoFiat.connectWallet")}
        </button>
      </div>
    </div>
  );
};

export default BuyCryptoFiatHero;