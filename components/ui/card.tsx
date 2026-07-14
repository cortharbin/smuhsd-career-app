import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("card-lift app-surface rounded-lg text-card-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}
