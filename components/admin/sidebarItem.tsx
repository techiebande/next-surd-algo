import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useContext } from "react";
import { AdminDashboardContext } from "./admin-dashboard";

export interface SidebarItemProps {
  name: string;
  active?: boolean;
  onClick?: () => void;
  icon: React.ReactNode;
}

const SidebarItem = ({ name, active, onClick, icon }: SidebarItemProps) => {
  const { isSidebarFold } = useContext(AdminDashboardContext);
  return (
    <li
      onClick={onClick}
      className={cn(
        active ? "bg-surd-grey-5 dark:bg-surd-grey-9" : "",
        "flex gap-5 items-center justify-center md:justify-start h-[45px] relative md:pl-7 cursor-pointer"
      )}
    >
      {active && (
        <div className="absolute w-1 h-full bg-surd-blue-1 left-0"></div>
      )}
      {icon}

      {/* <Image width={18} height={20} src={icon} alt={`${name} icon`} /> */}
      {!isSidebarFold ? (
        <span
          className={cn(
            "text-surd-grey-1 hidden md:inline",
            active ? "text-surd-blue-1" : "text-surd-grey=-1"
          )}
        >
          {name}
        </span>
      ) : null}
    </li>
  );
};

export default SidebarItem;
