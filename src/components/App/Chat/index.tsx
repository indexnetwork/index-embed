"use client";

import { apiUrl } from "@/lib/constants";
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
  const [editingMessage, setEditingMessage] = useState<Message | undefined>();
  const [editingIndex, setEditingIndex] = useState<number | undefined>();
  const [editInput, setEditInput] = useState<string>("");

  const handleEditClick = (message: Message, indexOfMessage: number) => {
    setEditingMessage(message);
    setEditingIndex(indexOfMessage);
    setEditInput(message.content);
  };

  const handleSaveEdit = async () => {
    if (editingMessage) {
      const messagesBeforeEdit = messages.slice(0, editingIndex);

      const newMessage = {
        ...editingMessage,
        content: editInput,
      };

      setMessages(messagesBeforeEdit);
      setEditingMessage(undefined);
      setEditInput("");
      await append({
        id,
        content: newMessage.content,
        role: "user",
      });
    }
  };

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

  return (
    <>
      <div className={cn("pb-[64px] relative h-full pt-4 md:pt-10", className)}>
        {messages.length ? (
          <div className="h-full overflow-y-scroll overflow-x-hidden">
            <ChatList
              messages={messages}
              handleEditClick={handleEditClick}
              editingMessage={editingMessage}
              setEditInput={setEditInput}
              editInput={editInput}
              handleSaveEdit={handleSaveEdit}
              editingIndex={editingIndex}
            />
            <ChatScrollAnchor trackVisibility={isLoading} />
          </div>
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
