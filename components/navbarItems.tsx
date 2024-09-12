import React from "react";
import Search from "./search";
import LanguageDropdown from "./languageDropdown";
import Notification from "./notification";
import Image from "next/image";
import UserImage from "@/images/avatar.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeSwitch from "./themeSwitch";

const NavbarItems = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-5 md:gap-10 justify-end">
      <Search />
      <div className="flex items-center gap-5">
        <LanguageDropdown />
        <Notification />
        <ThemeSwitch />
      </div>
      <div className="flex items-center gap-4 md:ml-10">
        <Avatar>
          <AvatarImage src="/images/avatar.jpg" alt="admin image" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <div className="font-medium text-sm text-surd-black-1 dark:text-white">
          <div className="text-white">Marvel Major</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 md:hidden lg:block">
            Super Admin
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarItems;
