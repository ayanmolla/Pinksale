import React, { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import ToggleTheme from "./ToggleTheme";
import { Search, Globe } from "lucide-react";
import iconimg from '../../Assets/headerdexviewicon.svg';

const Header = () => {
  const { theme } = useTheme();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const { i18n, t } = useTranslation();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";
  
  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };
  
  const handleClickOutside = useCallback((event) => {
    if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
      setIsLangOpen(false);
    }
  }, []);

  useEffect(() => {
    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className={`flex justify-between items-center gap-5 px-6 h-16 border-b ${
      currentTheme === "light"
        ? "border-gray-200 bg-white"
        : currentTheme === "dark"
          ? "border-gray-700 bg-gray-900"
          : "border-gray-700 bg-gray-800" // For dim theme
    }`}>
      <div className="relative flex-1 max-w-md">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder={t('search_placeholder')}
            className={`w-full py-2 pl-10 pr-4 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 ${
              currentTheme === "light"
                ? "bg-gray-100 text-gray-800 placeholder-gray-500"
                : currentTheme === "dark"
                  ? "bg-gray-800 text-gray-200 placeholder-gray-400"
                  : "bg-gray-700 text-gray-200 placeholder-gray-400" // For dim theme
            }`}
          />
          <Search className="absolute left-3 text-gray-400 w-4 h-4" />
          <button className="absolute top-3 right-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
              <path d="M13 5H21M21 5V13M21 5L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Language Selector */}
        <div className="relative">
          <div className="w-10 h-10 rounded-lg border border-custom-border bg-sub-card">
            <button
              className="w-full h-full flex justify-center items-center text-dispute-color"
              onClick={() => setIsLangOpen(!isLangOpen)}
            >
              <Globe className="w-5 h-5" />
            </button>
          </div>

          {isLangOpen && (
            <div
              ref={langDropdownRef}
              className="absolute right-0 bg-card border border-custom-border p-2 rounded-xl z-50 w-44 mt-2 flex flex-col gap-2 justify-start items-start shadow-lg dark:shadow-[#212121] text-dispute-color"
            >
              <button
                onClick={() => handleLangChange("en")}
                className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
                  i18n.language === "en"
                    ? "text-text-color"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Globe className="w-4 h-4" /> English {i18n.language === "en" && "✓"}
              </button>
              <button
                onClick={() => handleLangChange("bn")}
                className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
                  i18n.language === "bn"
                    ? "text-text-color"
                    : "hover:bg-gray-700 hover:text-white"
                }`}
              >
                <Globe className="w-4 h-4" /> বাংলা (Bengali) {i18n.language === "bn" && "✓"}
              </button>
            </div>
          )}
        </div>

        <ToggleTheme />
        
        <a href="https://dexview.com" className={`h-10 flex items-center gap-2 border px-2 py-2 rounded-lg ${
          currentTheme === "light"
            ? "text-gray-700 border-gray-200 bg-sub-card"
            : currentTheme === "dark"
              ? "text-gray-300 border-gray-700 bg-sub-card"
              : "text-gray-300 border-gray-700 bg-sub-card"
        }`}>
          <img src={iconimg} alt="DexView Logo" className="w-5 h-5 rounded-full" />
          <span className="font-medium hidden md:block">dexview.com</span>
        </a>
        
        <button className="h-9 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium text-sm">
          {t('connect_wallet')}
        </button>
      </div>
    </div>
  );
};

export default Header;