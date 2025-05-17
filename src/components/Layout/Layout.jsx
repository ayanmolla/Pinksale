import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle sidebar collapse
  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  };

  // Check dark mode preference on mount
  useEffect(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else if (
      savedDarkMode === null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="h-screen w-screen flex overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full ${
          collapsed ? "w-20" : "w-80"
        } transition-all duration-300 z-30`}
      >
        <Sidebar collapsed={collapsed} />
      </div>

      {/* Main Content Wrapper */}
      <div className={`flex flex-col transition-all duration-300 w-full`}>
        {/* Navbar */}
        {/* <div
          className={`fixed top-0 h-16 z-20 transition-all duration-300 ${
            collapsed ? "left-20" : "left-80"
          } right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center px-4`}
        > */}
          <Header/>
        {/* </div> */}

        {/* Main Content */}
        <main
          className={`min-h-screen h-full overflow-y-auto bg-gray-50 dark:bg-gray-900 transition-all pt-16 pb-8 px-6 ${
            collapsed ? "ml-20" : "ml-80"
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