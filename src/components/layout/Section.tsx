import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export function Section({ children, className, id, dark }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-4 md:px-8 lg:px-16 py-8 md:py-16 flex justify-center",
        dark ? "bg-[color:var(--brand-dark)] text-white" : "bg-white",
        className
      )}
    >
      <div className="max-w-[var(--size-max-width)] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}
