import React from "react";
import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import btnicon1 from '../../../Assets/CreateTeleAirdropicon1.svg';
import btnicon2 from '../../../Assets/CreateTeleAirdropicon2.png';
import btnicon3 from '../../../Assets/CreateTeleAirdropicon3.svg';

const CreateTeleAirdropHero = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const currentTheme = theme || "light";

  const walletOptions = [
    {
      id: "evm",
      name: t('createTeleAirdrop.wallets.evm'),
      icon: btnicon1
    },
    {
      id: "solana",
      name: t('createTeleAirdrop.wallets.solana'),
      icon: btnicon2
    },
    {
      id: "ton",
      name: t('createTeleAirdrop.wallets.ton'),
      icon: btnicon3
    }
  ];

  return (
    <div className={`max-w-4xl mx-auto p-6 rounded-xl ${
      currentTheme === "light" ? "bg-white" : 
      currentTheme === "dark" ? "bg-gray-900" : "bg-gray-800"
    }`}>
      {/* Header */}
      <div className="mb-8">
        <h1 className={`text-3xl font-bold mb-4 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          {t('createTeleAirdrop.title')}
        </h1>
      </div>

      {/* Info Section */}
      <div className={`rounded-lg p-6 mb-8 border-l-4 border-pink-400 ${
        currentTheme === "light" 
          ? "bg-pink-50 border border-cyan-200" 
          : currentTheme === "dark"
            ? "bg-pink-900/20 border border-pink-800"
            : "bg-pink-800/20 border border-pink-700"
      }`}>
        <div className="space-y-4">
          <p className={`text-sm leading-relaxed ${
            currentTheme === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
            {t('createTeleAirdrop.description.main')}
          </p>
          <p className={`text-sm leading-relaxed ${
            currentTheme === "light" ? "text-gray-700" : "text-gray-300"
          }`}>
            {t('createTeleAirdrop.description.connection')}
          </p>
        </div>
      </div>

      {/* Wallet Selection */}
      <div className="mb-8">
        <h2 className={`text-xl font-semibold mb-6 ${
          currentTheme === "light" ? "text-gray-900" : "text-white"
        }`}>
          {t('createTeleAirdrop.walletSelection')}
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
  );
};

export default CreateTeleAirdropHero;