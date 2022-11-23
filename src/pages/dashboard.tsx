import {
  BadHabitList,
  Brand,
  MoodList,
  StackList,
  WeekView,
} from "@components";
import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Brand />

      <WeekView />

      <div className="grid items-start gap-6 md:grid-cols-2">
        <BadHabitList />

        <StackList />

        <MoodList />
      </div>
    </div>
  );
};

export default Dashboard;
