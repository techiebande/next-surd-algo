import React from "react";
import MT4 from "@/public/images/metatrader-4-logo.png";
import MT5 from "@/public/images/metatrader-5-logo.png";
import MYFXBook from "@/public/images/myfxbook.png";
import MQL5 from "@/public/images/mql5.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TradingTools = ({ className }: { className?: string }) => {
  return (
    <div className="bg-surd-grey-3 flex justify-center items-center mt-10 h-[300px] px-5 lg:px-[100px]">
      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-4 gap-[60px] border rounded-xl p-5",
          className
        )}
      >
        <Image src={MT4} width={131} height={40} alt="mt4" />
        <Image src={MT5} width={131} height={40} alt="mt4" />
        <Image src={MYFXBook} width={131} height={40} alt="mt4" />
        <Image
          className="border border-red-500"
          src={MQL5}
          width={131}
          height={40}
          alt="mt4"
        />
      </div>
    </div>
  );
};

export default TradingTools;
