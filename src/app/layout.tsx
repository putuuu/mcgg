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
      <body className="relative min-h-screen text-white font-sans">
        {/* Background dengan efek parallax */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
          style={{
            backgroundImage: "url('/Atlas_Common_Bg4_MC.png')",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay futuristik dengan efek neon */}
        <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-cyan-900/10 to-black/80 -z-5" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cyan-900/5 to-transparent -z-5" />

        {/* Header */}
        <Header />

        {/* Halaman */}
        <main className="relative z-10">{children}</main>

        {/* Footer */}
        <footer className="mt-12 py-6 text-center text-gray-400 bg-black/40 backdrop-blur-md relative z-10 border-t border-cyan-500/20">
          © {new Date().getFullYear()} MCGG Guide
        </footer>
      </body>
    </html>
  );
}
