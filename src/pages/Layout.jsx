import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Button } from "../components/ui/button";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-background transition-all ease-linear duration-100 flex flex-col items-center justify-start">
      <h1 className="text-4xl dark:text-white font-bold mb-8 mt-20">
        QUIZ APP
      </h1>

      <Outlet />

      <Button className="fixed bottom-5 right-5 px-5 py-2" onClick={toggleMode}>
        {darkMode ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
      </Button>
    </div>
  );
};

export default Layout;
