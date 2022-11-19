import { CreateStack, ListStacks } from "@components";
import { type NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <>
      <ListStacks />

      <CreateStack />
    </>
  );
};

export default Dashboard;
