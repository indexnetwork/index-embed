import App from "./App";
import LogoMini from "./svgs/Logo";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

export default function IndexButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="embed"
          className="rounded-full h-[50px] w-[50px] grid place-items-center bg-gray-1 absolute bottom-4 right-[19px]"
        >
          <LogoMini />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <App />
      </DialogContent>
    </Dialog>
  );
}
