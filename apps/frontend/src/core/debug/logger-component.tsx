import { FC, PropsWithChildren } from "react";
import { __DEV__ } from "../env";

export const LoggerComponent: FC<PropsWithChildren<Record<string, unknown>>> = (
  props
) => {
  if (__DEV__) {
    console.log("LoggerComponent:", props);
  }
  return <>{props.children ?? null}</>;
};
