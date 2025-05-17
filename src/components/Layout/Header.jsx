import React from "react";
import ToggleTheme from "./ToggleTheme";
import { Search } from "lucide-react";
import iconimg from '../../Assets/headerdexviewicon.svg';

const Header = () => {
  return (
    <div className="flex justify-between items-center gap-5 px-6 py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="relative flex-1 max-w-md">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Type token symbol, address to find your launchpad"
            className="w-full py-2 pl-10 pr-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500"
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
        <ToggleTheme />

        <a href="https://dexview.com" className="h-10 flex items-center gap-2 text-gray-700 dark:text-gray-300 border px-2 py-2 rounded-lg">
          <img src={iconimg} alt="DexView Logo" className="w-5 h-5 rounded-full" />
          <span className="font-medium hidden md:block">dexview.com</span>
        </a>
                
        <button className="h-9 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium text-sm">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Header;