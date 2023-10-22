import { ACCESS_TOKEN_KEY } from "constants/common";
import { atomWithStorage } from "jotai/utils";

export const accessTokenAtom = atomWithStorage<string | null>(
  ACCESS_TOKEN_KEY,
  null,
  {
    getItem: (key) => sessionStorage.getItem(key),
    setItem: (key, newValue) => {
      if (newValue === null) sessionStorage.removeItem(key);
      else sessionStorage.setItem(key, newValue || "");
    },
    removeItem: (key) => sessionStorage.removeItem(key),
  },
);
