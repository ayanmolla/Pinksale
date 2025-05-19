import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import {
  HiOutlineChevronRight,HiFire,HiTemplate,HiPlus,HiLockClosed,HiCurrencyDollar,HiSupport,HiChartBar,HiCash,HiShieldCheck,
  HiArrowsExpand,HiGlobe,HiBell,HiCheck,HiDocument,HiShoppingBag,HiPaperAirplane,HiX,HiThumbUp
} from "react-icons/hi";
import { CheckCheck } from "lucide-react";
import collapselogo from '../../Assets/Logoimg.svg';
import mainlogo from '../../Assets/Logoimg.svg';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();
  const { theme } = useTheme();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  // Menu items structure
  const menuItems = [
    { id: "launchpads", label: "Launchpads", link: "/launchpads", icon: HiFire, hasChildren: true, children: [] },
    { id: "pinkmeme", label: "PinkMeme", link: "/pinkmeme", icon: HiTemplate, hasChildren: true, children: [] },
    { id: "teleairdrop", label: "Tele Airdrop Bot", link: "/teleairdrop", icon: HiPlus, hasChildren: true, children: [] },
    { id: "pinklock", label: "PinkLock", link: "/pinklock", icon: HiLockClosed, hasChildren: true, children: [] },
    { id: "airdrops", label: "Airdrops", link: "/airdrops", icon: HiPlus, hasChildren: true, children: [] },
    { id: "token", label: "Token", link: "/token", icon: HiCurrencyDollar, hasChildren: true, children: [] },
    { id: "support", label: "Support", link: "/support", icon: HiSupport, hasChildren: false, children: [] },
    { id: "leaderboards", label: "Leaderboards", link: "/leaderboards", icon: HiChartBar, hasChildren: false, children: [] },
    { id: "buy-crypto", label: "Buy Crypto Fiat", link: "/buy-crypto", icon: HiCash, hasChildren: false, children: [] },
    { id: "anti-bot", label: "Anti-Bot", link: "/anti-bot", icon: HiShieldCheck, hasChildren: false, children: [] },
    { id: "multi-sender", label: "Multi-Sender", link: "/multi-sender", icon: HiArrowsExpand, hasChildren: false, children: [] },
    { id: "dexview", label: "dexview.com", link: "/dexview", icon: HiGlobe, hasChildren: false, children: [] },
    { id: "pools-alert", label: "Pools alert", link: "/pools-alert", icon: HiBell, hasChildren: false, children: [] },
    { id: "kyc", label: "KYC & Audit", link: "/kyc", icon: HiCheck, hasChildren: false, children: [] },
    { id: "docs", label: "Docs", link: "/docs", icon: HiDocument, hasChildren: false, children: [] },
    { id: "shop", label: "Shop", link: "/shop", icon: HiShoppingBag, hasChildren: false, children: [] },
    { id: "telegram", label: "Telegram", link: "/telegram", icon: HiPaperAirplane, hasChildren: true, children: [] },
    { id: "x", label: "X", link: "/x", icon: HiX, hasChildren: false, children: [] },
    { id: "facebook", label: "Facebook", link: "/facebook", icon: HiThumbUp, hasChildren: false, children: [] },
  ];

  // Check if route is active
  const isActive = (path) => location.pathname.includes(path);

  // Handle submenu toggle
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
          <div key={item.id}>
            <Link
              to={item.link}
              className={`flex items-center px-4 py-3 relative ${
                isActive(item.link)
                  ? currentTheme === "light"
                    ? "text-blue-600"
                    : "text-blue-400"
                  : currentTheme === "light"
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-gray-300 hover:bg-gray-800"
              } transition-colors`}
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
                          ? "text-blue-600 font-medium"
                          : "text-blue-400 font-medium"
                        : currentTheme === "light"
                          ? "text-gray-700"
                          : "text-gray-300"
                    }`}
                  >
                    <span>{child.label}</span>
                    {isActive(child.link) && <CheckCheck className="w-4 h-4 ml-auto text-green-500" />}
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