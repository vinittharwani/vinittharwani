// components/nav.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Vinit Tharwani", accent: "border-blue-600" },
  { href: "/writings", label: "Writings", accent: "border-blue-600" },
  { href: "/about", label: "About", accent: "border-blue-600" },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="border-b border-gray-300 bg-[#fcfcf0]">
      <nav className="mx-auto flex max-w-2xl flex-wrap px-6 sm:px-8">
        {TABS.map((tab) => {
          const isActive =
            tab.href === "/"
              ? pathname === "/"
              : pathname?.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={[
                "border-t-2 px-3 py-3 text-sm transition-colors first:pl-0",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                isActive
                  ? `${tab.accent} font-semibold text-gray-900`
                  : "border-transparent text-gray-500 hover:text-gray-900",
              ].join(" ")}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
