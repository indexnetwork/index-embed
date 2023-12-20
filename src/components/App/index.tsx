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
      <Chat
        indexes={[
          "kjzl6kcym7w8y5j9a11ssikgz7f1gcr5h40yeyp9e7nf41wxo6qv44lezjur20b",
          "kjzl6kcym7w8y7zvi7lvn12vioylmcbv0awup1xj9in1qb4kxp94569hjhx93s5",
        ]}
      />
    </div>
  );
};

export default App;
