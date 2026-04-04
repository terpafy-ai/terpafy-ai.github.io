import { cn } from "@/lib/utils";

export type Message = { role: "user" | "bot"; time: string; text: string };

interface ChatTranscriptProps {
  messages: Message[];
  className?: string;
}

export function ChatTranscript({ messages, className }: ChatTranscriptProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border border-border bg-background p-6",
        className,
      )}
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={cn("flex", msg.role === "user" ? "justify-end" : "justify-start")}
        >
          <div
            className={cn(
              "flex max-w-[80%] flex-col gap-1 px-4 py-4 backdrop-blur-[16px]",
              msg.role === "user"
                ? "rounded-[10px_10px_10px_5px] border border-[#f2594b] bg-[rgba(242,89,75,0.2)]"
                : "rounded-[10px_10px_5px_10px] border border-[#3a3a3a] bg-gradient-to-b from-[rgba(58,58,58,0.3)] to-[rgba(160,160,160,0.03)]",
            )}
          >
            <p className="text-sm font-medium leading-[150%] text-[#3a3a3a]">
              {msg.text}
            </p>
            <span className="self-end text-xs font-medium leading-[150%] text-[#3a3a3a]">
              {msg.time}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

