import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";

const AirdropBotListHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const tabs = [
    { id: "all", label: t('airdropBots.tabs.all') },
    { id: "yourProjects", label: t('airdropBots.tabs.yourProjects') }
  ];

  const airdropBots = [
    {
      id: 1,
      name: "swappay_token_bot",
      description: t('airdropBots.bots.swappay.description'),
      users: 1,
      premiumUsers: 0,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 2,
      name: "MemeAds_bot",
      description: t('airdropBots.bots.memeads.description'),
      users: 3,
      premiumUsers: 0,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 3,
      name: "Moonbark_bot",
      description: t('airdropBots.bots.moonbark.description'),
      users: 1,
      premiumUsers: 0,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 4,
      name: "puffydrops_bot",
      description: t('airdropBots.bots.puffy.description'),
      users: 7,
      premiumUsers: 4,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 5,
      name: "MultiDayAirdropBot",
      description: t('airdropBots.bots.multiday.description'),
      users: 14,
      premiumUsers: 4,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 6,
      name: "airdrop_may_bot",
      description: t('airdropBots.bots.may.description'),
      users: 9,
      premiumUsers: 1,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 7,
      name: "SnakeAiminingbot",
      description: t('airdropBots.bots.snake.description'),
      users: 2,
      premiumUsers: 0,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 8,
      name: "PagoResolI_bot",
      description: t('airdropBots.bots.pago.description'),
      users: 3,
      premiumUsers: 0,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 9,
      name: "TrOnisBot",
      description: t('airdropBots.bots.tronis.description'),
      users: 18,
      premiumUsers: 3,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 10,
      name: "Somacurrency_bot",
      description: t('airdropBots.bots.soma.description'),
      users: 83,
      premiumUsers: 10,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 11,
      name: "Cheeronbase_bot",
      description: t('airdropBots.bots.cheer.description'),
      users: 3,
      premiumUsers: 0,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 12,
      name: "limitbreak_bot",
      description: t('airdropBots.bots.limitbreak.description'),
      users: 21,
      premiumUsers: 1,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 13,
      name: "Chainscardbot",
      description: t('airdropBots.bots.chainscard.description'),
      users: 374,
      premiumUsers: 32,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 14,
      name: "rpall_bot",
      description: t('airdropBots.bots.rpall.description'),
      users: 3,
      premiumUsers: 0,
      image: "/api/placeholder/80/80",
      category: "all"
    },
    {
      id: 15,
      name: "AiCHXbot",
      description: t('airdropBots.bots.aichx.description'),
      users: 13,
      premiumUsers: 3,
      image: "/api/placeholder/80/80",
      category: "all"
    }
  ];

  const filteredBots = airdropBots.filter(bot => {
    const matchesSearch = bot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bot.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || bot.category === activeTab;
    return matchesSearch && matchesTab;
  });

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
          {t('airdropBots.title')}
        </h1>
      </div>

      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex space-x-1 rounded-lg p-1 bg-gray-200 dark:bg-gray-700 inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                activeTab === tab.id
                  ? currentTheme === "light"
                    ? "bg-white text-pink-600 shadow-sm"
                    : "bg-gray-800 text-pink-400 shadow-sm"
                  : currentTheme === "light"
                    ? "text-gray-500 hover:text-gray-700"
                    : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content based on active tab */}
      {activeTab === "all" ? (
        <>
          {/* Search */}
          <div className="mb-8">
            <input
              type="text"
              placeholder={t('airdropBots.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full max-w-md px-4 py-2 rounded-lg border transition-colors ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-200"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-900"
                    : "bg-gray-700 border-gray-500 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-800"
              } focus:outline-none focus:ring-2`}
            />
          </div>

          {/* Bot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBots.map((bot) => (
              <div
                key={bot.id}
                className={`rounded-lg border p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer ${
                  currentTheme === "light"
                    ? "bg-white border-gray-200 hover:border-pink-300 hover:shadow-pink-100"
                    : currentTheme === "dark"
                      ? "bg-gray-800 border-gray-700 hover:border-pink-500 hover:shadow-pink-900/20"
                      : "bg-gray-700 border-gray-600 hover:border-pink-400 hover:shadow-pink-800/20"
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={bot.image}
                    alt={bot.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className={`font-semibold text-lg mb-1 truncate ${
                      currentTheme === "light" ? "text-gray-900" : "text-white"
                    }`}>
                      {bot.name}
                    </h3>
                    <p className={`text-sm line-clamp-2 ${
                      currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}>
                      {bot.description}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="flex flex-col">
                    <span className={`text-xs ${
                      currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                    }`}>
                      {t('airdropBots.stats.users')}
                    </span>
                    <span className={`font-semibold ${
                      currentTheme === "light" ? "text-gray-900" : "text-white"
                    }`}>
                      {bot.users}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-xs ${
                      currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                    }`}>
                      {t('airdropBots.stats.premiumUsers')}
                    </span>
                    <span className={`font-semibold ${
                      currentTheme === "light" ? "text-gray-900" : "text-white"
                    }`}>
                      {bot.premiumUsers}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredBots.length === 0 && (
            <div className="text-center py-12">
              <div className={`text-6xl mb-4 ${
                currentTheme === "light" ? "text-gray-300" : "text-gray-600"
              }`}>
                🤖
              </div>
              <h3 className={`text-xl font-semibold mb-2 ${
                currentTheme === "light" ? "text-gray-900" : "text-white"
              }`}>
                {t('airdropBots.emptyState.title')}
              </h3>
              <p className={`${
                currentTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>
                {t('airdropBots.emptyState.description')}
              </p>
            </div>
          )}
        </>
      ) : (
        /* Your Projects Tab - Wallet Selection */
        <div className="max-w-2xl">
          {/* Search for Your Projects */}
          <div className="mb-8">
            <input
              type="text"
              placeholder={t('airdropBots.yourProjects.searchPlaceholder')}
              className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-200"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-900"
                    : "bg-gray-700 border-gray-500 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-800"
              } focus:outline-none focus:ring-2`}
            />
          </div>

          {/* Wallet Selection */}
          <div className="mb-8">
            <h2 className={`text-lg font-medium mb-6 ${
              currentTheme === "light" ? "text-gray-900" : "text-white"
            }`}>
              {t('airdropBots.walletSelection.title')}
            </h2>
            
            <div className="space-y-3">
              <button className={`w-full p-4 rounded-lg border text-left transition-all duration-200 hover:scale-[1.01] ${
                currentTheme === "light"
                  ? "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600 hover:bg-gray-750"
                    : "bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-650"
              }`}>
                <span className={`font-medium ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {t('airdropBots.walletSelection.evm')}
                </span>
              </button>

              <button className={`w-full p-4 rounded-lg border text-left transition-all duration-200 hover:scale-[1.01] flex items-center gap-3 ${
                currentTheme === "light"
                  ? "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600 hover:bg-gray-750"
                    : "bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-650"
              }`}>
                <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className={`font-medium ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {t('airdropBots.walletSelection.solana')}
                </span>
              </button>

              <button className={`w-full p-4 rounded-lg border text-left transition-all duration-200 hover:scale-[1.01] flex items-center gap-3 ${
                currentTheme === "light"
                  ? "bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-700 hover:border-gray-600 hover:bg-gray-750"
                    : "bg-gray-700 border-gray-600 hover:border-gray-500 hover:bg-gray-650"
              }`}>
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
                <span className={`font-medium ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {t('airdropBots.walletSelection.ton')}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirdropBotListHero;