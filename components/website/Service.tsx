import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowBigRight } from "lucide-react";
import ETA from "@/public/images/ETA2.png";

const Service = ({
  className,
  reversed,
  icon,
  description,
  title,
  image,
}: {
  className?: string;
  reversed?: boolean;
  icon: React.ReactNode;
  description: string;
  title: string;
  image: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 gap-5", className)}>
      <div
        className={cn(
          "self-center flex flex-col",
          reversed ? "order-2 ml-auto items-end" : "items-start"
        )}
      >
        <p className="text-[28px] text-white font-segoeUISemiBold">{title}</p>
        <p className={cn("text-surd-grey-4 text-sm mt-5 w-full md:w-[60%]")}>
          {description}
        </p>
        <Button className="mt-[60px] rounded-surd-rounded-30px bg-surd-yellow-1 text-black flex items-center gap-3 h-10">
          <Link href="/client-area">Try For Free</Link>
          {icon}
        </Button>
      </div>
      <div
        className={cn(
          "bg-cover bg-no-repeat bg-center w-full md:w-[100%] h-[432px] rounded-lg",
          reversed ? "order-1" : "",
          image
        )}
      ></div>
    </div>
  );
};

export default Service;
