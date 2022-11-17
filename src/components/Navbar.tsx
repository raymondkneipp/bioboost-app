import Link from "next/link";
import { Logo } from "./Logo";

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Logo />
        BioBoost
      </Link>

      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/login">Sign Up</Link>
    </nav>
  );
};
