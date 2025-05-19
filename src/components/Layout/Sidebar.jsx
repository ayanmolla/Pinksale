import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  HiOutlineChevronRight,
} from "react-icons/hi";
import { CheckCheck } from "lucide-react";
import collapselogo from '../../Assets/Logoimg.svg';
import mainlogo from '../../Assets/Logoimg.svg';
import { useTranslation } from "react-i18next";
import SidebarArray from "../../Array/SidebarArray";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const { theme } = useTheme();
  const { t } = useTranslation();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  // Get menu items from the separate file and apply translations
  // This is where we pass the translation function to SidebarArray
  const menuItems = SidebarArray(t);

  // Check if route is active
  const isActive = (path) => location.pathname.includes(path);

  // Handle submenu toggle - only one dropdown can be open at a time
  const handleSubmenuClick = (id) => {
    setActiveSubmenu(activeSubmenu === id ? null : id);
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen transition-all duration-300 z-50 ${
        currentTheme === "light" 
          ? "bg-white border-r border-gray-200" 
          : currentTheme === "dark"
            ? "bg-gray-900 border-r border-gray-700"
            : "bg-gray-800 border-r border-gray-700" // For dim theme
      }`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      style={{ width: expanded ? "240px" : "64px" }}
    >
      {/* Logo Section */}
      <div className={`p-4 flex h-16 items-center justify-center ${
        currentTheme === "light"
          ? "border-b border-gray-200"
          : "border-b border-gray-700"
      }`}>
        {expanded ? (
          <img src={mainlogo} alt="DexView" className="h-8 w-auto object-contain" />
        ) : (
          <img src={collapselogo} alt="DexView" className="h-8 w-8 object-contain" />
        )}
      </div>

      {/* Menu Items */}
      <div className="overflow-y-auto max-h-[calc(100vh-64px)] scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {menuItems.map((item) => (
          <div key={item.id} className="relative">
            <Link
              to={item.link}
              className={`flex items-center px-4 py-3 relative transition-colors
                ${
                  isActive(item.link)
                    ? currentTheme === "light"
                      ? "text-blue-600 bg-blue-50"
                      : "text-blue-400 bg-gray-800"
                    : currentTheme === "light"
                      ? "text-gray-700 hover:bg-gray-100 hover:text-pink-500"
                      : "text-gray-300 hover:bg-gray-800 hover:text-pink-500"
                }
              `}
              onClick={(e) => {
                if (item.hasChildren) {
                  e.preventDefault();
                  if (expanded) {
                    handleSubmenuClick(item.id);
                  }
                }
              }}
            >
              <div className="flex items-center">
                <div className="min-w-[24px] flex items-center justify-center">
                  {item.icon && <item.icon className="w-5 h-5" />}
                </div>
                {expanded && (
                  <span className="ml-3 whitespace-nowrap">
                    {item.label}
                  </span>
                )}
              </div>

              {expanded && item.hasChildren && (
                <HiOutlineChevronRight 
                  className={`w-4 h-4 ml-auto transform transition-transform ${
                    activeSubmenu === item.id ? "rotate-90" : ""
                  }`}
                />
              )}
            </Link>

            {/* Submenu */}
            {expanded && item.hasChildren && activeSubmenu === item.id && (
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
          </div>
        ))}
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