import { Button } from "./ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger
} from "./ui/dialog";

export default function IndexButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full h-16 w-16 grid place-items-center">
          Open
        </Button>
      </DialogTrigger>
      <DialogContent>embed</DialogContent>
    </Dialog>
  );
}
