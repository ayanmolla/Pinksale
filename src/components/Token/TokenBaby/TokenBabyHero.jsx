import React, { useEffect, useState } from 'react';

const TokenBabyHero = () => {
  const [bubbles, setBubbles] = useState([]);
  const [theme, setTheme] = useState('light');

  // Theme detection (you can replace this with your actual theme context)
  useEffect(() => {
    const detectTheme = () => {
      const html = document.documentElement;
      if (html.classList.contains('dark')) {
        setTheme('dark');
      } else if (html.classList.contains('dim')) {
        setTheme('dim');
      } else {
        setTheme('light');
      }
    };

    detectTheme();
    
    // Watch for theme changes
    const observer = new MutationObserver(detectTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Generate bubbles
  useEffect(() => {
    const generateBubbles = () => {
      const newBubbles = [];
      for (let i = 0; i < 50; i++) {
        newBubbles.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 40 + 10,
          duration: Math.random() * 4 + 6,
          delay: Math.random() * 8,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
      setBubbles(newBubbles);
    };

    generateBubbles();
    
    // Regenerate bubbles periodically
    const interval = setInterval(generateBubbles, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative min-h-screen flex items-center justify-center overflow-hidden TokenBabyHero ${
      theme === 'light'
        ? 'bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 TokenBabyHero'
        : theme === 'dark'
          ? 'bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 TokenBabyHero'
          : 'bg-gradient-to-br from-gray-800 via-purple-800 to-blue-800 TokenBabyHero'
    }`}>
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 TokenBabyHero">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`absolute rounded-full TokenBabyHero ${
              theme === 'light'
                ? 'bg-gradient-to-r from-pink-200 to-purple-200 TokenBabyHero'
                : theme === 'dark'
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 TokenBabyHero'
                  : 'bg-gradient-to-r from-pink-500 to-purple-500 TokenBabyHero'
            }`}
            style={{
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              opacity: bubble.opacity,
              animation: `floatUp ${bubble.duration}s infinite ease-in-out ${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 TokenBabyHero">
        <div className={`absolute top-20 left-10 w-20 h-20 rounded-full TokenBabyHero ${
          theme === 'light'
            ? 'bg-pink-300 TokenBabyHero'
            : 'bg-pink-500 TokenBabyHero'
        }`} style={{ 
          opacity: 0.3,
          animation: 'floatSlow 8s ease-in-out infinite'
        }} />
        <div className={`absolute top-40 right-20 w-16 h-16 rotate-45 TokenBabyHero ${
          theme === 'light'
            ? 'bg-purple-300 TokenBabyHero'
            : 'bg-purple-500 TokenBabyHero'
        }`} style={{ 
          opacity: 0.3, 
          animation: 'rotateSlow 15s ease-in-out infinite'
        }} />
        <div className={`absolute bottom-32 left-1/4 w-12 h-12 rounded-full TokenBabyHero ${
          theme === 'light'
            ? 'bg-blue-300 TokenBabyHero'
            : 'bg-blue-500 TokenBabyHero'
        }`} style={{ 
          opacity: 0.4,
          animation: 'bounceSlow 6s ease-in-out infinite'
        }} />
        <div className={`absolute bottom-20 right-1/3 w-24 h-24 rounded-full TokenBabyHero ${
          theme === 'light'
            ? 'bg-gradient-to-r from-pink-200 to-purple-200 TokenBabyHero'
            : 'bg-gradient-to-r from-pink-600 to-purple-600 TokenBabyHero'
        }`} style={{ 
          opacity: 0.2,
          animation: 'pulseSlow 10s ease-in-out infinite'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto TokenBabyHero">
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight TokenBabyHero ${
          theme === 'light'
            ? 'text-gray-900 TokenBabyHero'
            : 'text-white TokenBabyHero'
        }`}>
          Launch Your Own Solana{' '}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent TokenBabyHero">
            Baby Token
          </span>{' '}
          on PinkSale
        </h1>
        
        <p className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-4xl mx-auto TokenBabyHero ${
          theme === 'light'
            ? 'text-gray-600 TokenBabyHero'
            : 'text-gray-300 TokenBabyHero'
        }`}>
          Create tokens that automatically reward holders with every transaction. No coding required, launch in minutes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center TokenBabyHero">
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl TokenBabyHero">
            Create Baby Token
          </button>
          
          <button className={`font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 border-2 TokenBabyHero ${
            theme === 'light'
              ? 'border-pink-500 text-pink-600 hover:bg-pink-50 TokenBabyHero'
              : 'border-pink-400 text-pink-400 hover:bg-pink-900 hover:bg-opacity-20 TokenBabyHero'
          }`}>
            Manage Token
          </button>
        </div>

        {/* Stats or Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 TokenBabyHero">
          <div className={`p-6 rounded-2xl backdrop-blur-sm border TokenBabyHero ${
            theme === 'light'
              ? 'bg-white bg-opacity-70 border-gray-200 TokenBabyHero'
              : theme === 'dark'
                ? 'bg-gray-800 bg-opacity-70 border-gray-700 TokenBabyHero'
                : 'bg-gray-700 bg-opacity-70 border-gray-600 TokenBabyHero'
          }`}>
            <div className="text-3xl font-bold text-pink-500 mb-2 TokenBabyHero">0%</div>
            <div className={`font-semibold TokenBabyHero ${
              theme === 'light' ? 'text-gray-800 TokenBabyHero' : 'text-white TokenBabyHero'
            }`}>Coding Required</div>
          </div>
          
          <div className={`p-6 rounded-2xl backdrop-blur-sm border TokenBabyHero ${
            theme === 'light'
              ? 'bg-white bg-opacity-70 border-gray-200 TokenBabyHero'
              : theme === 'dark'
                ? 'bg-gray-800 bg-opacity-70 border-gray-700 TokenBabyHero'
                : 'bg-gray-700 bg-opacity-70 border-gray-600 TokenBabyHero'
          }`}>
            <div className="text-3xl font-bold text-purple-500 mb-2 TokenBabyHero">5</div>
            <div className={`font-semibold TokenBabyHero ${
              theme === 'light' ? 'text-gray-800 TokenBabyHero' : 'text-white TokenBabyHero'
            }`}>Minutes to Launch</div>
          </div>
          
          <div className={`p-6 rounded-2xl backdrop-blur-sm border TokenBabyHero ${
            theme === 'light'
              ? 'bg-white bg-opacity-70 border-gray-200 TokenBabyHero'
              : theme === 'dark'
                ? 'bg-gray-800 bg-opacity-70 border-gray-700 TokenBabyHero'
                : 'bg-gray-700 bg-opacity-70 border-gray-600 TokenBabyHero'
          }`}>
            <div className="text-3xl font-bold text-blue-500 mb-2 TokenBabyHero">Auto</div>
            <div className={`font-semibold TokenBabyHero ${
              theme === 'light' ? 'text-gray-800 TokenBabyHero' : 'text-white TokenBabyHero'
            }`}>Holder Rewards</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(calc(100vh + 50px)) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          3% {
            opacity: 0.3;
            transform: translateY(calc(100vh + 30px)) rotate(10deg) scale(0.85);
          }
          8% {
            opacity: 0.8;
            transform: translateY(calc(100vh - 20px)) rotate(30deg) scale(1);
          }
          92% {
            opacity: 0.8;
            transform: translateY(20px) rotate(330deg) scale(1);
          }
          97% {
            opacity: 0.3;
            transform: translateY(-30px) rotate(350deg) scale(0.85);
          }
          100% {
            transform: translateY(-50px) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes floatSlow {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-20px) scale(1.05); 
          }
        }

        @keyframes rotateSlow {
          0% { 
            transform: rotate(45deg) scale(1); 
          }
          50% { 
            transform: rotate(225deg) scale(1.1); 
          }
          100% { 
            transform: rotate(405deg) scale(1); 
          }
        }

        @keyframes bounceSlow {
          0%, 100% { 
            transform: translateY(0px) scale(1); 
          }
          50% { 
            transform: translateY(-15px) scale(1.1); 
          }
        }

        @keyframes pulseSlow {
          0%, 100% { 
            transform: scale(1); 
            opacity: 0.2; 
          }
          50% { 
            transform: scale(1.2); 
            opacity: 0.4; 
          }
        }
      `}</style>
    </div>
  );
};

export default TokenBabyHero;