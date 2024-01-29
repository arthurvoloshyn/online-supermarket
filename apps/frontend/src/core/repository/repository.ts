import { getRegistry } from "@ngneat/elf";

export const resetAllStores = () => {
  getRegistry().forEach((store) => store.reset());
};
