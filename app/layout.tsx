import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sara, My Love ♡",
  description: "A little corner of the universe, made just for Sara.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
