import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import Trading from "@/public/images/trading.jpg";
import { Button } from "../ui/button";
import Hero from "./Hero";
import Features from "./Features";
import TradingTools from "./TradingTools";
import Services from "./Services";
import Reviews from "./Reviews";
import Footer from "./Footer";

const Website = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Features />
      <TradingTools />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Website;
