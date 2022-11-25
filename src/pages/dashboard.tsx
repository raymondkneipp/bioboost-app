import {
  BadHabitList,
  Brand,
  Btn,
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
  const { data: sessionData } = useSession();

  useEffect(() => {
    if (!sessionData) {
      router.push("/");
    }
  }, [router, sessionData]);

  if (!sessionData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
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
        </div>

        <div className="flex flex-col gap-6">
          <StackList />
          <WeightList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
