import Image from "next/image";
import React from "react";
import User from "@/public/images/avatar.jpg";

const Message = () => {
  return (
    <div className="flex items-start justify-between p-5 border-b border-gray-400">
      <div className="flex gap-5 items-center">
        <Image
          className="rounded"
          src={User}
          alt="message sender"
          width={53}
          height={30}
        />
        <div className="flex flex-col gap-1">
          <span className="text-gray-800 dark:text-white font-segoeUISemiBold">
            Michael Faraday
          </span>
          <p className="text-gray-800 dark:text-surd-grey-4 text-xs">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          </p>
        </div>
      </div>

      <span>2 hours</span>
    </div>
  );
};

export default Message;
