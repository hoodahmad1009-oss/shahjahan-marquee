
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shah Jahan Marquee | Elegant Wedding Celebrations",
  description:
    "Discover Shah Jahan Marquee — a beautiful setting for weddings, receptions and unforgettable celebrations in Lahore, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
