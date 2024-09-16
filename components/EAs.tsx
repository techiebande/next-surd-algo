import React from "react";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { EATabItems } from "@/lib/EATabItems";
import SectionHeader from "./SectionHeader";
import EACard from "./EACard";

const EAs = () => {
  return (
    <SectionContainer>
      <SectionTabs items={EATabItems} />
      <div className="px-5">
        <SectionHeader
          title="Expert Advisers"
          location="Home / Expert Advisers"
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <EACard
            image="/images/perceptrader.png"
            title="PERCEPTRADER AI"
            subTitle="Version 0.01"
            description="Perceptrader AI is a cutting-edge grid trading system that leverages the power of Artificial Intelligence... Learn more"
          />
          <EACard
            image="/images/evening_scalper.png"
            title="EVENING SCALPER"
            subTitle="Version 0.01"
            description="Evening Scalper Pro a state-of-the-art mean-reversion trading system that operates during the American trading session..."
          />
          <EACard
            image="/images/perceptrader.png"
            title="PERCEPTRADER AI"
            subTitle="Version 0.01"
            description="Perceptrader AI is a cutting-edge grid trading system that leverages the power of Artificial Intelligence... Learn more"
          />
          <EACard
            image="/images/evening_scalper.png"
            title="EVENING SCALPER"
            subTitle="Version 0.01"
            description="Evening Scalper Pro a state-of-the-art mean-reversion trading system that operates during the American trading session..."
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default EAs;
