"use client";

import React, { useContext } from "react";
import { DashboardContext } from "./dashboard";
import { AdminDashboardContext } from "./admin/admin-dashboard";
import { cn } from "@/lib/utils";

const Logo = ({
  className,
  showText,
}: {
  className?: string;
  showText?: boolean;
}) => {
  const { isSidebarFold } = useContext(AdminDashboardContext);
  return (
    <div
      className={cn(
        "flex justify-center items-center gap-2 w-full md:justify-start",
        className
      )}
      role="banner"
    >
      <div className="border border-white font-segoeUIBold text-sm rounded-surd-rounded-10px w-[34px] h-[34px] bg-surd-dark-blue text-white flex items-center justify-center">
        SA
      </div>

      {!isSidebarFold ? (
        <h1
          className={cn(
            "font-segoeUIBold text-sm text-white text-nowrap",
            showText ? "block" : "hidden md:block"
          )}
        >
          SurdAlgo EA
        </h1>
      ) : null}
    </div>
  );
};

export default Logo;
