export const makeMockCallback = (message: string) => {
  return () => alert(message);
};
