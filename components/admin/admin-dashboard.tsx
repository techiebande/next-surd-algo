"use client";

import React, { useState } from "react";
import MainContent from "../mainContent";
import { sidebarItems } from "@/lib/sidebarItems";
import { StaticImageData } from "next/image";
import AdminSidebar from "./admin-sdebar";
import AdminMainContent from "./admin-main-content";

export const AdminDashboardContext = React.createContext({
  isSidebarFold: false,
  toggleSidebar: () => {},
  dashboardState: {
    currentTab: "dashboard",
  },
  changeCurrentTab: (tab: string) => null,
  setDashboardState: (state: any) => {},
});

const AdminDashboard = () => {
  const [isSidebarFold, setIsSidebarFold] = useState(false);
  const [dashboardState, setDashboardState] = useState({
    currentTab: "dashboard",
  });

  const toggleSidebar = () => {
    setIsSidebarFold(!isSidebarFold);
  };

  const changeCurrentTab = (tab: string) => {
    setDashboardState({
      ...dashboardState,
      currentTab: tab,
    });

    return null;
  };
  return (
    <AdminDashboardContext.Provider
      value={{
        isSidebarFold,
        toggleSidebar,
        dashboardState,
        changeCurrentTab,
        //@ts-nocheck
        setDashboardState,
      }}
    >
      <AdminSidebar />
      <AdminMainContent />
    </AdminDashboardContext.Provider>
  );
};

export default AdminDashboard;
