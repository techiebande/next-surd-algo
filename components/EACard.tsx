import React from "react";
import RoundedShadowedBox from "./RoundedShadowedBox";
import Image from "next/image";
import { Button } from "./ui/button";
import CartIcon from "@/icons/cart.svg";

const EACard = ({
  image,
  description,
  subTitle,
  title,
}: {
  image: string;
  title: string;
  subTitle: string;
  description: string;
}) => {
  return (
    <RoundedShadowedBox className="flex gap-3 p-[10px] border border-surd-grey-2 font-segoeUI">
      <Image src={image} alt="" width={171} height={171} />
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-col">
          <span className="font-segoeUIBold">{title}</span>
          <span className="text-sm">{subTitle}</span>
        </div>

        <p className="text-xs">{description}</p>
        <Button className="bg-surd-yellow-1 text-black hover:bg-surd-yellow-1 mt-auto gap-2 flex items-center justify-center h-[38px]">
          <Image src={CartIcon} alt="" width={20} height={20} />
          Purchase
        </Button>
      </div>
    </RoundedShadowedBox>
  );
};

export default EACard;
