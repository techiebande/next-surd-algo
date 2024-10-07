import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

const Search = ({
  className,
  inputClassName,
  placeholder,
}: {
  inputClassName?: string;
  className?: string;
  placeholder?: string;
}) => {
  return (
    <form className="flex text-white items-center border border-surd-grey-2 rounded-surd-rounded-30px h-[40px] w-full md:w-[350px] bg-surd-grey-3">
      <Input
        placeholder={placeholder}
        className="border-0 focus-visible:ring-0 bg-transparent"
      />
      <Button
        type="button"
        className="bg-black focus:bg-black rounded-tr-surd-rounded-30px rounded-br-surd-rounded-30px"
      >
        <SearchIcon className="text-white" />
      </Button>
    </form>
  );
};

export default Search;
