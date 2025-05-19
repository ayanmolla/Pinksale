import React from "react";
import { Outlet } from "react-router-dom";
import { useTheme } from "next-themes";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const { theme } = useTheme();
  
  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light";

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar - Hover to expand */}
      <Sidebar />

      {/* Main Content Wrapper */}
      <div className={`flex flex-col transition-all duration-300 w-full`}>
        {/* Navbar */}
        <div 
          className={`fixed top-0 left-16 right-0 h-16 z-20 transition-all duration-300 ${
            currentTheme === "light" 
              ? "bg-white border-b border-gray-200" 
              : currentTheme === "dark"
                ? "bg-gray-900 border-b border-gray-700"
                : "bg-gray-800 border-b border-gray-700" // For dim theme
          }`}
        >
          <Header />
        </div>

        {/* Main Content */}
        <main
          className={`min-h-screen h-full overflow-y-auto transition-all my-16 pb-20 p-4 ml-16 ${
            currentTheme === "light" 
              ? "bg-gray-50" 
              : currentTheme === "dark"
                ? "bg-gray-900"
                : "bg-gray-800" // For dim theme
          }`}
          style={{ height: "calc(100vh - 2.5rem)" }}
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;