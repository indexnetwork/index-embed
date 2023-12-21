import { type Message } from "ai";

import { Separator } from "@/components/ui/separator";
import { ChatMessage } from "./ChatMessage";

export interface ChatList {
  messages: Message[];
  handleEditClick: (message: Message, index: number) => void;
  editingMessage: Message | undefined;
  setEditInput: (input: string) => void;
  editInput: string;
  handleSaveEdit: () => void;
  editingIndex: number | undefined;
}

export default function ChatList({
  messages,
  handleEditClick,
  editingMessage,
  setEditInput,
  editInput,
  handleSaveEdit,
  editingIndex,
}: ChatList) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage
            message={message}
            handleEditClick={handleEditClick}
            editingMessage={editingMessage}
            setEditInput={setEditInput}
            editInput={editInput}
            handleSaveEdit={handleSaveEdit}
            index={index}
            editingIndex={editingIndex}
          />
          {index < messages.length - 1 && <Separator className="my-4" />}
        </div>
      ))}
    </div>
  );
}
