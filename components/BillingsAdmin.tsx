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

const BillingsAdmin = ({ isAdmin }: { isAdmin?: boolean }) => {
  return (
    <SectionContainer>
      <div className="px-5 text-black dark:text-white">
        <SectionHeader title="Billings" location="Home / Billings" />

        <div className="border rounded-xl mt-5 px-5">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="h-[60px] text-sm text-white font-sogoeUISemiBold uppercase bg-surd-blue-3 dark:bg-black">
                <tr className="">
                  <th scope="col" className="px-6 py-3">
                    SN
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CLIENTS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DATE
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PRODUCT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    TOTAL
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PAY METHOD
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DURATION
                  </th>
                  <th scope="col" className="px-6 py-3">
                    STATUS
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    001
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 ">
                      <Image
                        className="rounded-full"
                        src="/images/avatar.jpg"
                        width={19}
                        height={19}
                        alt=""
                      />
                      <p>Josh Hyatt</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">Jul 30, 2024</td>
                  <td className="px-6 py-4">Perceptrader AI</td>
                  <td className="px-6 py-4">2,140.00</td>
                  <td className="px-6 py-4">Card</td>
                  <td className="px-6 py-4">Dec 21, 2025</td>
                  <td className="px-6 py-4">Active</td>
                  <td className="px-6 py-4">...</td>
                </tr>
                <tr className="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    001
                  </th>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 ">
                      <Image
                        className="rounded-full"
                        src="/images/avatar.jpg"
                        width={19}
                        height={19}
                        alt=""
                      />
                      <p>Josh Hyatt</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">Jul 30, 2024</td>
                  <td className="px-6 py-4">Perceptrader AI</td>
                  <td className="px-6 py-4">2,140.00</td>
                  <td className="px-6 py-4">Card</td>
                  <td className="px-6 py-4">Dec 21, 2025</td>
                  <td className="px-6 py-4">Active</td>
                  <td className="px-6 py-4">...</td>
                </tr>
              </tbody>
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

export default BillingsAdmin;
