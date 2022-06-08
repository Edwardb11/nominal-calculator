import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        name: "Edward",
        id: "123",
      };
    case types.logout:
      return {};
    default:
      return state;
  }
};
