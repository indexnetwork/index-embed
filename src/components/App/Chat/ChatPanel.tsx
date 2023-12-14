import { Button } from "@/components/ui/button";
import { IconRefresh, IconStop } from "@/components/ui/icons";
import { type UseChatHelpers } from "ai/react";


export interface ChatPanelProps
  extends Pick<UseChatHelpers, "isLoading" | "reload" | "messages" | "stop"> {
  id?: string;
}

export function ChatPanel({
  isLoading,
  stop,
  reload,
  messages,
}: ChatPanelProps) {
  return (
    <>
      <div>
        {isLoading ? (
          <Button
            variant="outline"
            onClick={() => stop()}
            className="bg-background"
          >
            <IconStop className="mr-2" />
            Stop generating
          </Button>
        ) : (
          messages?.length > 0 && (
            <Button variant="outline" onClick={() => reload()}>
              <IconRefresh className="mr-2" />
              Regenerate response
            </Button>
          )
        )}
      </div>
    </>
  );
}
