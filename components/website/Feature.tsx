import Image, { StaticImageData } from "next/image";
import React from "react";

const Feature = ({
  content,
  icon,
  title,
}: {
  icon: StaticImageData;
  title: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-surd-yellow-1 flex items-center justify-center ">
          <Image width={21} height={10} alt="" src={icon} />
        </div>
        <p className="text-[18px] font-segoeUISemiBold text-surd-yellow-1">
          {title}
        </p>
      </div>
      <p className="text-sm text-surd-grey-4">{content}</p>
    </div>
  );
};

export default Feature;
