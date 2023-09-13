import type { MouseEventHandler, ReactNode } from "react";

export type layoutProps = {
  children: ReactNode;
};

export type buttonProps = {
  width?: number;
  onclickfunc?: MouseEventHandler<HTMLButtonElement>;
  children: string;
};
