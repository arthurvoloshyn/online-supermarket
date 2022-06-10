export const DEV_ENV: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
