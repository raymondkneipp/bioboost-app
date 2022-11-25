import { Btn } from "@components";
import { signIn } from "next-auth/react";

export const Hero = () => {
  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-5xl font-medium">Health & Productivity Made Easy</h1>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        doloribus, necessitatibus dolorum modi dolores itaque ipsam perspiciatis
        harum numquam corporis sint reiciendis aspernatur, maxime placeat enim
        eum pariatur possimus voluptate?
      </p>
      <Btn onClick={() => signIn()} size="lg">
        Get Started
      </Btn>
      <div className="mt-12 flex aspect-video w-full items-center justify-center rounded-xl bg-stone-800 text-stone-400">
        Screenshot
      </div>
    </div>
  );
};
