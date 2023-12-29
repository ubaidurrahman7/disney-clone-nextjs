import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "for Educational purpose",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#1A1C29]">
        <Header />
        {children}
      </body>
    </html>
  );
}
