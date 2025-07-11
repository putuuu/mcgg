import "./globals.css";
import { ReactNode } from "react";
import Header from "../app/components/Header"; // ⬅️ pisahkan

export const metadata = {
  title: "MCGG MCNC",
  description: "Tournament info and database for Magic Chess Go Go",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Header />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
