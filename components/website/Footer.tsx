import { StarFilledIcon } from "@radix-ui/react-icons";
import React from "react";

const Star = () => {
  return (
    <div className="bg-green-500 w-[25px] h-[25px] flex items-center justify-center">
      <StarFilledIcon className="text-white w-5 h-5" />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black flex items-center justify-center gap-5 flex-wrap h-[60px] w-full">
      <p>
        Our customers say{" "}
        <span className="text-lg font-segoeUISemiBold">Excellent</span>
      </p>
      <div className="flex items-center gap-[2px]">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
      <p className="text-sm font-segoeUISemiBold text-[#f5f5f5]">
        4.8 out of 5 based on 30,457 reviews
      </p>
      <StarFilledIcon className="h-5 w-5 text-green-500" />
      <p className="text-sm font-segoeUISemiBold text-[#f5f5f5]">Trustpilot</p>
    </footer>
  );
};

export default Footer;
