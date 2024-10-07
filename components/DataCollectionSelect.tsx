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

export function DataCollectionSelect({ label }: { label: string }) {
  return (
    <Select>
      <SelectTrigger className="w-[150px] h-[52px]">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          <SelectItem value="apple">daily</SelectItem>
          <SelectItem value="banana">Weekly</SelectItem>
          <SelectItem value="blueberry">Bi Weekly</SelectItem>
          <SelectItem value="grapes">Monthly</SelectItem>
          <SelectItem value="pineapple">Quarterly</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
