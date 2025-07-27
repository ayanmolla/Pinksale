import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const MetaDataHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [tokenAddress, setTokenAddress] = useState("");
  
  // Form state
  const [formData, setFormData] = useState({
    logo: null,
    website: "",
    telegram: "",
    twitter: "",
    discord: "",
    description: ""
  });
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFormData(prev => ({
          ...prev,
          logo: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

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
          {t("metadata.title")}
        </h1>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.tokenAddress")}
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
        {t("metadata.title")}
      </h1>
      
      <div className="space-y-6">
        {/* Token Information Section */}
        <div className="space-y-4">
          {/* Token Address */}
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <label className={`block text-sm font-medium mb-1 ${
                currentTheme === "light"
                  ? "text-gray-700"
                  : "text-gray-300"
              }`}>
                {t("metadata.tokenAddress")}
              </label>
              <div className={`text-sm font-mono ${
                currentTheme === "light"
                  ? "text-gray-800"
                  : "text-white"
              }`}>
                {tokenAddress}
              </div>
            </div>
          </div>

          {/* Token Program */}
          <div className="flex justify-between items-center">
            <label className={`text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.tokenProgram")}
            </label>
            <div className={`text-sm font-mono ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              TokenzQdBNbLqP7VwdkW4BS6YuDDJLAxOg...
            </div>
          </div>

          {/* Name */}
          <div className="flex justify-between items-center">
            <label className={`text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.name")}
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
              {t("metadata.symbol")}
            </label>
            <div className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              TRUMP
            </div>
          </div>

          {/* Decimals */}
          <div className="flex justify-between items-center">
            <label className={`text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.decimals")}
            </label>
            <div className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              6
            </div>
          </div>

          {/* Total Supply */}
          <div className="flex justify-between items-center">
            <label className={`text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.totalSupply")}
            </label>
            <div className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              999,999,335.9039
            </div>
          </div>

          {/* Your Wallet Balance */}
          <div className="flex justify-between items-center">
            <label className={`text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.yourWalletBalance")}
            </label>
            <div className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              0
            </div>
          </div>
        </div>

        {/* New Metadata Section */}
        <div className="space-y-4">
          <h2 className={`text-lg font-medium ${
            currentTheme === "light"
              ? "text-gray-900"
              : "text-white"
          }`}>
            {t("metadata.newMetadata")}
          </h2>

          {/* Logo Upload */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.logo")}
            </label>
            <div className="flex items-center space-x-4">
              <div className={`w-16 h-16 border-2 border-dashed rounded-lg flex items-center justify-center ${
                currentTheme === "light"
                  ? "border-gray-300 bg-gray-50"
                  : "border-gray-600 bg-gray-800"
              }`}>
                {formData.logo ? (
                  <img src={formData.logo} alt="Logo" className="w-14 h-14 object-cover rounded" />
                ) : (
                  <div className={`text-xs text-center px-2 ${
                    currentTheme === "light"
                      ? "text-gray-500"
                      : "text-gray-400"
                  }`}>
                    Upload Image
                  </div>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
                id="logo-upload"
              />
              <label
                htmlFor="logo-upload"
                className={`px-4 py-2 text-sm border rounded-md cursor-pointer ${
                  currentTheme === "light"
                    ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                    : "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {t("metadata.chooseFile")}
              </label>
            </div>
            <div className={`text-xs ${
              currentTheme === "light"
                ? "text-gray-500"
                : "text-gray-400"
            }`}>
              {t("metadata.logoHelper")}
            </div>
          </div>

          {/* Website */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.website")} ({t("metadata.optional")})
            </label>
            <input
              type="url"
              value={formData.website}
              onChange={(e) => handleInputChange("website", e.target.value)}
              placeholder="https://example.com"
              className={`w-full px-3 py-2 text-sm border rounded-md ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                  : "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
            />
          </div>

          {/* Telegram */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.telegram")} ({t("metadata.optional")})
            </label>
            <input
              type="url"
              value={formData.telegram}
              onChange={(e) => handleInputChange("telegram", e.target.value)}
              placeholder="https://t.me/yourgrouporchannel"
              className={`w-full px-3 py-2 text-sm border rounded-md ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                  : "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
            />
          </div>

          {/* X (Twitter) */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.twitter")} ({t("metadata.optional")})
            </label>
            <input
              type="url"
              value={formData.twitter}
              onChange={(e) => handleInputChange("twitter", e.target.value)}
              placeholder="https://twitter.com/yourhandle"
              className={`w-full px-3 py-2 text-sm border rounded-md ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                  : "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
            />
          </div>

          {/* Discord */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.discord")} ({t("metadata.optional")})
            </label>
            <input
              type="url"
              value={formData.discord}
              onChange={(e) => handleInputChange("discord", e.target.value)}
              placeholder="https://discord.gg/yourinvite"
              className={`w-full px-3 py-2 text-sm border rounded-md ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                  : "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.description")} ({t("metadata.optional")})
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder={t("metadata.descriptionPlaceholder")}
              rows={4}
              className={`w-full px-3 py-2 text-sm border rounded-md resize-none ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-900 placeholder-gray-500"
                  : "border-gray-600 bg-gray-800 text-white placeholder-gray-400"
              } focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent`}
            />
          </div>

          {/* Allow update metadata checkbox */}
          <div className="flex items-center space-x-2 pt-4">
            <input
              type="checkbox"
              id="allow-update"
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
            />
            <label htmlFor="allow-update" className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.allowUpdate")}
            </label>
          </div>
        </div>

        {/* Authorities Section */}
        <div className="space-y-4">
          <h2 className={`text-lg font-medium ${
            currentTheme === "light"
              ? "text-gray-900"
              : "text-white"
          }`}>
            {t("metadata.authorities")}
          </h2>

          {/* Mint Authority */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.mintAuthority")}
            </label>
            <div className={`text-xs font-mono p-2 rounded ${
              currentTheme === "light"
                ? "bg-gray-100 text-gray-700"
                : "bg-gray-800 text-gray-300"
            }`}>
              TokenzQdBNbLqP7VwdkW4BS6YuDDJLAxOg...
            </div>
            <div className="flex space-x-2">
              <button className={`px-3 py-1 text-xs border rounded ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  : "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}>
                {t("metadata.revoke")}
              </button>
              <button className={`px-3 py-1 text-xs border rounded ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  : "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}>
                {t("metadata.updateMintAuthority")}
              </button>
            </div>
          </div>

          {/* Freeze Authority */}
          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.freezeAuthority")}
            </label>
            <div className={`text-xs font-mono p-2 rounded ${
              currentTheme === "light"
                ? "bg-gray-100 text-gray-700"
                : "bg-gray-800 text-gray-300"
            }`}>
              TokenzQdBNbLqP7VwdkW4BS6YuDDJLAxOg...
            </div>
            <div className="flex space-x-2">
              <button className={`px-3 py-1 text-xs border rounded ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  : "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}>
                {t("metadata.revoke")}
              </button>
              <button className={`px-3 py-1 text-xs border rounded ${
                currentTheme === "light"
                  ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
                  : "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}>
                {t("metadata.updateFreezeAuthority")}
              </button>
            </div>
          </div>
        </div>

        {/* Fee Manager Section */}
        <div className="space-y-4">
          <h2 className={`text-lg font-medium ${
            currentTheme === "light"
              ? "text-gray-900"
              : "text-white"
          }`}>
            {t("metadata.feeManager")}
          </h2>

          <div className="space-y-2">
            <label className={`block text-sm font-medium ${
              currentTheme === "light"
                ? "text-gray-700"
                : "text-gray-300"
            }`}>
              {t("metadata.totalFee")}
            </label>
            <div className={`text-sm ${
              currentTheme === "light"
                ? "text-gray-800"
                : "text-white"
            }`}>
              ~
            </div>
          </div>

          {/* Create Fee Button */}
          <div className="flex justify-center pt-4">
            <button className="px-6 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 text-sm">
              {t("metadata.createFee")}
            </button>
          </div>

          {/* Update Another Token Link */}
          <div className="flex justify-center pt-2">
            <button className="text-pink-500 text-sm hover:text-pink-600">
              {t("metadata.updateAnotherToken")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaDataHero;