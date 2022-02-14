import { ActionType } from "../actions/calcActions";
import { types } from "../types/types";

export const initialState = {
  resultadoContenida: 0,
  resultado: 0,
};
// TODO Hacer uso del redux para poder guardar la informacion 
export const calcReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case types.opSumar:
      return {
        ...state,
        
      };

    default:
      return initialState;
  }
};
