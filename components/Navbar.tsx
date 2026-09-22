import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6">
      {/* Biasanya logo/nama juga dikasih link ke halaman Home */}
      <Link href="/" className="font-bold">
        MMMFikri
      </Link>

      <ul className="flex gap-6">
        <li>
          <Link href="/about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
        </li>
        <li>
          <Link href="/works" className="hover:opacity-70 transition-opacity">
            Works
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
