import React from "react";

const banner = () => {
    return (
        <div className="relative min-h-[491px] bg-[#fefcf5] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Shapes */}
          <div className="absolute top-[-100px] left-[-100px] w-52 h-52 md:w-72 md:h-72 bg-orange-400 rounded-full animate-bounce-slow opacity-80 shadow-lg" />
          <div className="absolute bottom-[-80px] left-[-120px] w-[300px] h-[200px] md:w-[400px] md:h-[250px] bg-yellow-300 rounded-[80px] md:rounded-[100px] rotate-[10deg] animate-move-left opacity-80 shadow-lg" />
          <div className="absolute bottom-[-80px] right-[-120px] w-[240px] h-[150px] md:w-[300px] md:h-[180px] bg-green-300 rounded-[80px] md:rounded-[100px] rotate-[25deg] animate-move-right opacity-80 shadow-lg" />
    
          {/* Text Content */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-snug mb-4">
            Find a company you can trust
          </h1>
          <p className="mt-2 text-lg md:text-xl text-gray-600">Real reviews by real people.</p>
    
          {/* Search Bar */}
          <div className="mt-6 w-full max-w-lg relative">
            <input
              type="text"
              placeholder="Search company or category"
              className="w-full p-4 pr-12 rounded-full shadow-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base md:text-lg transition duration-200"
            />
            <button className="absolute right-2 top-2 bottom-2 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center transition duration-200 hover:bg-blue-700">
              🔍
            </button>
          </div>
    
          {/* Animation keyframes */}
          <style>{`
            @keyframes move-left {
              0% { transform: translateX(0); }
              50% { transform: translateX(-30px); }
              100% { transform: translateX(0); }
            }
            @keyframes move-right {
              0% { transform: translateX(0); }
              50% { transform: translateX(30px); }
              100% { transform: translateX(0); }
            }
            @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-20px); }
            }
            .animate-move-left {
              animation: move-left 6s ease-in-out infinite;
            }
            .animate-move-right {
              animation: move-right 6s ease-in-out infinite;
            }
            .animate-bounce-slow {
              animation: bounce-slow 5s ease-in-out infinite;
            }
          `}</style>
        </div>
      );
    }

export default banner;
