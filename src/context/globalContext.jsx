import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

const appContext = createContext();

export const useAppContext = () => {
  return useContext(appContext);
};

const initialState = {};

import React from "react";

function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <appContext.Provider value={{ ...state, dispatch }}>
      {children}
    </appContext.Provider>
  );
}

export default GlobalContext;
