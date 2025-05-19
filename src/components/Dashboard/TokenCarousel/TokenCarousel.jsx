import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Toad from '../../../Assets/Original.png';
import A from '../../../Assets/ic-arbitrum.e0e56f04.svg';

const TokenCarousel = () => {
  // Use a state to track theme instead of next-themes
  const [theme, setTheme] = useState("light");
  const currentTheme = theme;
  const [scrollPosition, setScrollPosition] = useState(0);
  const carouselRef = useRef(null);

  // Create placeholder SVG components instead of importing
  const ToadIcon = ({ className }) => (
    <img src={Toad} alt="" />
  );

  const LifeIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="#2196F3" />
      <text x="50" y="65" fontSize="40" textAnchor="middle" fill="white">L</text>
    </svg>
  );

  // Sample token data with SVG components
  const tokens = [
    { 
      id: 1, 
      name: "Toad", 
      symbol: "$TOAD", 
      color: "#FF9800", 
      tag: "x231",
      badgeType: A,
      image: ToadIcon // Using SVG component
    },
    { 
      id: 2, 
      name: "Value Of...", 
      symbol: "LIFE", 
      color: "#FFD700", 
      tag: "x786",
      badgeType: A,
      image: LifeIcon // Using SVG component
    },
    { 
      id: 3, 
      name: "Cowcoin", 
      symbol: "COW", 
      color: "#FFEB3B", 
      tag: "x789",
      badgeType: "gold",
      image: ToadIcon // Using SVG component
    },
    { 
      id: 4, 
      name: "Replay", 
      symbol: "RAI", 
      color: "#00E676", 
      tag: "x713",
      badgeType: "blue",
      image: LifeIcon // Using SVG component
    },
    { 
      id: 5, 
      name: "Koma Inu", 
      symbol: "KOMA", 
      color: "#FF5252", 
      tag: "x447",
      badgeType: "gold",
      image: ToadIcon // Using SVG component
    },
    { 
      id: 6, 
      name: "Baby Neiro", 
      symbol: "BabyNeiro", 
      color: "#FFA726", 
      tag: "x475",
      badgeType: "gold",
      image: LifeIcon // Using SVG component
    },
    { 
      id: 7, 
      name: "DOOM", 
      symbol: "DOOM", 
      color: "#FFEE58", 
      tag: "x71",
      badgeType: "dark",
      image: ToadIcon // Using SVG component
    },
    { 
      id: 8, 
      name: "Eagle AI", 
      symbol: "EAI", 
      color: "#00B0FF", 
      tag: "x61",
      badgeType: "blue",
      image: LifeIcon // Using SVG component
    },
    { 
      id: 9, 
      name: "GoldenRat", 
      symbol: "RATS", 
      color: "#FFD54F", 
      tag: "x48",
      badgeType: "gold",
      image: ToadIcon // Using SVG component
    },
    { 
      id: 10, 
      name: "Pepp", 
      symbol: "PEPP", 
      color: "#F44336", 
      tag: "",
      badgeType: "none",
      image: LifeIcon // Using SVG component
    }
  ];

  // Scroll the carousel left or right
  const scroll = (direction) => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -container.clientWidth / 2 : container.clientWidth / 2;
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
      setScrollPosition(prev => prev + scrollAmount);
    }
  };

  return (
    <div className={`w-full mt-14 relative TokenCarousel-container DashboardHero ${
      currentTheme === "light" 
        ? "color-scheme" 
        : currentTheme === "dark" 
          ? "color-scheme" 
          : "color-scheme"
    }`}>
      {/* Carousel navigation buttons */}
      <button 
        onClick={() => scroll('left')} 
        className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center ${
          currentTheme === "light"
            ? "bg-white text-gray-800 shadow-md hover:bg-gray-100"
            : "bg-gray-800 text-white shadow-gray-900 hover:bg-gray-700"
        }`}
      >
        <ChevronLeft size={18} />
      </button>
      
      <button 
        onClick={() => scroll('right')} 
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center ${
          currentTheme === "light"
            ? "bg-white text-gray-800 shadow-md hover:bg-gray-100"
            : "bg-gray-800 text-white shadow-gray-900 hover:bg-gray-700"
        }`}
      >
        <ChevronRight size={18} />
      </button>
      
      {/* Token carousel */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto scrollbar-hide pb-6 pt-2 px-8 TokenCarousel-scroll DashboardHero"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tokens.map(token => (
          <div 
            key={token.id} 
            className={`flex-shrink-0 w-32 mx-2 cursor-pointer transition-transform duration-300 hover:translate-y-[-5px] TokenCarousel-item DashboardHero ${
              currentTheme === "light"
                ? "text-gray-900"
                : "text-gray-200"
            }`}
          >
            <div className="relative h-14 w-14 mx-auto mb-3">
              {/* Token ribbon with tag */}
              {token.tag && (
                <div className="absolute -top-3 -left-3 w-16 h-16 overflow-hidden">
                  <div className={`absolute top-0 left-0 w-24 transform -rotate-45 -translate-x-6 -translate-y-6 flex items-center justify-center bg-green-400 text-white text-xs py-1 TokenCarousel-ribbon DashboardHero`}>
                    {token.tag}
                  </div>
                </div>
              )}
              
              {/* Token logo - now uses images for all tokens */}
              <div 
                className="w-full h-full rounded-full flex items-center justify-center relative"
                style={{ backgroundColor: token.color }}
              >
                {token.image && (
                  // Use the SVG component (render directly, no need for React.createElement)
                  <div className="w-4/5 h-4/5 flex items-center justify-center">
                    <token.image className="w-full h-full object-contain" />
                  </div>
                )}
                
                {/* Badge using A image instead of badgeType */}
                {token.badgeType !== "none" && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                    <img src={token.badgeType} alt="A" className="w-full h-full object-cover" />
                  </div>
                )}
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-sm mb-1">{token.name}</h3>
              <p className={`text-xs ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>{token.symbol}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default TokenCarousel;