import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAProps {
  children: React.ReactNode;
  variant?: "blue" | "green";
  className?: string;
  href?: string;
}

export function CTA({ children, variant = "blue", className, href = "https://wa.me/5551997157737?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20UroFill%E2%84%A2%20e%20entender%20como%20funciona%20a%20avalia%C3%A7%C3%A3o%20personalizada." }: CTAProps) {
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
