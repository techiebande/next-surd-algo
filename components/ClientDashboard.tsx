import React from "react";
import StrategyTabs from "./sectionTabs";
import StrategyCard from "./strategyCard";
import AddNewNewStrategy from "./newStrategyModal";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { strategyTabItems } from "@/lib/strategyTabItems";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import YoutubeIcon from "@/icons/youtube.svg";
import { PaymentMethods, SubscriptionInfo, WalletBalance } from "./Billings";
import { Button } from "./ui/button";
import { expertAdvicers } from "@/lib/expertAdvicers";
import EACard from "./EACard";
import { DataCollectionSelect } from "./DataCollectionSelect";
import DetailsBox from "./detailsBox";

const ClientDashboard = () => {
  return (
    <SectionContainer>
      <div className="px-5 text-black dark:text-surd-grey-4">
        <SectionHeader title="Dashboard" location="Home / Dashboard" />
        <div className="rounded-lg border border-gray-400 flex  p-5 gap-5 mt-5">
          <Image src={YoutubeIcon} alt="" width={61} height={51} />
          <div className="flex flex-col ">
            <p className="font-bold text-2xl">Learn About Surd Algo</p>
            <span className="text-sm">Watch a short video on how it works</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          <WalletBalance />
          <SubscriptionInfo />
          <PaymentMethods />
        </div>

        <div className="grid grid-cols-12 gap-5 mt-5">
          <div className="col-span-12 lg:col-span-8 border border-gray-400 rounded-lg p-5">
            <div className="flex items-center justify-between">
              <p className="text-[18px]">My Expert Advicers</p>
              <Button className="bg-transparent border-none p-0 text-surd-yellow-1 font-bold">
                See All
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {expertAdvicers.map(
                ({ image, description, title, version }, index) => (
                  <EACard
                    key={index}
                    image={image}
                    title={title}
                    version={version}
                    description={description}
                    purchased
                  />
                )
              )}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 border border-gray-400 rounded-lg p-5">
            <div className="flex items-center justify-between">
              <p>Data Collected</p>
              <DataCollectionSelect label="Daily" />
            </div>
            <div className="flex flex-col gap-4 mt-5">
              <DetailsBox name={"Profit"} value={"$240.45"} />
              <DetailsBox name={"Pick"} value={"24"} />
              <DetailsBox name={"Draw Down"} value={"142"} />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ClientDashboard;
