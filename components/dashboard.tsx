"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import MainContent from "./mainContent";
import { sidebarItems } from "@/lib/sidebarItems";
import { StaticImageData } from "next/image";

interface DashboardTab {
  name: string;
  icon: StaticImageData;
  activeIcon: StaticImageData;
}

export const DashboardContext = React.createContext({
  isSidebarFold: false,
  toggleSidebar: () => {},
  dashboardState: {
    currentTab: sidebarItems[0],
  },
  changeCurrentTab: (tab: DashboardTab) => null,
  setDashboardState: (state: any) => {},
});

const Dashboard = () => {
  const [isSidebarFold, setIsSidebarFold] = useState(false);
  const [dashboardState, setDashboardState] = useState({
    currentTab: sidebarItems[2],
  });

  const toggleSidebar = () => {
    setIsSidebarFold(!isSidebarFold);
  };

  const changeCurrentTab = (tab: DashboardTab) => {
    setDashboardState({
      ...dashboardState,
      currentTab: tab,
    });

    return null;
  };
  return (
    <DashboardContext.Provider
      value={{
        isSidebarFold,
        toggleSidebar,
        dashboardState,
        changeCurrentTab,
        //@ts-nocheck
        setDashboardState,
      }}
    >
      <Sidebar />
      <MainContent />
    </DashboardContext.Provider>
  );
};

export default Dashboard;
