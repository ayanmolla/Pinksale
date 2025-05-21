import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const AntiBotHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";

  return (
    <div className={`max-w-6xl mx-auto w-full p-6 rounded-lg shadow-sm ${
      currentTheme === "light" 
        ? "bg-white border border-gray-200" 
        : currentTheme === "dark"
          ? "bg-gray-900 border border-gray-700"
          : "bg-gray-800 border border-gray-700"
    }`}>
      <div className="mb-4">
        <h2 className={`text-xl font-semibold ${
          currentTheme === "light" ? "text-gray-800" : "text-gray-100"
        }`}>
          {t("antiBot.title")}
        </h2>
      </div>

      <div className="mb-4">
        <label 
          className={`block mb-2 text-sm font-medium ${
            currentTheme === "light" ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {t("antiBot.tokenAddress")}
        </label>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder={t("antiBot.enterTokenAddress")}
            className={`w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
              currentTheme === "light"
                ? "border-pink-300 focus:border-pink-500 focus:ring-pink-200 bg-white text-gray-800"
                : "border-gray-700 focus:border-pink-500 focus:ring-pink-800 bg-gray-800 text-gray-100"
            }`}
          />
          <span className={`text-sm ${currentTheme === "light" ? "text-gray-600" : "text-gray-400"}`}>
            {t("antiBot.or")}
          </span>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              currentTheme === "light"
                ? "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                : "bg-gray-800 border border-gray-700 text-gray-200 hover:bg-gray-700"
            }`}
          >
            {t("antiBot.createToken")}
          </button>
        </div>
        <p className={`mt-2 text-sm text-red-500`}>
          {t("antiBot.errorMessage")}
        </p>
      </div>

      <div className="space-y-1">
        <p className={`text-sm ${currentTheme === "light" ? "text-blue-500" : "text-blue-400"}`}>
          {t("antiBot.chooseToken")}
        </p>
        <p className={`text-sm ${currentTheme === "light" ? "text-blue-500" : "text-blue-400"}`}>
          {t("antiBot.checkGuide")} 
          <a 
            href="https://github.com/pinkmoonfinance/pink-antibot-guide" 
            className="underline hover:text-pink-500"
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t("antiBot.guideLink")}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AntiBotHero;