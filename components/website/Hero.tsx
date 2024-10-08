"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import EAsIcon from "@/icons/EAs.svg";
import EAsIconActive from "@/icons/EasActive.svg";

const Hero = () => {
  const router = useRouter();
  const goToEA = () => {
    localStorage.setItem(
      "activeTab",
      JSON.stringify({
        name: "EAs",
        icon: EAsIcon,
        activeIcon: EAsIconActive,
      })
    );

    router.push("/client-area");
  };
  return (
    <div className="w-full  h-[688px] bg-[url('/images/ea.jpg')] bg-center bg-cover flex items-center md:items-start flex-col pt-5 md:pt-[100px] px-5 lg:px-[100px]">
      <div className="lg:w-1/2">
        <h1 className="text-[28px] text-white font-segoeUISemiBold">
          Your Partner in <br />{" "}
          <span className="text-[48px] text-surd-yellow-1 font-segoeUIBold">
            Navigating the Financial Markets
          </span>{" "}
          <br />
          Solutions for a rapidly changing world
        </h1>
        <p className="text-surd-grey-4">
          We understand that trading in todays dynamic financial markets
          requires more than just intuition; it demands precise strategy,
          cutting-edge technology, and expert guidance. Whether you are a
          seasoned trader or just beginning your trading journey, our
          comprehensive solutions are designed to empower you with the tools and
          insights you need to succeed.
        </p>
        <div className="items-center gap-5 mt-5 grid grid-cols-2 md:grid-cols-3">
          <Button
            onClick={goToEA}
            className="bg-surd-yellow-1 rounded-[30px] h-10 hover:bg-surd-yellow-1 px-2"
          >
            Purchase Expert Adviser
          </Button>
          <Button
            onClick={goToEA}
            className="bg-black text-surd-yellow-1 hover:bg-black h-10 rounded-[30px] border border-surd-yellow-1"
          >
            Try For Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
