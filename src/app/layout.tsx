import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";

export const metadata = {
  title: "MCGG MCNC",
  description: "Tournament info and database for Magic Chess Go Go",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body>
        <header style={headerStyle}>
          <h1 style={{ margin: 0 }}>MCGG • MCNC</h1>
          <nav style={navStyle}>
            <Link href="/">Home</Link>
            <Link href="/commander">Commander</Link>
            <Link href="/hero">Hero</Link>
            <Link href="/sinergi">Synergy</Link>
            <Link href="/equipment">Equipment</Link>
            <Link href="/gogo-card">Gogo Card</Link>
            <Link href="/guide">Guide</Link>
            <Link href="/mcnc">MCNC</Link>
            <Link href="/about">About</Link>
          </nav>
        </header>
        <main style={mainStyle}>{children}</main>
      </body>
    </html>
  );
}

// Styling sederhana (CSS-in-JS style)
const headerStyle = {
  padding: "1rem",
  background: "#333",
  color: "#fff",
};

const navStyle: React.CSSProperties = {
  marginTop: "10px",
  display: "flex",
  flexWrap: "wrap", // ✅ sekarang sudah valid
  gap: "10px",
};

const mainStyle = {
  padding: "2rem",
  maxWidth: "960px",
  margin: "0 auto",
};
