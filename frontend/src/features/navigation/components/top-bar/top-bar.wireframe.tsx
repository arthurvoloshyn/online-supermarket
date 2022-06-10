import { CartStatusWireframe } from "@app/features/cart";
import { FC, PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import { TopBar } from "./top-bar.view";

export const TopBarWireframe: FC<{}> = () => (
  <TopBar CartStatus={CartStatusWireframe} LinkToRoot={LinkToRoot} />
);

const LinkToRoot: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Link to="/" children={children} />
);
