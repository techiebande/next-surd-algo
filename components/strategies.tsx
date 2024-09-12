import React from "react";
import StrategyTabs from "./strategyTabs";
import StrategyCard from "./strategyCard";
import AddNewNewStrategy from "./newStrategyModal";

const Strategies = () => {
  return (
    <div className="dark:text-white bg-surd-grey-5 dark:bg-surd-grey-3 space-y-5 h-[calc(100vh-65px)]">
      <StrategyTabs />
      <div className="px-5">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-segoeUISemiBold">Strategies</h2>
            <span className="text-sm dark:text-surd-grey-4">
              Home / Strategies
            </span>
          </div>
          <AddNewNewStrategy />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
          <StrategyCard
            name="GRIND STRATEGY"
            alias="GS"
            details={[
              { name: "Account ID", value: "7894561" },
              { name: "Expert Advicer", value: "Percepttrader AI" },
            ]}
          />
          <StrategyCard
            name="MASTER STRATEGY"
            alias="MS"
            details={[
              { name: "Account ID", value: "7894561" },
              { name: "Expert Advicer", value: "Percepttrader AI" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
