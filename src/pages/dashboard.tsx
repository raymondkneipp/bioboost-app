import {
  BadHabitList,
  Brand,
  MoodList,
  StackList,
  WeekView,
  WeightList,
} from "@components";
import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Brand />

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
