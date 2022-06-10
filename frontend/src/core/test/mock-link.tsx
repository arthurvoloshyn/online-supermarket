import { FC, PropsWithChildren } from "react";

export const MockLink: FC<PropsWithChildren<{}>> = ({ children }) => (
  <a href="#">{children}</a>
);
