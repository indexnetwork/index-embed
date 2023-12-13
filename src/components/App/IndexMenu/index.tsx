"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandItem } from "cmdk";
import { FC, useState } from "react";

interface IndexMenuProps {}

const indexes = [
  { value: "ceramicDocs", label: "Ceramic Docs" },
  { value: "ceramicBlog", label: "Ceramic Blog" },
  { value: "ceramicEcosystem", label: "Ceramic Ecosystem" },
  { value: "litProtocolDocs", label: "Lit Protocol Docs" },
  { value: "ipfsDocs", label: "IPFS Docs" },
  { value: "gitcoinGrants", label: "Gitcoin Grants" },
];

const IndexMenu: FC<IndexMenuProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
    
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="ghost"
          className="w-[200px] justify-between font-bold bg-gradient-to-r from-white to-[#FF3600]/10 text-gray-6 rounded-full"
        >
          {value
            ? indexes.find((index) => index.value === value)?.label
            : "Ceramic Network"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command className="p-1">
          <CommandEmpty>No framework found.</CommandEmpty>
          <DropdownMenuLabel className="text-gray-5 text-[10px]">
            OWNED({"2"})
          </DropdownMenuLabel>
          <CommandGroup>
            {indexes.map((index) => (
              <CommandItem
                className="cursor-pointer font-bold flex rounded-md p-2 hover:bg-accent text-xs"
                key={index.value}
                value={index.value}
                onSelect={() => {
                  setValue(index.value);
                  setOpen(false);
                }}
              >
                {index.label}
                <CheckIcon
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === index.value ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default IndexMenu;
