import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  HiOutlineChevronRight,
} from "react-icons/hi";
import { CheckCheck } from "lucide-react";
import collapselogo from '../../Assets/Logoimg.svg';
import { useTranslation } from "react-i18next";
import SidebarArray from "../../Array/SidebarArray";

const Sidebar = ({ isMobile = false, onClose }) => {
  const [expanded, setExpanded] = useState(isMobile);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  const menuItems = SidebarArray(t);
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');
  const handleSubmenuClick = (id) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };
  const itemsWithDividers = ["support", "multi-sender", "shop"];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-50 flex flex-col ${
        currentTheme === "light" 
          ? "bg-white border-r border-gray-200" 
          : currentTheme === "dark"
            ? "bg-gray-900 border-r border-gray-700"
            : "bg-gray-800 border-r border-gray-700"
      } ${isMobile ? 'w-62' : 'w-16'}`}
      onMouseEnter={() => !isMobile && setExpanded(true)}
      onMouseLeave={() => !isMobile && setExpanded(false)}
    >
      {/* Logo Section */}
      <div className={`flex h-16 items-center ${isMobile ? 'justify-between px-4' : 'justify-center'} ${isMobile ? 'w-62' : 'w-16'} ${
        currentTheme === "light"
          ? "border-b border-gray-200"
          : "border-b border-gray-700"
      }`}>
        <Link to="/Dashboard" className="flex items-center">
          <img src={collapselogo} alt="PinkSale" className="h-10 w-10 object-contain" />
        </Link>
        
        {/* Close button for mobile */}
        {isMobile && onClose && (
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors ${
              currentTheme === "light"
                ? "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                : "text-gray-400 hover:text-gray-200 hover:bg-gray-700"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* Menu Items */}
      <div 
        className={`relative overflow-y-auto max-h-[calc(100vh-64px)] scrollbar-hide transition-all duration-300 ${
          currentTheme === "light" 
            ? "bg-white" 
            : currentTheme === "dark"
              ? "bg-gray-900"
              : "bg-gray-800"
        }`}
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          width: (expanded || isMobile) ? "240px" : "64px"
        }}
      >
        {/* Menu Items Content */}
        <div className={` ${
        currentTheme === "light" 
          ? "bg-white border-r border-gray-200" 
          : currentTheme === "dark"
            ? "bg-gray-900 border-r border-gray-700"
            : "bg-gray-800 border-r border-gray-700"
      }`}>
          {menuItems.map((item, index) => (
            <div key={item.id} className="relative">
              <Link
                to={item.link}
                className={`flex items-center px-4 py-3 relative transition-colors
                  ${
                    isActive(item.link)
                      ? currentTheme === "light"
                        ? "text-pink-600 bg-pink-50"
                        : "text-pink-400 bg-gray-800"
                      : currentTheme === "light"
                        ? "text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                        : "text-gray-300 hover:bg-gray-800 hover:text-pink-500"
                  }
                `}
                onClick={(e) => {
                  if (item.hasChildren) {
                    e.preventDefault();
                    if (expanded || isMobile) {
                      handleSubmenuClick(item.id);
                    }
                  }
                }}
              >
                <div className="flex items-center">
                  <div className="min-w-[24px] flex items-center justify-center">
                    {item.icon && <item.icon className="w-5 h-5" />}
                  </div>
                  {(expanded || isMobile) && (
                    <span className="ml-3 whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </div>

                {(expanded || isMobile) && item.hasChildren && (
                  <HiOutlineChevronRight 
                    className={`w-4 h-4 ml-auto transform transition-transform ${
                      activeSubmenu === item.id ? "rotate-90" : ""
                    }`}
                  />
                )}
              </Link>

              {/* Submenu */}
              {(expanded || isMobile) && item.hasChildren && activeSubmenu === item.id && (
                <div className={`pl-10 pr-4 py-2 ${
                  currentTheme === "light"
                    ? "bg-gray-50"
                    : "bg-gray-800"
                }`}>
                  {item.children?.map((child) => (
                    <Link
                      key={child.id}
                      to={child.link}
                      className={`flex items-center py-2 text-sm ${
                        isActive(child.link)
                          ? currentTheme === "light"
                            ? "text-pink-600 font-medium"
                            : "text-pink-400 font-medium"
                          : currentTheme === "light"
                            ? "text-gray-700 hover:text-pink-600"
                            : "text-gray-300 hover:text-pink-400"
                      }`}
                    >
                      <span>{child.label}</span>
                      {isActive(child.link) && <CheckCheck className="w-4 h-4 ml-auto text-pink-500" />}
                    </Link>
                  ))}
                </div>
              )}

              {/* Divider */}
              {itemsWithDividers.includes(item.id) && (
                <div className={`mx-4 border-b mt-5 mb-5 ${
                  currentTheme === "light"
                    ? "border-gray-200"
                    : "border-gray-700"
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Add global style to hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;