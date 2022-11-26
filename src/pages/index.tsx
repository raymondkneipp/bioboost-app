import { Features, Footer, Hero, LoadingPage, Navbar } from "@components";
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
    return <LoadingPage />;
  }

  if (status === "authenticated") {
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="container flex flex-col items-center justify-center gap-6 py-12">
        <Hero />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default Home;
