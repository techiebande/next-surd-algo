import React from "react";
import StrategyTabs from "./sectionTabs";
import StrategyCard from "./strategyCard";
import AddNewNewStrategy from "./newStrategyModal";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { strategyTabItems } from "@/lib/strategyTabItems";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import Image from "next/image";
import PlusIcon from "@/icons/plus.svg";
import { cn } from "@/lib/utils";
import Ticket from "./Ticket";
import { tickets } from "@/lib/tickets";

const Tickets = ({ isAdmin }: { isAdmin?: boolean }) => {
  return (
    <SectionContainer>
      <div className="px-5">
        <SectionHeader
          title="Tickets"
          location="Home / Tickets"
          actionButton={
            <Button
              className={cn(
                "text-sm font-sogoeUISemiBold p-2 rounded-sm gap-4 h-[38px] flex items-center justify-center",
                isAdmin
                  ? "bg-blue-500 text-white"
                  : "bg-surd-yellow-1 text-black"
              )}
            >
              <Image src={PlusIcon} alt="new strategy" width={24} height={24} />
              Create Tickets
            </Button>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5">
          {tickets.map(({ name, value }) => {
            return <Ticket key={name + value} name={name} value={value} />;
          })}
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

export default Tickets;
