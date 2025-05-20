import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import logoimg from '../../../Assets/Logoimg.svg';

const DashboardHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  const statsRef = useRef(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    
    let active = true;
    let pos = { x: 0, y: 0 };
    let tgt = { x: -3, y: -3 };
    let dir = { x: -1, y: -1 };
    
    const animate = () => {
      if (!active) return;
      
      pos.x += (tgt.x - pos.x) * 0.03;
      pos.y += (tgt.y - pos.y) * 0.03;
      
      if (Math.abs(pos.x - tgt.x) < 0.1) {
        dir.x *= -1;
        tgt.x = dir.x * (3 + Math.random() * 2);
      }
      
      if (Math.abs(pos.y - tgt.y) < 0.1) {
        dir.y *= -1;
        tgt.y = dir.y * (3 + Math.random() * 2);
      }
      
      el.style.transform = `perspective(1000px) rotateX(${4 + pos.y}deg) rotateY(${-16 + pos.x}deg) rotate(4deg)`;
      requestAnimationFrame(animate);
    };
    
    animate();
    return () => { active = false; };
  }, []);

  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-8 DashboardHero">
      {/* Announcement Banner */}
      <div className="relative max-w-7xl mx-auto mb-12">
        <div className={`relative rounded-xl p-2 flex items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.05)] ${
          currentTheme === "light"
            ? "bg-gray-50 border border-gray-100 text-gray-800"
            : currentTheme === "dark"
              ? "bg-gray-800 border border-gray-700 text-gray-200"
              : "bg-gray-700 border border-gray-600 text-gray-200"
        }`}>
          <div className="flex items-center gap-2">
            <span className="text-pink-500">🚀</span>
            <p className="font-medium text-sm">{t('dashboardHero.announcement')}</p>
          </div>
          <div className="flex gap-2">
            <button className="p-1 rounded hover:bg-pink-100 dark:hover:bg-pink-800/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </button>
            <button className="p-1 rounded hover:bg-pink-100 dark:hover:bg-pink-800/30">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text Content */}
        <div className="space-y-6 DashboardHero-content">
          <h1 className={`text-4xl md:text-5xl font-bold leading-tight ${
            currentTheme === "light" ? "text-gray-900" : "text-white"
          }`}>
            {t('dashboardHero.title')}
          </h1>
          
          <p className={`text-lg ${
            currentTheme === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
            {t('dashboardHero.description')}
            <br />
            {t('dashboardHero.subDescription')}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-6 py-2 rounded-lg bg-pink-500 hover:bg-pink-600 text-white font-medium transition-colors">
              {t('dashboardHero.createButton')}
            </button>
            <button className={`px-6 py-2 rounded-lg border font-medium transition-colors ${
              currentTheme === "light"
                ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                : "border-gray-700 text-gray-300 hover:bg-gray-800"
            }`}>
              {t('dashboardHero.learnButton')}
            </button>
          </div>
        </div>
        
        {/* Right side - Stats with 3D effect */}
        <div 
          ref={statsRef}
          className={`rounded-xl p-5 transform ${
            currentTheme === "light" ? "bg-white" : 
            currentTheme === "dim" ? "bg-gray-700" : "bg-gray-800"
          }`}
          style={{ 
            transform: "perspective(1000px) rotateX(4deg) rotateY(-16deg) rotate(4deg)",
            transformOrigin: "center center" 
          }}
        >
          <h2 className={`text-xl font-bold mb-4 flex items-center gap-2 ${
            currentTheme === "light" ? "text-gray-800" : "text-gray-200"
          }`}>
            <span>🎉</span> {t('dashboardHero.statsTitle')}
          </h2>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Stats */}
            <div className="text-center">
              <h3 className="text-4xl font-bold text-pink-500">$1.7B</h3>
              <p className={`text-sm mt-1 ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>{t('dashboardHero.stats.liquidityRaised')}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-pink-500">31.5K</h3>
              <p className={`text-sm mt-1 ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>{t('dashboardHero.stats.totalProjects')}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-pink-500">3.5M</h3>
              <p className={`text-sm mt-1 ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>{t('dashboardHero.stats.participants')}</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-4xl font-bold text-pink-500">$173.7M</h3>
              <p className={`text-sm mt-1 ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>{t('dashboardHero.stats.valueLocked')}</p>
            </div>
          </div>
          
          {/* Divider */}
          <div className={`border-t my-4 ${
            currentTheme === "light" ? "border-gray-200" : "border-gray-700"
          }`}></div>
          
          {/* PinkSale Badge */}
          <div className="flex justify-between items-center">
            <div className={`px-3 py-1 rounded-lg flex items-center gap-2 ${
              currentTheme === "light" ? "bg-pink-50 text-pink-600" : "bg-pink-900/20 text-pink-400"
            }`}>
              <img src={logoimg} alt="" className="w-8 h-8" />
              <span className="font-medium">PINKSALE</span>
            </div>
            <div className="text-pink-500 font-bold">$253.91</div>
          </div>
          
          {/* Explore Button */}
          <button className={`w-full mt-4 py-2 px-4 rounded-full border-2 border-pink-500 font-medium text-pink-500 hover:bg-pink-500/10 transition-colors ${
            currentTheme === "light" ? "bg-white" : 
            currentTheme === "dim" ? "bg-gray-700" : "bg-gray-900"
          }`}>
            {t('dashboardHero.exploreButton')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;