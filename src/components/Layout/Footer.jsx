import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import logoimg from '../../Assets/Logoimg.svg';
import { PiTelegramLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { LiaFacebookSquare } from "react-icons/lia";

const Footer = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";

  return (
    <footer className={`w-full py-8 px-4 md:px-8 lg:px-12 border-t mt-10 ${
      currentTheme === "light" 
        ? "bg-white border-gray-200 text-gray-800" 
        : currentTheme === "dark"
          ? "bg-gray-900 border-gray-700 text-gray-200"
          : "bg-gray-800 border-gray-700 text-gray-200" // For dim theme
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer Banner */}
        <div className={`mb-8 p-4 rounded-lg text-sm ${
          currentTheme === "light" 
            ? "bg-gray-50 border border-gray-100" 
            : currentTheme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-gray-700 border border-gray-600" // For dim theme
        }`}>
          <p>{t('footer.disclaimer')}</p>
          <p className="mt-1">
            {t('footer.disclaimerMoreInfo')}
            <a href="#" className="text-pink-500 hover:text-pink-600 ml-1">
              {t('footer.academy')}
            </a>
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                <img src={logoimg} alt="" />
              </div>
              <span className="text-xl font-bold">PinkSale</span>
            </div>
            <p className={`text-sm ${
              currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              {t('footer.description')}
            </p>
          </div>

          {/* Useful Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.usefulLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`text-sm hover:text-pink-500 ${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {t('footer.poolsAlert')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm hover:text-pink-500 ${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {t('footer.kycAudit')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm hover:text-pink-500 ${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {t('footer.docs')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm hover:text-pink-500 ${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {t('footer.shop')}
                </a>
              </li>
              <li>
                <a href="#" className={`text-sm hover:text-pink-500 ${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {t('footer.v1')}
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className={`p-2 rounded-full ${
                currentTheme === "light" 
                  ? "bg-gray-100 hover:bg-gray-200" 
                  : currentTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600" // For dim theme
              }`}>
                <PiTelegramLogo />
              </a>
              <a href="#" className={`p-2 rounded-full ${
                currentTheme === "light" 
                  ? "bg-gray-100 hover:bg-gray-200" 
                  : currentTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600" // For dim theme
              }`}>
                <RiTwitterXFill />
              </a>
              <a href="#" className={`p-2 rounded-full ${
                currentTheme === "light" 
                  ? "bg-gray-100 hover:bg-gray-200" 
                  : currentTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600" // For dim theme
              }`}>
                <LiaFacebookSquare />
              </a>
            </div>

            {/* PinkSale Price */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">{t('footer.pinksalePrice')}</h3>
              <div className={`inline-block px-4 py-2 rounded-lg font-medium text-pink-500 ${
                currentTheme === "light" 
                  ? "bg-pink-50" 
                  : "bg-pink-900/20"
              }`}>
                $253.91
              </div>
            </div>
          </div>

          {/* Interface and Language */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">{t('footer.interface')}</h3>
            <div className="space-y-3">
              <button className={`w-full flex items-center justify-between p-3 rounded-lg ${
                currentTheme === "light" 
                  ? "bg-gray-50 hover:bg-gray-100" 
                  : currentTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600" // For dim theme
              }`}>
                <span className="flex items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  {t('footer.lightMode')}
                </span>
              </button>
              <button className={`w-full flex items-center justify-between p-3 rounded-lg ${
                currentTheme === "light" 
                  ? "bg-gray-50 hover:bg-gray-100" 
                  : currentTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600" // For dim theme
              }`}>
                <span className="flex items-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                       strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  {t('footer.darkMode')}
                </span>
              </button>
            </div>

            <h3 className="text-lg font-semibold mt-6 mb-4">{t('footer.language')}</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className={`p-2 rounded-lg flex items-center justify-center ${
                currentTheme === "light" 
                  ? "bg-gray-50 hover:bg-gray-100" 
                  : currentTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600" // For dim theme
              }`}>
                <img src="/images/us-flag.png" alt="English" className="w-6 h-6 mr-2" />
                <span className="text-sm">EN</span>
              </button>
              <button className={`p-2 rounded-lg flex items-center justify-center ${
                currentTheme === "light" 
                  ? "bg-gray-50 hover:bg-gray-100" 
                  : currentTheme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-700 hover:bg-gray-600" // For dim theme
              }`}>
                <img src="/images/bd-flag.png" alt="Bengali" className="w-6 h-6 mr-2" />
                <span className="text-sm">BN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;