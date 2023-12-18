import { Button } from "@/components/ui/button";
import { FC } from "react";

interface ConnectWalletButtonProps {}

const ConnectWalletButton: FC<ConnectWalletButtonProps> = ({}) => {
return <Button variant="connectWallet">Connect Wallet</Button>;
};

export default ConnectWalletButton;
