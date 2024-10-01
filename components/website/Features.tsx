import React from "react";
import Feature from "./Feature";
import DoubleCheck from "@/public/images/check.svg";
import F2 from "@/public/images/f2.svg";
import F3 from "@/public/images/f3.svg";
import F4 from "@/public/images/f4.svg";

const Features = () => {
  return (
    <div className="pt-20 pb-10 bg-black px-5 lg:px-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
      <Feature
        content="With over [X] years of experience in the trading industry, our team of experts brings a wealth of knowledge and a track record of success. We specialize in [specific trading markets, e.g., forex, stocks, commodities] and employ advanced analytical techniques to ensure that you receive the most accurate and actionable advice."
        title="Proven Expertise"
        icon={DoubleCheck}
      />
      <Feature
        content="Our proprietary trading algorithms are crafted to adapt to ever-changing market conditions. We use a blend of quantitative analysis and real-time data to generate strategies that optimize your trading performance. Our algorithms are rigorously tested and refined to ensure they deliver reliable and consistent results."
        title="Innovative Trading Algorithms"
        icon={F3}
      />
      <Feature
        content="We believe that a one-size-fits-all approach doesn’t work in trading. Our advisors take the time to understand your individual goals, risk tolerance, and trading style to develop customized strategies that align with your specific needs. Whether you're looking for long-term growth or short-term gains, we provide solutions that cater to your objectives."
        title="Tailored Strategies"
        icon={F2}
      />
      <Feature
        content="Stay ahead of the curve with our real-time market insights and analysis. Our team continuously monitors global financial markets and provides timely updates and actionable recommendations to help you make informed trading decisions."
        icon={F4}
        title="Real-Time Insights"
      />
    </div>
  );
};

export default Features;
