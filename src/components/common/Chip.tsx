import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  emoji?: string;
  className?: string;
}

export function Chip({ children, icon: Icon, emoji, className }: ChipProps) {
  return (
    <span className={cn("chip", className)}>
      {emoji ? (
        <span className="text-base leading-none" aria-hidden="true">
          {emoji}
        </span>
      ) : Icon ? (
        <Icon size={14} className="text-[color:var(--brand-light)]" />
      ) : null}
      {children}
    </span>
  );
}
