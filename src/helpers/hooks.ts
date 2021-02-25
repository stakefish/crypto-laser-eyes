import { useContext, useReducer, Dispatch } from "react";
import { ThemeContext } from "styled-components";

export const useTheme = (): React.Context<any> => {
  return useContext(ThemeContext);
};

export const useSetState = <T>(initialState: T): [T, Dispatch<T>] => {
  return useReducer((prevState: T, state: T) => ({ ...prevState, ...state }), initialState);
};
