import Bell from "@/icons/bell.svg";
import Image from "next/image";
import React from "react";

const Notification = () => {
  return (
    <div className="relative w-[18px] min-w-[18px]">
      <Image src={Bell} width={18} height={18} alt="notification" />
      <div className="rounded-full w-[22px] h-[22px] border-2 border-white bg-red-500 text-white absolute -right-2 bottom-2 flex items-center justify-center text-[10px]">
        18
      </div>
    </div>
  );
};

export default Notification;
