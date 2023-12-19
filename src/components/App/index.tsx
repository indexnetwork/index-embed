import { FC } from "react";
import Chat from "./Chat";
import ConnectWalletButton from "./ConnectWalletButton";
import IndexMenu from "./IndexMenu";
import UserMenu from "./UserMenu";
import { v4 as uuidv4 } from "uuid";

interface AppProps {
  isWalletConnected: boolean;
}

const App: FC<AppProps> = ({ isWalletConnected }) => {
  return (
    <div className="min-h-[528px]">
      <div className="flex justify-between max-h-[32px]">
        <IndexMenu />
        {isWalletConnected ? <UserMenu /> : <ConnectWalletButton />}
      </div>
      <Chat
        initialMessages={[
          { id: uuidv4(), role: "user", content: "hello" },
          {
            id: uuidv4(),
            role: "assistant",
            content: "To integrate Ceramic with Lit Protocol, you can use the Lit's Ceramic SDK. Here are the steps:\n\nCreate a new yarn project:",
          },
        ]}
      />
    </div>
  );
};

export default App;
