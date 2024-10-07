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
import { cn } from "@/lib/utils";

export default function AddNewNewStrategy({ isAdmin }: { isAdmin?: boolean }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "text-sm font-sogoeUISemiBold p-2 rounded-sm gap-4 h-[38px] flex items-center justify-center",
            isAdmin ? "bg-blue-500 text-white" : "bg-surd-yellow-1 text-black"
          )}
        >
          <Image src={PlusIcon} alt="new strategy" width={24} height={24} />
          New Strategy
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-surd-grey-3 p-0">
        <DialogHeader>
          <div className="rounded-tl-surd-rounded-10px rounded-tr-surd-rounded-10px bg-surd-blue-3 dark:bg-black h-[71px] flex items-center justify-center relative">
            <h2 className="text-lg font-segoeUISemiBold text-center text-white">
              New Strategy
            </h2>
          </div>
        </DialogHeader>
        <div className="space-y-5 p-2 pb-5 lg:p-5 text-sm text-white">
          <div>
            <label className="block mb-2 text-sm font-medium">
              Strategy name
            </label>
            <input
              type="text"
              id="first_name"
              className="border outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
              placeholder="Enter strategy name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Enter MetaTrader account no.
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="first_name"
              className="border outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
              placeholder="Enter strategy name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Select Expert Advicer
            </label>
            <select
              id="countries"
              className="border outline-none border-surd-gray-4 text-surd-grey-1 text-sm rounded-lg block w-full p-2.5 bg-transparent"
            >
              <option selected>Select Expert Advicer</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
        <DialogFooter className="px-5 pb-5">
          <button className="bg-surd-yellow-1 w-full mt-5 h-10 rounded text-black">
            Add Strategy
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
