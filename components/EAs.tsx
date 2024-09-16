import React, { useContext } from "react";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { EATabItems } from "@/lib/EATabItems";
import SectionHeader from "./SectionHeader";
import EACard from "./EACard";
import { expertAdvicers } from "@/lib/expertAdvicers";
import { DashboardContext } from "./dashboard";
import CardsGrid from "./CardsGrid";

const EAs = () => {
  const { dashboardState, setDashboardState } = useContext(DashboardContext);
  return (
    <SectionContainer>
      <SectionTabs items={EATabItems} />
      <div className="px-5">
        <SectionHeader
          title="Expert Advisers"
          location="Home / Expert Advisers"
        />
        <CardsGrid>
          {expertAdvicers.map(
            ({ image, description, title, version }, index) => (
              <EACard
                onClick={() => {
                  setDashboardState({
                    ...dashboardState,
                    currentTab: { name: "Perceptrader" },
                  });
                }}
                key={index}
                image={image}
                title={title}
                version={version}
                description={description}
              />
            )
          )}
        </CardsGrid>
      </div>
    </SectionContainer>
  );
};

export default EAs;
