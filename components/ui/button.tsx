import Link from "next/link";
import { cn } from "@/lib/utils";

const buttonClasses =
  "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ease-out hover:scale-[1.025] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const primaryButtonClasses =
  "bg-primary text-primary-foreground shadow-sm hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-md";

export function ButtonLink({
  href,
  children,
  className
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(buttonClasses, primaryButtonClasses, className)}
    >
      {children}
    </Link>
  );
}

export function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(buttonClasses, primaryButtonClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
}
