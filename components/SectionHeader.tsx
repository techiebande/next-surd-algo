import React from "react";

const SectionHeader = ({
  location,
  title,
  actionButton,
  searchComp,
}: {
  title: string;
  location: string;
  actionButton?: React.ReactNode;
  searchComp?: React.ReactNode;
}) => {
  return (
    <div className="flex items-start justify-between text-gray-900 dark:text-white">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-segoeUISemiBold">{title}</h2>
        <span className="text-sm dark:text-surd-grey-4">{location}</span>
      </div>
      {searchComp}
      {actionButton}
    </div>
  );
};

export default SectionHeader;
