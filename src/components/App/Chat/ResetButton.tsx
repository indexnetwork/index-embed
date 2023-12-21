import { Button } from "@/components/ui/button";
import { type Message } from "ai";
import { FC } from "react";

interface ResetButtonProps {
  setMessages: (messages: Message[]) => void;
}

const ResetButton: FC<ResetButtonProps> = ({ setMessages }) => {
  return (
    <Button
      onClick={() => {
        setMessages([]);
      }}
      variant="connectWallet"
    >
      Reset
    </Button>
  );
};

export default ResetButton;
