import { Btn } from "@components";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="container flex min-h-screen max-w-screen-md flex-col items-center justify-center gap-3 text-center">
      <h1 className="text-3xl font-medium text-stone-100 md:text-5xl">
        Reach Your Goals Faster
      </h1>
      <p className="font-merriweather text-stone-300 md:text-lg">
        Finally, a simple way to not only track your day but also improve it!
        You can track your daily habits, such as sleep, meals, and workouts to
        see how they are contributing to your well-being.
      </p>
      <Btn onClick={() => signIn()} size="lg">
        Get Started
      </Btn>
      <Image
        src="/screenshot.png"
        alt="Bioboost app screenshot"
        width={800}
        height={500}
        className="mt-12 rounded-xl p-2 shadow-2xl shadow-purple-400"
      />
    </div>
  );
};
