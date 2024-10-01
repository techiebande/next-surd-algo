import React from "react";
import Service from "./Service";
import { ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="px-5 lg:px-[100px] mb-10 space-y-20">
      <Service
        title="Expert Trading Advice"
        description="Receive personalized trading advice based on thorough market research and analysis. Our advisors are available for one-on-one consultations to help you refine your trading strategy and address any concerns."
        icon={<ArrowRight />}
        image="bg-[url('/images/ETA2.png')]"
      />
      <Service
        title="Algorithmic Trading Solutions"
        description="Leverage our advanced trading algorithms to automate your trading strategies. Our solutions are designed to help you execute trades efficiently and capitalize on market opportunities with minimal manual intervention."
        icon={<ArrowRight />}
        reversed={true}
        image="bg-[url('/images/ATS.png')]"
      />
    </div>
  );
};

export default Services;
