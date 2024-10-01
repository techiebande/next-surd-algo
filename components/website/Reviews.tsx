import React from "react";
import Review from "./Review";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

const Reviews = () => {
  return (
    <div
      className={cn(
        poppins.className,
        "bg-white px-5 md:px-[50px] text-black py-[60px] mt-5"
      )}
    >
      <p className="text-[40px] font-bold">Join the Revolution</p>
      <p>
        Join the growing community of event attendees and organizers who trust
        Ewitnex to make their <br /> events seamless, paperless, efficient, and
        socially impactful.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <Review />
        <Review />
        <Review />
      </div>
      <p className="text-[38px] font-bold mt-[50px] text-center w-full">
        With expert guidance, you will achieve measurable success.
      </p>
    </div>
  );
};

export default Reviews;
