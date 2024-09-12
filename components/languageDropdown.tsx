"use client";

import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages } from "@/lib/languages";
import Image from "next/image";

export default function LanguageDropdown() {
  const [position, setPosition] = React.useState("bottom");
  const [language, setLanguage] = React.useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          role="button"
          className="rounded-[100%] block cursor-pointer"
          src={language.flag}
          width={40}
          height={40}
          alt="flag"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mt-5">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          {languages.map((language, index) => {
            return (
              <DropdownMenuItem
                onClick={() => setLanguage(language)}
                key={index}
                className="flex items-center gap-5"
              >
                <Image
                  role="button"
                  className="rounded-[100%] block cursor-pointer"
                  src={language.flag}
                  width={26}
                  height={26}
                  alt="flag"
                />
                <span>{language.name}</span>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
