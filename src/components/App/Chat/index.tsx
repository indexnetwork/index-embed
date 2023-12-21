"use client";

import { API_ENDPOINTS, apiUrl } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useChat, type Message } from "ai/react";
import { FC, useState } from "react";
import toast from "react-hot-toast";
import ChatList from "./ChatList";
import { ChatPanel } from "./ChatPanel";
import { ChatScrollAnchor } from "./ChatScrollAnchor";
import { EmptyScreen } from "./EmptyScreen";

export interface ChatProps extends React.ComponentProps<"div"> {
  initialMessages?: Message[];
  id?: string;
  did?: string;
  indexes?: string[];
}

const Chat: FC<ChatProps> = ({
  id,
  did,
  indexes,
  initialMessages,
  className,
}) => {
  const {
    messages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput,
    setMessages,
  } = useChat({
    api: apiUrl,
    initialMessages,
    id,
    body: {
      id,
      did,
      indexes,
    },
    headers: { "Content-Type": "application/json; charset=utf-8" },
    onResponse(response) {
      if (response.status === 401) {
        toast.error(response.statusText);
      }
    },
  });
  console.log(messages,"chat");

  return (
    <>
      <div className={cn("pb-[64px] h-full pt-4 md:pt-10", className)}>
        {messages.length ? (
          <>
            <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        ) : (
          <EmptyScreen setInput={setInput} />
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </>
  );
};

export default Chat;
