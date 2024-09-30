import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useContext } from "react";
import { DashboardContext } from "./dashboard";

export interface SidebarItemProps {
  name: string;
  activeIcon: any;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({
  icon,
  name,
  active,
  activeIcon,
  onClick,
}: SidebarItemProps) => {
  const { isSidebarFold } = useContext(DashboardContext);
  return (
    <li
      onClick={onClick}
      className={cn(
        active ? "bg-surd-grey-5 dark:bg-surd-grey-9" : "",
        "flex gap-5 items-center justify-center md:justify-start h-[45px] relative md:pl-7 cursor-pointer"
      )}
    >
      {active && (
        <div className="absolute w-1 h-full bg-surd-yellow-1 left-0"></div>
      )}

      <Image
        width={18}
        height={20}
        src={active ? activeIcon : icon}
        alt={`${name} icon`}
      />
      {!isSidebarFold ? (
        <span className="text-surd-grey-1 hidden md:inline">{name}</span>
      ) : null}
    </li>
  );
};

export default SidebarItem;
