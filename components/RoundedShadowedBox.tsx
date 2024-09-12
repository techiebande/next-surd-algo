import React from "react";
import RoundedBox from "./roundedBox";
import { cn } from "@/lib/utils";

const RoundedShadowedBox = ({
  className,
  children,
  onClick,
}: {
  className: string;
  children: React.ReactNode;
  onClick: any;
}) => {
  return (
    <RoundedBox
      onClick={onClick}
      className={cn("shadow-surd-box-shadow-1", className)}
    >
      {children}
    </RoundedBox>
  );
};

export default RoundedShadowedBox;
