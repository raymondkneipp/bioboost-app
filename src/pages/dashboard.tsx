import { Brand, StackCreate, StackList } from "@components";
import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <div className="flex flex-col gap-6 p-6">
      <Brand />

      <StackList />

      <StackCreate />
    </div>
  );
};

export default Dashboard;
