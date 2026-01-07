import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "MCGG Guide",
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
        className="
          relative min-h-screen font-sans text-white
          bg-[var(--bg-base)]
        "
        data-theme="neon"
      >
        {/* === Global Background Layer (optional & theme-driven) === */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Background image (can be changed per season) */}
          <div
            className="
              absolute inset-0 bg-cover bg-center bg-no-repeat
              opacity-[var(--bg-image-opacity)]
            "
            style={{
              backgroundImage: "var(--bg-image)",
              backgroundAttachment: "fixed",
            }}
          />

          {/* Gradient overlay */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-[var(--overlay-from)]
              via-[var(--overlay-via)]
              to-[var(--overlay-to)]
            "
          />

          {/* Subtle neon radial */}
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
              from-transparent
              via-[var(--neon-glow)]
              to-transparent
            "
          />
        </div>

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <footer
          className="
            relative z-10 mt-16 py-6 text-center text-sm
            text-white/50
            border-t border-white/10
            bg-black/30 backdrop-blur-md
          "
        >
          © {new Date().getFullYear()} MCGG Guide
        </footer>
      </body>
    </html>
  );
}
