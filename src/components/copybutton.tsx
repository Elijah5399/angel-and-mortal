import { ReactNode, useState } from "react";
import { copyButtonProps } from "@/types/types";
import { FaCopy } from "react-icons/fa";

/*
  Essentially the same as button, but has fixed functionality of copying children
  string to clipboard and has less y padding
*/

export default function CopyButton(btnProps: copyButtonProps): ReactNode {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(text: string) {
    setCopied(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => setCopied(false), 600);
  }
  // Apply the custom width if it is specified
  const btnWidth: number = btnProps.width ? btnProps.width : 200;
  return (
    <div className="group/button pt-1 pb-3 w-fit">
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
      <p
        className={`text-pink-400 absolute ${copied ? "block" : "hidden"}`}
        style={{ width: `${btnWidth}px` }}
      >
        Copied!
      </p>
    </div>
  );
}
