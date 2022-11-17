import { Brand } from "@components";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container flex flex-col items-center justify-center gap-3 py-6">
      <Brand />
      <div className="flex items-center justify-center gap-3">
        <Link
          href="https://facebook.com"
          aria-label="facebook"
          target="_blank"
          className="transition hover:text-purple-400"
        >
          <IconBrandFacebook stroke={1} />
        </Link>
        <Link
          href="https://twitter.com/BioBoostFit"
          aria-label="twitter"
          target="_blank"
          className="transition hover:text-purple-400"
        >
          <IconBrandTwitter stroke={1} />
        </Link>
        <Link
          href="https://www.instagram.com/bioboostfit/"
          aria-label="instagram"
          target="_blank"
          className="transition hover:text-purple-400"
        >
          <IconBrandInstagram stroke={1} />
        </Link>
      </div>
    </footer>
  );
};
