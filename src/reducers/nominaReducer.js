import { types } from "../types/types";

const initialState ={
  data: [],
}
export const nominaReducer = (state = initialState, action) => {
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
