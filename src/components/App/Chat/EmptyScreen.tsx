import { UseChatHelpers } from "ai/react";

import { IconLightbulb } from "@/components/ui/icons";
import Image from "next/image";

const exampleMessages = [
  {
    message: "What are the best practices for scaling a ComposeDB application?",
  },
  {
    message: "How can I integrate Ceramic Network with Lit Protocol? ",
  },
];

export function EmptyScreen({
  setInput,
  indexName = "Index Name",
}: Pick<UseChatHelpers, "setInput"> & { indexName?: string }) {
  return (
    <div className="mx-auto px-4 text-main-color h-full flex flex-col justify-between">
      <div className="rounded-lg bg-background flex flex-col items-center">
        <Image
          src="/empty-chat.png"
          width={184}
          height={184}
          alt="abstract illustration of trees"
        />
        <h1 className="text-xl font-bold">Chat with {indexName}</h1>
        <p className="leading-normal text-center text-xs mt-3">
          You can include your indexes by connecting your wallet
        </p>
      </div>
      <div className="mb-6 sm:flex gap-2">
        {exampleMessages.map((message) => (
          <div
            key={message.message}
            onClick={() => setInput(message.message)}
            className="p-3 bg-gray-7 basis-1/2 rounded-lg cursor-pointer hover:bg-gray-1 font-medium flex gap-2"
          >
            <IconLightbulb className="" />
            <span className="text-xs basis-3/4">{message.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
