import React from "react";
import TicketIcon from "./icons/TicketIcon";

const Ticket = ({ name, value }: { name: string; value: number }) => {
  return (
    <div className="border rounded flex items-center justify-between p-5">
      <div className="flex flex-col gap-[30px]">
        <span>{name}</span>
        <span className="font-bold text-[20px]">{value}</span>
      </div>
      <div>
        <TicketIcon color="white" size={20} />
      </div>
    </div>
  );
};

export default Ticket;
