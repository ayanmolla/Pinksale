import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import ToggleTheme from "./ToggleTheme";
import { Search } from "lucide-react";
import iconimg from "../../Assets/headerdexviewicon.svg";
import ConnectModal from "../Modals/ConnectModal/ConnectModal";

const Header = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  
  const [isConnectPopupOpen, setIsLendPopupOpen] = useState(false);
  const openConnectModalPopup = () => {
    setIsLendPopupOpen(true);
  };
  const closeConnectModalPopup = () => {
    setIsLendPopupOpen(false);
  };

  return (
    <>
      <div
        className={`flex justify-between items-center gap-5 px-6 h-16 border-b ${
          currentTheme === "light"
            ? "border-gray-200 bg-white"
            : currentTheme === "dark"
            ? "border-gray-700 bg-gray-900"
            : "border-gray-700 bg-gray-800"
        }`}
      >
        <div className="relative flex-1 max-w-md">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              className={`w-full max-w-md py-1.5 pl-10 pr-4 rounded-lg border transition-colors ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-200"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-900"
                    : "bg-gray-700 border-gray-500 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-800"
              } focus:outline-none focus:ring-2`}
            />
            <Search className="absolute left-3 text-gray-400 w-4 h-4" />
            <button className="absolute top-2.5 right-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
              >
                <path
                  d="M13 5H21M21 5V13M21 5L13 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <ToggleTheme />

          <a
            href="https://dexview.com"
            className={`h-10 flex items-center gap-2 border px-2 py-2 rounded-lg ${
              currentTheme === "light"
                ? "text-gray-700 border-gray-200 bg-sub-card"
                : currentTheme === "dark"
                ? "text-gray-300 border-gray-700 bg-gray-800"
                : "text-gray-300 border-gray-600 bg-gray-700"
            }`}
          >
            <img src={iconimg} alt="DexView Logo" className="w-5 h-5 rounded-full" />
            <span className="font-medium hidden md:block">dexview.com</span>
          </a>

          <button 
            onClick={openConnectModalPopup}
            className="h-9 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium text-sm transition-colors"
          >
            {t("connect_wallet")}
          </button>
        </div>
      </div>

      {/* ConnectModal */}
      <ConnectModal isOpen={isConnectPopupOpen} onClose={closeConnectModalPopup} />
    </>
  );
};

export default Header;