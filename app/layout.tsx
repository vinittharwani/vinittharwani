// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";

export const metadata: Metadata = {
  title: "Vinit Tharwani",
  description:
    "Software Engineer & Independent Researcher — writing, reading, and building at the intersection of systems and artificial intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fcfcf0] font-mono text-gray-900 antialiased">
        <Nav />
        <main className="mx-auto max-w-2xl px-6 py-12 sm:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}