import type { ReactElement } from "react";
import BackButton from "@/components/back";
//import CopyButton from "@/components/copybutton";
import Header from "@/components/header";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";

import type { NextPageWithLayout } from "@/pages/_app";

const groupID = "F12345";
const password = "BLABLA";

const Page: NextPageWithLayout = () => {
  const CC = dynamic(() => import("@/components/copybutton"), { ssr: false });

  return (
    <div className="flex flex-col items-center pt-16 md:pt-20">
      <BackButton />
      <Header />
      <div className="text-white font-albert font-normal px-12 md:px-36 text-center">
        <p className="font-bold py-2">Success!</p>
        <p className="py-2">Your group has been created.</p>
        <p className="py-2">
          Copy the group ID below by clicking on it, and send the group ID to
          all your participants! The group password should only be used by you
          to manage the group.
        </p>
        <p className="py-2">
          When all participants have joined the group, go to &quot;Manage
          group&quot; {">"} &quot;Start game&quot;
        </p>
        <div className="flex flex-col items-center">
          <label>Your group ID:</label>
          <CC>{groupID}</CC>
        </div>
        <div className="pt-2 flex flex-col items-center">
          <label>Your group password:</label>
          <CC>{password}</CC>
        </div>
      </div>
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
