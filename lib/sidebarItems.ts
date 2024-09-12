import HomeIcon from "@/icons/Home.svg";
import EAsIcon from "@/icons/EAs.svg";
import EAsIconActive from "@/icons/EasActive.svg";
import HomeIconActive from "@/icons/HomeActive.svg";
import StrategiesIcon from "@/icons/Strategies.svg";
import StrategiesIconActive from "@/icons/StrategiesIcon.svg";
import CouponActive from "@/icons/coupon-line.svg";
import Coupon from "@/icons/coupon-line-active.svg";
import BillActive from "@/icons/bill-line-active.svg";
import Bill from "@/icons/bill-line.svg";

export const sidebarItems = [
  {
    name: "Dashboard",
    icon: HomeIcon,
    activeIcon: HomeIconActive,
  },
  {
    name: "EAs",
    icon: EAsIcon,
    activeIcon: EAsIconActive,
  },
  {
    name: "Strategies",
    icon: StrategiesIcon,
    activeIcon: StrategiesIconActive,
  },
  {
    name: "Tickets",
    icon: Coupon,
    activeIcon: CouponActive,
  },
  {
    name: "Billings",
    icon: Bill,
    activeIcon: BillActive,
  },
  {
    name: "Services",
    icon: Bill,
    activeIcon: BillActive,
  },
];
