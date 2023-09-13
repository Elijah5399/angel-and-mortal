import { ReactNode } from "react";
import { copyButtonProps } from "@/types/types";
import { FaCopy } from "react-icons/fa";

/*
  Essentially the same as button, but has fixed functionality of copying children
  string to clipboard and has less y padding
*/

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export default function CopyButton(btnProps: copyButtonProps): ReactNode {
  // Apply the custom width if it is specified
  const btnWidth: number = btnProps.width ? btnProps.width : 200;
  return (
    <div className="group/button py-1 w-fit">
      <button
        className={
          "font-albert text-lg font-light h-12 border-white border-solid border-2 rounded-full transition-colors duration-200 group-hover/button:border-pink-400"
        }
        style={{ width: `${btnWidth}px` }}
        onClick={() => copyToClipboard(btnProps.children)}
      >
        <div className="grid grid-cols-8">
          <div
            className={
              "col-start-3 col-span-4 transition-colors group-hover/button:text-pink-400 text-white"
            }
          >
            {btnProps.children}
          </div>
          <div className="text-white group-hover/button:text-pink-400 col-start-7 col-span-1 transition-colors duration-200 pt-1">
            <FaCopy />
          </div>
        </div>
      </button>
    </div>
  );
}
