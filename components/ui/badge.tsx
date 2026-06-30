import { cn } from "@/lib/utils";

export function Badge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "status-pop inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors duration-200",
        className
      )}
    >
      {children}
    </span>
  );
}
