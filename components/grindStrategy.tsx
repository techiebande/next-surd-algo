import { grindStrategyTableRows } from "@/lib/grindStrategyTableRows";
import React, { useContext } from "react";
import { DashboardContext } from "./dashboard";

const GrindStrategy = () => {
  const { dashboardState, setDashboardState } = useContext(DashboardContext);
  return (
    <div className="px-5 dark:text-white surd-grey-5 dark:bg-surd-grey-3 space-y-5 min-h-[calc(100vh-65px)] pb-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-segoeUISemiBold">Strategies</h2>
        <span className="text-sm dark:text-surd-grey-4">
          Home / Strategies / Grind Strategy
        </span>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="h-[60px] text-sm text-white font-sogoeUISemiBold uppercase bg-surd-blue-3 dark:bg-black">
            <tr className="">
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                PEAK P/L
              </th>
              <th scope="col" className="px-6 py-3">
                peak time
              </th>
              <th scope="col" className="px-6 py-3">
                MAX DRAWDOWN
              </th>
              <th scope="col" className="px-6 py-3">
                DRAWDOWN TIME
              </th>
              <th scope="col" className="px-6 py-3">
                closing profit
              </th>
              <th scope="col" className="px-6 py-3">
                PROFIT TIME
              </th>
              <th scope="col" className="px-6 py-3">
                TPT
              </th>
            </tr>
          </thead>
          <tbody>
            {grindStrategyTableRows.map((item, index) => (
              <tr
                key={index}
                onClick={() => {
                  setDashboardState({
                    ...dashboardState,
                    currentTab: {
                      name: "grindStrategyByDate",
                    },
                  });
                }}
                className="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Jul 30, 01:00
                </th>
                <td className="px-6 py-4">457</td>
                <td className="px-6 py-4">Jul 30, 01:00</td>
                <td className="px-6 py-4">124</td>
                <td className="px-6 py-4">Jul 30, 01:00</td>
                <td className="px-6 py-4">$124.24</td>
                <td className="px-6 py-4">Jul 30, 01:00</td>
                <td className="px-6 py-4">$124.24</td>
              </tr>
            ))}
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
  );
};

export default GrindStrategy;
