import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { ChevronDown, Search } from 'lucide-react';

const PinkLockToken = () => {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [chainDropdownOpen, setChainDropdownOpen] = useState(false);
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";
  
  const tokenData = [
    { id: 1, name: 'Venus', symbol: 'Venus', amount: '1,000 Venus' },
    { id: 2, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '1,000,000.00001 Cake-LP' },
    { id: 3, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '1,000,000.00001 Cake-LP' },
    { id: 4, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '0.01 Cake-LP' },
    { id: 5, name: 'Litbull', symbol: 'LTB', amount: '40,000,000 LTB' },
    { id: 6, name: 'qqq', symbol: 'qqq', amount: '750,000 qqq' },
    { id: 7, name: 'SOON', symbol: 'SOON', amount: '44,300,000 SOON' },
    { id: 8, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '31,615,548 Cake-LP' },
    { id: 9, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '11,000 Cake-LP' },
    { id: 10, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '1,000,000.00001 Cake-LP' },
    { id: 11, name: 'SOON', symbol: 'SOON', amount: '36,700,000 SOON' },
    { id: 12, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '707,106.7812 Cake-LP' },
    { id: 13, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '707,106.7812 Cake-LP' },
    { id: 14, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '7,071,0678 Cake-LP' },
    { id: 15, name: 'ledcangee', symbol: 'MIGAO', amount: '3,000,000 MIGAO' },
    { id: 16, name: 'STITCH', symbol: 'STITCH', amount: '45,406,000,000 STITCH' },
    { id: 17, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '670.12 Cake-LP' },
    { id: 18, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '223,606 Cake-LP' },
    { id: 19, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '639,575.2441 Cake-LP' },
    { id: 20, name: 'Pancake LPs', symbol: 'Cake-LP', amount: '2,827,0126 Cake-LP' }
  ];

  const getThemeClass = (light, dark, dim) => {
    if (currentTheme === 'light') return light;
    if (currentTheme === 'dark') return dark;
    return dim; // For dim theme
  };

  return (
    <div className={`containerPinkLockToken ${getThemeClass(
      'bg-white text-gray-900',
      'bg-gray-900 text-gray-100',
      'bg-gray-800 text-gray-200'
    )}`}>
      <div className="headerPinkLockToken px-4 py-3 flex items-center">
        <h1 className="titlePinkLockToken text-xl font-bold">PinkLock</h1>
      </div>
      
      <div className="tabsPinkLockToken border-b flex px-4">
        <button 
          onClick={() => setActiveTab('all')}
          className={`tabButtonPinkLockToken py-2 px-4 ${activeTab === 'all' ? 
            'border-b-2 border-pink-500 font-medium' : 
            'text-gray-500'}`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveTab('myLocks')}
          className={`tabButtonPinkLockToken py-2 px-4 ${activeTab === 'myLocks' ? 
            'border-b-2 border-pink-500 font-medium' : 
            'text-gray-500'}`}
        >
          My Locks
        </button>
      </div>
      
      <div className="searchBarPinkLockToken px-4 py-3 flex justify-between items-center">
        <div className="searchInputContainerPinkLockToken relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by token address"
            className={`searchInputPinkLockToken w-full py-2 pl-10 pr-4 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-pink-500 ${
              getThemeClass(
                'bg-gray-100 text-gray-800 placeholder-gray-500',
                'bg-gray-800 text-gray-200 placeholder-gray-400',
                'bg-gray-700 text-gray-200 placeholder-gray-400'
              )
            }`}
          />
          <Search className="searchIconPinkLockToken absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
        
        <div className="chainSelectorPinkLockToken relative">
          <button 
            onClick={() => setChainDropdownOpen(!chainDropdownOpen)}
            className={`chainButtonPinkLockToken flex items-center gap-2 px-3 py-2 rounded-lg ${
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
            <div className={`chainDropdownPinkLockToken absolute right-0 mt-2 w-48 rounded-md shadow-lg z-10 ${
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
      
      <div className="tableContainerPinkLockToken px-4 overflow-x-auto">
        <table className="tablePinkLockToken w-full">
          <thead>
            <tr className={`tableHeaderPinkLockToken ${
              getThemeClass(
                'bg-gray-50 text-gray-600',
                'bg-gray-800 text-gray-300',
                'bg-gray-700 text-gray-300'
              )
            }`}>
              <th className="tableHeaderCellPinkLockToken py-3 text-left pl-2">Token</th>
              <th className="tableHeaderCellPinkLockToken py-3 text-left">Amount</th>
              <th className="tableHeaderCellPinkLockToken py-3 text-right pr-2"></th>
            </tr>
          </thead>
          <tbody>
            {tokenData.map((token) => (
              <tr 
                key={token.id} 
                className={`tableRowPinkLockToken border-b ${
                  getThemeClass(
                    'border-gray-200 hover:bg-gray-50',
                    'border-gray-700 hover:bg-gray-800',
                    'border-gray-700 hover:bg-gray-700'
                  )
                }`}
              >
                <td className="tableCellPinkLockToken py-4 pl-2">
                  <div className="flex items-center">
                    <div className="tokenLogoContainerPinkLockToken w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center mr-3">
                      <span className="text-xs">🪙</span>
                    </div>
                    <div>
                      <div className="tokenNamePinkLockToken font-medium">{token.name}</div>
                      <div className="tokenSymbolPinkLockToken text-sm text-gray-500">{token.symbol}</div>
                    </div>
                  </div>
                </td>
                <td className="tableCellPinkLockToken py-4">{token.amount}</td>
                <td className="tableCellPinkLockToken py-4 text-right pr-2">
                  <button className="viewButtonPinkLockToken text-pink-500 hover:text-pink-600">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="paginationPinkLockToken px-4 py-4 flex justify-center items-center gap-2">
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          &lt;
        </button>
        
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          currentPage === 1 ? 
          'bg-pink-500 text-white' : 
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          1
        </button>
        
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          2
        </button>
        
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          3
        </button>
        
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          4
        </button>
        
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          5
        </button>
        
        <span className="paginationEllipsisPinkLockToken px-1">...</span>
        
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          118
        </button>
        
        <button className={`paginationButtonPinkLockToken w-8 h-8 flex items-center justify-center rounded ${
          getThemeClass(
            'border border-gray-300 bg-white text-gray-700',
            'border border-gray-700 bg-gray-800 text-gray-300',
            'border border-gray-600 bg-gray-700 text-gray-300'
          )
        }`}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PinkLockToken;