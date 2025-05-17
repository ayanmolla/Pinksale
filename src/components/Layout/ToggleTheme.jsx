import { Moon, MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useRef, useState, useCallback } from "react";

const ToggleTheme = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef(null);

  // Use a fallback theme if the current theme is undefined
  const currentTheme = theme || "light"; // Default to light theme if theme is undefined

  console.log("currentTheme", currentTheme);
  

  const handleClickOutside = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const changeTheme = (newTheme) => {
  const html = document.documentElement;
  html.classList.remove("light", "dark", "dim"); // Remove all theme classes
  setTheme(newTheme); // Let next-themes add the correct one
};


  return (
    <div className="relative">
      <div className="w-10 h-10 rounded-lg border border-custom-border bg-sub-card">
        <button
          className="w-full h-full flex justify-center items-center text-dispute-color"
          onClick={() => setOpen(!open)}
        >
          {currentTheme === "light" ? (
            <Sun className="w-5 h-5" />
          ) : currentTheme === "dark" ? (
            <Moon className="w-5 h-5" />
          ) : (
            <MoonStar className="w-5 h-5" />
          )}
        </button>
      </div>
      {open && (
        <div
          ref={dropdownRef}
          className="absolute right-0 bg-card border border-custom-border p-2 rounded-xl z-50 w-44 mt-2 flex flex-col gap-2 justify-start items-start shadow-lg dark:shadow-[#212121] text-dispute-color"
        >
          <button
            onClick={() => changeTheme("light")}
            className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
              currentTheme === "light"
                ? "text-text-color "
                : "hover:bg-gray-700 hover:text-white"
            }`}
          >
            <Sun className="w-4 h-4" /> Light
          </button>
          <button
            onClick={() => changeTheme("dark")}
            className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
              currentTheme === "dark"
                ? "text-text-color "
                : "hover:bg-gray-700 hover:text-white"
            }`}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
          <button
            onClick={() => changeTheme("dim")}
            className={`flex gap-2 items-center text-sm w-full p-1.5 rounded-lg ${
              currentTheme === "dim"
                ? "text-text-color "
                : "hover:bg-gray-700 hover:text-white"
            }`}
          >
            <MoonStar className="w-4 h-4" />
            Dim
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleTheme;