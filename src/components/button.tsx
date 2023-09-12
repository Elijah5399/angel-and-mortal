import { ReactNode } from "react";
import { buttonProps } from "../types/types";

// Allow customisation of width
// Text is children

export default function button(btnProps: buttonProps): ReactNode {
  // Apply the custom width if it is specified
  const btnWidth: number = btnProps.width ? btnProps.width : 200;
  return (
    <div className="py-4">
      <button
        className={
          "font-albert text-lg font-light h-12 border-white border-solid border-2 rounded-full transition-colors duration-200 hover:border-pink-400"
        }
        style={{ width: `${btnWidth}px` }}
      >
        <div className={"transition-colors hover:text-pink-400"}>
          {btnProps.children}
        </div>
      </button>
    </div>
  );
}
