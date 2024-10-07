import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import PlusIcon from "@/icons/plus.svg";
import CloseIcon from "@/icons/close.svg";
import Image from "next/image";
import CheckboxComp from "./Checkbox";
import { RadioComp } from "./RadioComp";
import Visa from "@/icons/visa.png";
import Paypal from "@/icons/paypal.png";

import PerceptraderImg from "@/public/images/perceptrader.png";
import { SelectComp } from "./SelectComp";

export default function MetaTraderAccountNumberModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-black h-[52px] bg-surd-yellow-1 w-full">
          Purchase Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[30%] bg-surd-grey-3 p-0">
        <DialogHeader>
          <div className="border-b rounded-tl-surd-rounded-10px rounded-tr-surd-rounded-10px bg-surd-blue-3 dark:bg-black h-[71px] flex items-center justify-center relative">
            <div className="text-lg font-segoeUISemiBold pl-2 w-full text-white flex gap-2 items-center justify-start">
              <Image
                className="rounded-full"
                src={PerceptraderImg}
                alt=""
                width={36}
                height={36}
              />
              Perceptrader AI
            </div>
          </div>
        </DialogHeader>
        <div className="">
          <div className="p-5 text-sm text-white">
            <div>
              <label className="block mb-2 text-xs text-surd-grey-4">
                Enter Metatrader Account Number{" "}
                <span className="text-red-500 ">*</span>
              </label>
              <input
                type="text"
                id="first_name"
                className="border outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                placeholder="1234567"
                required
              />
            </div>
            <Button className="text-black h-[52px] bg-surd-yellow-1 w-full mt-5">
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
