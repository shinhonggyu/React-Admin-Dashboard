import { createContext, useReducer, useContext } from "react";
import { DarkModeReducer } from "./darkModeReducer";

const INITIAL_STATE = {
  darkMode: false,
};

const DarkModeContext = createContext(INITIAL_STATE);
const DarkModeDispatchContext = createContext(null);

export function DarkModeContextProvider({ children }) {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={state}>
      <DarkModeDispatchContext.Provider value={dispatch}>
        {children}
      </DarkModeDispatchContext.Provider>
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("not find DarkModeContextProvider");
  }
  return context;
}

export function useDarkModeDispatch() {
  const context = useContext(DarkModeDispatchContext);
  if (!context) {
    throw new Error("not find DarkModeContextProvider");
  }
  return context;
}
