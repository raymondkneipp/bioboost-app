import { Btn, Logo } from "@components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-3">
      <Link href="/" className="flex items-center gap-3 text-purple-400">
        <Logo />
        <span className="text-3xl font-medium">BioBoost</span>
      </Link>

      <div className="flex items-center gap-6">
        <Btn href="/dashboard" intent="secondary">
          Login
        </Btn>
        <Btn href="/dashboard">Sign Up</Btn>
      </div>
    </nav>
  );
};
