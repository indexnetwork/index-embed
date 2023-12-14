import { FC } from "react";
import IndexMenu from "./IndexMenu";
import UserMenu from "./UserMenu";
import Chat from "./Chat";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div className="min-h-[528px]">
      <div className="flex justify-between max-h-[32px]">
        <IndexMenu />
        <UserMenu />
      </div>
      <Chat />
    </div>
  );
};

export default App;
