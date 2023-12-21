"use client";
import { FC } from "react";
import Chat from "./Chat";
import ConnectWalletButton from "./ConnectWalletButton";
import IndexMenu from "./IndexMenu";
import UserMenu from "./UserMenu";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useChat } from "ai/react";
import { apiUrl } from "@/lib/constants";
import toast from "react-hot-toast";
import ResetButton from "./Chat/ResetButton";

interface AppProps {
  isWalletConnected: boolean;
}

const App: FC<AppProps> = ({ isWalletConnected }) => {
  const [chatId, setChatId] = useState<string>(uuidv4());

  const { messages, setMessages } = useChat({
    api: apiUrl,
    id: chatId,
    body: {
      id: chatId,
      indexes: [
        "kjzl6kcym7w8y5j9a11ssikgz7f1gcr5h40yeyp9e7nf41wxo6qv44lezjur20b",
        "kjzl6kcym7w8y7zvi7lvn12vioylmcbv0awup1xj9in1qb4kxp94569hjhx93s5",
      ],
    },
    headers: { "Content-Type": "application/json; charset=utf-8" },
    onResponse(response) {
      if (response.status === 401) {
        toast.error(response.statusText);
      }
    },
  });
  console.log(messages, "app");
  return (
    <div className="min-h-[528px]">
      <div className="flex justify-between max-h-[32px]">
        <IndexMenu />
        <div className="flex items-center gap-2">
          {messages && messages.length > 0 && (
            <ResetButton setMessages={setMessages} />
          )}
          {isWalletConnected ? <UserMenu /> : <ConnectWalletButton />}
        </div>
      </div>
      <Chat
        id={chatId}
        indexes={[
          "kjzl6kcym7w8y5j9a11ssikgz7f1gcr5h40yeyp9e7nf41wxo6qv44lezjur20b",
          "kjzl6kcym7w8y7zvi7lvn12vioylmcbv0awup1xj9in1qb4kxp94569hjhx93s5",
        ]}
      />
    </div>
  );
};

export default App;
