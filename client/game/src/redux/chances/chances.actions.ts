import { AppDispatch } from "../store";
import * as types from "./chances.types";

//action object interface;
export interface I_requestChance {
  type: typeof types.REQUEST_CHANCE;
}

export interface I_ErroChance {
  type: typeof types.ERROR_CHANCE;
}

export interface UPDATE_CHANCE_SUCCESS {
  type: typeof types.UPDATE_CHANCE_SUCCESS;
  payload: number;
}

export interface I_ResetChance {
  type: typeof types.RESET_CHANCE_SUCCESS;
}

//chanceAction we will use it in reducer file as the type of action argument;
export type ChanceAction =
  | I_requestChance
  | I_ErroChance
  | UPDATE_CHANCE_SUCCESS
  | I_ResetChance;

//action object functions
export const requestChance = (): I_requestChance => {
  return { type: types.REQUEST_CHANCE };
};

export const errorChance = (): I_ErroChance => {
  return { type: types.ERROR_CHANCE };
};

export const updateChance = (payload: number): UPDATE_CHANCE_SUCCESS => {
 
  return { type: types.UPDATE_CHANCE_SUCCESS, payload };
};

export const resetChance = (): I_ResetChance => {
  return { type: types.RESET_CHANCE_SUCCESS };
};

// redux
export const chanceUpdate =
  (payload: number): any =>
  (dispatch: AppDispatch) => {
    console.log("redux funciton chanceUpdate", payload);
    dispatch(updateChance(payload));
  };
