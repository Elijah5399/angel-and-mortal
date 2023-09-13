import type { ReactElement } from "react";
import Angel from "@/components/angel";
import Button from "@/components/button";
import Header from "@/components/header";
import Layout from "@/components/layout";
import { useRouter } from "next/router";

import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center pt-6 md:pt-20">
      <Header />
      <div id="buttonGroup" className="pt-4">
        <Button onclickfunc={() => router.push("/create")}>Create Group</Button>
        <Button>Manage Group</Button>
        <Button>Join Group</Button>
        <Button>See Angel/Mortal</Button>
        <Button onclickfunc={() => router.push("/guide")}>How To Play</Button>
      </div>
      <Angel />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
