import EyeOpen from "@/components/icons/EyeOpen";
import Key from "@/components/icons/Key";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const LoginPage = () => {
  return (
    <div className="w-full grid grid-cols-12">
      <div className="col-span-12 lg:col-span-4 h-[100vh] bg-black py-5 px-5 lg:px-[60px]">
        <div>
          <Logo showText={true} />
        </div>
        <h1 className="text-white text-[32px] font-segoeUISemiBold mt-10">
          Welcome to <br /> Citation Invest
        </h1>
        <p className=" text-surd-grey-4">Log in to your account to continue</p>
        <div className="mt-10 space-y-5">
          <div>
            <Input
              className="border-0 border-b-2 border-gray-600 rounded-none"
              placeholder="USER ID"
            />
          </div>
          <div className="relative">
            <Input
              className="border-0 border-b-2 border-gray-600 rounded-none"
              placeholder="PASSWORD"
            />
            <div className="absolute right-0 bottom-2 cursor-pointer">
              <EyeOpen color="grey" size={17} />
            </div>
          </div>
        </div>
        <Button className="text-black bg-surd-yellow-1 w-full mt-5">
          LOGIN
        </Button>
        <p className="text-xs mt-5 h-[49px]">
          Dont have an Account?{" "}
          <span className="text-yellow-500 text-lgß">SIGN UP</span>
        </p>
        <div className="mt-5 space-y-5">
          <p className="underline">FORGOT YOUR PASSWORD?</p>
          <p className="underline">UPDATE YOUR PASSWORD?</p>
          <p className="underline">CHANGE CHALLENGE QUESTION</p>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <Key color="white" size={24} />
          <p className="underline">SSO LOGIN</p>
        </div>
        <div className="mt-10 flex items-center gap-2">
          &#169; <p>2024 SURD ALGO</p>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-8 h-[100vh] hidden lg:block bg-[url('/images/login-side-image.png')]  bg-cover bg-center w-full"></div>
    </div>
  );
};

export default LoginPage;
