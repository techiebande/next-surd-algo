import Image from "next/image";
import React from "react";
import UsersIcon from "../icons/Users";
import { Users2Icon } from "lucide-react";

const StatsCard = ({
  name,
  value,
}: {
  name: string;
  value: number | string;
}) => {
  return (
    <div className="flex items-center p-5 text-gray-800 dark:text-white justify-between border border-gray-500 rounded-lg">
      <div className="flex flex-col gap-3">
        <span className="text-sm">{name}</span>
        <span className="text-[20px]">{value}</span>
      </div>
      <Users2Icon />
    </div>
  );
};

export default StatsCard;
