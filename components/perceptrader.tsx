import React from "react";
import SectionContainer from "./sectionContainer";
import RoundedBox from "./roundedBox";
import { expertAdvicers } from "@/lib/expertAdvicers";
import Image from "next/image";
import SectionTabs from "./sectionTabs";
import { perceptraderTabItems } from "@/lib/perceptraderTabItems";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import CardsGrid from "./CardsGrid";
import { perceptraderAccountTypes } from "@/lib/perceptraderAccountTypes";
import PereptraderAccountsCard from "./PereptraderAccountsCard";
import { platform } from "os";
import DownloadAdvicer from "./DownloadAdvicer";

const Perceptrader = () => {
  const { title, version, image, detailedDescription } = expertAdvicers[0];
  return (
    <SectionContainer className="p-5">
      <RoundedBox className="border border-surd-grey-2 py-5 font-segoeUI space-y-5">
        <div className="h-[55px] bg-surd-grey-2 dark:bg-black flex items-center gap-5 px-5">
          <h2 className="font-segoeUIBold uppercase">{title}</h2>
          <span>Version {version}</span>
        </div>
        <div className="flex flex-col md:flex-row gap-5 px-5">
          <Image src={image} alt="" width={214} height={214} />
          <p className="">{detailedDescription}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-y-2">
          <SectionTabs items={perceptraderTabItems} />
          <DownloadAdvicer />
        </div>
        <div className="flex flex-wrap items-center gap-5 px-5">
          <Button className="h-[38px] flex items-center justify-center bg-transparent hover:bg-transparent border-surd-dark-blue text-surd-dark-blue border dark:border-surd-yellow-1 dark:text-surd-yellow-1">
            Try Demo
          </Button>
          <Button className="h-[38px] flex items-center justify-center bg-surd-yellow-1 hover:bg-surd-yellow-1 text-black">
            Start a live account
          </Button>
        </div>
        <CardsGrid className="px-5 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {perceptraderAccountTypes.map(
            ({ accountID, accountType, currentPlan, platform }, index) => (
              <PereptraderAccountsCard
                key={index}
                accountID={accountID}
                accountType={accountType}
                platform={platform}
                currentPlan={currentPlan}
              />
            )
          )}
        </CardsGrid>
      </RoundedBox>
    </SectionContainer>
  );
};

export default Perceptrader;
