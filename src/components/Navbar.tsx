import { Brand, Btn } from "@components";
import { IconLogin, IconUserPlus } from "@tabler/icons";
import { signIn } from "next-auth/react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between py-6">
      <Link href="/">
        <Brand />
      </Link>

      <div className="flex items-center gap-6">
        <Btn onClick={() => signIn()} intent="secondary" icon={IconLogin}>
          Login
        </Btn>
        <Btn onClick={() => signIn()} icon={IconUserPlus}>
          Sign Up
        </Btn>
      </div>
    </nav>
  );
};
