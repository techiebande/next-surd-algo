"use client";

import React, { useContext, useState } from "react";
import Logo from "./logo";
import SidebarItem, { SidebarItemProps } from "./sidebarItem";
import { sidebarItems } from "@/lib/sidebarItems";
import { DashboardContext } from "./dashboard";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(sidebarItems[2]);

  const selectTab = (item: SidebarItemProps) => {
    setActiveTab(item);
  };

  const { isSidebarFold, changeCurrentTab } = useContext(DashboardContext);

  const sidebarClass = `${isSidebarFold ? "" : "md:w-[170px]"}`;

  console.log(isSidebarFold);

  return (
    <aside
      className={cn(
        "h-[100vh] bg-surd-dark-blue dark:bg-black transition-[width] w-[70px] fixed left-0 top-0",
        sidebarClass
      )}
    >
      <div className="pt-4 md:pl-5">
        <Logo />
      </div>
      <div className="flex flex-col mt-8 space-y-8">
        {sidebarItems.map((item, index) => {
          return (
            <SidebarItem
              onClick={() => {
                selectTab(item);
                changeCurrentTab(item);
              }}
              active={item.name === activeTab.name}
              activeIcon={item.activeIcon}
              key={index}
              name={item.name}
              icon={item.icon}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
