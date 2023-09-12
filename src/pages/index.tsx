import type { ReactElement } from "react";
import Angel from "../components/angel";
import Button from "../components/button";
import Layout from "../components/layout";

import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center pt-24">
      <h1 className="font-albert font-extrabold text-4xl">Angels & Mortals</h1>
      <div id="buttonGroup" className="pt-4">
        <Button>Create Group</Button>
        <Button>Manage Group</Button>
        <Button>Join Group</Button>
        <Button>See Angel/Mortal</Button>
        <Button>How To Play</Button>
      </div>
      <Angel />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
