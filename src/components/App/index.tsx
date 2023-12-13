import { FC } from "react";
import IndexMenu from "./IndexMenu";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  return (
    <div className="min-h-[528px]">
      <div className="flex justify-between">
        <IndexMenu />
        <div className="w-8 h-8 bg-slate-400">pp</div>
      </div>
    </div>
  );
};

export default App;
