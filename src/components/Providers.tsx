"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { PropsWithChildren } from "react";

export function Providers({ children, ...props }: PropsWithChildren) {
  return <TooltipProvider>{children}</TooltipProvider>;
}
