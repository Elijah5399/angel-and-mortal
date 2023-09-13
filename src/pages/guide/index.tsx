import type { ReactElement } from "react";
import Angel from "@/components/angel";
import Header from "@/components/header";
import Layout from "@/components/layout";

import type { NextPageWithLayout } from "@/pages/_app";

const Page: NextPageWithLayout = () => {
  return (
    <div className="flex flex-col items-center py-8 md:pt-20">
      <Header />
      <div className="text-white font-albert font-bold pt-4 px-12">
        <div className="text-center">
          <h3 className="text-2xl">How To Play</h3>
          <br />
        </div>
        <div className="font-normal">
          <p>
            Angels and Mortals is a fun, group-based game for people to get to
            know each other and do nice things for others. Each player is
            assigned a mortal to do good deeds for. The mortal has to find who
            their angel is, and the angel has to remain hidden.
          </p>
        </div>

        <br />
        <div className="text-center">
          <h3 className="text-xl">How To Use This Website</h3> <br />
        </div>
        <div className="pb-8 font-normal h-fit">
          <p>1. Decide on a Group Admin</p>
          <br />
          <p>2. The Group Admin creates a group, and obtains a Group ID.</p>
          <br />
          <p>3. Using the Group ID, all players can join the group.</p>
          <br />
          <p>
            4. When everyone has joined the group, the admin starts the game.
            All players will be able to see their mortals.
          </p>
          <br />
          <p>
            5. The admin ends the game, allowing all players to see their
            angels.
          </p>
        </div>
      </div>
      <Angel />
    </div>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
