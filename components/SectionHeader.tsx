import React from "react";

const SectionHeader = ({
  location,
  title,
  actionButton,
}: {
  title: string;
  location: string;
  actionButton?: React.ReactNode;
}) => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-segoeUISemiBold">{title}</h2>
        <span className="text-sm dark:text-surd-grey-4">{location}</span>
      </div>
      {actionButton}
    </div>
  );
};

export default SectionHeader;
