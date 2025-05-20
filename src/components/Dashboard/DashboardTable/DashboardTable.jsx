import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import tableicon1 from '../../../Assets/DashboardTableicon1.svg';
import tableicon2 from '../../../Assets/DashboardTableicon2.svg';
import tableicon3 from '../../../Assets/DashboardTableicon3.png';
import tableicon4 from '../../../Assets/DashboardTableicon4.png';
import tableicon5 from '../../../Assets/DashboardTableicon5.svg';
import tableicon6 from '../../../Assets/DashboardTableicon6.png';
import tableicon7 from '../../../Assets/DashboardTableicon7.svg';
import tableicon8 from '../../../Assets/DashboardTableicon8.svg';
import tableicon9 from '../../../Assets/DashboardTableicon9.svg';
import tableicon10 from '../../../Assets/DashboardTableicon10.png';

const DashboardTable = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  
  const chainData = [
    { 
      id: "binance", 
      name: "Binance",
      logo: tableicon1, 
      projects: "23.9K", 
      participants: "2.8M", 
      liquidityRaised: "$1.2B", 
      valuesLocked: "$130.8M" 
    },
    { 
      id: "ethereum", 
      name: "Ethereum",
      logo: tableicon2, 
      projects: "3.1K", 
      participants: "163.7K", 
      liquidityRaised: "$123.6M", 
      valuesLocked: "$24.8M" 
    },
    { 
      id: "polkadot", 
      name: "Polkadot",
      logo: tableicon3, 
      projects: "3.1K", 
      participants: "505.6K", 
      liquidityRaised: "$102M", 
      valuesLocked: "$15.5M" 
    },
    { 
      id: "cosmos", 
      name: "Cosmos",
      logo: tableicon4, 
      projects: "-", 
      participants: "-", 
      liquidityRaised: "-", 
      valuesLocked: "-" 
    },
    { 
      id: "avalanche", 
      name: "Avalanche",
      logo: tableicon5, 
      projects: "284", 
      participants: "18.3K", 
      liquidityRaised: "$8.8M", 
      valuesLocked: "$181.2K" 
    },
    { 
      id: "polygon", 
      name: "Polygon",
      logo: tableicon6, 
      projects: "618", 
      participants: "5.3K", 
      liquidityRaised: "$590.9K", 
      valuesLocked: "$77.3K" 
    },
    { 
      id: "avalanche-alt", 
      name: "Avalanche",
      logo: tableicon7, 
      projects: "133", 
      participants: "7.9K", 
      liquidityRaised: "$1.3M", 
      valuesLocked: "$153.1K" 
    },
    { 
      id: "sui", 
      name: "Sui",
      logo: tableicon8, 
      projects: "42", 
      participants: "535", 
      liquidityRaised: "$51.7K", 
      valuesLocked: "$11.4K" 
    },
    { 
      id: "arbitrum", 
      name: "Arbitrum",
      logo: tableicon9, 
      projects: "73", 
      participants: "1.9K", 
      liquidityRaised: "$81.5K", 
      valuesLocked: "$34.9K" 
    },
    { 
      id: "optimism", 
      name: "Optimism",
      logo: tableicon10, 
      projects: "4", 
      participants: "5", 
      liquidityRaised: "$0", 
      valuesLocked: "$1.3K" 
    }
  ];

  // Theme-based styling
  const getThemeClasses = () => {
    switch (currentTheme) {
      case "dark":
        return {
          container: "bg-gray-900 text-white",
          card: "bg-gray-800 border-gray-700",
          title: "text-white",
          subtitle: "text-gray-300",
          headerRow: "border-gray-700 text-gray-300",
          tableRow: "border-gray-700 hover:bg-gray-700",
          text: "text-gray-200",
          secondaryText: "text-gray-400"
        };
      case "dim":
        return {
          container: "bg-gray-800 text-gray-200",
          card: "bg-gray-700 border-gray-600",
          title: "text-gray-200",
          subtitle: "text-gray-300",
          headerRow: "border-gray-600 text-gray-300",
          tableRow: "border-gray-600 hover:bg-gray-600",
          text: "text-gray-200",
          secondaryText: "text-gray-400"
        };
      default: // light theme
        return {
          container: "bg-gray-50 text-gray-800",
          card: "bg-white border-gray-200",
          title: "text-gray-800",
          subtitle: "text-gray-600",
          headerRow: "border-gray-200 text-gray-500",
          tableRow: "border-gray-200 hover:bg-gray-50",
          text: "text-gray-800",
          secondaryText: "text-gray-500"
        };
    }
  };

  const themeClasses = getThemeClasses();

  return (
    <div className={`w-full py-6 px-4 md:px-6 ${themeClasses.container} DashboardTable`}>
      <div className={`max-w-7xl mx-auto`}>
        <h1 className={`text-2xl font-bold mb-2 ${themeClasses.title} DashboardTable`}>
          {t('dashboardTable.title')}
        </h1>
        <p className={`mb-6 ${themeClasses.subtitle} DashboardTable`}>
          {t('dashboardTable.subtitle')}
        </p>
        
        <div className={`overflow-x-auto rounded-xl border ${themeClasses.card} DashboardTable`}>
          <table className="min-w-full divide-y divide-gray-200 DashboardTable">
            <thead>
              <tr className={`${themeClasses.headerRow} DashboardTable`}>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider DashboardTable">
                  {t('dashboardTable.headers.chain')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider DashboardTable">
                  {t('dashboardTable.headers.projects')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider DashboardTable">
                  {t('dashboardTable.headers.participants')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider DashboardTable">
                  {t('dashboardTable.headers.liquidityRaised')}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider DashboardTable">
                  {t('dashboardTable.headers.valuesLocked')}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 DashboardTable">
              {chainData.map((chain, index) => (
                <tr 
                  key={`${chain.id}-${index}`} 
                  className={`${themeClasses.tableRow} DashboardTable`}
                >
                  <td className="px-6 py-4 whitespace-nowrap DashboardTable">
                    <div className="flex items-center gap-3 DashboardTable">
                      <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center DashboardTable">
                        <img 
                          src={chain.logo} 
                          alt={`logo`} 
                          className="h-6 w-6 object-contain DashboardTable"
                        />
                      </div>
                      <span className={`font-medium ${themeClasses.text} DashboardTable`}>
                        {chain.name}
                      </span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${themeClasses.text} DashboardTable`}>
                    {chain.projects}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${themeClasses.text} DashboardTable`}>
                    {chain.participants}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${themeClasses.text} DashboardTable`}>
                    {chain.liquidityRaised}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap ${themeClasses.text} DashboardTable`}>
                    {chain.valuesLocked}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardTable;