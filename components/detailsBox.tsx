import React from "react";

const DetailsBox = ({ name, value }: { name: string; value: string }) => {
  return (
    <div className="flex  text-white items-center justify-between w-full rounded-md bg-surd-blue-3 dark:bg-surd-grey-7 h-[37px] px-5">
      <span className="text-sm">{name}</span>
      <span className="text-surd-grey-4 text-xs">{value}</span>
    </div>
  );
};

export default DetailsBox;
