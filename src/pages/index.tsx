import { Footer, Hero, Navbar } from "@components";
import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();

  useEffect(() => {
    if (sessionData) {
      router.push("/dashboard");
    }
  }, [router, sessionData]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="container flex flex-col items-center justify-center py-6">
        <Hero />
      </main>
      <Footer />
    </>
  );
};

export default Home;
