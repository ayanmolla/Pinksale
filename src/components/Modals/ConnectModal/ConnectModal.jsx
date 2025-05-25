import React, { useState } from 'react';
import { X } from 'lucide-react';
import btnicon1 from '../../../Assets/ConnectModalbtnicon1.webp';
import btnicon2 from '../../../Assets/ConnectModalbtnicon2.webp';
import btnicon3 from '../../../Assets/ConnectModalbtnicon3.webp';
import btnicon4 from '../../../Assets/ConnectModalbtnicon4.webp';
import btnicon5 from '../../../Assets/ConnectModalbtnicon5.webp';
import btnicon6 from '../../../Assets/ConnectModalbtnicon6.webp';
import btnicon7 from '../../../Assets/ConnectModalbtnicon7.png';
import btnicon8 from '../../../Assets/ConnectModalbtnicon8.webp';

const ConnectModal = ({ isOpen, onClose }) => {

  const walletOptions = [
    { name: 'WalletConnect', icon: btnicon1, qrCode: true },
    { name: 'MetaMask', icon: btnicon2 },
    { name: 'Trust Wallet', icon: btnicon3 },
    { name: 'Binance Wallet', icon: btnicon4 },
    { name: 'OKX Wallet', icon: btnicon5 },
    { name: 'Bitget Wallet', icon: btnicon6 },
    { name: 'AveWallet', icon: btnicon7 },
    { name: 'Coinbase Wallet', icon: btnicon8 },
  ];

  const socialOptions = [
    { name: 'Discord', icon: '💬', color: 'bg-indigo-600' },
    { name: 'Nifty', icon: '🎨', color: 'bg-purple-600' },
    { name: 'GitHub', icon: '🐙', color: 'bg-gray-800' },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
      <div className="bg-gray-900 rounded-[35px] p-6 w-96 max-w-md mx-4 relative max-h-[90vh] h-[600px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
            <h2 className="text-white text-lg font-semibold">Connect Wallet</h2>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Area */}
        <div 
          className="flex-1 overflow-y-auto pr-2 mb-4"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {/* Wallet Options */}
          <div className="space-y-3 mb-3">
            {walletOptions.map((wallet, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left group"
              >
                <div className="w-10 h-10">
                  <img src={wallet.icon} alt="" className='rounded-lg' />
                </div>
                <span className="text-white font-medium flex-1">{wallet.name}</span>
                {wallet.qrCode && (
                  <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                    QR CODE
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* All Wallets Option */}
          <button className="w-full flex items-center justify-between gap-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <span className="text-white font-medium flex-1">All Wallets</span>
            </div>
            <span className="text-gray-400 text-sm">450+</span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* Continue with Google */}
          <button className="w-full flex items-center gap-3 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors mb-4">
            <div className="w-6 h-6">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <span className="text-white font-medium">Continue With Google</span>
          </button>

          {/* Social Login Options */}
          <div className="flex justify-center gap-4 mb-6">
            <button className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            {socialOptions.map((social, index) => (
              <button
                key={index}
                className={`w-12 h-12 ${social.color} hover:opacity-80 rounded-lg flex items-center justify-center transition-opacity`}
              >
                <span className="text-white text-lg">{social.icon}</span>
              </button>
            ))}
          </div>

          {/* Email Input */}
          <div className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg mb-4">
            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent text-white placeholder-gray-400 border-none outline-none font-medium"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <span className="text-gray-400 text-sm">Haven't got a wallet? </span>
          <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConnectModal;