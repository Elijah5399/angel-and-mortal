import type { ReactNode } from "react";
import { layoutProps } from "../types/types";

export default function Layout(props: layoutProps): ReactNode {
  return (
    <div className="flex justify-center bg-gradient-to-r from-purple-400 to-purple-600 w-screen min-h-screen">
      {props.children}
    </div>
  );
}
