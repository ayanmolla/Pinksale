import React, { useState } from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { ChevronDown, Eye } from "lucide-react";
import LeaderBoardImg1 from '../../Assets/LeaderBoardImg1.png';
import LeaderBoardImg2 from '../../Assets/LeaderBoardImg2.png';
import LeaderBoardImg3 from '../../Assets/LeaderBoardImg3.png';
import LeaderBoardImg4 from '../../Assets/LeaderBoardImg4.png';
import LeaderBoardImg5 from '../../Assets/LeaderBoardImg5.png';
import LeaderBoardImg6 from '../../Assets/LeaderBoardImg6.png';
import LeaderBoardImg7 from '../../Assets/LeaderBoardImg7.png';
import LeaderBoardImg8 from '../../Assets/LeaderBoardImg8.jpg';
import LeaderBoardImg9 from '../../Assets/LeaderBoardImg9.png';
import LeaderBoardImg10 from '../../Assets/LeaderBoardImg10.jpg';
import LeaderBoardImg11 from '../../Assets/LeaderBoardImg11.png';
import LeaderBoardImg12 from '../../Assets/LeaderBoardImg12.jpg';
import LeaderBoardImg13 from '../../Assets/LeaderBoardImg13.jpg';
import LeaderBoardImg14 from '../../Assets/LeaderBoardImg14.png';
import LeaderBoardImg15 from '../../Assets/LeaderBoardImg15.png';
import LeaderBoardImg16 from '../../Assets/LeaderBoardImg16.png';
import LeaderBoardImg17 from '../../Assets/LeaderBoardImg17.png';
import LeaderBoardImg18 from '../../Assets/LeaderBoardImg18.png';
import LeaderBoardImg19 from '../../Assets/LeaderBoardImg19.png';
import LeaderBoardImg20 from '../../Assets/LeaderBoardImg20.jpg';
import LeaderBoardImg21 from '../../Assets/LeaderBoardImg21.png';
import LeaderBoardImg27 from '../../Assets/LeaderboardImg27.png';
import LeaderBoardImg28 from '../../Assets/LeaderBoardImg28.png';
import LeaderBoardImg29 from '../../Assets/LeaderBoardImg29.png';
import LeaderBoardImg30 from '../../Assets/LeaderBoardImg30.png';
import LeaderBoardImg31 from '../../Assets/LeaderBoardImg31.jpg';
import LeaderBoardImg33 from '../../Assets/LeaderBoardImg33.jpg';
import LeaderBoardImg34 from '../../Assets/LeaderBoardImg34.jpg';
import LeaderBoardImg35 from '../../Assets/LeaderBoardImg35.jpg';
import LeaderBoardImg36 from '../../Assets/LeaderBoardImg36.png';
import LeaderBoardImg37 from '../../Assets/LeaderBoardImg37.jpg';
import LeaderBoardImg38 from '../../Assets/LeaderBoardImg38.png';



