import { cn } from "@/lib/utils";
import React from "react";

const RoundedBox = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: any;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn("rounded-surd-rounded-10px", className)}
    >
      {children}
    </div>
  );
};

export default RoundedBox;
