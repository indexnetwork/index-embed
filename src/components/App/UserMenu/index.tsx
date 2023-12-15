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

interface UserMenuProps {}

const indexes = [
  { value: "ceramicDocs", label: "Ceramic Docs", owned: true },
  { value: "ceramicBlog", label: "Ceramic Blog", owned: true },
  { value: "ceramicEcosystem", label: "Ceramic Ecosystem", owned: true },
  { value: "litProtocolDocs", label: "Lit Protocol Docs", owned: false },
  { value: "ipfsDocs", label: "IPFS Docs", owned: false },
  { value: "gitcoinGrants", label: "Gitcoin Grants", owned: false },
];

const UserMenu: FC<UserMenuProps> = ({}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const ownedIndexes = indexes.filter((index) => index.owned);
  const starredIndexes = indexes.filter((index) => !index.owned);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Image
          src="/example-profile.png"
          width={32}
          height={32}
          alt="brand logo"
          className="cursor-pointer hover:bg-accent"
        />
      </PopoverTrigger>
      <PopoverContent align="end" className="w-[200px] p-4">
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

export default UserMenu;
