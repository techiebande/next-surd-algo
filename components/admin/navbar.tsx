"use client";

import React, { useContext, useState } from "react";
// import ThemeSwitch from "./themeSwitch";
import MenuFold from "@/icons/menu-fold-line.svg";
import MenuUnFold from "@/icons/menu-unfold-line.svg";
import HamburgerMenu from "@/icons/menu-line.svg";

import Image from "next/image";
// import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
// import NavbarItems from "./navbarItems";
import { AdminDashboardContext } from "./admin-dashboard";
import { Button } from "../ui/button";
import NavbarItems from "../navbarItems";

const Navbar = () => {
  const { isSidebarFold, toggleSidebar } = useContext(AdminDashboardContext);
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className="bg-surd-dark-blue flex items-center justify-between dark:bg-black h-[67px] w-full px-5">
      {isSidebarFold ? (
        <button onClick={toggleSidebar} className="hidden md:block w-4 min-w-4">
          <Image width={16} height={13} src={MenuUnFold} alt="unfold sidebar" />
        </button>
      ) : (
        <button onClick={toggleSidebar} className="hidden md:block w-4 min-w-4">
          <Image width={16} height={13} src={MenuFold} alt="fold sidebar" />
        </button>
      )}
      <div className="w-full md:hidden">
        <div className="w-full">
          <Button
            onClick={toggleMobileNav}
            className="p-0 bg-transparent block active:bg-transparent hover:bg-transparent ml-auto md:hidden"
          >
            <Image
              src={HamburgerMenu}
              alt="hamburger menu"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <div
          className={cn(
            "bg-surd-dark-blue z-50 dark:bg-black dark:text-white absolute h-0 right-0 top-[65px] w-[80%] overflow-hidden transition-all md:hidden",
            showMobileNav ? "h-[200px]" : "h-0"
          )}
        >
          <div className="p-5">
            <NavbarItems />
          </div>
        </div>
      </div>

      <div className="hidden md:block dark:text-white  md:w-[80%] lg:w-[80%] xl:w-[65%]">
        <NavbarItems />
      </div>
    </nav>
  );
};

export default Navbar;
