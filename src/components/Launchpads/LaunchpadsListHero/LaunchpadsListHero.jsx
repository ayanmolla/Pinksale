import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import boxicon1 from '../../../Assets/LaunchpadsListHeroicon1.png';
import boxicon2 from '../../../Assets/LaunchpadsListHeroicon2.png';
import boxicon3 from '../../../Assets/LaunchpadsListHeroicon3.jpg';
import boxicon4 from '../../../Assets/LaunchpadsListHeroicon4.png';
import boxicon5 from '../../../Assets/LaunchpadsListHeroicon5.jpg';
import boxicon6 from '../../../Assets/LaunchpadsListHeroicon6.png';

const LaunchpadsListHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortOption, setSortOption] = useState("no-sort");
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  const tabs = [
    { id: "all", label: t('launchpadlist.tabs.all') },
    { id: "advanced", label: t('launchpadlist.tabs.advancedMode') },
    { id: "contributions", label: t('launchpadlist.tabs.myContributions') }
  ];

  const statusOptions = [
    { id: "all", label: t('launchpadlist.filters.allStatus') },
    { id: "upcoming", label: t('launchpadlist.filters.upcoming') },
    { id: "live", label: t('launchpadlist.filters.live') },
    { id: "ended", label: t('launchpadlist.filters.ended') }
  ];

  const sortOptions = [
    { id: "no-sort", label: t('launchpadlist.sort.noSort') },
    { id: "name", label: t('launchpadlist.sort.name') },
    { id: "progress", label: t('launchpadlist.sort.progress') },
    { id: "time", label: t('launchpadlist.sort.time') }
  ];

  const launchpadlistData = [
    {
      id: 1,
      name: "PixelPepe",
      symbol: "PIXEL",
      chain: "BNB Smart Chain",
      image: boxicon1,
      softCap: "10 BNB",
      hardCap: "2.5 BNB",
      progress: 0.30,
      status: "live",
      liquidity: "51%",
      lockupTime: "100 days",
      saleStarts: "01:02:47:26",
      isAffiliate: true,
      subscribers: 12,
      contributed: false,
      advanced: false
    },
    {
      id: 2,
      name: "King Kong",
      symbol: "KONG",
      chain: "BNB Smart Chain",
      image: boxicon2,
      softCap: "5 BNB",
      hardCap: "1.35 BNB",
      progress: 0.28,
      status: "live",
      liquidity: "51%",
      lockupTime: "365 days",
      saleStarts: "01:02:47:26",
      isAffiliate: true,
      subscribers: 8,
      contributed: true,
      advanced: true
    },
    {
      id: 3,
      name: "BIGRIG TOKEN",
      symbol: "BIGRIG",
      chain: "BNB Smart Chain",
      image: boxicon3,
      softCap: "53,000 - 250,000 BNB",
      hardCap: "",
      progress: 0.00,
      status: "upcoming",
      liquidity: "79%",
      lockupTime: "3700 days",
      saleStarts: "05:19:47:26",
      isAffiliate: true,
      subscribers: 5,
      contributed: false,
      advanced: true
    },
    {
      id: 4,
      name: "LandWolf BSC",
      symbol: "LWOLF",
      chain: "BNB Smart Chain",
      image: boxicon4,  
      softCap: "10 BNB",
      hardCap: "1.5 BNB",
      progress: 1.02,
      status: "ended",
      liquidity: "51%",
      lockupTime: "100 days",
      saleStarts: "Ended",
      isAffiliate: true,
      subscribers: 15,
      contributed: true,
      advanced: false
    },
    {
      id: 5,
      name: "STITCH",
      symbol: "STITCH",
      chain: "BNB Smart Chain",
      image: boxicon5,
      softCap: "1 - 5 BNB",
      hardCap: "",
      progress: 0.06,
      status: "live",
      liquidity: "51%",
      lockupTime: "200 days",
      saleStarts: "Live",
      isAffiliate: false,
      subscribers: 3,
      contributed: false,
      advanced: true
    },
    {
      id: 6,
      name: "Vhixarcoin",
      symbol: "VHX",
      chain: "BNB Smart Chain",
      image: boxicon6,      
      softCap: "30 - 120 BNB",
      hardCap: "",
      progress: 0.06,
      status: "upcoming",
      liquidity: "75%",
      lockupTime: "36 days",
      saleStarts: "02:22:47:26",
      isAffiliate: true,
      subscribers: 7,
      contributed: true,
      advanced: true
    }
  ];

  const filteredlaunchpadlist = launchpadlistData.filter(launchpad => {
    const matchesSearch = launchpad.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         launchpad.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || launchpad.status === statusFilter;
    const matchesTab = activeTab === "all" || 
                      (activeTab === "contributions" && launchpad.contributed) ||
                      (activeTab === "advanced" && launchpad.advanced);
    return matchesSearch && matchesStatus && matchesTab;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "live":
        return "text-green-600 bg-green-100";
      case "upcoming":
        return "text-orange-600 bg-orange-100";
      case "ended":
        return "text-gray-600 bg-gray-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getProgressColor = (progress) => {
    if (progress >= 1) return "bg-green-500";
    if (progress >= 0.5) return "bg-yellow-500";
    return "bg-pink-500";
  };

  const ConnectWalletSection = () => (
    <div className={`rounded-lg border p-8 text-center ${
      currentTheme === "light"
        ? "bg-pink-50 border-pink-200"
        : currentTheme === "dark"
          ? "bg-pink-900/20 border-pink-800"
          : "bg-pink-800/20 border-pink-700"
    }`}>
      <div className="mb-4">
        <div className={`text-sm mb-2 ${
          currentTheme === "light" ? "text-pink-700" : "text-pink-300"
        }`}>
          {t('launchpadlist.wallet.message')}
        </div>
        <div className={`text-xs ${
          currentTheme === "light" ? "text-pink-600" : "text-pink-400"
        }`}>
          {t('launchpadlist.wallet.subMessage')}
        </div>
      </div>
      <div className={`text-sm mb-4 ${
        currentTheme === "light" ? "text-gray-700" : "text-gray-300"
      }`}>
        {t('launchpadlist.wallet.connectFirst')}
      </div>
      <button
        onClick={() => {
          // Do nothing - keep the connect wallet section visible
        }}
        className="px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
      >
        {t('launchpadlist.wallet.connectWallet')}
      </button>
    </div>
  );

  const renderCardView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredlaunchpadlist.map((launchpad) => (
        <div
          key={launchpad.id}
          className={`rounded-lg border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer overflow-hidden ${
            currentTheme === "light"
              ? "bg-white border-gray-200 hover:border-pink-300 hover:shadow-pink-100"
              : currentTheme === "dark"
                ? "bg-gray-800 border-gray-700 hover:border-pink-500 hover:shadow-pink-900/20"
                : "bg-gray-700 border-gray-600 hover:border-pink-400 hover:shadow-pink-800/20"
          }`}
        >
          {/* Header with affiliate badge */}
          <div className="relative flex items-center pt-10 pl-5 h-32">
            {launchpad.isAffiliate && (
              <div className="absolute top-2 left-2 z-10">
                <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded font-medium">
                  {t('launchpadlist.labels.affiliate')}
                </span>
              </div>
            )} 
            <div className="absolute top-2 right-2 z-10 flex items-center gap-1">
              <span className={`text-xs px-1 ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-300"
              }`}>
                👥 {launchpad.subscribers}
              </span>
              <span className={`text-xs ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-300"
              }`}>
                {t('launchpadlist.labels.subscribers')}
              </span>
            </div>
              <img
                src={launchpad.image}
                alt={launchpad.name}
                className="w-14 h-14 rounded-full object-cover"
              />
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <div>
                <h3 className={`font-semibold text-lg ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {launchpad.name}
                </h3>
                <p className={`text-sm ${
                  currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                }`}>
                  {launchpad.chain}
                </p>
              </div>
            </div>

            {/* Soft/Hard Cap */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className={`text-xs ${
                  currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                }`}>
                  {t('launchpadlist.labels.soft')}
                </span>
                <span className={`text-xs ${
                  currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                }`}>
                  {Math.round(launchpad.progress * 100)}%
                </span>
              </div>
              <div className={`text-sm font-medium mb-2 ${
                currentTheme === "light" ? "text-gray-900" : "text-white"
              }`}>
                {launchpad.softCap}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${getProgressColor(launchpad.progress)}`}
                  style={{ width: `${Math.min(launchpad.progress * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className={`block text-xs ${
                  currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                }`}>
                  {t('launchpadlist.labels.liquidity')}
                </span>
                <span className={`font-medium ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {launchpad.liquidity}
                </span>
              </div>
              <div>
                <span className={`block text-xs ${
                  currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                }`}>
                  {t('launchpadlist.labels.lockupTime')}
                </span>
                <span className={`font-medium ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {launchpad.lockupTime}
                </span>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full py-2 px-4 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium">
              {launchpad.status === "live" ? t('launchpadlist.actions.view') : 
               launchpad.status === "upcoming" ? t('launchpadlist.actions.view') : 
               t('launchpadlist.actions.view')}
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTableView = () => (
    <div className={`rounded-lg border overflow-hidden ${
      currentTheme === "light"
        ? "bg-white border-gray-200"
        : currentTheme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-gray-700 border-gray-600"
    }`}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className={`${
            currentTheme === "light" ? "bg-gray-50" : "bg-gray-900"
          }`}>
            <tr>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.name')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.hardCap')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.coin')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.initialCap')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.kycAudit')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.status')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.links')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.countdown')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.saleEnds')}
              </th>
              <th className={`px-4 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                currentTheme === "light" ? "text-gray-500" : "text-gray-400"
              }`}>
                {t('launchpadlist.table.action')}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {filteredlaunchpadlist.map((launchpad) => (
              <tr key={launchpad.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={launchpad.image}
                      alt={launchpad.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div>
                      <div className={`font-medium ${
                        currentTheme === "light" ? "text-gray-900" : "text-white"
                      }`}>
                        {launchpad.name}
                      </div>
                      <div className={`text-sm ${
                        currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                      }`}>
                        {launchpad.chain}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={`px-4 py-3 text-sm ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {launchpad.hardCap || "N/A"}
                </td>
                <td className={`px-4 py-3 text-sm ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  SOL
                </td>
                <td className={`px-4 py-3 text-sm ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  N/A
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1">
                    <span className="text-gray-400">○</span>
                    <span className="text-gray-400">○</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(launchpad.status)}`}>
                    {t(`launchpadlist.status.${launchpad.status}`)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <span className="text-pink-500 cursor-pointer">🔗</span>
                    <span className="text-pink-500 cursor-pointer">📱</span>
                  </div>
                </td>
                <td className={`px-4 py-3 text-sm ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {launchpad.saleStarts}
                </td>
                <td className={`px-4 py-3 text-sm ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {launchpad.saleStarts}
                </td>
                <td className="px-4 py-3">
                  <button className="text-pink-500 hover:text-pink-600 text-sm font-medium">
                    {t('launchpadlist.actions.view')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className={`max-w-7xl mx-auto p-6 ${
      currentTheme === "light" ? "bg-gray-50" :
      currentTheme === "dark" ? "bg-gray-900" : "bg-gray-800"
    }`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-4 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          {t('launchpadlist.title')}
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className={`flex space-x-1 rounded-lg p-1 inline-flex ${
          currentTheme === "light" 
            ? "bg-gray-200" 
            : currentTheme === "dark" 
              ? "bg-gray-700" 
              : "bg-gray-600"
        }`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? currentTheme === "light"
                    ? "bg-white text-pink-600 shadow-sm"
                    : currentTheme === "dark"
                      ? "bg-gray-800 text-pink-400 shadow-sm"
                      : "bg-gray-700 text-pink-300 shadow-sm"
                  : currentTheme === "light"
                    ? "text-gray-500 hover:text-gray-700"
                    : currentTheme === "dark"
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-300 hover:text-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filters and Controls - Only show for "all" and "advanced" tabs */}
      {(activeTab === "all" || activeTab === "advanced") && (
        <div className="mb-6 space-y-4">
          {/* Search */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <input
              type="text"
              placeholder={t('launchpadlist.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`flex-1 max-w-md px-4 py-2 rounded-lg border transition-colors ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-200"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-900"
                    : "bg-gray-700 border-gray-500 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-800"
              } focus:outline-none focus:ring-2`}
            />
          </div>

          {/* Filters Row */}
          <div className="flex flex-wrap gap-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className={`px-3 py-2 rounded-lg border text-sm ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-gray-700 border-gray-500 text-white"
              }`}
            >
              {statusOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>

            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className={`px-3 py-2 rounded-lg border text-sm ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "bg-gray-700 border-gray-500 text-white"
              }`}
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>

            {/* Chain filters */}
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Solana
              </button>
              <button className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                ETH
              </button>
              <button className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                BSC
              </button>
              <button className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">
                TON
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Content based on active tab */}
      {activeTab === "contributions" && !isWalletConnected ? (
        <ConnectWalletSection />
      ) : (
        <>
          {/* Render based on tab - Cards for "all", Table for "advanced" */}
          {activeTab === "all" || activeTab === "contributions" ? renderCardView() : renderTableView()}

          {/* Empty State */}
          {filteredlaunchpadlist.length === 0 && (
            <div className="text-center py-12">
              <div className={`text-6xl mb-4 ${
                currentTheme === "light" ? "text-gray-300" : "text-gray-600"
              }`}>
                🚀
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                currentTheme === "light" ? "text-gray-900" : "text-white"
              }`}>
                {t('launchpadlist.emptyState.title')}
              </h3>
              <p className={`${
                currentTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>
                {t('launchpadlist.emptyState.description')}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LaunchpadsListHero;