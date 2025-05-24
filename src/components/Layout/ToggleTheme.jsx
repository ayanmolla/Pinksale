import React, { useEffect, useRef, useState, useCallback } from "react";
import { Moon, MoonStar, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const ToggleTheme = () => {
  const [open, setOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);
  const langDropdownRef = useRef(null);
  const currentTheme = theme || "light";

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
    if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
      setIsLangOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const changeTheme = (newTheme) => {
    if (currentTheme === newTheme) {
      setOpen(false);
      return;
    }

    const html = document.documentElement;
    html.classList.remove("light", "dark", "dim");
    setTheme(newTheme);
    setOpen(false);
  };

  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <div className="flex items-center gap-2">
      {/* Language Selector */}
      <div className="relative">
        <div
          className={`w-10 h-10 rounded-lg border shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
            currentTheme === "light"
              ? "border-custom-border bg-sub-card"
              : currentTheme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-700 border border-gray-600"
          }`}
        >
          <button
            className={`w-full h-full flex justify-center items-center ${
              currentTheme === "light" ? "text-dispute-color" : "text-gray-200"
            }`}
            onClick={() => setIsLangOpen(!isLangOpen)}
          >
            <Globe className="w-5 h-5" />
          </button>
        </div>

        {isLangOpen && (
          <div
            ref={langDropdownRef}
            className={`absolute right-0 p-2 rounded-xl z-50 w-44 mt-2 flex flex-col gap-2 justify-start items-start shadow-lg border ${
              currentTheme === "light"
                ? "bg-card border-custom-border text-dispute-color dark:shadow-[#212121]"
                : currentTheme === "dark"
                ? "bg-gray-800 border-gray-700 text-gray-200 shadow-[#212121]"
                : "bg-gray-700 border-gray-600 text-gray-200 shadow-[#212121]"
            }`}
          >
            <button
              onClick={() => handleLangChange("en")}
              className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
                i18n.language === "en"
                  ? "text-text-color"
                  : currentTheme === "light"
                  ? "hover:bg-gray-100 hover:text-dispute-color"
                  : currentTheme === "dark"
                  ? "hover:bg-gray-700 hover:text-white"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" /> English {i18n.language === "en" && "✓"}
            </button>
            <button
              onClick={() => handleLangChange("bn")}
              className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
                i18n.language === "bn"
                  ? "text-text-color"
                  : currentTheme === "light"
                  ? "hover:bg-gray-100 hover:text-dispute-color"
                  : currentTheme === "dark"
                  ? "hover:bg-gray-700 hover:text-white"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              <Globe className="w-4 h-4" /> বাংলা (Bengali) {i18n.language === "bn" && "✓"}
            </button>
          </div>
        )}
      </div>

      {/* Theme Selector */}
      <div className="relative">
        <div
          className={`w-10 h-10 rounded-lg border shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
            currentTheme === "light"
              ? "border-custom-border bg-sub-card"
              : currentTheme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-700 border border-gray-600"
          }`}
        >
          <button
            className={`w-full h-full flex justify-center items-center ${
              currentTheme === "light"
                ? "text-dispute-color"
                : "text-gray-200"
            }`}
            onClick={() => setOpen(!open)}
          >
            {currentTheme === "light" ? (
              <Sun className="w-5 h-5" />
            ) : currentTheme === "dark" ? (
              <Moon className="w-5 h-5" />
            ) : (
              <MoonStar className="w-5 h-5" />
            )}
          </button>
        </div>
        {open && (
          <div
            ref={dropdownRef}
            className={`absolute right-0 p-2 rounded-xl z-50 w-44 mt-2 flex flex-col gap-2 justify-start items-start shadow-lg border ${
              currentTheme === "light"
                ? "bg-card border-custom-border text-dispute-color dark:shadow-[#212121]"
                : currentTheme === "dark"
                ? "bg-gray-800 border-gray-700 text-gray-200 shadow-[#212121]"
                : "bg-gray-700 border-gray-600 text-gray-200 shadow-[#212121]"
            }`}
          >
            <button
              onClick={() => changeTheme("light")}
              className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
                currentTheme === "light"
                  ? "text-text-color"
                  : currentTheme === "light"
                  ? "hover:bg-gray-100 hover:text-dispute-color"
                  : currentTheme === "dark"
                  ? "hover:bg-gray-700 hover:text-white"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              <Sun className="w-4 h-4" /> Light
            </button>
            <button
              onClick={() => changeTheme("dark")}
              className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
                currentTheme === "dark"
                  ? "text-text-color"
                  : currentTheme === "light"
                  ? "hover:bg-gray-100 hover:text-dispute-color"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              <Moon className="w-4 h-4" />
              Dark
            </button>
            <button
              onClick={() => changeTheme("dim")}
              className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
                currentTheme === "dim"
                  ? "text-text-color"
                  : currentTheme === "light"
                  ? "hover:bg-gray-100 hover:text-dispute-color"
                  : "hover:bg-gray-600 hover:text-white"
              }`}
            >
              <MoonStar className="w-4 h-4" />
              Dim
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToggleTheme;