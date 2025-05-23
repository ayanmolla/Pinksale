import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { ChevronDown, Search } from 'lucide-react';

const PinkLockLiquidity = () => {
  const { theme } = useTheme();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('All');
  const [chainDropdownOpen, setChainDropdownOpen] = useState(false);
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";
  
  // Mock data representing the liquidity tokens
  const liquidityTokens = [
    { name: 'Solana Rewards/Wrapped BNB', symbol: 'REWARDS/WBNB', amount: '0.2121' },
    { name: 'Colond/Wrapped BNB', symbol: 'CLND/WBNB', amount: '0.1581' },
    { name: 'Pepe by Jason Futue/Wrapped BNB', symbol: 'PEPE/WBNB', amount: '0.5' },
    { name: 'Fish/Wrapped BNB', symbol: 'FISH/WBNB', amount: '3.873' },
    { name: 'Donkey (DONKEY BSC MEME)/Wrapped BNB', symbol: 'DONKEY/WBNB', amount: '0.2121' },
    { name: 'Rivalz Network/Wrapped BNB', symbol: 'RIZZ/WBNB', amount: '1.5811' },
    { name: 'SRCH/Wrapped BNB', symbol: 'SRCH/WBNB', amount: '0.3873' },
    { name: 'THE GOOD STUFF/Wrapped BNB', symbol: 'COCAINE/WBNB', amount: '0.5' },
    { name: 'Wrapped BNB/Kakius Maximus (kakiusmaximus.vip)', symbol: 'WBNB/KAKIUS', amount: '3.873' },
    { name: 'Wrapped BNB/abstract simpson', symbol: 'WBNB/ABSIMP', amount: '0.2121' },
    { name: 'Tether USD/TOKYO GAMES', symbol: 'USDT/TG', amount: '2,698,675.104' },
    { name: 'Wrapped BNB/GAME', symbol: 'WBNB/GAMES', amount: '0.5' },
    { name: 'Wrapped BNB/Bot AI', symbol: 'WBNB/BOTAI', amount: '0.0866' },
    { name: 'BabyPepellabyapememe.vip/Wrapped BNB', symbol: 'BABYPEPE/WBNB', amount: '3.873' },
    { name: 'Algeria/Wrapped BNB', symbol: 'ALGERIA/WBNB', amount: '0.5' },
    { name: 'Wrapped BNB/AITRUMP', symbol: 'WBNB/AITRUMP', amount: '1.2247' },
    { name: 'Portal3DLs/Wrapped BNB', symbol: 'P3DL/WBNB', amount: '3.873' },
    { name: 'BLCK Coin/Wrapped BNB', symbol: 'BLCK/WBNB', amount: '0.1581' },
    { name: 'Wrapped BNB/Kabosu', symbol: 'WBNB/KABOSU', amount: '0.3873' },
    { name: 'Ark Investment/Wrapped BNB', symbol: 'ARKI/WBNB', amount: '0.5' },
  ];

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(liquidityTokens.length / itemsPerPage);
  const paginatedTokens = liquidityTokens.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Helper function to get theme-appropriate classes
  const getThemeClass = (light, dark, dim) => {
    if (currentTheme === 'light') return light;
    if (currentTheme === 'dark') return dark;
    return dim; // For dim theme
  };

  return (
    <div className={`containerPinkLockLiquidity ${getThemeClass(
      'bg-white text-gray-900',
      'bg-gray-900 text-gray-100',
      'bg-gray-800 text-gray-200'
    )}`}>
      <div className="headerPinkLockLiquidity px-4 py-3 flex items-center">
        <h1 className="titlePinkLockLiquidity text-xl font-bold">PinkLock</h1>
      </div>
      
      <div className="tabsPinkLockLiquidity border-b flex px-4">
        <button 
          onClick={() => setActiveTab('All')}
          className={`tabButtonPinkLockLiquidity py-2 px-4 ${activeTab === 'All' ? 
            'border-b-2 border-pink-500 font-medium' : 
            'text-gray-500'}`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveTab('My Locks')}
          className={`tabButtonPinkLockLiquidity py-2 px-4 ${activeTab === 'My Locks' ? 
            'border-b-2 border-pink-500 font-medium' : 
            'text-gray-500'}`}
        >
          My Locks
        </button>
      </div>
      
      <div className="searchBarPinkLockLiquidity px-4 py-3 flex justify-between items-center">
        <div className="searchInputContainerPinkLockLiquidity relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by liquidity address"
            className={`searchInputPinkLockLiquidity w-full py-2 pl-10 pr-4 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 ${
              getThemeClass(
                'bg-gray-100 text-gray-800 placeholder-gray-500',
                'bg-gray-800 text-gray-200 placeholder-gray-400',
                'bg-gray-700 text-gray-200 placeholder-gray-400'
              )
            }`}
          />
          <Search className="searchIconPinkLockLiquidity absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
        
        <div className="chainSelectorPinkLockLiquidity relative">
          <button 
            onClick={() => setChainDropdownOpen(!chainDropdownOpen)}
            className={`chainButtonPinkLockLiquidity flex items-center gap-2 px-3 py-2 rounded-lg ${
              getThemeClass(
                'bg-gray-100 text-gray-800',
                'bg-gray-800 text-gray-200',
                'bg-gray-700 text-gray-200'
              )
            }`}
          >
            <span>BNB Smart Chain</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          
          {chainDropdownOpen && (
            <div className={`chainDropdownPinkLockLiquidity absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${
              getThemeClass(
                'bg-white border border-gray-200',
                'bg-gray-800 border border-gray-700',
                'bg-gray-700 border border-gray-600'
              )
            }`}>
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-pink-500 hover:text-white">BNB Smart Chain</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-pink-500 hover:text-white">Ethereum</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-pink-500 hover:text-white">Polygon</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-pink-500 hover:text-white">Arbitrum</a>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="tableContainerPinkLockLiquidity px-4 overflow-x-auto">
        <table className="tablePinkLockLiquidity w-full">
          <thead>
            <tr className={`tableHeaderPinkLockLiquidity ${
              getThemeClass(
                'bg-gray-50 text-gray-600',
                'bg-gray-800 text-gray-300',
                'bg-gray-700 text-gray-300'
              )
            }`}>
              <th className="tableHeaderCellPinkLockLiquidity py-3 text-left pl-2">Liquidity token</th>
              <th className="tableHeaderCellPinkLockLiquidity py-3 text-right">Amount</th>
              <th className="tableHeaderCellPinkLockLiquidity py-3 text-right pr-2"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedTokens.map((token, index) => (
              <tr 
                key={index} 
                className={`tableRowPinkLockLiquidity border-b ${
                  getThemeClass(
                    'border-gray-200 hover:bg-gray-50',
                    'border-gray-700 hover:bg-gray-800',
                    'border-gray-700 hover:bg-gray-700'
                  )
                }`}
              >
                <td className="tableCellPinkLockLiquidity py-4 pl-2">
                  <div className="flex items-center">
                    <div className="tokenLogoContainerPinkLockLiquidity w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center mr-3">
                      <span className="text-xs">🪙</span>
                    </div>
                    <div>
                      <div className="tokenNamePinkLockLiquidity font-medium">{token.name}</div>
                      <div className="tokenSymbolPinkLockLiquidity text-sm text-gray-500">{token.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="tableCellPinkLockLiquidity py-4 text-right">{token.amount}</td>
                <td className="tableCellPinkLockLiquidity py-4 text-right pr-2">
                  <button className="viewButtonPinkLockLiquidity text-pink-500 hover:text-pink-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="paginationPinkLockLiquidity px-4 py-4 flex justify-center items-center gap-2">
        <button 
          onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          } ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          &lt;
        </button>
        
        <button 
          onClick={() => setCurrentPage(1)}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            currentPage === 1 ? 
            'bg-pink-500 text-white' : 
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          }`}
        >
          1
        </button>
        
        <button 
          onClick={() => setCurrentPage(2)}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            currentPage === 2 ? 
            'bg-pink-500 text-white' : 
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          }`}
        >
          2
        </button>
        
        <button 
          onClick={() => setCurrentPage(3)}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            currentPage === 3 ? 
            'bg-pink-500 text-white' : 
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          }`}
        >
          3
        </button>
        
        <button 
          onClick={() => setCurrentPage(4)}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            currentPage === 4 ? 
            'bg-pink-500 text-white' : 
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          }`}
        >
          4
        </button>
        
        <button 
          onClick={() => setCurrentPage(5)}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            currentPage === 5 ? 
            'bg-pink-500 text-white' : 
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          }`}
        >
          5
        </button>
        
        <span className="paginationEllipsisPinkLockLiquidity px-1">...</span>
        
        <button 
          onClick={() => setCurrentPage(totalPages)}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            currentPage === totalPages ? 
            'bg-pink-500 text-white' : 
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          }`}
        >
          {totalPages}
        </button>
        
        <button 
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`paginationButtonPinkLockLiquidity w-8 h-8 flex items-center justify-center rounded ${
            getThemeClass(
              'border border-gray-300 bg-white text-gray-700',
              'border border-gray-700 bg-gray-800 text-gray-300',
              'border border-gray-600 bg-gray-700 text-gray-300'
            )
          } ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          &gt;
        </button>
      </div>
    </div>
  );

}
export default PinkLockLiquidity;