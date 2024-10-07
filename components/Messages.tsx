import React from "react";
import StrategyTabs from "./sectionTabs";
import StrategyCard from "./strategyCard";
import AddNewNewStrategy from "./newStrategyModal";
import SectionContainer from "./sectionContainer";
import SectionTabs from "./sectionTabs";
import { strategyTabItems } from "@/lib/strategyTabItems";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  PhoneIcon,
  PlusIcon,
  SearchIcon,
  SendIcon,
  VideoIcon,
} from "lucide-react";

const Message = () => {
  return (
    <div className="lg:flex lg:gap-[14px] cursor-pointer lg:border-t lg:border-b py-1 lg:py-[13px] lg:bg-inputBg dark:lg:bg-darkBlue dark:border-grey11 px-[14px] w-full">
      <div className="relative bg-[url('/images/avatar.jpg')] w-[35px] h-[35px] rounded-[4px] bg-center bg-cover"></div>
      <div className="items-start gap-1 hidden lg:flex">
        <div className="flex flex-col gap-1">
          <p className="font-SogoeUIBold text-sm">Michael Faraday</p>
          <span className="text-[12px] font-SogoeUI text-grey3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </span>
        </div>
      </div>
      <span className="hidden self-start ml-auto lg:block font-SogoeUI text-xs text-grey3">
        2 Hours
      </span>
    </div>
  );
};

const Messages = ({ isAdmin }: { isAdmin?: boolean }) => {
  return (
    <SectionContainer>
      <div className="px-5">
        <SectionHeader
          title="Messages"
          location="Home / Messages"
          actionButton={
            <Button
              className={cn(
                "text-sm font-sogoeUISemiBold p-2 rounded-sm gap-4 h-[38px] flex items-center justify-center bg-blue-500 text-white mt-3"
              )}
            >
              <PlusIcon className="text-white" />
              New Message
            </Button>
          }
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 px-5 mt-5 gap-5 mb-5 text-black">
        <div className="flex flex-col col-span-12 lg:col-span-5 items-center bg-white dark:bg-sideBarBg dark:text-grey2 rounded-[20px] py-5">
          <div className="flex justify-center items-center mr-3 lg:mr-5 w-full px-2">
            <input
              type="text"
              placeholder="Search Messages"
              className="h-10 rounded-[29px] w-full md:w-[60%] rounded-tr-none rounded-br-none outline-none bg-inputBg dark:bg-sideBarBg dark:text-surd-grey-4 dark:border-grey11 dark:border border-0 pl-5 font-SogoeUI text-sm text-black"
            />
            <button className="bg-blue-500 rounded-[29px] rounded-bl-none rounded-tl-none h-10 w-[46px] flex items-center justify-center">
              <SearchIcon className="text-white" />
            </button>
          </div>
          <div className="flex lg:flex-col gap-x-2 lg:gap-x-5 mt-5 w-full overflow-x-auto lg:overflow-x-hidden lg:pb-10">
            <Message />
            <Message />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-7 bg-white dark:bg-sideBarBg dark:text-grey2 rounded-[20px] pb-5">
          <div className="flex items-center border-b justify-between px-5 py-5">
            <div className="flex items-center gap-[14px] mr-3">
              <div className="bg-[url('/images/avatar.jpg')] w-[35px] h-[35px] rounded-full bg-center bg-cover"></div>
              <div className="items-start gap-1 hidden lg:flex">
                <div className="flex flex-col gap-1">
                  <p className="poppins-medium text-sm">Marvel Major</p>
                  <span className="text-[9px] poppins-regular">Online</span>
                </div>
              </div>
            </div>
            <div className="flex gap-[13px]">
              <PhoneIcon />
              <VideoIcon />
            </div>
          </div>

          <div className="mt-3 flex items-center justify-center">
            <p className="px-[9px] py-1 font-SogoeUIBold text-xs bg-blue2 dark:bg-darkBlue dark:text-grey2 rounded-[4px]">
              2 DAYS AGO
            </p>
          </div>

          <div className="mt-5 px-5 h-[300px] overflow-y-scroll">
            <div className="flex flex-col gap-y-[4.5px]">
              <div className="ml-auto flex items-start gap-[10px]">
                <p className="bg-bodyBg dark:bg-darkBlue dark:text-grey2 py-3 px-[10px] w-[90%] lg:w-auto ml-auto relative z-50">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <span className="absolute top-[3px] -right-1 w-5 h-5 bg-bodyBg dark:bg-darkBlue rotate-45 z-0"></span>
                </p>
                <div className="bg-[url('/images/avatar.jpg')] w-[35px] h-[35px] rounded-[4px] bg-center bg-cover"></div>
              </div>
              <div className="ml-auto">
                <p className="bg-bodyBg dark:bg-darkBlue dark:text-grey2 y-3 px-[10px] w-[90%] lg:w-auto mr-[45px]">
                  consetetur sadipscing elitr, sed...
                </p>
              </div>
              <p className="text-sm font-SogoeUI text-grey3 ml-auto mr-[45px]">
                9: 54 am
              </p>
            </div>

            <div className="flex flex-col gap-y-[4.5px] mt-10">
              <div className="mr-auto flex items-start gap-[10px]">
                <div className="bg-[url('/images/avatar.jpg')] w-[35px] h-[35px] rounded-[4px] bg-center bg-cover"></div>
                <p className="bg-bodyBg dark:bg-darkBlue dark:text-grey2 py-3 px-[10px] w-[90%] lg:w-auto relative z-50">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <span className="absolute top-[3px] -left-1 w-5 h-5 bg-bodyBg dark:bg-darkBlue rotate-45 z-0"></span>
                </p>
              </div>

              <p className="text-sm font-SogoeUI text-grey3 mr-auto ml-[45px]">
                9: 54 am
              </p>
            </div>

            <div className="flex flex-col gap-y-[4.5px] mt-10">
              <div className="ml-auto flex items-start gap-[10px]">
                <p className="bg-bodyBg dark:bg-darkBlue dark:text-grey2 py-3 px-[10px] w-[90%] lg:w-auto ml-auto relative z-50">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  <span className="absolute top-[3px] -right-1 w-5 h-5 bg-bodyBg dark:bg-darkBlue rotate-45 z-0"></span>
                </p>
                <div className="bg-[url('/images/avatar.jpg')] w-[35px] h-[35px] rounded-[4px] bg-center bg-cover"></div>
              </div>
              <p className="text-sm font-SogoeUI text-grey3 ml-auto mr-[45px]">
                9: 54 am
              </p>
            </div>
          </div>

          <div className="mt-[63.5px] flex items-center justify-center border-b">
            <p className="px-[9px] py-1 font-SogoeUIBold text-xs bg-blue2 dark:bg-darkBlue dark:text-grey2 rounded-[4px]">
              YESTERDAY
            </p>
          </div>
          <div className="flex justify-center items-center mr-3 lg:mr-5 w-full p-2">
            <input
              type="text"
              placeholder="Type Message"
              className="h-[57px] rounded-[29px] w-full md:w-[60%] rounded-tr-none rounded-br-none outline-none bg-inputBg dark:bg-sideBarBg dark:text-surd-grey-4 dark:border-grey11 dark:border border-0 pl-5 font-SogoeUI text-sm text-black"
            />
            <button className="bg-blue-500 rounded-[29px] rounded-bl-none rounded-tl-none h-[57px] w-[46px] flex items-center justify-center">
              <SendIcon className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Messages;
