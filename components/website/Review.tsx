import { StarFilledIcon } from "@radix-ui/react-icons";
import { Star } from "lucide-react";
import React from "react";

const Review = () => {
  return (
    <div className="bg-white shadow-md rounded-lg flex flex-col p-5">
      <div className="flex items-center gap-2">
        <span>5.0</span>
        <div className="flex items-center gap=1">
          <StarFilledIcon className="text-green-500 w-5 h-5" />
          <StarFilledIcon className="text-green-500 w-5 h-5" />
          <StarFilledIcon className="text-green-500 w-5 h-5" />
          <StarFilledIcon className="text-green-500 w-5 h-5" />
          <StarFilledIcon className="text-green-500 w-5 h-5" />
        </div>
      </div>
      <p className="text-sm mt-4">
        &quot;I appreciate Ewitnexs commitment to sustainability. Going
        paperless with their ticketing system has not only reduced waste but
        also allowed us to track attendance and collect valuable data. Its a
        win-win for our organization and the environment.&quot;
      </p>
      <div className="flex items-center gap-2 mt-[50px]">
        <div className="bg-[url(/images/avatar.jpg)] rounded-full bg-center bg-cover w-[61px] h-[61px]"></div>
        <div className="flex flex-col gap-2">
          <span>Jennifer</span>
          <span>Event Organiser</span>
        </div>
      </div>
    </div>
  );
};

export default Review;
