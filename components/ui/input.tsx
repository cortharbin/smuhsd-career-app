import { cn } from "@/lib/utils";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "soft-focus h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm outline-none placeholder:text-slate-400 hover:border-slate-400 focus:border-teal-950 focus:ring-1 focus:ring-ring/70",
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
        "soft-focus h-10 w-full min-w-0 rounded-md border border-slate-200 bg-white px-3 pr-8 text-sm outline-none hover:border-slate-400 focus:border-teal-950 focus:ring-1 focus:ring-ring/70",
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
        "soft-focus min-h-32 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400 hover:border-slate-400 focus:border-teal-950 focus:ring-1 focus:ring-ring/70",
        props.className
      )}
    />
  );
}
