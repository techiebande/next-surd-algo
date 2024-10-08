import React from "react";
import RoundedShadowedBox from "./RoundedShadowedBox";
import Image from "next/image";
import { Button } from "./ui/button";
import CartIcon from "@/icons/cart.svg";

const EACard = ({
  image,
  description,
  version,
  title,
  onClick,
  purchase,
  purchased,
}: {
  image: string;
  title: string;
  version: string;
  description: string;
  onClick?: () => void;
  purchase?: boolean;
  purchased?: boolean;
}) => {
  return (
    <RoundedShadowedBox
      onClick={onClick}
      className="flex gap-3 p-[10px] border border-surd-grey-2 font-segoeUI cursor-pointer text-gray-800 dark:text-white"
    >
      <Image className="w-[40%]" src={image} alt="" width={171} height={171} />
      <div className="flex flex-col gap-[10px] w-[60%]">
        <div className="flex flex-col">
          <span className="font-segoeUIBold">{title}</span>
          <span className="text-sm">{version}</span>
        </div>

        <p className="text-xs text-ellipsis">{description}</p>
        {!purchase && !purchased ? (
          <Button className="bg-surd-yellow-1 text-black hover:bg-surd-yellow-1 mt-auto gap-2 flex items-center justify-center h-[38px]">
            <Image src={CartIcon} alt="" width={20} height={20} />
            Purchase
          </Button>
        ) : null}
        {purchase && !purchased ? (
          <div className="grid grid-cols-1 md:grid-cols-2 mt-auto gap-5">
            <Button className="bg-surd-yellow-1 text-black hover:bg-surd-yellow-1 mt-auto gap-2 flex items-center justify-center h-[38px]">
              <Image src={CartIcon} alt="" width={20} height={20} />
              Purchase
            </Button>
            <Button className=" text-yellow-500 bg-black border border-surd-yellow-1 mt-auto gap-2 flex items-center justify-center h-[38px]">
              Try for free
            </Button>
          </div>
        ) : null}
        {purchased ? (
          <div className="grid grid-cols-1 md:grid-cols-2 mt-auto gap-5">
            <Button
              disabled
              className="w-full bg-gray-700 text-white mt-auto gap-2 flex items-center justify-center h-[38px]"
            >
              Purchased
            </Button>
          </div>
        ) : null}
      </div>
    </RoundedShadowedBox>
  );
};

export default EACard;
