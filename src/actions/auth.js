import { types } from "../types/types";

export const googleLogin = (id, username) => {
  return {
    type: types.login,
    payload: {
      id,
      username,
    },
  };
};
