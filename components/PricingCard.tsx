import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const PricingCard = ({
  name,
  description,
  price,
  icon,
  checkIcon,
  button,
}: {
  name: string;
  description: string;
  price: string;
  icon: any;
  checkIcon: any;
  button: any;
}) => {
  return (
    <div
      className={cn(
        "rounded-lg shadow-md bg-white flex flex-col gap-5 p-5  text-black px-5 items-center"
      )}
    >
      <div className="flex gap-5 items-center">
        {icon}

        <span className="text-[20px] font-segoeUIBold">{name}</span>
      </div>
      <div className="flex gap-5 items-center">
        {checkIcon}

        <p className="text-xs font-segoeUI"> {description}</p>
      </div>
      <p className="text-[20px] font-segoeUIBold">${price}</p>
      {button}
    </div>
  );
};

export default PricingCard;
