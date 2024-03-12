import React from "react";
import { useMyContext } from "../store/context";
import { Navigate } from "react-router-dom";

function AuthStates({ element }) {
  const { state } = useMyContext();
  console.log(state);
  return state.Authentication.isAuthenticated ? (
    element
  ) : (
    <Navigate to="/auth/signin" replace />
  );
}

export default AuthStates;
