import { types } from "../types/types";

export const nominaReducer = (state = {}, action) => {
  switch (action.type) {
    case types.nominaAdd:
      return {};
    default:
      return state;
  }
};
