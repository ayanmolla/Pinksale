import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const CreateSocialHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";
  
  return (
    <div className={`max-w-4xl mx-auto w-full min-h-[200px] flex flex-col items-center justify-center py-12 px-4 rounded-xl ${
      currentTheme === "light" 
        ? "bg-white" 
        : currentTheme === "dark"
          ? "bg-gray-900"
          : "bg-gray-800" // For dim theme
    }`}>
      <h1 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
        currentTheme === "light"
          ? "text-gray-800"
          : "text-white"
      }`}>
        {t("createSocial.title")}
      </h1>
      
      <p className={`text-base mb-8 text-center max-w-lg ${
        currentTheme === "light"
          ? "text-gray-600"
          : "text-gray-300"
      }`}>
        {t("createSocial.connectWallet")}
      </p>
      
      <button 
        className={`px-6 py-3 rounded-md text-white font-medium transition-all ${
          currentTheme === "light"
            ? "bg-pink-500 hover:bg-pink-600"
            : "bg-pink-600 hover:bg-pink-700"
        }`}
      >
        {t("createSocial.connectButton")}
      </button>
    </div>
  );
};

export default CreateSocialHero;