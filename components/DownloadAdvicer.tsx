import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { Download } from "lucide-react";
import MT4Image from "@/public/images/mt4.png";
import MT5Image from "@/public/images/mt5.png";

export default function DownloadAdvicer() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-surd-yellow-1 bg-black h-[46px] w-[171px] gap-2 flex items-center justify-center rounded-none">
          <Download />
          Download
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px] bg-surd-grey-3 p-10">
        <h4 className="font-segoeUIBold text-white">Download For</h4>
        <div className="mt-5 space-y-5">
          <Button className="bg-white w-full hover:bg-white h-[80px] flex items-center justify-center gap-3 rounded-surd-rounded-10px">
            <Image width={24} height={24} src={MT4Image} alt="" />
            <p className="font-segoeUIBold text-lg">MetaTrader 4</p>
          </Button>
          <Button className="bg-white w-full hover:bg-white h-[80px] flex items-center justify-center gap-3 rounded-surd-rounded-10px">
            <Image width={24} height={24} src={MT5Image} alt="" />
            <p className="font-segoeUIBold text-lg">MetaTrader 5</p>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
