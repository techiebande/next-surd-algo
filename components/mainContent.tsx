import React, { useContext } from "react";
import Navbar from "./navbar";
import { DashboardContext } from "./dashboard";
import { cn } from "@/lib/utils";
import Strategies from "./strategies";
import GrindStrategyOverview from "./grindStrategyOverview";
import GrindStrategy from "./grindStrategy";
import GrindStrategyByDate from "./grindStrategyByDate";
import EAs from "./EAs";

const MainContent = () => {
  const { isSidebarFold, dashboardState } = useContext(DashboardContext);
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
        {dashboardState.currentTab.name === "Strategies" ? (
          <Strategies />
        ) : null}
        {dashboardState.currentTab.name === "grindStrategyOverview" ? (
          <GrindStrategyOverview />
        ) : null}
        {dashboardState.currentTab.name === "grindStrategy" ? (
          <GrindStrategy />
        ) : null}
        {dashboardState.currentTab.name === "grindStrategyByDate" ? (
          <GrindStrategyByDate />
        ) : null}
        {dashboardState.currentTab.name === "EAs" ? <EAs /> : null}
      </div>
    </div>
  );
};

export default MainContent;
