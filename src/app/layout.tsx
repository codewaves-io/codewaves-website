import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Codewaves",
  description:
    "Pregateste te pentru examenul de bacalaureat cu ajutorul inteligentei artificiale.",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
