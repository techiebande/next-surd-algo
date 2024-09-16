import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const CardsGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default CardsGrid;
