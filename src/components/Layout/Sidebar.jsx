import { useState, useEffect } from "react";
import { 
  ChevronDown, 
  ChevronRight, 
  CheckCircle,
} from "lucide-react";
import mainLogo from '../../Assets/Logoimg.svg'

const menuItems = [
  {
    id: "launchpads",
    icon: () => <div className="text-pink-500">🚀</div>,
    label: "Launchpads",
    link: "#",
    hasChildren: true,
    children: [
      { id: "create-launchpad", label: "Create Launchpad", link: "#" },
      { id: "my-launchpads", label: "My Launchpads", link: "#" }
    ]
  },
  {
    id: "pinkmeme",
    icon: () => <div className="text-pink-500">👾</div>,
    label: "PinkMeme",
    link: "#",
    hasChildren: true,
    children: [
      { id: "create-meme", label: "Create Meme", link: "#" },
      { id: "browse-memes", label: "Browse Memes", link: "#" }
    ]
  },
  {
    id: "teleairdrop",
    icon: () => <div className="text-pink-500">☁️</div>,
    label: "Tele Airdrop Bot",
    link: "#",
    hasChildren: true,
    children: [
      { id: "create-airdrop", label: "Create Airdrop", link: "#" },
      { id: "my-airdrops", label: "My Airdrops", link: "#" }
    ]
  },
  {
    id: "pinklock",
    icon: () => <div className="text-pink-500">🔒</div>,
    label: "PinkLock",
    link: "#",
    hasChildren: true,
    children: [
      { id: "create-lock", label: "Create Lock", link: "#" },
      { id: "my-locks", label: "My Locks", link: "#" }
    ]
  },
  {
    id: "airdrops",
    icon: () => <div className="text-pink-500">🪂</div>,
    label: "Airdrops",
    link: "#",
    hasChildren: true,
    children: [
      { id: "create-airdrop", label: "Create Airdrop", link: "#" },
      { id: "claim-airdrop", label: "Claim Airdrop", link: "#" }
    ]
  },
  {
    id: "token",
    icon: () => <div className="text-pink-500">➕</div>,
    label: "Token",
    link: "#",
    hasChildren: true,
    children: [
      { id: "create-token", label: "Create Token", link: "#" },
      { id: "manage-tokens", label: "Manage Tokens", link: "#" }
    ]
  },
  {
    id: "support",
    icon: () => <div className="text-pink-500">📨</div>,
    label: "Support",
    link: "#",
    hasChildren: true,
    children: [
      { id: "contact", label: "Contact Us", link: "#" },
      { id: "faq", label: "FAQ", link: "#" }
    ]
  },
  { id: "divider1", type: "divider" },
  {
    id: "leaderboards",
    icon: () => <div className="text-gray-600">🛡️</div>,
    label: "Leaderboards",
    link: "#",
    hasChildren: false,
  },
  {
    id: "buycrypto",
    icon: () => <div className="text-gray-600">💻</div>,
    label: "Buy Crypto Fiat",
    link: "#",
    hasChildren: false,
  },
  {
    id: "antibot",
    icon: () => <div className="text-gray-600">🤖</div>,
    label: "Anti-Bot",
    link: "#",
    hasChildren: false,
  },
  {
    id: "multisender",
    icon: () => <div className="text-gray-600">▶️</div>,
    label: "Multi-Sender",
    link: "#",
    hasChildren: false,
  },
  { id: "divider2", type: "divider" },
  {
    id: "dexview",
    icon: () => <div className="text-gray-600">📈</div>,
    label: "dexview.com",
    link: "#",
    hasChildren: false,
  },
  {
    id: "poolsalert",
    icon: () => <div className="text-gray-600">🏠</div>,
    label: "Pools alert",
    link: "#",
    hasChildren: false,
  },
  {
    id: "kycaudit",
    icon: () => <div className="text-gray-600">✅</div>,
    label: "KYC & Audit",
    link: "#",
    hasChildren: false,
  },
  {
    id: "docs",
    icon: () => <div className="text-gray-600">📄</div>,
    label: "Docs",
    link: "#",
    hasChildren: false,
  },
  {
    id: "shop",
    icon: () => <div className="text-gray-600">🛒</div>,
    label: "Shop",
    link: "#",
    hasChildren: false,
  },
  { id: "divider3", type: "divider" },
  {
    id: "telegram",
    icon: () => <div className="text-pink-500">📨</div>,
    label: "Telegram",
    link: "#",
    hasChildren: true,
    children: [
      { id: "join-channel", label: "Join Channel", link: "#" },
      { id: "support-chat", label: "Support Chat", link: "#" }
    ]
  },
  {
    id: "twitter",
    icon: () => <div className="text-gray-600">✖️</div>,
    label: "X",
    link: "#",
    hasChildren: false,
  },
  {
    id: "facebook",
    icon: () => <div className="text-gray-600">📘</div>,
    label: "Facebook",
    link: "#",
    hasChildren: false,
  },
  { id: "divider4", type: "divider" },
  {
    id: "theme",
    icon: () => <div className="text-pink-500">☯️</div>,
    label: "Theme",
    link: "#",
    hasChildren: true,
    children: [
      { id: "light-theme", label: "Light", link: "#" },
      { id: "dark-theme", label: "Dark", link: "#" }
    ]
  },
];

