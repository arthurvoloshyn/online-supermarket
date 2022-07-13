import { FC, PropsWithChildren } from "react";

export const MockLink: FC<PropsWithChildren<{}>> = ({ children }) => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <a href="#">{children}</a>
);
