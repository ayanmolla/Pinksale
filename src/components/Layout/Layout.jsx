import { useTranslation } from "react-i18next";
import Sidebar from "./Sidebar";
import Header from "./Header";import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "next-themes";
import { Menu, X, Globe } from "lucide-react";
import ToggleTheme from "./ToggleTheme";

const Layout = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Desktop Sidebar - Hidden on mobile */}
      <div className="hidden lg:block">
        <Sidebar isMobile={false} />
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={toggleMobileMenu}
          />
          
          {/* Mobile Sidebar */}
          <div className="relative w-64 h-full transform transition-transform duration-300 ease-in-out">
            <div className="w-64">
              <Sidebar isMobile={true} onClose={toggleMobileMenu} />
            </div>
          </div>
        </div>
      )}

      {/* Main Content Wrapper */}
      <div className="flex flex-col w-full">
        {/* Fixed Header */}
        <header 
          className={`fixed top-0 w-full h-16 z-30 transition-all duration-300 ${
            currentTheme === "light" 
              ? "bg-white border-b border-gray-200" 
              : currentTheme === "dark"
                ? "bg-gray-900 border-b border-gray-700"
                : "bg-gray-800 border-b border-gray-700"
          } lg:left-16 lg:w-[calc(100%-4rem)]`}
        >
          {/* Mobile Header with Hamburger */}
          <div className="lg:hidden flex items-center justify-between h-full px-4">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg ${
                currentTheme === "light"
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>

              {/* Language & Theme Toggles */}
              <div className="flex items-center gap-2">
                <ToggleTheme />

                {/* Connect Wallet Button - Mobile */}
                <button className="h-9 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium text-sm">
                  {t("connect_wallet") || "Connect Wallet"}
                </button>
              </div>
          </div>

          {/* Desktop Header */}
          <div className="hidden lg:block h-full">
            <Header />
          </div>
        </header>

        {/* Main Content */}
        <main
          className={`pt-16 min-h-screen overflow-y-auto transition-all duration-300 ${
            currentTheme === "light" 
              ? "bg-gray-50" 
              : currentTheme === "dark"
                ? "bg-gray-900"
                : "bg-gray-800"
          } lg:ml-16`}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;