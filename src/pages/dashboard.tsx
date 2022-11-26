import {
  BadHabitList,
  Brand,
  Btn,
  LoadingPage,
  MoodList,
  StackList,
  WeekView,
  WeightList,
} from "@components";
import { IconLogout } from "@tabler/icons";
import { type NextPage } from "next";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { data: sessionData, status } = useSession();

  useEffect(() => {
    if (!sessionData) {
      router.push("/");
    }
  }, [router, sessionData]);

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
        <Brand />

        <Btn onClick={() => signOut()} icon={IconLogout} intent="danger">
          Sign Out
        </Btn>
      </div>

      <WeekView />

      <div className="grid items-start gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <BadHabitList />

          <MoodList />
          <WeightList />
        </div>

        <div className="flex flex-col gap-6">
          <StackList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
