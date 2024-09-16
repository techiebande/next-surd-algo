import { cn } from "@/lib/utils";
import React from "react";

const SectionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "dark:text-white bg-surd-grey-5 dark:bg-surd-grey-3 space-y-5 min-h-[calc(100vh-65px)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SectionContainer;
