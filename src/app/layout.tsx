import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCGG",
  description: "Magic Chess Go Go Guides and Tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="relative min-h-screen text-white 
                   bg-[url('/Atlas_Common_Bg4_MC.png')] bg-cover bg-center bg-fixed"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/60 -z-10" />

        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md">
          <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
            <Link href="/" className="text-2xl font-bold">
              MCGG
            </Link>
            <ul className="flex gap-6 font-medium">
              <li>
                <Link href="/commander">Commander</Link>
              </li>
              <li>
                <Link href="/synergyhero">Sinergi & Hero</Link>
              </li>
              <li>
                <Link href="/equipment">Equipment</Link>
              </li>
              <li>
                <Link href="/gogo-card">Gogo Card</Link>
              </li>
              <li>
                <Link href="/builder">Synergy Builder</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Halaman dinamis */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-center text-gray-400 bg-black/40 backdrop-blur-md">
          © {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
