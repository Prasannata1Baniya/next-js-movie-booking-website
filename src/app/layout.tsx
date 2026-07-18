import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CineBook",
    template: "%s | CineBook",
  },
  description: "Book movie tickets online with CineBook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-text-primary">
        {children}
      </body>
    </html>
  );
}