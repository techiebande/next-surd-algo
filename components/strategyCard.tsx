import React, { useContext } from "react";
import RoundedBox from "./roundedBox";
import RoundedShadowedBox from "./RoundedShadowedBox";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import Image from "next/image";
import HorizontalMenuIcon from "@/icons/horizontal-menu.svg";
import DetailsBox from "./detailsBox";
import { DashboardContext } from "./dashboard";

const StrategyCard = ({
  name,
  alias,
  details,
}: {
  name: string;
  alias: string;
  details: { name: string; value: string }[];
}) => {
  const { setDashboardState, dashboardState } = useContext(DashboardContext);
  return (
    <RoundedShadowedBox
      onClick={() =>
        setDashboardState({
          ...dashboardState,
          currentTab: {
            name: "grindStrategyOverview",
          },
        })
      }
      className="border border-surd-grey-2 w-full mt-5 font-segoeUISemiBold pb-5 cursor-pointer"
    >
      <div className="flex items-center justify-between bg-surd-grey-8 dark:bg-black px-[10px] py-5 rounded-tl-surd-rounded-10px rounded-tr-surd-rounded-10px">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-surd-blue-2 text-white">
              {alias}
            </AvatarFallback>
          </Avatar>
          <span>{name}</span>
        </div>
        <Button className="bg-transparent p-0 focus:bg-transparent hover:bg-transparent shadow-none">
          <Image
            src={HorizontalMenuIcon}
            alt="menu-icon"
            width={24}
            height={24}
            className="text-white"
          />
        </Button>
      </div>
      <div className="mt-5 px-5 space-y-[10px]">
        {details.map((detail, index) => (
          <DetailsBox key={index} name={detail.name} value={detail.value} />
        ))}
      </div>
    </RoundedShadowedBox>
  );
};

export default StrategyCard;
