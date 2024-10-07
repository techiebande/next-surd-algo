import { description } from "@/components/admin/dashboardChart";
import PriceTag from "@/icons/price-tag-3-line.svg";
import Monthly from "@/icons/monthly-pricing.svg";
import Yealy from "@/icons/yearly-pricing.svg";
import Lifetime from "@/icons/lifetime-pricing.svg";

export const perceptraderPricing = [
  {
    name: "Freemium",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    price: "0",
    icon: PriceTag,
    color: "#ED6E00",
    isCurrentSub: true,
    border: "border border-[#ED6E00]",
    buttonBg: "bg-[#ED6E00]",
  },
  {
    name: "Monthly",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    price: "250",
    icon: Monthly,
    color: "#8120F4",
    isCurrentSub: false,
    border: "border border-[#8120F4]",
    buttonBg: "bg-[#8120F4]",
  },
  {
    name: "Yearly",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    price: "1250",
    icon: Yealy,
    color: "#2495A3",
    isCurrentSub: false,
    border: "border border-[#2495A3]",
    buttonBg: "bg-[#2495A3]",
  },
  {
    name: "Lifetime",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
    price: "5000",
    icon: Lifetime,
    color: "#1D82F5",
    isCurrentSub: false,
    border: "border border-[#1D82F5]",
    buttonBg: "bg-[#1D82F5]",
  },
];
