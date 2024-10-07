import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectComp({ label }: { label: string }) {
  return (
    <Select>
      <SelectTrigger className=" h-[52px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          <SelectItem value="apple">France</SelectItem>
          <SelectItem value="banana">Belgium</SelectItem>
          <SelectItem value="blueberry">England</SelectItem>
          <SelectItem value="grapes">Greece</SelectItem>
          <SelectItem value="pineapple">Portugal</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
