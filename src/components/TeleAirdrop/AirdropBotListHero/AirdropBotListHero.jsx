import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import boximg1 from '../../../Assets/AirdropBotListHeroimg1.png';
import boximg2 from '../../../Assets/AirdropBotListHeroimg2.png';
import boximg3 from '../../../Assets/AirdropBotListHeroimg3.png';
import boximg4 from '../../../Assets/AirdropBotListHeroimg4.png';
import boximg5 from '../../../Assets/AirdropBotListHeroimg5.png';
import boximg6 from '../../../Assets/AirdropBotListHeroimg6.jpeg';
import boximg7 from '../../../Assets/AirdropBotListHeroimg7.png';
import boximg8 from '../../../Assets/AirdropBotListHeroimg8.jpg';
import boximg9 from '../../../Assets/AirdropBotListHeroimg9.png';
import boximg10 from '../../../Assets/AirdropBotListHeroimg10.jpg';
import boximg11 from '../../../Assets/AirdropBotListHeroimg11.png';
import boximg12 from '../../../Assets/AirdropBotListHeroimg12.png';
import boximg13 from '../../../Assets/AirdropBotListHeroimg13.png';
import boximg14 from '../../../Assets/AirdropBotListHeroimg14.png';
import boximg15 from '../../../Assets/AirdropBotListHeroimg15.png';
import boxicon1 from '../../../Assets/AirdropBotListHeroicon1.png';
import boxicon2 from '../../../Assets/AirdropBotListHeroicon2.png';
import boxicon3 from '../../../Assets/AirdropBotListHeroicon3.png';
import boxicon4 from '../../../Assets/AirdropBotListHeroicon4.png';
import boxicon5 from '../../../Assets/AirdropBotListHeroicon5.png';
import boxicon6 from '../../../Assets/AirdropBotListHeroicon6.jpeg';
import boxicon7 from '../../../Assets/AirdropBotListHeroicon7.png';
import boxicon8 from '../../../Assets/AirdropBotListHeroicon8.png';
import boxicon9 from '../../../Assets/AirdropBotListHeroicon9.png';
import boxicon10 from '../../../Assets/AirdropBotListHeroicon10.jpg';
import boxicon11 from '../../../Assets/AirdropBotListHeroicon11.png';
import boxicon12 from '../../../Assets/AirdropBotListHeroicon12.png';
import boxicon13 from '../../../Assets/AirdropBotListHeroicon13.jpg';
import boxicon14 from '../../../Assets/AirdropBotListHeroicon14.png';
import boxicon15 from '../../../Assets/AirdropBotListHeroicon15.png';

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

  const walletOptions = [
    {
      id: "evm",
      name: t('airdropBots.walletSelection.evm'),
      icon: "/api/placeholder/24/24" // Replace with actual EVM icon
    },
    {
      id: "solana", 
      name: t('airdropBots.walletSelection.solana'),
      icon: "/api/placeholder/24/24" // Replace with actual Solana icon
    },
    {
      id: "ton",
      name: t('airdropBots.walletSelection.ton'), 
      icon: "/api/placeholder/24/24" // Replace with actual TON icon
    }
  ];

  const airdropBots = [
    {
      id: 1,
      name: "swappay_token_bot",
      description: t('airdropBots.bots.swappay.description'),
      users: 1,
      premiumUsers: 0,
      bgimg: boximg1,
      image: boxicon1,
      category: "all"
    },
    {
      id: 2,
      name: "MemeAds_bot",
      description: t('airdropBots.bots.memeads.description'),
      users: 3,
      premiumUsers: 0,
      bgimg: boximg2,
      image: boxicon2,
      category: "all"
    },
    {
      id: 3,
      name: "Moonbark_bot",
      description: t('airdropBots.bots.moonbark.description'),
      users: 1,
      premiumUsers: 0,
      bgimg: boximg3,
      image: boxicon3,
      category: "all"
    },
    {
      id: 4,
      name: "puffydrops_bot",
      description: t('airdropBots.bots.puffy.description'),
      users: 7,
      premiumUsers: 4,
      bgimg: boximg4,
      image: boxicon4,
      category: "all"
    },
    {
      id: 5,
      name: "MultiDayAirdropBot",
      description: t('airdropBots.bots.multiday.description'),
      users: 14,
      premiumUsers: 4,
      bgimg: boximg5,
      image: boxicon5,
      category: "all"
    },
    {
      id: 6,
      name: "airdrop_may_bot",
      description: t('airdropBots.bots.may.description'),
      users: 9,
      premiumUsers: 1,
      bgimg: boximg6,
      image: boxicon6,
      category: "all"
    },
    {
      id: 7,
      name: "SnakeAiminingbot",
      description: t('airdropBots.bots.snake.description'),
      users: 2,
      premiumUsers: 0,
      bgimg: boximg7,
      image: boxicon7,
      category: "all"
    },
    {
      id: 8,
      name: "PagoResolI_bot",
      description: t('airdropBots.bots.pago.description'),
      users: 3,
      premiumUsers: 0,
      bgimg: boximg8,
      image: boxicon8,
      category: "all"
    },
    {
      id: 9,
      name: "TrOnisBot",
      description: t('airdropBots.bots.tronis.description'),
      users: 18,
      premiumUsers: 3,
      bgimg: boximg9,
      image: boxicon9,
      category: "all"
    },
    {
      id: 10,
      name: "Somacurrency_bot",
      description: t('airdropBots.bots.soma.description'),
      users: 83,
      premiumUsers: 10,
      bgimg: boximg10,
      image: boxicon10,
      category: "all"
    },
    {
      id: 11,
      name: "Cheeronbase_bot",
      description: t('airdropBots.bots.cheer.description'),
      users: 3,
      premiumUsers: 0,
      bgimg: boximg11,
      image: boxicon11,
      category: "all"
    },
    {
      id: 12,
      name: "limitbreak_bot",
      description: t('airdropBots.bots.limitbreak.description'),
      users: 21,
      premiumUsers: 1,
      bgimg: boximg12,
      image: boxicon12,
      category: "all"
    },
    {
      id: 13,
      name: "Chainscardbot",
      description: t('airdropBots.bots.chainscard.description'),
      users: 374,
      premiumUsers: 32,
      bgimg: boximg13,
      image: boxicon13,
      category: "all"
    },
    {
      id: 14,
      name: "rpall_bot",
      description: t('airdropBots.bots.rpall.description'),
      users: 3,
      premiumUsers: 0,
      bgimg: boximg14,
      image: boxicon14,
      category: "all"
    },
    {
      id: 15,
      name: "AiCHXbot",
      description: t('airdropBots.bots.aichx.description'),
      users: 13,
      premiumUsers: 3,
      bgimg: boximg15,
      image: boxicon15,
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

      {/* Tab Navigation - Fixed theme support */}
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

          {/* Bot Grid - Updated to match image design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBots.map((bot) => (
              <div
                key={bot.id}
                className={`rounded-lg border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer overflow-hidden ${
                  currentTheme === "light"
                    ? "bg-white border-gray-200 hover:border-pink-300 hover:shadow-pink-100"
                    : currentTheme === "dark"
                      ? "bg-gray-800 border-gray-700 hover:border-pink-500 hover:shadow-pink-900/20"
                      : "bg-gray-700 border-gray-600 hover:border-pink-400 hover:shadow-pink-800/20"
                }`}
              >
                {/* Bot Image Header */}
                <div className="h-32 relative">
                  {/* Background Image */}
                  <img
                    src={bot.bgimg}
                    alt={bot.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Bot Avatar */}
                  <img
                    src={bot.image}
                    alt={bot.name}
                    className="w-16 h-16 rounded-lg object-cover absolute -bottom-5 right-4 z-10 shadow"
                  />
                </div>

                {/* Bot Info */}
                <div className="p-4">
                  <h3 className={`font-semibold text-lg mb-2 truncate ${
                    currentTheme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                    {bot.name}
                  </h3>
                  <p className={`text-sm mb-4 line-clamp-2 ${
                    currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                    {bot.description}
                  </p>

                  {/* Stats */}
                  <div className="flex justify-between items-center pt-4 border-t border-opacity-20 border-gray-300 dark:border-gray-600">
                    <div className="flex flex-col">
                      <span className={`text-xs mb-1 ${
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
                      <span className={`text-xs mb-1 ${
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
        /* Your Projects Tab - Updated to match CreateTeleAirdropHero style */
        <div className="max-w-2xl">
          {/* Search for Your Projects */}
          <div className="mb-8">
            <input
              type="text"
              placeholder={t('airdropBots.searchPlaceholder')}
              className={`w-full px-4 py-2 rounded-lg border transition-colors ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-pink-500 focus:ring-pink-200"
                  : currentTheme === "dark"
                    ? "bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-pink-500 focus:ring-pink-900"
                    : "bg-gray-700 border-gray-500 text-white placeholder-gray-400 focus:border-pink-400 focus:ring-pink-800"
              } focus:outline-none focus:ring-2`}
            />
          </div>

          {/* Wallet Selection - Updated to match CreateTeleAirdropHero */}
          <div className="mb-8">
            <h2 className={`text-xl font-semibold mb-6 ${
              currentTheme === "light" ? "text-gray-900" : "text-white"
            }`}>
              {t('airdropBots.walletSelection.title')}
            </h2>
            
            <div className="space-y-4">
              {walletOptions.map((wallet) => (
                <button
                  key={wallet.id}
                  className={`w-full p-4 rounded-lg border-2 text-left transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${
                    currentTheme === "light"
                      ? "bg-white border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                      : currentTheme === "dark"
                        ? "bg-gray-800 border-gray-700 hover:border-pink-500 hover:bg-pink-900/20"
                        : "bg-gray-700 border-gray-600 hover:border-pink-400 hover:bg-pink-800/20"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img src={wallet.icon} alt="" className="w-6 h-6" />
                    <span className={`font-medium ${
                      currentTheme === "light" ? "text-gray-900" : "text-white"
                    }`}>
                      {wallet.name}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AirdropBotListHero;