// MyContext.js
import React, { createContext, useReducer, useContext } from "react";

// Define initial states
const Authentication = {
  isAuthenticated: false,
};

const toastInitialState = {
  toast: {
    type: "LOADING",
    message: "",
    isVisible: false,
  },
};

const ThemeStateInitial = {
  Theme: "light",
};

// Define reducer functions
const AuthenticationReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
};

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "DARK":
      return { ...state, Theme: "dark" };
    case "LIGHT":
      return { ...state, Theme: "light" };
    default:
      return state;
  }
};
const ToastReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TOAST":
      return {
        ...state,
        toast: {
          ...state.toast,
          type: action.payload.type,
          message: action.payload.message,
          isVisible: true,
        },
      };
    case "HIDE_TOAST":
      return {
        ...state,
        toast: {
          ...state.toast,
          type: "LOADING",
          isVisible: false,
        },
      };
    default:
      return state;
  }
};

// Combine reducers
const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
      (acc, key) => ({
        ...acc,
        [key]: reducers[key](acc[key], action),
      }),
      state
    );
  };
};

const rootReducer = combineReducers({
  Authentication: AuthenticationReducer,
  Theme: ThemeReducer,
  Toast: ToastReducer,
});

// Create context
const MyContext = createContext();

// Create context provider component
export const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, {
    Authentication: Authentication,
    Theme: ThemeStateInitial,
    Toast: toastInitialState,
  });

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to consume the context
export const useMyContext = () => useContext(MyContext);
