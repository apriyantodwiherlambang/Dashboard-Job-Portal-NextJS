import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "../globals.css";
import Sidebar from "@/components/ui/layouts/Sidebar";
import Header from "@/components/ui/layouts/Header";

const epilogue = Epilogue({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>
            {children}
        </main>
      </body>
    </html>
  );
}
