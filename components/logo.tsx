import React, { useContext } from "react";
import { DashboardContext } from "./dashboard";
import { AdminDashboardContext } from "./admin/admin-dashboard";

const Logo = () => {
  const { isSidebarFold } = useContext(AdminDashboardContext);
  return (
    <div
      className="flex justify-center items-center gap-2 w-full md:justify-start"
      role="banner"
    >
      <div className="border border-white font-segoeUIBold text-sm rounded-surd-rounded-10px w-[34px] h-[34px] bg-surd-dark-blue text-white flex items-center justify-center">
        SA
      </div>

      {!isSidebarFold ? (
        <h1 className="hidden font-segoeUIBold text-sm text-white md:block text-nowrap">
          SurdAlgo EA
        </h1>
      ) : null}
    </div>
  );
};

export default Logo;
