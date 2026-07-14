import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMUHSD Career Finder",
  description: "A student-friendly career opportunity browser for SMUHSD students."
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/opportunities", label: "Opportunities" },
  { href: "/work-permits", label: "Work Permits" },
  { href: "/submit", label: "Submit" },
  { href: "/admin/opportunities", label: "Admin" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <header className="sticky top-0 z-20 border-b border-teal-950/20 bg-teal-900/95 text-white shadow-sm backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="button-pop text-lg font-semibold tracking-normal transition-opacity hover:opacity-90">
              SMUHSD Career Finder
            </Link>
            <nav className="flex flex-wrap gap-2 text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="button-pop rounded-md px-3 py-2 text-sm font-semibold text-teal-50 transition-all duration-200 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
