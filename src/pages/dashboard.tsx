import { Brand, StackCreate, StackList, WeekView } from "@components";
import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Brand />

      <WeekView />

      <div className="grid grid-cols-2 items-start gap-6">
        <StackList />

        <StackCreate />
      </div>
    </div>
  );
};

export default Dashboard;
