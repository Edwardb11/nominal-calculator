import { types } from "../types/types";

export const nominaReducer = (state = {}, action) => {
  switch (action.type) {
    case types.nominaAdd:
      return {};
    case types.nominaRead:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
