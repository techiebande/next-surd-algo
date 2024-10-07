import React, { useContext } from "react";
import Navbar from "../navbar";
import { DashboardContext } from "../dashboard";
import { cn } from "@/lib/utils";
import Strategies from "../strategies";
import GrindStrategyOverview from "../grindStrategyOverview";
import GrindStrategy from "../grindStrategy";
import GrindStrategyByDate from "../grindStrategyByDate";
import EAs from "../EAs";
import Perceptrader from "../perceptrader";
import { AdminDashboardContext } from "./admin-dashboard";
import Dashboard from "./dashboard";

const AdminMainContent = () => {
  const { isSidebarFold, dashboardState } = useContext(AdminDashboardContext);
  return (
    <div
      className={cn(
        "w-[calc(100vw-70px)] ml-[70px]",
        isSidebarFold
          ? ""
          : "w-[calc(100vw-70px)] md:w-[calc(100vw-170px)] md:ml-[170px]"
      )}
    >
      <Navbar />
      <div className="w-full">
        {dashboardState.currentTab === "dashboard" ? <Dashboard /> : null}
        {dashboardState.currentTab === "EAs" ? <EAs /> : null}
        {dashboardState.currentTab === "strategies" ? <Strategies /> : null}
      </div>
    </div>
  );
};

export default AdminMainContent;