const Sidebar = ({ collapsed }) => {
  const [expandedMenus, setExpandedMenus] = useState({});
  const [activeItem, setActiveItem] = useState(null);

  // Toggle submenu expansion
  const toggleSubmenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  return (
    <aside
      className={`h-full min-h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        collapsed ? "w-20" : "w-80"
      }`}
    >
      {/* Logo Section */}
      <div className={`p-4 flex ${collapsed ? "justify-center" : "justify-between"} items-center border-b border-gray-200`}>
        {collapsed ? (
          <img src={mainLogo} alt="Logo" className="h-8 w-8" />
        ) : (
          <>
            <img src={mainLogo} alt="Logo" className="h-8" />
          </>
        )}
      </div>

      {/* Menu Items */}
      <nav className="py-2 overflow-y-auto h-[calc(100vh-4rem)]">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => {
            if (item.type === "divider") {
              return (
                <li key={item.id} className="my-2">
                  <hr className="border-gray-200" />
                </li>
              );
            }

            const isExpanded = expandedMenus[item.id];
            const Icon = item.icon;

            return (
              <li key={item.id} className="relative">
                <a
                  href={item.link}
                  className={`flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-200 group
                    ${activeItem === item.id ? "bg-gray-100" : "hover:bg-gray-100"}
                    ${collapsed ? "justify-center" : "justify-between"}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (item.hasChildren) {
                      toggleSubmenu(item.id);
                    } else {
                      setActiveItem(item.id === activeItem ? null : item.id);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <Icon />
                    </span>
                    {!collapsed && (
                      <span className={`ml-3 ${item.hasChildren && isExpanded ? "font-medium" : ""} text-gray-700`}>
                        {item.label}
                      </span>
                    )}
                  </div>
                  
                  {!collapsed && item.hasChildren && (
                    isExpanded ? 
                    <ChevronDown className="w-4 h-4 text-gray-500" /> :
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  )}
                </a>

                {/* Dropdown menu */}
                {!collapsed && item.hasChildren && isExpanded && (
                  <div className="pl-8 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={child.link}
                        className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:text-pink-500 rounded-md hover:bg-gray-50"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveItem(child.id);
                        }}
                      >
                        <span 
                          className={`${activeItem === child.id ? "text-pink-500 font-medium" : ""}`}
                        >
                          {child.label}
                        </span>
                        {activeItem === child.id && (
                          <CheckCircle className="w-4 h-4 ml-2 text-pink-500" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;