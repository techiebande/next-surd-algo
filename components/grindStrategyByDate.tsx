import { grindStrategyTableRows } from "@/lib/grindStrategyTableRows";
import React from "react";

const GrindStrategyByDate = () => {
  return (
    <div className="dark:text-white bg-surd-grey-5 dark:bg-surd-grey-3 space-y-5 min-h-[calc(100vh-65px)] px-5 py-3">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-segoeUISemiBold">Strategies</h2>
        <span className="text-sm dark:text-surd-grey-4">
          Home / Strategies / Grind Strategy / Jul 30, 01:00
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="rounded-surd-rounded-20px border border-surd-grey-2 shadow-surd-box-shadow-2 mt-5 w-full">
          <div className="rounded-tl-surd-rounded-20px rounded-tr-surd-rounded-20px bg-surd-blue-3 dark:bg-black h-[71px] flex items-center justify-center">
            <h2 className="text-lg font-sogoeUISemiBold text-center text-white">
              Friday, Aug 30, 2024 - Grind Strategy
            </h2>
          </div>
          <div className="flex p-5 gap-5 flex-col lg:flex-row">
            <div className="bg-transparent w-full lg:w-[35%] rounded-surd-rounded-10px">
              <div className="bg-white dark:bg-transparent rounded-surd-rounded-10px w-full border border-surd-grey-2 p-5 space-y-5">
                <div className="rounded text-white">
                  <div className="flex rounded-tl rounded-tr items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                    <span className="text-sm">Peak Profit:</span>
                    <span className="text-sm font-sogoeUISemiBold">
                      $240.45
                    </span>
                  </div>

                  <div className="flex rounded-bl rounded-br items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                    <span className="text-sm">Peak Time:</span>
                    <span className="text-sm font-sogoeUISemiBold">
                      $240.45
                    </span>
                  </div>
                </div>
                <div className="rounded text-white">
                  <div className="flex rounded items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                    <span className="text-sm">Max Drawdown:</span>
                    <span className="text-sm font-sogoeUISemiBold">
                      $240.45
                    </span>
                  </div>
                </div>
                <div className="rounded text-white">
                  <div className="flex rounded items-center justify-between w-full bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-2 lg:px-5">
                    <span className="text-sm">Closing time:</span>
                    <span className="text-sm font-sogoeUISemiBold">
                      Jul 30, 01:00
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-surd-rounded-20px border border-surd-grey-2 shadow-surd-box-shadow-2 w-full lg:w-[65%]">
              <div className="rounded-tl-surd-rounded-20px rounded-tr-surd-rounded-20px bg-surd-blue-3 dark:bg-black h-[71px] flex items-center justify-center">
                <h2 className="text-lg font-sogoeUISemiBold text-center text-white">
                  News
                </h2>
              </div>

              <div className="relative overflow-x-auto shadow-md rounded-bl-surd-rounded-20px rounded-br-surd-rounded-20px">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <tbody>
                    {grindStrategyTableRows.map((item, index) => (
                      <tr
                        key={index}
                        className="cursor-pointer odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          Jul 30, 01:00
                        </th>
                        <td className="px-6 py-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="rgba(144,183,58,1)"
                            className="w-6 h-6"
                          >
                            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                          </svg>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1">
                            <svg
                              className="h-[26px] w-[19px] me-2"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              id="flag-icon-css-it"
                              viewBox="0 0 512 512"
                            >
                              <g fill-rule="evenodd" stroke-width="1pt">
                                <path fill="#fff" d="M0 0h512v512H0z" />
                                <path fill="#009246" d="M0 0h170.7v512H0z" />
                                <path
                                  fill="#ce2b37"
                                  d="M341.3 0H512v512H341.3z"
                                />
                              </g>
                            </svg>
                            ITA Building Permit MoM (Jun)
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <button className="p-2 rounded bg-surd-orange-1 text-white">
                            Medium
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrindStrategyByDate;
