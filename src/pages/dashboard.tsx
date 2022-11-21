import { StackCreate, StackList } from "@components";
import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <>
      <StackList />

      <StackCreate />
    </>
  );
};

export default Dashboard;
