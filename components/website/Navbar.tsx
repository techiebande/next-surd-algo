"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import HomeIcon from "@/icons/Home.svg";
import EAsIcon from "@/icons/EAs.svg";
import EAsIconActive from "@/icons/EasActive.svg";
import HomeIconActive from "@/icons/HomeActive.svg";
import StrategiesIcon from "@/icons/Strategies.svg";
import StrategiesIconActive from "@/icons/StrategiesIcon.svg";
import CouponActive from "@/icons/coupon-line.svg";
import Coupon from "@/icons/coupon-line-active.svg";
import BillActive from "@/icons/bill-line-active.svg";
import Bill from "@/icons/bill-line.svg";

const Logo = () => {
  return (
    <div
      className={cn("flex items-center gap-2 md:justify-start")}
      role="banner"
    >
      <div className="border border-white font-segoeUIBold text-sm rounded-surd-rounded-10px w-[34px] h-[34px] bg-surd-dark-blue text-white flex items-center justify-center">
        SA
      </div>

      <h1 className="text-[20px] font-segoeUIBold text-sm text-black text-nowrap">
        SurdAlgo EA
      </h1>
    </div>
  );
};

const Navlink = ({
  name,
  isActive,
  link,
  tab,
}: {
  name: string;
  isActive?: boolean;
  link: string;
  tab: string;
}) => {
  const router = useRouter();
  return (
    <li
      className={cn(
        "text-sm font-segoeUISemiBold text-nowrap text-black p-[4px]",
        isActive ? "border-b-[3px] border-surd-yellow-1" : ""
      )}
    >
      <Button
        className="bg-transparent p-0 shadow-none"
        onClick={() => {
          if (tab === "EAs") {
            localStorage.setItem(
              "activeTab",
              JSON.stringify({
                name: "EAs",
                icon: EAsIcon,
                activeIcon: EAsIconActive,
              })
            );
          } else if (tab === "Strategies") {
            localStorage.setItem(
              "activeTab",
              JSON.stringify({
                name: "Strategies",
                icon: StrategiesIcon,
                activeIcon: StrategiesIconActive,
              })
            );
          }

          router.push(link);
        }}
      >
        {name}
      </Button>
    </li>
  );
};

const NavLinks = () => (
  <div className="flex flex-col md:flex-row md:items-center gap-10">
    <ul className="flex items-center gap-5">
      <Navlink tab="home" link="/" isActive name="Home" />
      <Navlink tab="EAs" link="/client-area" name="Expert Advicers" />
      <Navlink tab="Strategies" link="/client-area" name="Strategies" />
    </ul>
    <Button className="bg-surd-yellow-1 hover:bg-surd-yellow-1 text-sm font-segoeUIBold rounded-3xl ml-auto">
      <Link href="/client-area">CLIENT AREA</Link>
    </Button>
  </div>
);

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const toggleNav = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="relative h-[80px] bg-white items-center flex justify-between w-full px-5 lg:px-[100px]">
      <Logo />
      <div className="hidden md:block">
        <NavLinks />
      </div>

      <Button
        onClick={toggleNav}
        className="md:hidden bg-transparent p-0 hover:bg-transparent  shadow-none"
      >
        <MenuIcon className="w-6 h-6" />
      </Button>
      <div
        className={cn(
          "absolute right-0 top-[80px] bg-white  z-50 text-black border-t p-3",
          showMobileNav ? "flex" : "hidden"
        )}
      >
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
