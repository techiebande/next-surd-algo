import Navbar from "@/components/website/Navbar";
import Image from "next/image";
import React from "react";
import MT4 from "@/public/images/metatrader-4-logo.png";
import MT5 from "@/public/images/metatrader-5-logo.png";
import MYFXBook from "@/public/images/myfxbook.png";
import MQL5 from "@/public/images/mql5.png";
import EACard from "@/components/EACard";
import { expertAdvicers } from "@/lib/expertAdvicers";

const EAListingsPage = () => {
  return (
    <div className="w-full">
      <Navbar />
      <div className="bg-surd-grey-3 flex justify-center items-center mt-5  p-5 lg:px-[100px]">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[60px]">
          <Image src={MT4} width={131} height={40} alt="mt4" />
          <Image src={MT5} width={131} height={40} alt="mt4" />
          <Image src={MYFXBook} width={131} height={40} alt="mt4" />
          <Image className="" src={MQL5} width={131} height={40} alt="mt4" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="font-segoeUISemiBold text-[28px]">
          Market Proven Expert Advicers
        </h1>
        <p className="text-sm">
          Choose the EA you will like to Purchase or Try for free
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-5 lg:px-[100px] pb-5">
        {expertAdvicers.map(({ image, description, title, version }, index) => (
          <EACard
            key={index}
            image={image}
            title={title}
            version={version}
            description={description}
            purchase
          />
        ))}
      </div>
    </div>
  );
};

export default EAListingsPage;
