"use client";

import { cn } from "@/lib/utils";
import React, { useContext, useState } from "react";
import { PTraderContext } from "./perceptrader";

const SectionTabs = ({ items }: { items: { name: string }[] }) => {
  const [activeTab, setActiveStrategyTab] = useState(items[0]);

  const context = useContext(PTraderContext);

  if (!context) {
    throw new Error("no context");
  }

  const { PTTab, setPTTab } = useContext(PTraderContext);
  return (
    <ul className="w-full bg-surd-white-1 dark:bg-surd-grey-9 h-[46px] flex items-center gap-[2px] overflow-x-auto">
      {items.map((item, index) => {
        return (
          <li
            className={cn(
              "h-full border flex items-center justify-center px-5 cursor-pointer text-sm ",
              activeTab.name === item.name
                ? "bg-white dark:bg-black dark:border-surd-grey-3 text-surd-blue-1 dark:text-white font-segoeUISemiBold"
                : "bg-transparent text-gray-700 dark:text-surd-grey-4"
            )}
            onClick={() => {
              setActiveStrategyTab(item);
              setPTTab(item.name);
            }}
            key={index}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SectionTabs;
