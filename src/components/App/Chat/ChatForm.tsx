import { Button } from "@/components/ui/button";
import { IconSend } from "@/components/ui/icons";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";
import { UseChatHelpers } from "ai/react";
import * as React from "react";

export interface ChatFormProps
  extends Pick<UseChatHelpers, "input" | "setInput"> {
  onSubmit: (value: string) => void;
  isLoading: boolean;
  indexName?: string;
}

export function ChatForm({
  onSubmit,
  input,
  setInput,
  isLoading,
  indexName = "Index Name",
}: ChatFormProps) {
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!input?.trim()) {
          return;
        }
        setInput("");
        await onSubmit(input);
      }}
      ref={formRef}
    >
      <div className="relative flex flex-col max-h-16 w-full text-gray-5 grow bg-background sm:rounded-lg sm:border sm:border-gray-2 sm:focus-within:border-gray-4">
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={3}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask to ${indexName}`}
          spellCheck={false}
          className="w-full border-black resize-none bg-transparent px-4 py-2 focus-within:outline-none sm:text-sm"
        />
        <div className="absolute right-0 bottom-[15%] sm:right-4 max-h-5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                variant="ghost"
                size="sm"
                className="p-0 h-5 disabled:opacity-100"
                disabled={isLoading || input === ""}
              >
                <IconSend
                  className={input === "" ? "text-gray-2" : "text-main-color"}
                />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  );
}
