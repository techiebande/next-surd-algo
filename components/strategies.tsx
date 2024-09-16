import React from "react";
import StrategyTabs from "./sectionTabs";
import StrategyCard from "./strategyCard";
import AddNewNewStrategy from "./newStrategyModal";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { strategyTabItems } from "@/lib/strategyTabItems";
import SectionHeader from "./SectionHeader";

const Strategies = () => {
  return (
    <SectionContainer>
      <SectionTabs items={strategyTabItems} />
      <div className="px-5">
        <SectionHeader
          title="Strategies"
          location="Home / Strategies"
          actionButton={<AddNewNewStrategy />}
        />

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
    </SectionContainer>
  );
};

export default Strategies;
