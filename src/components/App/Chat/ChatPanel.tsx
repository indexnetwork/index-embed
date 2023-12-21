import { type UseChatHelpers } from "ai/react";

import { Button } from "@/components/ui/button";
import { IconRefresh, IconStop } from "@/components/ui/icons";
import { ButtonScrollToBottom } from "./ButtonScrollToBottom";
import { ChatForm } from "./ChatForm";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "setInput"
  > {
  id?: string;
  title?: string;
}

export function ChatPanel({
  id,
  title,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: ChatPanelProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 w-full animate-in duration-300 ease-in-out dark:from-background/10 dark:from-10% dark:to-background/80 peer-[[data-state=open]]:group-[]:lg:pl-[250px] peer-[[data-state=open]]:group-[]:xl:pl-[300px]">
      <ButtonScrollToBottom />
      <div className="mx-auto sm:max-w-2xl sm:px-4">
        <div className="flex items-center justify-center">
          {isLoading ? (
            <Button
              className="px-2" variant="connectWallet"
              onClick={() => stop()}
            >
              <IconStop className="mr-2" />
              Stop generating
            </Button>
          ) : (
            messages?.length >= 2 && (
              <div className="flex space-x-2">
                <Button className="px-2" variant="connectWallet" onClick={() => reload()}>
                  <IconRefresh className="mr-2" />
                  Regenerate
                </Button>
              </div>
            )
          )}
        </div>
        <div className="pt-2 pb-4">
          <ChatForm
            onSubmit={async (value) => {
              await append({
                id,
                content: value,
                role: "user",
              });
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}
