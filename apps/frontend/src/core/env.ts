export const __DEV__: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
