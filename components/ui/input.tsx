import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "soft-focus h-10 w-full rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-ring",
        props.className
      )}
    />
  );
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "soft-focus h-10 w-full min-w-36 rounded-md border border-gray-200 bg-white px-3 pr-8 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-ring",
        props.className
      )}
    />
  );
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "soft-focus min-h-32 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-teal-700 focus:ring-2 focus:ring-ring",
        props.className
      )}
    />
  );
}
