"use client";

import { type Message } from "ai";

import { Button } from "@/components/ui/button";
import { IconCheck, IconCopy, IconEdit } from "@/components/ui/icons";
import { useCopyToClipboard } from "@/lib/hooks/use-copy-to-clipboard";
import { cn } from "@/lib/utils";

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  message: Message;
  handleEditClick: (message: Message, index: number) => void;
  index: number;
  editingMessage: Message | undefined;
}

export function ChatMessageActions({
  message,
  handleEditClick,
  index,
  editingMessage,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  return (
    <div
      className={cn(
        "flex items-center px-12 justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",
        className
      )}
      {...props}
    >
      {message.role === "user" ? (
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6"
          onClick={() => handleEditClick(message, index)}
        >
          <IconEdit />
          <span className="sr-only">Edit message</span>
        </Button>
      ) : (
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 z-50"
          onClick={onCopy}
        >
          {isCopied ? <IconCheck /> : <IconCopy />}
          <span className="sr-only">Copy message</span>
        </Button>
      )}
    </div>
  );
}
