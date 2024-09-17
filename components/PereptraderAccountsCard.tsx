import React from "react";
import RoundedShadowedBox from "./RoundedShadowedBox";
import Image from "next/image";
import { Button } from "./ui/button";
import HorizontalMenu from "@/icons/horizontal-menu.svg";
import { cn } from "@/lib/utils";
import DetailsBox from "./detailsBox";

const PereptraderAccountsCard = ({
  accountID,
  accountType,
  platform,
  currentPlan,
}: {
  accountType: string;
  accountID: string;
  platform: string;
  currentPlan?: string;
}) => {
  return (
    <RoundedShadowedBox className="border border-surd-grey-4 pb-5">
      <div className="rounded-tl-surd-rounded-10px rounded-tr-surd-rounded-10px bg-surd-grey-5 dark:bg-black px-2 lg:px-5 gap-5 flex flex-col lg:flex-row lg:items-center h-[76px] relative py-2">
        <div className="flex gap-3 items-center">
          <Image
            src="/images/perceptrader.png"
            width={24}
            height={24}
            className="rounded-full"
            alt=""
          />
          <h3 className="text-xs font-segoeUIBold truncate">PERCEPTRADER AI</h3>
        </div>

        <Button
          className={cn(
            "h-[38px] text-xs border bg-white shadow-none  bg-transparent hover:bg-transparent truncate",
            accountType === "Live Account"
              ? "border-green-500 text-green-500 dark:border-surd-green-1 dark:text-surd-green-1"
              : "border-surd-grey-4 text-surd-grey-4"
          )}
        >
          {accountType}
        </Button>
        <Image
          src={HorizontalMenu}
          alt=""
          width={24}
          height={24}
          className="right-5 absolute"
        />
      </div>
      <div className="px-5 space-y-2 mt-5">
        <DetailsBox name="Account ID" value={accountID} />
        <DetailsBox name="Platform" value={platform} />
      </div>
      <div className="mt-5 text-center">
        {accountType === "Live Account" ? (
          <p className=" text-sm">Current Plan: Basic</p>
        ) : null}
        {accountType === "Live Account" ? (
          <p className="text-sm mt-5 text-surd-dark-blue dark:text-surd-yellow-1 font-segoeUIBold">
            Upgrade Plan
          </p>
        ) : (
          <p className="text-sm mt-5 text-surd-dark-blue dark:text-surd-yellow-1 font-segoeUIBold ">
            Make Live Account
          </p>
        )}
      </div>
    </RoundedShadowedBox>
  );
};

export default PereptraderAccountsCard;
