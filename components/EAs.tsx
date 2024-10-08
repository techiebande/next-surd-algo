import React, { useContext } from "react";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { EATabItems } from "@/lib/EATabItems";
import SectionHeader from "./SectionHeader";
import EACard from "./EACard";
import { expertAdvicers } from "@/lib/expertAdvicers";
import { DashboardContext } from "./dashboard";
import CardsGrid from "./CardsGrid";
import Image from "next/image";
import { Button } from "./ui/button";
import PlusIcon from "@/icons/plus.svg";

const EAs = ({ isAdmin }: { isAdmin?: boolean }) => {
  const { dashboardState, setDashboardState } = useContext(DashboardContext);
  return (
    <SectionContainer>
      <SectionTabs items={EATabItems} />
      <div className="px-5">
        <SectionHeader
          title="ExpertAdvisors"
          location="Home / ExpertAdvisors"
          actionButton={
            isAdmin ? (
              <Button className=" bg-blue-500 text-white text-sm font-sogoeUISemiBold p-2 rounded-sm gap-4 h-[38px] flex items-center justify-center">
                <Image
                  src={PlusIcon}
                  alt="new strategy"
                  width={24}
                  height={24}
                />
                Add ExpertAdvisor
              </Button>
            ) : null
          }
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
