import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const CreateAirdropHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";

  return (
    <div className={` max-w-4xl mx-auto w-full px-6 py-8  rounded-xl ${
      currentTheme === "light" 
        ? "bg-white" 
        : currentTheme === "dark"
          ? "bg-gray-900"
          : "bg-gray-800"
    }`}>
      <div className={`max-w-3xl mx-auto ${
        currentTheme === "light" 
          ? "text-gray-800" 
          : "text-gray-100"
      }`}>
        {/* Header */}
        <h1 className="text-2xl font-semibold mb-8">
          {t("createAirdrop.title")}
        </h1>

        {/* Form Container */}
        <div className={`p-6 rounded-lg shadow-sm ${
          currentTheme === "light" 
            ? "bg-white border border-gray-200" 
            : currentTheme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-700 border border-gray-600"
        }`}>
          {/* Token Address Field */}
          <div className="mb-6">
            <label 
              htmlFor="tokenAddress" 
              className={`block mb-2 font-medium ${
                currentTheme === "light" 
                  ? "text-gray-700" 
                  : "text-gray-200"
              }`}
            >
              {t("createAirdrop.tokenAddress")}
            </label>
            <input
              type="text"
              id="tokenAddress"
              placeholder={t("createAirdrop.tokenAddressPlaceholder")}
              className={`w-full px-4 py-2 rounded border ${
                currentTheme === "light" 
                  ? "border-gray-300 bg-white text-gray-800 placeholder-gray-400" 
                  : "border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400"
              } focus:outline-none focus:ring-2 focus:ring-pink-500`}
            />
          </div>

          {/* Next Button */}
          <div className="flex justify-end">
            <button
              className={`px-6 py-2 rounded ${
                currentTheme === "light" 
                  ? "bg-gray-100 text-gray-700 hover:bg-gray-200" 
                  : "bg-gray-700 text-gray-200 hover:bg-gray-600"
              } transition-colors duration-200`}
            >
              {t("createAirdrop.next")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAirdropHero;