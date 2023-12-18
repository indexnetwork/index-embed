import { FC } from "react";
import Chat from "./Chat";
import ConnectWalletButton from "./ConnectWalletButton";
import IndexMenu from "./IndexMenu";
import UserMenu from "./UserMenu";

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
      <Chat />
    </div>
  );
};

export default App;
