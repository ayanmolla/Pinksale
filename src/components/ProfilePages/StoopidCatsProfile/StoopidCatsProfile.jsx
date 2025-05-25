import React, { useState } from "react";
import { 
  Globe, 
  MessageCircle, 
  Send, 
  Instagram, 
  MessageSquare,
  TrendingUp,
  ChevronDown,
  ExternalLink
} from "lucide-react";

const StoopidCatsProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [email, setEmail] = useState("");
  const currentTheme = "light";

  // Mock data based on the image
  const profileData = {
    title: "Stoopid Cats Presale",
    status: "ended",
    badges: ["Audit", "KYC"],
    socialLinks: [
      { icon: Globe, url: "#" },
      { icon: MessageCircle, url: "#" },
      { icon: Send, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: MessageSquare, url: "#" }
    ],
    presaleInfo: {
      softCap: "847.95 SOL ($145.3K)",
      hardCap: "2,000 SOL ($342.6K)",
      currentRaised: "847.9523 SOL (42.40%)",
      contributors: 488,
      minBuy: "0.05 SOL",
      maxBuy: "50 SOL",
      unsoldTokens: "92,163,819.8801 STOCAT",
      claimTime: "2025.05.22 12:46 (UTC)"
    },
    tokenInfo: {
      address: "9Da97ub4u2jEoDH6htMqkPdifah4odmQreJcfZza2mHJ",
      name: "Stoopid Cats",
      symbol: "STOCAT",
      decimals: 6,
      totalSupply: "1,880,878,092.2409"
    },
    poolInfo: {
      manualListing: true,
      poolAddress: "FsG7BTpThGsnP2c78qc9F2inYEqUoSEKGCAQ8eMvVtsi",
      tokensForPresale: "160,000,000 STOCAT",
      softCap: "500 SOL",
      hardCap: "2,000 SOL",
      presaleRate: "1 SOL = 80,000 STOCAT",
      startTime: "2025.04.10 12:00 (UTC)"
    },
    additionalFeatures: [
      "Potential >995x to Current Competitors",
      "World-First LNSP: Lifetime NFT Rewards Every 3 Months",
      "Top NFT Holders: <2% Listed",
      "Strategic IP Expansion Across Asia"
    ],
    aboutPoints: [
      { icon: "🔥", text: "Presale 1 sold out", type: "warning" },
      { icon: "🔥", text: "Listing May 28", type: "warning" },
      { icon: "🔥", text: "Unsold presale burn", type: "warning" },
      { icon: "✅", text: "Games development", type: "success" },
      { icon: "✅", text: "IP merch", type: "success" },
      { icon: "🏆", text: "Ranked gaming project", type: "warning" },
      { icon: "🔥", text: "Reveals soon", type: "warning" },
      { icon: "✅", text: "BingX listed", type: "success" },
      { icon: "✅", text: "MEXC listed", type: "success" },
      { icon: "✅", text: "BitMart listed", type: "success" }
    ]
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 ${
      currentTheme === "light" 
        ? "bg-white" 
        : currentTheme === "dark"
          ? "bg-gray-900"
          : "bg-gray-800"
    } rounded-lg shadow-lg`}>
      
      {/* Header Section */}
      <div className="relative mb-8">
        {/* Background Banner */}
        <div className="h-64 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
              currentTheme === "light"
                ? "bg-red-100 text-red-600"
                : "bg-red-900 text-red-300"
            }`}>
              ● Ended
            </span>
          </div>
        </div>
        
        {/* Profile Image and Title */}
        <div className="absolute -bottom-8 left-6">
          <div className="w-24 h-24 bg-yellow-400 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-3xl">😺</span>
          </div>
        </div>
      </div>

      {/* Title and Badges */}
      <div className="mt-12 mb-6">
        <h1 className={`text-3xl font-bold mb-4 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          {profileData.title}
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {profileData.badges.map((badge, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${
              badge === "Audit" 
                ? "bg-blue-100 text-blue-600"
                : "bg-green-100 text-green-600"
            }`}>
              {badge}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex gap-3">
          {profileData.socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              className={`p-2 rounded-lg transition-colors ${
                currentTheme === "light"
                  ? "text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                  : "text-gray-400 hover:text-pink-400 hover:bg-gray-800"
              }`}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="lg:col-span-2">
          <h2 className={`text-xl font-semibold mb-4 ${
            currentTheme === "light" ? "text-gray-900" : "text-white"
          }`}>
            About
          </h2>
          
          <div className="space-y-3">
            {profileData.aboutPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-lg">{point.icon}</span>
                <span className={`${
                  currentTheme === "light" ? "text-gray-700" : "text-gray-300"
                }`}>
                  {point.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Panel */}
        <div className="space-y-6">
          
          {/* Manual Listing Warning */}
          <div className={`p-4 rounded-lg border-l-4 border-orange-400 ${
            currentTheme === "light"
              ? "bg-orange-50 text-orange-800"
              : "bg-orange-900 bg-opacity-20 text-orange-300"
          }`}>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">⚠️</span>
              <div>
                <h3 className="font-semibold mb-1">Manual Listing Launchpad</h3>
                <p className="text-sm">Manual listing warning</p>
              </div>
            </div>
          </div>

          {/* Pool Status */}
          <div className={`text-center p-4 rounded-lg ${
            currentTheme === "light"
              ? "bg-gray-50 text-gray-700"
              : "bg-gray-800 text-gray-300"
          }`}>
            <p className="mb-2">Pool ended</p>
            <button className={`px-4 py-2 rounded-lg text-pink-500 border border-pink-300 hover:bg-pink-50 transition-colors ${
              currentTheme === "dark" ? "hover:bg-pink-900 hover:bg-opacity-20" : ""
            }`}>
              💹 View chart | Buy/sell
            </button>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className={currentTheme === "light" ? "text-gray-600" : "text-gray-400"}>
                {profileData.presaleInfo.softCap}
              </span>
              <span className={currentTheme === "light" ? "text-gray-600" : "text-gray-400"}>
                {profileData.presaleInfo.hardCap}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
              <div className="bg-pink-500 h-2 rounded-full" style={{ width: '42.4%' }}></div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                currentTheme === "light"
                  ? "bg-gray-50 hover:bg-gray-100"
                  : "bg-gray-800 hover:bg-gray-700"
              }`}
            >
              <span className={`font-medium ${
                currentTheme === "light" ? "text-gray-900" : "text-white"
              }`}>
                Details
              </span>
              <ChevronDown className={`w-5 h-5 transition-transform ${
                isExpanded ? "rotate-180" : ""
              } ${currentTheme === "light" ? "text-gray-500" : "text-gray-400"}`} />
            </button>

            {isExpanded && (
              <div className="space-y-3">
                {[
                  { label: 'Status', value: 'Ended', color: 'text-green-500' },
                  { label: 'Sale type', value: 'Public', color: 'text-pink-500' },
                  { label: 'Unsold token', value: profileData.presaleInfo.unsoldTokens },
                  { label: 'Min buy', value: profileData.presaleInfo.minBuy },
                  { label: 'Max buy', value: profileData.presaleInfo.maxBuy },
                  { label: 'Current raised', value: profileData.presaleInfo.currentRaised },
                  { label: 'Claim time', value: profileData.presaleInfo.claimTime },
                  { label: 'Total contributors', value: profileData.presaleInfo.contributors }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className={`text-sm ${
                      currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                    }`}>
                      {item.label}
                    </span>
                    <span className={`text-sm font-medium ${
                      item.color || (currentTheme === "light" ? "text-gray-900" : "text-white")
                    }`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profileData.additionalFeatures.map((feature, index) => (
            <div key={index} className={`p-4 rounded-lg border ${
              currentTheme === "light"
                ? "bg-blue-50 border-blue-200 text-blue-800"
                : "bg-blue-900 bg-opacity-20 border-blue-700 text-blue-300"
            }`}>
              <div className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">✓</span>
                <span className="text-sm">{feature}</span>
              </div>
            </div>
          ))}
          <div className={`p-4 rounded-lg border ${
            currentTheme === "light"
              ? "bg-orange-50 border-orange-200 text-orange-800"
              : "bg-orange-900 bg-opacity-20 border-orange-700 text-orange-300"
          }`}>
            <div className="flex items-start gap-2">
              <span className="text-orange-500 mt-1">🔥</span>
              <span className="text-sm">No VC & Team Token Vesting 4 years = No Dumping</span>
            </div>
          </div>
          <div className={`p-4 rounded-lg border ${
            currentTheme === "light"
              ? "bg-cyan-50 border-cyan-200 text-cyan-800"
              : "bg-cyan-900 bg-opacity-20 border-cyan-700 text-cyan-300"
          }`}>
            <div className="flex items-start gap-2">
              <span className="text-cyan-500 mt-1">💎</span>
              <span className="text-sm">Funds Used for Monthly Buybacks & LP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Token Information Section */}
      <div className="mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          Token
        </h2>
        <div className={`p-6 rounded-lg ${
          currentTheme === "light" ? "bg-gray-50" : "bg-gray-800"
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className={`text-sm font-medium ${
                  currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                }`}>
                  Address
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-sm font-mono break-all ${
                    currentTheme === "light" ? "text-pink-600" : "text-pink-400"
                  }`}>
                    {profileData.tokenInfo.address}
                  </span>
                  <button className={`p-1 rounded hover:bg-gray-200 ${
                    currentTheme === "dark" ? "hover:bg-gray-700" : ""
                  }`}>
                    📋
                  </button>
                </div>
                <p className="text-xs text-orange-500 mt-1">⚠ Do not send SOL to the token address</p>
              </div>
              <div>
                <label className={`text-sm font-medium ${
                  currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                }`}>
                  Name
                </label>
                <p className={`mt-1 ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {profileData.tokenInfo.name}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className={`text-sm font-medium ${
                  currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                }`}>
                  Symbol
                </label>
                <p className={`mt-1 ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {profileData.tokenInfo.symbol}
                </p>
              </div>
              <div>
                <label className={`text-sm font-medium ${
                  currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                }`}>
                  Decimals
                </label>
                <p className={`mt-1 ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {profileData.tokenInfo.decimals}
                </p>
              </div>
              <div>
                <label className={`text-sm font-medium ${
                  currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                }`}>
                  Total Supply
                </label>
                <p className={`mt-1 ${
                  currentTheme === "light" ? "text-gray-900" : "text-white"
                }`}>
                  {profileData.tokenInfo.totalSupply}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pool Info Section */}
      <div className="mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          Pool Info
        </h2>
        <div className={`p-6 rounded-lg ${
          currentTheme === "light" ? "bg-gray-50" : "bg-gray-800"
        }`}>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className={`font-medium ${
                currentTheme === "light" ? "text-gray-700" : "text-gray-300"
              }`}>
                Manual Listing
              </span>
              <span className="text-blue-500 font-medium">
                Liquidity will not be automatically added!
              </span>
            </div>
            
            <div>
              <label className={`text-sm font-medium ${
                currentTheme === "light" ? "text-gray-600" : "text-gray-400"
              }`}>
                Address
              </label>
              <div className="flex items-center gap-2 mt-1">
                <span className={`text-sm font-mono break-all ${
                  currentTheme === "light" ? "text-pink-600" : "text-pink-400"
                }`}>
                  {profileData.poolInfo.poolAddress}
                </span>
                <button className={`p-1 rounded hover:bg-gray-200 ${
                  currentTheme === "dark" ? "hover:bg-gray-700" : ""
                }`}>
                  📋
                </button>
              </div>
              <p className="text-xs text-orange-500 mt-1">⚠ Do not send SOL to the pool address</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className={`text-sm font-medium ${
                    currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                    Tokens For Presale
                  </label>
                  <p className={`mt-1 ${
                    currentTheme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                    {profileData.poolInfo.tokensForPresale}
                  </p>
                </div>
                <div>
                  <label className={`text-sm font-medium ${
                    currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                    SoftCap
                  </label>
                  <p className={`mt-1 ${
                    currentTheme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                    {profileData.poolInfo.softCap}
                  </p>
                </div>
                <div>
                  <label className={`text-sm font-medium ${
                    currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                    HardCap
                  </label>
                  <p className={`mt-1 ${
                    currentTheme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                    {profileData.poolInfo.hardCap}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className={`text-sm font-medium ${
                    currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                    Presale Rate
                  </label>
                  <p className={`mt-1 ${
                    currentTheme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                    {profileData.poolInfo.presaleRate}
                  </p>
                </div>
                <div>
                  <label className={`text-sm font-medium ${
                    currentTheme === "light" ? "text-gray-600" : "text-gray-400"
                  }`}>
                    Start Time
                  </label>
                  <p className={`mt-1 ${
                    currentTheme === "light" ? "text-gray-900" : "text-white"
                  }`}>
                    {profileData.poolInfo.startTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8">
        <div className="flex justify-between items-start mb-4">
          <h2 className={`text-xl font-semibold ${
            currentTheme === "light" ? "text-gray-900" : "text-white"
          }`}>
            Newsletters
          </h2>
          <button className={`text-sm ${
            currentTheme === "light" ? "text-gray-500 hover:text-gray-700" : "text-gray-400 hover:text-gray-200"
          }`}>
            Hide
          </button>
        </div>
        
        <div className={`p-6 rounded-lg ${
          currentTheme === "light" ? "bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200" : "bg-gradient-to-r from-pink-900 to-purple-900 bg-opacity-20 border border-pink-700"
        }`}>
          <p className={`mb-4 ${
            currentTheme === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
            Sign up our mailing list to receive our new presales, features, tips and reviews for next 100x projects.
          </p>
          
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className={`flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-500 ${
                currentTheme === "light"
                  ? "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                  : "bg-gray-800 border-gray-600 text-white placeholder-gray-400"
              }`}
            />
            <button className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              currentTheme === "light"
                ? "bg-pink-500 hover:bg-pink-600 text-white"
                : "bg-pink-600 hover:bg-pink-700 text-white"
            }`}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoopidCatsProfile;