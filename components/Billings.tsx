import React from "react";
import StrategyTabs from "./sectionTabs";
import StrategyCard from "./strategyCard";
import AddNewNewStrategy from "./newStrategyModal";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { strategyTabItems } from "@/lib/strategyTabItems";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import { DeleteIcon, EditIcon, PlusIcon, WalletIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Monthly from "@/icons/monthly-pricing.svg";
import Visa from "@/icons/visa.png";
import { Input } from "./ui/input";

export const WalletBalance = () => {
  return (
    <div className="flex flex-col rounded-lg p-5 border border-gray-400 gap-5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <span className="text-sm">Wallet Balance</span>
          <span className="font-segoeUIBold">$0.00</span>
        </div>
        <WalletIcon />
      </div>
      <Button className="bg-yellow-500 text-black w-[100px]">
        <PlusIcon className="text-black" />
        Top up
      </Button>
    </div>
  );
};

export const SubscriptionInfo = () => {
  return (
    <div className="flex justify-between rounded-lg p-5 border border-gray-400  gap-5">
      <div className="flex flex-col gap-5">
        <span className="text-sm">Subscription Information</span>
        <div className="flex items-center gap-5">
          <div
            className={cn(
              "rounded-full flex items-center justify-center w-[35px] h-[35px] border border-[#8120F4]"
            )}
          >
            <Image src={Monthly} alt="" width={14} height={14} />
          </div>
          <span className="font-segoeUIBold">Monthly</span>
        </div>
        <div className="text-sm flex flex-col gap-3">
          <span>Due Time:</span>
          <span>29th September 2024</span>
        </div>
      </div>
      <Button className="bg-yellow-500 text-black w-[100px] self-center">
        Upgrade
      </Button>
    </div>
  );
};

export const PaymentMethods = () => {
  return (
    <div className="flex flex-col rounded-lg p-5 border border-gray-400 gap-5">
      <span className="text-sm">Payment Methods</span>
      <div className="flex items-center justify-between rounded border p-2">
        <div className="flex items-center gap-2">
          <Image src={Visa} alt="" width={32} height={32} />
          <Input className="border-none" placeholder="xxxx xxxx 4845" />
        </div>
        <div className="flex items-center gap-2">
          <Button className="bg-blue-500">
            <EditIcon className="text-white w-4 h-4" />
          </Button>
          <Button className="bg-red-500">
            <DeleteIcon className="text-white w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const Billings = ({ isAdmin }: { isAdmin?: boolean }) => {
  return (
    <SectionContainer>
      <div className="px-5 text-black dark:text-white">
        <SectionHeader title="Billings" location="Home / Billings" />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5">
          <WalletBalance />
          <SubscriptionInfo />
          <PaymentMethods />
        </div>
        <div className="border rounded-xl mt-5 px-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="h-[60px] text-sm text-white font-sogoeUISemiBold uppercase bg-surd-blue-3 dark:bg-black">
                <tr className="">
                  <th scope="col" className="px-6 py-3">
                    TICKETS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TICKET SUBJECTS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    REQUESTED ON
                  </th>
                  <th scope="col" className="px-6 py-3">
                    OTHERS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    STATUS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>

          <p className="text-xs text-surd-grey-4 text-center w-full p-5">
            No data available in table
          </p>
          <div className="flex md:items-center gap-5 flex-col md:flex-row md:justify-between pb-5">
            <p className="text-xs">showing 1 to 10 of 20 enteries </p>
            <div className="text-surd-grey-4 flex items-center gap-2">
              <Button className="bg-transparent border border-surd-grey-4 text-surd-grey-4">
                Previous
              </Button>
              <Button className="bg-transparent border border-surd-grey-4 text-surd-grey-4">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Billings;
