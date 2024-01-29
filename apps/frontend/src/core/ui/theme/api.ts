import { Theme } from "./theme";

export const color = (key: keyof typeof Theme["colors"]) => (props: any) =>
  props.theme.colors[key];

export const gradient =
  (key: keyof typeof Theme["gradients"]) => (props: any) =>
    props.theme.gradients[key];
