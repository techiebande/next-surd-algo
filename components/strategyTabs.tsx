import { strategyTabItems } from "@/lib/strategyTabItems";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const StrategyTabs = () => {
  const [activeTab, setActiveStrategyTab] = useState(strategyTabItems[0]);
  return (
    <ul className="w-full bg-surd-white-1 dark:bg-surd-grey-9 h-[46px] flex items-center gap-[2px]">
      {strategyTabItems.map((item, index) => {
        return (
          <li
            className={cn(
              "h-full border flex items-center justify-center px-5 cursor-pointer text-sm ",
              activeTab.name === item.name
                ? "bg-white dark:bg-black dark:border-surd-grey-3 text-surd-blue-1 dark:text-white font-segoeUISemiBold"
                : "bg-transparent dark:text-surd-grey-4"
            )}
            onClick={() => setActiveStrategyTab(item)}
            key={index}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
};

export default StrategyTabs;
