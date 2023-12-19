import { type Message } from "ai";

import { Separator } from "@/components/ui/separator";
import { ChatMessage } from "./ChatMessage";

export interface ChatList {
  messages: Message[];
}

export default function ChatList({ messages }: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && (
            <Separator className="my-4" />
          )}
        </div>
      ))}
    </div>
  );
}
