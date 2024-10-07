import React, { useState } from "react";
import SectionContainer from "./sectionContainer";
import RoundedBox from "./roundedBox";
import { expertAdvicers } from "@/lib/expertAdvicers";
import Image from "next/image";
import SectionTabs from "./sectionTabs";
import { perceptraderTabItems } from "@/lib/perceptraderTabItems";
import { Button } from "./ui/button";
import CardsGrid from "./CardsGrid";
import { perceptraderAccountTypes } from "@/lib/perceptraderAccountTypes";
import PereptraderAccountsCard from "./PereptraderAccountsCard";
import DownloadAdvicer from "./DownloadAdvicer";
import { perceptraderPricing } from "@/lib/perceptraderPricing";
import PricingCard from "./PricingCard";
import Check from "./icons/Check";
import { cn } from "@/lib/utils";
import PriceTag from "@/icons/price-tag-3-line.svg";
import Monthly from "@/icons/monthly-pricing.svg";
import Yealy from "@/icons/yearly-pricing.svg";
import Lifetime from "@/icons/lifetime-pricing.svg";
import PurchasePerceptraderAI from "./PurchaseModal";

export const PTraderContext = React.createContext<any>({
  PTTAB: perceptraderTabItems[0],
  setPTTab: () => {},
});

const Perceptrader = () => {
  const { title, version, image, detailedDescription } = expertAdvicers[0];
  const [PTTab, setPTTab] = useState(perceptraderTabItems[0].name);

  return (
    <PTraderContext.Provider value={{ PTTab, setPTTab }}>
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
          {PTTab === perceptraderTabItems[0].name && (
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
          )}
          {PTTab === perceptraderTabItems[3].name && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 px-5">
              <PricingCard
                name={"Freemium"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                }
                price={"0"}
                icon={
                  <div
                    className={cn(
                      "rounded-full flex items-center justify-center w-[35px] h-[35px] border border-[#ED6E00]"
                    )}
                  >
                    <Image src={PriceTag} alt="" width={14} height={14} />
                  </div>
                }
                checkIcon={
                  <div className="rounded-full flex items-center justify-center min-w-7 w-7 h-7 bg-[rgba(237,110,0,0.1)]">
                    <Check size={13} color={"#ED6E00"} />
                  </div>
                }
                button={
                  <PurchasePerceptraderAI
                    button={
                      <Button
                        disabled
                        className="text-sm font-segoeUISemiBold min-w-[185px] bg-gray-300 "
                      >
                        Current Subscription
                      </Button>
                    }
                  />
                }
              />
              <PricingCard
                name={"Monthly"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                }
                price={"250"}
                icon={
                  <div
                    className={cn(
                      "rounded-full flex items-center justify-center w-[35px] h-[35px] border border-[#8120F4]"
                    )}
                  >
                    <Image src={Monthly} alt="" width={14} height={14} />
                  </div>
                }
                checkIcon={
                  <div className="rounded-full flex items-center justify-center min-w-7 w-7 h-7 bg-[rgba(129,32,244,0.1)]">
                    <Check size={13} color={"#8120F4"} />
                  </div>
                }
                button={
                  <PurchasePerceptraderAI
                    button={
                      <Button className="text-sm  text-white font-segoeUISemiBold min-w-[185px] bg-[#8120F4] ">
                        Purchase
                      </Button>
                    }
                  />
                }
              />
              <PricingCard
                name={"Yearly"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                }
                price={"1250"}
                icon={
                  <div
                    className={cn(
                      "rounded-full flex items-center justify-center w-[35px] h-[35px] border border-[#2495A3]"
                    )}
                  >
                    <Image src={Yealy} alt="" width={14} height={14} />
                  </div>
                }
                checkIcon={
                  <div className="rounded-full flex items-center justify-center min-w-7 w-7 h-7 bg-[rgba(36,149,163,0.1)]">
                    <Check size={13} color={"#2495A3"} />
                  </div>
                }
                button={
                  <PurchasePerceptraderAI
                    button={
                      <Button className="text-sm  text-white font-segoeUISemiBold min-w-[185px] bg-[#2495A3] ">
                        Purchase
                      </Button>
                    }
                  />
                }
              />
              <PricingCard
                name={"Lifetime"}
                description={
                  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
                }
                price={"5000"}
                icon={
                  <div
                    className={cn(
                      "rounded-full flex items-center justify-center w-[35px] h-[35px] border border-[#1D82F5]"
                    )}
                  >
                    <Image src={Lifetime} alt="" width={14} height={14} />
                  </div>
                }
                checkIcon={
                  <div className="rounded-full flex items-center justify-center min-w-7 w-7 h-7 bg-[rgba(29,130,245,0.1)]">
                    <Check size={13} color={"#1D82F5"} />
                  </div>
                }
                button={
                  <PurchasePerceptraderAI
                    button={
                      <Button className="text-sm  text-white font-segoeUISemiBold min-w-[185px] bg-[#1D82F5] ">
                        Purchase
                      </Button>
                    }
                  />
                }
              />
            </div>
          )}
        </RoundedBox>
      </SectionContainer>
    </PTraderContext.Provider>
  );
};

export default Perceptrader;
