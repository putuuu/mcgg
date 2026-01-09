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
          overflow-x-hidden
        "
        data-theme="neon"
      >
        {/* === Global Background Layer === */}
        <div className="pointer-events-none fixed inset-0 -z-10">
          {/* Background image */}
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

          {/* Neon radial glow */}
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

        {/* Header (sticky, safe for mobile) */}
        <Header />

        {/* Main Content */}
        <main
          className="
            relative z-10
            mx-auto
            w-full
            max-w-7xl
            px-4 sm:px-6 lg:px-8
            pt-6 sm:pt-8
          "
        >
          {children}
        </main>

        {/* Footer */}
        <footer
          className="
            relative z-10 mt-16
            border-t border-white/10
            bg-black/30 backdrop-blur-md
          "
        >
          <div
            className="
              mx-auto max-w-7xl
              px-4 sm:px-6 lg:px-8
              py-6
              text-center text-xs sm:text-sm
              text-white/50
            "
          >
            © {new Date().getFullYear()} MCGG Guide ·
            <span className="ml-1">Synergy · Builder · Draft</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
