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
import MetaTraderAccountNumberModal from "./MetaTraderAccNumberModal";

export default function PurchasePerceptraderAI({ button }: { button: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{button}</DialogTrigger>
      <DialogContent className="sm:max-w-[80%] bg-surd-grey-3 p-0 overflow-y-scroll h-[90vh]">
        <DialogHeader>
          <div className="border-b rounded-tl-surd-rounded-10px rounded-tr-surd-rounded-10px bg-surd-blue-3 dark:bg-black h-[71px] flex items-center justify-center relative">
            <h2 className="text-lg font-segoeUISemiBold text-center text-white">
              Purchase
            </h2>
          </div>
        </DialogHeader>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 space-y-10 p-2 pb-5 lg:p-5 text-sm text-white">
            <div>
              <label className="block mb-2 text-[22px] font-segoeUISemiBold">
                Email
              </label>
              <input
                type="text"
                id="first_name"
                className="border outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                placeholder="Email"
                required
              />
              <div className="mt-5">
                <CheckboxComp label="Email me with news and offers" />
              </div>
            </div>

            <div className="mt-20">
              <label className="block mb-2 text-[22px] font-segoeUISemiBold">
                Payment Methods
              </label>
              <span className="text-xs text-surd-grey-4">
                All transactions are secure and encrypted.
              </span>
              <div className="rounded mt-5 border">
                <div className="flex items-center justify-between p-4 border-b">
                  <RadioComp checked={true} label="Credit Card" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <Image alt="" width={36} height={22} src={Visa} />
                    <Image alt="" width={36} height={22} src={Visa} />
                    <Image alt="" width={36} height={22} src={Visa} />
                    <Image alt="" width={36} height={22} src={Visa} />
                    <Image alt="" width={36} height={22} src={Visa} />
                    <Image alt="" width={36} height={22} src={Visa} />
                    <Image alt="" width={36} height={22} src={Visa} />
                  </div>
                </div>
                <div className="space-y-5 p-4">
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      className="border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="Card Number"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-12 gap-5">
                    <input
                      type="text"
                      id="first_name"
                      className="col-span-6 border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="Expiry date (MM / YY)"
                      required
                    />
                    <input
                      type="text"
                      id="first_name"
                      className="col-span-6 border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="Security code"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      className="border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="Name on Card"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border-y">
                  <RadioComp checked={false} label="Paypal" />
                  <div className="flex items-center gap-2 flex-wrap">
                    <Image alt="" width={86} height={42} src={Paypal} />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border-y">
                  <p>Bank Transfer</p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <label className="block mb-2 text-[22px] font-segoeUISemiBold">
                Billing Address
              </label>

              <div className="rounded mt-5 border">
                <div className="space-y-5 p-4">
                  <div>
                    <SelectComp label="Country / Region" />
                  </div>
                  <div className="grid grid-cols-12 gap-5">
                    <input
                      type="text"
                      id="first_name"
                      className="col-span-6 border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="First Name"
                      required
                    />
                    <input
                      type="text"
                      id="first_name"
                      className="col-span-6 border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="last Name"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="first_name"
                      className="border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="Address"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-12 gap-5">
                    <input
                      type="text"
                      id="first_name"
                      className="col-span-4 border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="City"
                      required
                    />
                    <input
                      type="text"
                      id="first_name"
                      className="col-span-4 border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="State"
                      required
                    />
                    <input
                      type="text"
                      id="first_name"
                      className="col-span-4 border h-[52px] outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                  <MetaTraderAccountNumberModal />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 border">
            <div className="flex  pb-0 p-5 gap-5 items-center justify-between">
              <div className="flex p-5 gap-5 items-center">
                <Image src={PerceptraderImg} alt="" width={78} height={78} />
                <div className="text-sm text-surd-grey-4">
                  <p className="font-segoeUIBold">Perceptrader AI</p>
                  <p>Version 0.01</p>
                  <p>Monthly Subscription</p>
                </div>
              </div>
              <p className="font-segoeUISemiBold self-end p-5">$250</p>
            </div>
            <div className="grid grid-cols-12  gap-3 p-5 items-center">
              <input
                type="text"
                id="first_name"
                className="col-span-8 border outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent h-[52px]"
                placeholder="Discount Code?"
                required
              />
              <Button className="col-span-4 text-black bg-surd-yellow-1 h-[52px]">
                Apply
              </Button>
            </div>
            <div className="flex items-center justify-between p-5">
              <p className="font-segoeUIBold ">Total</p>
              <p className="font-segoeUIBold text-[20px]">USD $250</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
