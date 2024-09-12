import React, { useContext } from "react";
import { DashboardContext } from "./dashboard";

const GrindStrategyOverview = () => {
  const { setDashboardState, dashboardState } = useContext(DashboardContext);
  return (
    <div className="px-2 lg:px-5 pt-5 dark:text-white bg-surd-grey-5 dark:bg-surd-grey-3 min-h-[calc(100vh-65px)]">
      <div className="flex flex-col gap-2 lg:flex-row lg:justify-between lg:items-center">
        <div>
          <h2 className="text-2xl font-sogoeUIBold text-surd-blue-3 dark:text-white">
            Strategies
          </h2>
          <span className="font-sogoeUI text-sm text-surd-grey-4">
            Home / Strategies / Grind Strategy Overview
          </span>
        </div>
        <button
          onClick={() =>
            setDashboardState({
              ...dashboardState,
              currentTab: {
                name: "grindStrategy",
              },
            })
          }
          className="bg-surd-yellow-1 text-black text-sm font-sogoeUISemiBold p-2 rounded-sm gap-4 h-[38px] flex items-center justify-center"
        >
          View More Details
        </button>
      </div>

      <div className="rounded-surd-rounded-20px border border-surd-grey-2 shadow-surd-box-shadow-2 mt-5">
        <div className="rounded-tl-surd-rounded-20px rounded-tr-surd-rounded-20px bg-surd-blue-3 dark:bg-black h-[71px] flex items-center justify-center">
          <h2 className="text-lg font-sogoeUISemiBold text-center text-white">
            Grind Strategy Overview
          </h2>
        </div>
        <div className="bg-white dark:bg-transparent pt-3 px-2 lg:px-5 pb-20">
          <div className="rounded-surd-rounded-10px w-full lg:w-[393px] border border-surd-grey-2 p-5 space-y-5">
            <div className="rounded text-white">
              <div className="flex rounded-tl rounded-tr items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Highest Peak:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
              <div className="flex items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Average Peak:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
              <div className="flex rounded-bl rounded-br items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Lowest Peak:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
            </div>
            <div className="rounded text-white">
              <div className="flex rounded-tl rounded-tr items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Max Drawdown:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
              <div className="flex items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Average Drawdown:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
              <div className="flex rounded-bl rounded-br items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Lowest Drawdown:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
            </div>
            <div className="rounded text-white">
              <div className="flex rounded-tl rounded-tr items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Average Daily Profit:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
              <div className="flex items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Latest Daily Profit:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
              <div className="flex rounded-bl rounded-br items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                <span className="text-sm">Earliest Daily Profit:</span>
                <span className="text-sm font-sogoeUISemiBold">$240.45</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrindStrategyOverview;
