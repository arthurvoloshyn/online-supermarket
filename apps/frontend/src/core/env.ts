export const __DEV__: boolean =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const API_BASE_URL: string = process.env.API_BASE_URL || "http://127.0.0.1:7000/";
