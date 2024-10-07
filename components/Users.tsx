import React from "react";
import StrategyTabs from "./sectionTabs";
import StrategyCard from "./strategyCard";
import AddNewNewStrategy from "./newStrategyModal";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { strategyTabItems } from "@/lib/strategyTabItems";
import SectionHeader from "./SectionHeader";
import { Delete, DeleteIcon, Edit2, PlusIcon, Trash } from "lucide-react";
import { Button } from "./ui/button";
import Search from "./search";
import { Checkbox } from "./ui/checkbox";
import Image from "next/image";

const TR = () => {
  return (
    <tr className="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex items-center gap-4">
          <Checkbox className="border border-white" /> 20
        </div>
      </th>
      <td className="px-6 py-4">
        {" "}
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
      <td className="px-6 py-4">example@email.com</td>
      <td className="px-6 py-4">Morar ltd</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 rounded-full bg-green"></div>
          Active
        </div>
      </td>
      <td className="px-6 py-4">10-05-2025</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-500 h-7 w-7 flex items-center justify-center rounded p-2">
            <Edit2 className="w-4 h-4 text-white" />
          </div>
          <div className="bg-red-500 h-7 w-7 flex items-center justify-center rounded p-2">
            <Trash className="w-4 h-4 text-white" />
          </div>
        </div>
      </td>
    </tr>
  );
};

const Users = () => {
  return (
    <SectionContainer>
      <div className="px-5 py-5">
        <SectionHeader
          title="Users"
          location="Home / Users"
          actionButton={
            <Button className="text-sm font-sogoeUISemiBold p-2 rounded-sm gap-4 h-[38px] flex items-center justify-center bg-blue-500 text-white">
              <PlusIcon />
              Add User
            </Button>
          }
          searchComp={<Search placeholder="Search users" />}
        />
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="h-[60px] text-sm text-white font-sogoeUISemiBold uppercase bg-surd-blue-3 dark:bg-black">
              <tr className="">
                <th scope="col" className="px-6 py-3">
                  <div className="flex items-center gap-4">
                    <Checkbox className="border border-white" /> ID
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  NAME
                </th>
                <th scope="col" className="px-6 py-3">
                  EMAIL
                </th>
                <th scope="col" className="px-6 py-3">
                  COMPANY
                </th>
                <th scope="col" className="px-6 py-3">
                  STATUS
                </th>
                <th scope="col" className="px-6 py-3">
                  CREATED
                </th>
                <th scope="col" className="px-6 py-3">
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody>
              <TR />
              <TR />
              <TR />
              <TR />
              <TR />
              <TR />
              <TR />
              <TR />
            </tbody>
          </table>
          <nav
            className="bg-surd-blue-3 dark:bg-black text-white text-sm px-5 flex items-center flex-column flex-wrap md:flex-row justify-between py-4"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-surd-grey-8 mb-4 md:mb-0 block w-full md:inline md:w-auto">
              Showing 1 to 10 of 20 enteries
            </span>
            <div className="flex gap-5 text-surd-grey-8">
              <button className="p-2 border border-surd-grey-8 rounded">
                previous
              </button>
              <button className="p-2 border border-surd-grey-8 rounded">
                next
              </button>
            </div>
          </nav>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Users;
