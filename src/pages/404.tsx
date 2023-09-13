import { ReactNode } from "react";
import Header from "../components/header";
import Angel from "../components/angel";
import Button from "../components/button";
import { useRouter } from "next/router";

// Layout doesn't apply to this page
export default function Custom404(): ReactNode {
  const router = useRouter();

  return (
    <>
      <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-screen w-screen font-albert selection:bg-fuchsia-600 selection:text-fuchsia-900 flex flex-col items-center pt-6 md:pt-20">
        <Header />
        <div className="text-white font-albert font-extrabold text-2xl md:text-3xl pt-8 pb-4">
          <h1>404 - Page Not Found</h1>
        </div>
        <Button width={250} onclickfunc={() => router.push("/")}>
          Back to Home Page
        </Button>
        <Angel />
      </div>
    </>
  );
}
