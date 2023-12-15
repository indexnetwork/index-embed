"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { Command, CommandEmpty, CommandGroup, CommandItem } from "cmdk";
import Image from "next/image";
import { FC, useState } from "react";

interface IndexMenuProps {}

const indexes = [
  { value: "ceramicDocs", label: "Ceramic Docs", owned: true },
  { value: "ceramicBlog", label: "Ceramic Blog", owned: true },
  { value: "ceramicEcosystem", label: "Ceramic Ecosystem", owned: true },
  { value: "litProtocolDocs", label: "Lit Protocol Docs", owned: false },
  { value: "ipfsDocs", label: "IPFS Docs", owned: false },
  { value: "gitcoinGrants", label: "Gitcoin Grants", owned: false },
];

const IndexMenu: FC<IndexMenuProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const ownedIndexes = indexes.filter((index) => index.owned);
  const starredIndexes = indexes.filter((index) => !index.owned);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="embed"
          className="justify-start max-w-[187px] gap-2 px-3 py-2 h-min shadow-md font-bold bg-[#FF3600]/5 hover:bg-[#FF3600]/10 text-gray-6 rounded-full"
        >
          <Image
            src="/ceramic-logo.png"
            width={20}
            height={20}
            alt="brand logo"
          />
          {value ? (
            indexes.find((index) => index.value === value)?.label
          ) : (
            <>
              Ceramic Network
              <span className="text-xs font-normal">({indexes.length})</span>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-4">
        <Command>
          <CommandEmpty>No index found.</CommandEmpty>
          <DropdownMenuLabel className="text-gray-5 text-[10px]">
            OWNED ({ownedIndexes.length})
          </DropdownMenuLabel>
          <CommandGroup>
            {ownedIndexes.map((index) => (
              <CommandItem
                className="cursor-pointer font-bold flex items-center gap-2 whitespace-nowrap rounded-md p-2 hover:bg-accent text-xs"
                key={index.value}
                value={index.value}
                onSelect={() => {
                  setValue(index.value);
                  setOpen(false);
                }}
              >
                <Image
                  src="/ceramic-logo.png"
                  width={20}
                  height={20}
                  alt="brand logo"
                />
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
          <DropdownMenuLabel className="text-gray-5 text-[10px]">
            STARRED ({starredIndexes.length})
          </DropdownMenuLabel>
          <CommandGroup>
            {starredIndexes.map((index) => (
              <CommandItem
                className="cursor-pointer font-bold flex items-center gap-2 whitespace-nowrap rounded-md p-2 hover:bg-accent text-xs"
                key={index.value}
                value={index.value}
                onSelect={() => {
                  setValue(index.value);
                  setOpen(false);
                }}
              >
                <Image
                  src="/ceramic-logo.png"
                  width={20}
                  height={20}
                  alt="brand logo"
                />
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
