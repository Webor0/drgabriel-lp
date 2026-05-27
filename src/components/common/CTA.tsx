import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
  children: React.ReactNode;
  variant?: "blue" | "green";
  className?: string;
  href?: string;
}

export function CTA({ children, variant = "blue", className, href = "#contato" }: CTAProps) {
  return (
    <a
      href={href}
      className={cn(
        "btn-cta whitespace-nowrap",
        variant === "green" && "btn-cta-green",
        className
      )}
    >
      <span className="whitespace-nowrap">{children}</span>
      <span className="btn-icon">
        <ArrowUpRight size={16} strokeWidth={2.4} />
      </span>
    </a>
  );
}
