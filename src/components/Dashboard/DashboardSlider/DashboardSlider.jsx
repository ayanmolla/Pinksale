import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import boximg1 from '../../../Assets/DashboardSliderboximg1.png';
import boximg2 from '../../../Assets/DashboardSliderboximg2.jpeg';
import boximg3 from '../../../Assets/DashboardSliderboximg3.png';
import boximg4 from '../../../Assets/DashboardSliderboximg4.png';
import boximg5 from '../../../Assets/DashboardSliderboximg5.png';
import boximg6 from '../../../Assets/DashboardSliderboximg6.png';
import boximg7 from '../../../Assets/DashboardSliderboximg7.png';
import boximg8 from '../../../Assets/DashboardSliderboximg8.png';
import boximg9 from '../../../Assets/DashboardSliderboximg9.png';
import boximg10 from '../../../Assets/DashboardSliderboximg10.png';
import boxicon1 from '../../../Assets/DashboardSlidericon1.png';
import boxicon2 from '../../../Assets/DashboardSlidericon2.png';
import boxicon3 from '../../../Assets/DashboardSlidericon3.svg';
import boxicon4 from '../../../Assets/DashboardSlidericon4.svg';
import boxicon5 from '../../../Assets/DashboardSlidericon5.svg';
import boxicon6 from '../../../Assets/DashboardSlidericon6.svg';
import boxicon7 from '../../../Assets/DashboardSlidericon7.png';
import boxicon8 from '../../../Assets/DashboardSlidericon8.png';
import boxicon9 from '../../../Assets/DashboardSlidericon9.svg';
import boxicon10 from '../../../Assets/DashboardSlidericon10.png';

const DashboardSlider = () => {
  const { theme } = useTheme();
  const currentTheme = theme || "light";
  const carouselRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  // Sample token data with boximg for images and boxicon for badges
  const tokens = [
    { id: 1, name: "Toad", symbol: "$TOAD", tag: "x231", badgeType: boxicon1, image: boximg1 },
    { id: 2, name: "Value Of...", symbol: "LIFE", tag: "x786", badgeType: boxicon2, image: boximg2 },
    { id: 3, name: "Cowcoin", symbol: "COW", tag: "x789", badgeType: boxicon3, image: boximg3 },
    { id: 4, name: "Replay", symbol: "RAI", tag: "x713", badgeType: boxicon4, image: boximg4 },
    { id: 5, name: "Koma Inu", symbol: "KOMA", tag: "x447", badgeType: boxicon5, image: boximg5 },
    { id: 6, name: "Baby Neiro", symbol: "BabyNeiro", tag: "x475", badgeType: boxicon6, image: boximg6 },
    { id: 7, name: "DOOM", symbol: "DOOM", tag: "x71", badgeType: boxicon7, image: boximg7 },
    { id: 8, name: "Eagle AI", symbol: "EAI", tag: "x61", badgeType: boxicon8, image: boximg8 },
    { id: 9, name: "GoldenRat", symbol: "RATS", tag: "x48", badgeType: boxicon9, image: boximg9 },
    { id: 10, name: "Pepp", symbol: "PEPP", tag: "x48", badgeType: boxicon10, image: boximg10 },
    { id: 11, name: "Toad", symbol: "$TOAD", tag: "x231", badgeType: boxicon3, image: boximg1 },
    { id: 12, name: "Replay", symbol: "RAI", tag: "x713", badgeType: boxicon10, image: boximg4 }
  ];

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    
    const checkScroll = () => {
      setShowLeftButton(container.scrollLeft > 0);
      const maxScroll = container.scrollWidth - container.clientWidth;
      setShowRightButton(container.scrollLeft < maxScroll - 5);
    };
    
    // Reset scroll position and add listener
    container.scrollLeft = 0;
    container.addEventListener('scroll', checkScroll);
    checkScroll();
    
    return () => container.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    
    const cardWidth = 32;
    const visibleCards = Math.floor(container.clientWidth / cardWidth);
    const scrollCards = Math.max(1, Math.floor(visibleCards / 2));
    const scrollAmount = direction === 'left' ? -cardWidth * scrollCards : cardWidth * scrollCards;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`max-w-7xl mx-auto mt-4 relative DashboardSlider-container DashboardHero`}>
      {/* Navigation buttons */}
      {showLeftButton && (
        <button 
          onClick={() => scroll('left')} 
          className={`absolute left-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
            currentTheme === "light" 
              ? "bg-white text-gray-800 hover:bg-gray-100"
              : currentTheme === "dark"
                ? "bg-gray-800 text-white shadow-gray-900 hover:bg-gray-700"
                : "bg-gray-700 text-gray-200 shadow-gray-800 hover:bg-gray-600"
          }`}
        >
          <ChevronLeft size={18} />
        </button>
      )}
      
      {showRightButton && (
        <button 
          onClick={() => scroll('right')} 
          className={`absolute right-2 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md transition-colors ${
            currentTheme === "light" 
              ? "bg-white text-gray-800 hover:bg-gray-100" 
              : currentTheme === "dark"
                ? "bg-gray-800 text-white shadow-gray-900 hover:bg-gray-700"
                : "bg-gray-700 text-gray-200 shadow-gray-800 hover:bg-gray-600"
          }`}
        >
          <ChevronRight size={18} />
        </button>
      )}
      
      {/* Token carousel */}
      <div 
        ref={carouselRef}
        className="max-w-7xl mx-auto flex overflow-x-auto scrollbar-hide pb-4 pt-2 px-4 DashboardSlider-scroll DashboardHero"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tokens.map(token => (
          <div 
            key={token.id} 
            className={`flex-shrink-0 w-32 py-5 cursor-pointer relative transition-transform duration-300 hover:-translate-y-1 border-r DashboardSlider-item DashboardHero ${
              currentTheme === "light" 
                ? "bg-white text-gray-900 border-gray-100"
                : currentTheme === "dark"
                  ? "bg-gray-800 text-gray-200 border-gray-700"
                  : "bg-gray-700 text-gray-200 border-gray-600"
            }`}
          >
            {/* Token ribbon */}
            {token.tag && (
              <div className="absolute -top-0 -left-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-24 transform -rotate-45 -translate-x-6 -translate-y-3 flex items-center justify-center bg-green-400 text-white text-xs py-0.5 DashboardSlider-ribbon DashboardHero">
                  {token.tag}
                </div>
              </div>
            )}
            
            <div className="relative h-12 w-12 mx-auto mb-2">
              {/* Token logo */}
              <div className="w-full h-full rounded-full flex items-center justify-center relative">
                <img 
                  src={token.image} 
                  alt={token.name} 
                  className="w-full h-full object-cover rounded-full"
                />
                
                {/* Badge */}
                <div className="absolute -bottom-0 -right-1 w-5 h-5 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                  <img 
                    src={token.badgeType} 
                    alt="Badge" 
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-medium text-xs mb-0.5">{token.name}</h3>
              <p className={`text-xs ${
                currentTheme === "light" 
                  ? "text-gray-500" 
                  : currentTheme === "dark"
                    ? "text-gray-400"
                    : "text-gray-300"
              }`}>
                {token.symbol}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSlider;