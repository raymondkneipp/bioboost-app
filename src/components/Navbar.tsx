import Link from "next/link";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-3">
      <Link href="/" className="flex items-center gap-3 text-purple-400">
        <Logo />
        <span className="text-3xl font-medium">BioBoost</span>
      </Link>

      <div className="flex gap-6">
        <Link href="/dashboard">Login</Link>
        <Link href="/dashboard">Sign Up</Link>
      </div>
    </nav>
  );
};
