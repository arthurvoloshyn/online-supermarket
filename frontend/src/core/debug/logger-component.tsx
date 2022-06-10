import { FC, PropsWithChildren } from "react";
import { DEV_ENV } from "../env";

export const LoggerComponent: FC<PropsWithChildren<Record<string, unknown>>> = (
  props
) => {
  if (DEV_ENV) {
    console.log("LoggerComponent:", props);
  }
  return <>{props.children ?? null}</>;
};
