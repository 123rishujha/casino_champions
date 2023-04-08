import * as types from "./chances.types";
// import { ChanceAction } from "./chances.actions";

export interface ChanceState {
  isLoading: boolean;
  isError: boolean;
  chance: number;
}

const initialState = {
  isLoading: false,
  isError: false,
  chance: 0,
};

export const chanceReducer = (
  state: ChanceState = initialState,
  action: any
) => {
  const { type } = action;
  switch (type) {
    case types.REQUEST_CHANCE: {
      return { ...state, isLoading: true };
    }
    case types.ERROR_CHANCE: {
      return { ...state, isLoading: false, isError: true };
    }
    case types.UPDATE_CHANCE_SUCCESS: {
      console.log("action", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        chance: action.payload,
      };
    }
    case types.RESET_CHANCE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        chance: 0,
      };
    }
    default: {
      console.log("called");
      return state;
    }
  }
};
