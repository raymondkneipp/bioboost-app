import { Brand, Btn } from "@components";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-6">
      <Link href="/">
        <Brand />
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
