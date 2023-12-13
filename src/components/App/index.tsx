import { FC } from "react";
import IndexMenu from "./IndexMenu";
import UserMenu from "./UserMenu";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div className="min-h-[528px]">
      <div className="flex justify-between max-h-[32px]">
        <IndexMenu />
        <UserMenu />
      </div>
    </div>
  );
};

export default App;