const LeaderboardHero = () => {
  const [activeTab, setActiveTab] = useState("week21");
  const [chainsFilter, setChainsFilter] = useState("all");
  const [sortBy, setSortBy] = useState("rank");
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";

  // Mock data for different weeks
  const leaderboardData = {
    week21: {
      totalSuccess: 3,
      totalRaised: "$155.79K",
      entries: [
        {
          id: 1,
          rank: 1,
          name: "KRTEK",
          symbol: "KRTEK",
          amount: "115.7315 BNB",
          date: "2025.05.19",
          progress: 100,
          avatar: LeaderBoardImg27
        },
        {
          id: 2,
          rank: 2,
          name: "Peepo",
          symbol: "$PEPO",
          amount: "100 BNB",
          date: "2025.05.21",
          progress: 100,
          avatar: LeaderBoardImg28
        },
        {
          id: 3,
          rank: 3,
          name: "BarAI",
          symbol: "BarAI",
          amount: "97.2736 SOL",
          date: "2025.05.21",
          progress: 100,
          avatar:LeaderBoardImg29
        }
      ]
    },
    week20: {
      totalSuccess: 8,
      totalRaised: "$337.63K",
      entries: [
        {
          id: 1,
          rank: 1,
          name: "Memeseco",
          symbol: "MECO",
          amount: "284.646 BNB",
          date: "2025.05.13",
          progress: 100,
          avatar: LeaderBoardImg30
        },
        {
          id: 2,
          rank: 2,
          name: "Rato The Rat",
          symbol: "RATO",
          amount: "120.5512 BNB",
          date: "2025.05.12",
          progress: 100,
          avatar: LeaderBoardImg31
        },
        {
          id: 3,
          rank: 3,
          name: "WxxdFi",
          symbol: "WXXD",
          amount: "35.4159 BNB",
          date: "2025.05.12",
          progress: 72,
          avatar: LeaderBoardImg33
        },
        {
          id: 4,
          rank: 4,
          name: "GREEDY",
          symbol: "GREEDY",
          amount: "30 BNB",
          date: "2025.05.16",
          progress: 100,
          avatar: LeaderBoardImg34
        },
        {
          id: 5,
          rank: 5,
          name: "INBUVE",
          symbol: "BV",
          amount: "52.4225 SOL",
          date: "2025.05.14",
          progress: 29,
          avatar:LeaderBoardImg35

        },
        {
          id: 6,
          rank: 6,
          name: "Arena SOL",
          symbol: "ARENA",
          amount: "40.6008 SOL",
          date: "2025.05.12",
          progress: 100,
          avatar: LeaderBoardImg36
        },
        {
          id: 7,
          rank: 7,
          name: "TariffCoin",
          symbol: "TARIFF",
          amount: "33.7623 SOL",
          date: "2025.05.17",
          progress: 100,
          avatar: LeaderBoardImg37
        },
        {
          id: 8,
          rank: 8,
          name: "BULLY DOGE",
          symbol: "BULLY",
          amount: "3.4332 BNB",
          date: "2025.05.16",
          progress: 100,
          avatar: LeaderBoardImg38
        }
      ]
    },
    week19: {
      totalSuccess: 11,
      totalRaised: "$196.22K",
      entries: [
        {
          id: 1,
          rank: 1,
          name: "JAK",
          symbol: "JAK",
          amount: "112.3443 BNB",
          date: "2025.04.30",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 2,
          rank: 2,
          name: "New XAI gork",
          symbol: "GORK",
          amount: "24.0737 BNB",
          date: "2025.04.01",
          progress: 35,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 3,
          rank: 3,
          name: "TARIFF",
          symbol: "TARIFF",
          amount: "23.2438 BNB",
          date: "2025.05.01",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 4,
          rank: 4,
          name: "Deer",
          symbol: "DEER",
          amount: "22.5639 BNB",
          date: "2025.05.04",
          progress: 35,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 5,
          rank: 5,
          name: "LAIKA",
          symbol: "LAIKA",
          amount: "21.5434 SOL",
          date: "2025.04.30",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 6,
          rank: 6,
          name: "Flame Of Floki",
          symbol: "FOF",
          amount: "6.1863 ETH",
          date: "2025.05.02",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 7,
          rank: 7,
          name: "Dreamwalker Token",
          symbol: "DREAM",
          amount: "6.3434 ETH",
          date: "2025.04.30",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 8,
          rank: 8,
          name: "Mukbang Molly",
          symbol: "MOLLY",
          amount: "4.3564 SOL",
          date: "2025.04.30",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 9,
          rank: 9,
          name: "CZ Goat",
          symbol: "CZ",
          amount: "3.3571 BNB",
          date: "2025.05.02",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 10,
          rank: 10,
          name: "Proto-Pecuni",
          symbol: "PROTO",
          amount: "1.2373 ETH",
          date: "2025.04.30",
          progress: 36,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 11,
          rank: 11,
          name: "Crypto panto",
          symbol: "CP",
          amount: "359.8459 USDT",
          date: "2025.05.04",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        }
      ]
    },
    week18: {
      totalSuccess: 12,
      totalRaised: "$471.73K",
      entries: [
        {
          id: 1,
          rank: 1,
          name: "XBOT",
          symbol: "XBOT",
          amount: "661.1315 SOL",
          date: "2025.04.24",
          progress: 37,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 2,
          rank: 2,
          name: "Simpsons",
          symbol: "SIMP",
          amount: "144.2464 BNB",
          date: "2025.04.22",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 3,
          rank: 3,
          name: "SHIH TZU",
          symbol: "SHIHTZU",
          amount: "135.247 BNB",
          date: "2025.04.25",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 4,
          rank: 4,
          name: "BPEPE",
          symbol: "BPEPE",
          amount: "115.3975 BNB",
          date: "2025.04.26",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 5,
          rank: 5,
          name: "GOV",
          symbol: "GOV",
          amount: "51.5324 ETH",
          date: "2025.04.26",
          progress: 37,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 6,
          rank: 6,
          name: "Value Of Freedom",
          symbol: "LIFE",
          amount: "247.32 SOL",
          date: "2025.04.27",
          progress: 37,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 7,
          rank: 7,
          name: "Liquid Oxygen",
          symbol: "LOX",
          amount: "194.3456 SOL",
          date: "2025.04.27",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 8,
          rank: 8,
          name: "Matchain Genesis License Launchpad Receipt Token",
          symbol: "MRGL",
          amount: "11.0873 USDT",
          date: "2025.04.25",
          progress: 37,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 9,
          rank: 9,
          name: "Wizard Gang",
          symbol: "WIZARD",
          amount: "123.8765 BNB",
          date: "2025.04.24",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 10,
          rank: 10,
          name: "ANTIWOKE CEO",
          symbol: "ANTOKE",
          amount: "16.3654 SOL",
          date: "2025.04.21",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 11,
          rank: 11,
          name: "Africa Invest DAO Token",
          symbol: "AI",
          amount: "3.056442 MATIC",
          date: "2025.04.25",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 12,
          rank: 12,
          name: "LoveDOEKOE",
          symbol: "LD",
          amount: "9.67502476 BNB",
          date: "2025.04.21",
          progress: 37,
          avatar: "/api/placeholder/40/40"
        }
      ]
    },
    week17: {
      totalSuccess: 9,
      totalRaised: "$299.84K",
      entries: [
        {
          id: 1,
          rank: 1,
          name: "Eid Cshao",
          symbol: "EID CSHAO",
          amount: "122.5681 BNB",
          date: "2025.04.17",
          progress: 100,
          avatar: LeaderBoardImg15
        },
        {
          id: 2,
          rank: 2,
          name: "XBUZZ",
          symbol: "XBUZZ",
          amount: "93.7733 SOL",
          date: "2025.04.15",
          progress: 37,
          avatar: LeaderBoardImg16
        },
        {
          id: 3,
          rank: 3,
          name: "TOAD",
          symbol: "TOAD",
          amount: "88.5521 BNB",
          date: "2025.04.14",
          progress: 100,
          avatar: LeaderBoardImg17
        },
        {
          id: 4,
          rank: 4,
          name: "Metis AI",
          symbol: "METIS",
          amount: "59.4365 BNB",
          date: "2025.04.16",
          progress: 100,
          avatar: LeaderBoardImg18
        },
        {
          id: 5,
          rank: 5,
          name: "Matchain Genesis License Launchpad Receipt Token",
          symbol: "MRGL",
          amount: "24.000 USDT",
          date: "2025.04.16",
          progress: 100,
          avatar: LeaderBoardImg19
        },
        {
          id: 6,
          rank: 6,
          name: "Ghibli Mubarak",
          symbol: "GHIBLIMUBARAK",
          amount: "4.235 BNB",
          date: "2025.04.14",
          progress: 100,
          avatar: LeaderBoardImg20
        },
        {
          id: 7,
          rank: 7,
          name: "WHISKER",
          symbol: "WHISKER",
          amount: "176.735 AVAX",
          date: "2025.04.17",
          progress: 37,
          avatar: LeaderBoardImg21
        },
        {
          id: 8,
          rank: 8,
          name: "Universe",
          symbol: "UNID",
          amount: "109.345 SOL",
          date: "2025.04.15",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        },
        {
          id: 9,
          rank: 9,
          name: "CAT TOKEN",
          symbol: "CATTOKEN",
          amount: "274.345 SOL",
          date: "2025.04.16",
          progress: 100,
          avatar: "/api/placeholder/40/40"
        }
      ]
    },
    week16: {
      totalSuccess: 14,
      totalRaised: "$415.93K",
      entries: [
        {
          id: 1,
          rank: 1,
          name: "Kermit The Frog",
          symbol: "KERMIT",
          amount: "99.8582 BNB",
          date: "2025.04.08",
          progress: 100,
          avatar: LeaderBoardImg8
        },
        {
          id: 2,
          rank: 2,
          name: "ZENY",
          symbol: "ZENY",
          amount: "104.8945 USDC",
          date: "2025.04.10",
          progress: 35,
          avatar:LeaderBoardImg9
        },
        {
          id: 3,
          rank: 3,
          name: "Baby Gork",
          symbol: "BGORK",
          amount: "94.913 BNB",
          date: "2025.04.06",
          progress: 100,
          avatar: LeaderBoardImg10
        },
        {
          id: 4,
          rank: 4,
          name: "Alvey Chain",
          symbol: "ALVY",
          amount: "63.7465 SOL",
          date: "2025.04.08",
          progress: 100,
          avatar: LeaderBoardImg11
        },
        {
          id: 5,
          rank: 5,
          name: "BabyGOV",
          symbol: "BGOV",
          amount: "15.7712 SOL",
          date: "2025.04.11",
          progress: 100,
          avatar: LeaderBoardImg12
        },
        {
          id: 6,
          rank: 6,
          symbol: "AKIA INU",
          name: "AKIA",
          amount: "31.5634 BNB",
          date: "2025.04.10",
          progress: 35,
          avatar: LeaderBoardImg12
        },
        {
          id: 7,
          rank: 7,
          name: "CloudChain AI",
          symbol: "CLOUD",
          amount: "59.7352 SOL",
          date: "2025.04.06",
          progress: 100,
          avatar:LeaderBoardImg13
        },
        {
          id: 8,
          rank: 8,
          name: "Titan Token",
          symbol: "TTNT",
          amount: "2.9973 USDT",
          date: "2025.04.08",
          progress: 37,
          avatar: LeaderBoardImg14
        },
        {
          id: 9,
          rank: 9,
          name: "THE MASK COIN",
          symbol: "MASK",
          amount: "28.9175 SOL",
          date: "2025.04.10",
          progress: 100,
          avatar: LeaderBoardImg13
        },
        
        
      ]
    },
    week15: {
      totalSuccess: 7,
      totalRaised: "$232.18K",
      entries: [
        {
          id: 1,
          rank: 1,
          name: "ICED",
          symbol: "ICED",
          amount: "854.9854 SOL",
          date: "2025.04.09",
          progress: 34,
          avatar: LeaderBoardImg1
        },
        {
          id: 2,
          rank: 2,
          name: "ELMO",
          symbol: "ELMO",
          amount: "126.1912 BNB",
          date: "2025.04.11",
          progress: 100,
          avatar: LeaderBoardImg2
        },
        {
          id: 3,
          rank: 3,
          name: "XBUZZ",
          symbol: "XBUZZ",
          amount: "225 SOL",
          date: "2025.04.09",
          progress: 100,
          avatar: LeaderBoardImg3
        },
        {
          id: 4,
          rank: 4,
          name: "LUCAX",
          symbol: "LUCAX",
          amount: "44.6627 BNB",
          date: "2025.04.10",
          progress: 100,
          avatar: LeaderBoardImg4
        },
        {
          id: 5,
          rank: 5,
          name: "INIZIO 47",
          symbol: "47",
          amount: "6.8693 BNB",
          date: "2025.04.07",
          progress: 100,
          avatar: LeaderBoardImg5
        },
        {
          id: 6,
          rank: 6,
          name: "Tamaraw Coin",
          symbol: "TMW",
          amount: "6,294.7428 MATIC",
          date: "2025.04.13",
          progress: 34,
          avatar: LeaderBoardImg6
        },
        {
          id: 7,
          rank: 7,
          name: "FADX DAO Token",
          symbol: "FXD",
          amount: "1,781 MATIC",
          date: "2025.04.07",
          progress: 36,
          avatar: LeaderBoardImg7
        }
      ]
    }
  };

  const tabs = [
    { id: "week21", label: t('leaderboard.week21'), data: leaderboardData.week21 },
    { id: "week20", label: t('leaderboard.week20'), data: leaderboardData.week20 },
    { id: "week19", label: t('leaderboard.week19'), data: leaderboardData.week19 },
    { id: "week18", label: t('leaderboard.week18'), data: leaderboardData.week18 },
    { id: "week17", label: t('leaderboard.week17'), data: leaderboardData.week17 },
    { id: "week16", label: t('leaderboard.week16'), data: leaderboardData.week16 },
    { id: "week15", label: t('leaderboard.week15'), data: leaderboardData.week15 }
  ];

  const currentData = leaderboardData[activeTab] || leaderboardData.week21;

  const getProgressColor = (progress) => {
    if (progress === 100) return "bg-green-500";
    if (progress >= 70) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className={`p-6 rounded-lg ${
      currentTheme === "light" 
        ? "bg-white" 
        : currentTheme === "dark"
          ? "bg-gray-900"
          : "bg-gray-800"
    }`}>
      {/* Header */}
      <div className="mb-6">
        <h1 className={`text-2xl font-bold mb-4 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          {t('leaderboard.title')}
        </h1>

        {/* Stats */}
        <div className="flex gap-8 mb-6">
          <div>
            <p className={`text-sm ${
              currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              {t('leaderboard.totalSuccessThisWeek')}
            </p>
            <p className="text-2xl font-bold text-green-500">
              {currentData.totalSuccess}
            </p>
          </div>
          <div>
            <p className={`text-sm ${
              currentTheme === "light" ? "text-gray-600" : "text-gray-400"
            }`}>
              {t('leaderboard.totalRaisedThisWeek')}
            </p>
            <p className="text-2xl font-bold text-green-500">
              {currentData.totalRaised}
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "bg-pink-500 text-white"
                    : currentTheme === "light"
                      ? "text-gray-600 hover:text-pink-500 hover:bg-gray-100"
                      : "text-gray-400 hover:text-pink-400 hover:bg-gray-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="flex gap-3 ml-4">
            <div className="relative">
              <select
                value={chainsFilter}
                onChange={(e) => setChainsFilter(e.target.value)}
                className={`appearance-none px-3 py-2 pr-8 text-sm border rounded-md ${
                  currentTheme === "light"
                    ? "bg-white border-gray-300 text-gray-700"
                    : "bg-gray-800 border-gray-600 text-gray-300"
                }`}
              >
                <option value="all">{t('leaderboard.chains')}</option>
                <option value="bnb">BNB Chain</option>
                <option value="sol">Solana</option>
                <option value="eth">Ethereum</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className={`appearance-none px-3 py-2 pr-8 text-sm border rounded-md ${
                  currentTheme === "light"
                    ? "bg-white border-gray-300 text-gray-700"
                    : "bg-gray-800 border-gray-600 text-gray-300"
                }`}
              >
                <option value="rank">{t('leaderboard.sortBy')}</option>
                <option value="amount">{t('leaderboard.sortByAmount')}</option>
                <option value="date">{t('leaderboard.sortByDate')}</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard List */}
      <div className="space-y-3">
        {currentData.entries.map((entry) => (
          <div
            key={entry.id}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              currentTheme === "light"
                ? "border-gray-200 hover:border-pink-200 bg-white"
                : "border-gray-700 hover:border-pink-500 bg-gray-800"
            } transition-colors`}
          >
            <div className="flex items-center gap-4">
              {/* Rank */}
              <div className={`flex items-center justify-center w-8 h-8 rounded text-sm font-bold ${
                entry.rank === 1 ? "bg-yellow-100 text-yellow-800" :
                entry.rank === 2 ? "bg-gray-100 text-gray-800" :
                entry.rank === 3 ? "bg-orange-100 text-orange-800" :
                currentTheme === "light" ? "bg-gray-50 text-gray-600" : "bg-gray-700 text-gray-300"
              }`}>
                {entry.rank}
              </div>

              {/* Avatar */}
              <div className="relative">
                <img
                  src={entry.avatar}
                  alt={entry.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-white"></div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className={`font-semibold ${
                    currentTheme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                    {entry.name}
                  </h3>
                  <span className={`text-sm ${
                    currentTheme === "light" ? "text-gray-500" : "text-gray-400"
                  }`}>
                    {entry.symbol}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className={currentTheme === "light" ? "text-gray-600" : "text-gray-400"}>
                    💰 {entry.amount}
                  </span>
                  <span className={currentTheme === "light" ? "text-gray-600" : "text-gray-400"}>
                    📅 {entry.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress and View */}
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-12 h-12 rounded-full ${
                getProgressColor(entry.progress)
              } text-white text-sm font-bold`}>
                {entry.progress}
              </div>
              <button className="flex items-center gap-2 px-4 py-2 text-sm text-pink-500 hover:text-pink-600 transition-colors">
                <Eye className="w-4 h-4" />
                {t('leaderboard.view')}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardHero; 