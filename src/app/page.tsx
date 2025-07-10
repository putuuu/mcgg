import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Selamat Datang di Situs MCGG MCNC</h1>
      <ul>
        <li>
          <Link href="/commander">Commander</Link>
        </li>
        <li>
          <Link href="/hero">Hero</Link>
        </li>
        <li>
          <Link href="/sinergi">Sinergi</Link>
        </li>
        <li>
          <Link href="/equipment">Equipment</Link>
        </li>
        <li>
          <Link href="/gogo-card">Gogo Card</Link>
        </li>
        <li>
          <Link href="/guide">Guide</Link>
        </li>
        <li>
          <Link href="/mcnc">MCNC (Turnamen 4v4)</Link>
        </li>
        <li>
          <Link href="/about">Tentang Situs</Link>
        </li>
      </ul>
    </main>
  );
}
