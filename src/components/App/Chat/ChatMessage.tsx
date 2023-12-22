import { Message } from "ai";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/codeblock";
import { IconCheck, IconClose, IconUser } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChatMessageActions } from "./ChatMessageActions";
import { MemoizedReactMarkdown } from "./Markdown";

export interface ChatMessageProps {
  message: Message;
  handleEditClick: (message: Message, index: number) => void;
  editingMessage: Message | undefined;
  setEditInput: (input: string) => void;
  editInput: string;
  handleSaveEdit: () => void;
  index: number;
  editingIndex: number | undefined;
}

export function ChatMessage({
  message,
  handleEditClick,
  editingMessage,
  setEditInput,
  editInput,
  handleSaveEdit,
  index,
  editingIndex,
  ...props
}: ChatMessageProps) {
  return (
    <div
      className={cn("group relative flex items-start my-6 md:-ml-12 px-12 text-sm")}
      {...props}
    >
      <div
        className={cn(
          "flex h-6 w-6 shrink-0 select-none items-center justify-center rounded-md border",
          message.role === "user"
            ? "bg-background"
            : "bg-background text-primary-foreground"
        )}
      >
        {message.role === "user" ? (
          <IconUser />
        ) : (
          <Image
            height={16}
            width={16}
            src="/huggingFaceLogo.png"
            alt="AI Profile Logo"
          />
        )}
      </div>
      <div className="flex-1 px-1 ml-3 space-y-2 overflow-hidden">
        {editingMessage?.id && index === editingIndex ? (
          <div className="flex justify-between">
            <Input
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              className="w-full focus-visible:ring-0 border-none m-0 p-0 h-5"
            />
          </div>
        ) : (
          <MemoizedReactMarkdown
            className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0"
            remarkPlugins={[remarkGfm, remarkMath]}
            components={{
              p({ children }) {
                return <p className="mb-2 last:mb-0">{children}</p>;
              },
              code({ node, inline, className, children, ...props }) {
                if (children.length) {
                  if (children[0] == "▍") {
                    return (
                      <span className="mt-1 cursor-default animate-pulse">
                        ▍
                      </span>
                    );
                  }

                  children[0] = (children[0] as string).replace("`▍`", "▍");
                }

                const match = /language-(\w+)/.exec(className || "");

                if (inline) {
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                }

                return (
                  <CodeBlock
                    key={Math.random()}
                    language={(match && match[1]) || ""}
                    value={String(children).replace(/\n$/, "")}
                    {...props}
                  />
                );
              },
            }}
          >
            {message.content}
          </MemoizedReactMarkdown>
        )}

        {editingMessage?.id && index === editingIndex ? (
          <div className="flex items-center gap-3 px-12 justify-end transition-all md:absolute md:-right-10 md:-top-2">
            <Button
              onClick={handleSaveEdit}
              size="icon"
              variant="ghost"
              className="h-6 w-6"
            >
              <IconCheck />
              <span className="sr-only">Save edit</span>
            </Button>
            <Button
              onClick={() => {
                handleEditClick({} as Message, -1);
              }}
              size="icon"
              variant="ghost"
              className=" h-6 w-6"
            >
              <IconClose />
              <span className="sr-only">Cancel edit</span>
            </Button>
          </div>
        ) : (
          <ChatMessageActions
            message={message}
            handleEditClick={handleEditClick}
            index={index}
            editingMessage={editingMessage}
          />
        )}
      </div>
    </div>
  );
}
