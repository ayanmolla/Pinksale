import { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import boxicon from '../../../Assets/DashboardTools.svg';

const DashboardTools = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  
  const tools = [
    {
      id: 1,
      title: t('dashboardTools.tools.standard.title'),
      description: t('dashboardTools.tools.standard.description'),
      image: boxicon
    },
    {
      id: 2,
      title: t('dashboardTools.tools.deflationary.title'),
      description: t('dashboardTools.tools.deflationary.description'),
      image: boxicon
    },
    {
      id: 3,
      title: t('dashboardTools.tools.customization.title'),
      description: t('dashboardTools.tools.customization.description'),
      image: boxicon
    },
    {
      id: 4,
      title: t('dashboardTools.tools.launchpad.title'),
      description: t('dashboardTools.tools.launchpad.description'),
      image: boxicon
    },
    {
      id: 5,
      title: t('dashboardTools.tools.branding.title'),
      description: t('dashboardTools.tools.branding.description'),
      image: boxicon
    },
    {
      id: 6,
      title: t('dashboardTools.tools.management.title'),
      description: t('dashboardTools.tools.management.description'),
      image: boxicon
    },
    {
      id: 7,
      title: t('dashboardTools.tools.community.title'),
      description: t('dashboardTools.tools.community.description'),
      image: boxicon
    },
    {
      id: 8,
      title: t('dashboardTools.tools.locking.title'),
      description: t('dashboardTools.tools.locking.description'),
      image: boxicon
    }
  ];

  return (
    <div className={`Dashboard__Tools py-8 px-4 `}>
      <div className="Dashboard__Tools-container max-w-7xl mx-auto">
        <div className="Dashboard__Tools-header text-center mb-10">
          <h2 className={`Dashboard__Tools-title text-3xl font-bold mb-4 ${
            currentTheme === "light" 
              ? "text-gray-900" 
              : "text-gray-100"
          }`}>
            {t('dashboardTools.title')}
          </h2>
          <p className={`Dashboard__Tools-subtitle max-w-3xl mx-auto ${
            currentTheme === "light" 
              ? "text-gray-600" 
              : "text-gray-300"
          }`}>
            {t('dashboardTools.subtitle')}
          </p>
        </div>
        
        <div className="Dashboard__Tools-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id} 
              className={`Dashboard__Tools-card p-6 rounded-lg transition-all duration-200 hover:transform hover:-translate-y-1 ${
                currentTheme === "light" 
                  ? "bg-gray-50 border border-gray-200" 
                  : currentTheme === "dark" 
                    ? "bg-gray-800 border border-gray-700" 
                    : "bg-gray-700 border border-gray-600"
              }`}
            >
              <div className="Dashboard__Tools-iconWrapper mb-4 flex justify-center">
                <div className={`Dashboard__Tools-icon w-16 h-16 flex items-center justify-center rounded-full ${
                  currentTheme === "light" 
                    ? "bg-pink-100" 
                    : "bg-pink-900"
                }`}>
                  <img 
                    src={tool.image} 
                    alt={`${tool.title} icon`} 
                    className="Dashboard__Tools-image w-10 h-10 object-contain"
                  />
                </div>
              </div>
              <h3 className={`Dashboard__Tools-cardTitle text-xl font-semibold text-center mb-2 ${
                currentTheme === "light" 
                  ? "text-gray-900" 
                  : "text-gray-100"
              }`}>
                {tool.title}
              </h3>
              <p className={`Dashboard__Tools-cardDescription text-center text-sm ${
                currentTheme === "light" 
                  ? "text-gray-600" 
                  : "text-gray-300"
              }`}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardTools;