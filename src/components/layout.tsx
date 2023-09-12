import type { ReactNode } from "react";
import { layoutProps } from "../types/types";

export default function Layout(props: layoutProps): ReactNode {
  return (
    <div className="flex justify-center bg-gradient-to-r from-purple-500 to-purple-700 h-screen w-screen">
      {props.children}
    </div>
  );
}
