import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useMyContext } from "../../store/context";

function LoginComponent() {
  const { state, dispatch } = useMyContext();
  const [isEmail, setIsEmail] = useState("");
  const [sSubmitted, setSubmitted] = useState(false);
  // const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const Navigate = useNavigate();

  console.log(state.Authentication.isAuthenticated);
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("AUTHENTICATED", true);
    if (isEmail === "rasamritagaur.rns@gmail.com") {
      Navigate("/cct/analytics");
    } else {
      Navigate("/counseler/analytics");
    }
    dispatch({ type: "LOGIN" });
    setSubmitted(true);
  };

  return (
    <form className="flex flex-col gap-8 w-full" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-5">
        <label htmlFor="EMAIL" className="font-semibold text-xl">
          Email address
        </label>
        <input
          type="email"
          className={`px-4 py-3.5 border rounded-2xl text-lg  transition-all duration-300 focus:ring-4  outline-none ${
            state.Theme.Theme === "light"
              ? "focus:border-blue-500 focus:ring-blue-100 bg-gray-200 border-gray-300"
              : "focus:border-blue-500 focus:ring-blue-950 bg-stone-800 border-stone-700"
          }`}
          name="email"
          id="EMAIL"
          placeholder="johndoe@example.com"
          autoComplete="current-email"
          onChange={(e) => setIsEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col gap-5">
        <PasswordToggle />
      </div>

      <button
        className={`w-full text-center transition-all duration-500 ${
          isEmail !== ""
            ? `${state.Theme.Theme === "light" ? "bg-black" : "bg-black"}`
            : `${
                state.Theme.Theme === "light"
                  ? "bg-gray-100"
                  : "bg-stone-800 text-stone-700"
              }`
        } py-3 rounded-2xl text-white `}
        disabled={isEmail === ""}
        type="submit"
      >
        SUBMIT
      </button>
    </form>
  );
}

export default LoginComponent;

function PasswordToggle() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { state } = useMyContext();
  const [focused, setFocused] = useState(false);
  console.log(focused);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <label htmlFor="PASSWORD" className="font-semibold text-xl">
          Password
        </label>
        <p className="text-gray-400">Forget Password ?</p>
      </div>
      <div
        className={`flex items-center px-1 py-2.5 border rounded-2xl text-lg transition-all duration-300 ${
          focused
            ? `${
                state.Theme.Theme === "light"
                  ? "bg-gray-200 ring-4 ring-blue-100 border-blue-500"
                  : "bg-stone-800 ring-4 ring-blue-950 border-blue-500"
              }`
            : `${
                state.Theme.Theme === "light"
                  ? "bg-gray-200 border-gray-300"
                  : "bg-stone-800 border-stone-700"
              }`
        }`}
      >
        <input
          type={passwordVisible ? "text" : "password"}
          className={`w-full h-min ${
            state.Theme.Theme === "light"
              ? "bg-gray-200 focus:outline-none focus:bg-gray-200"
              : "bg-stone-800 focus:outline-none focus:bg-stone-800"
          }`}
          id="PASSWORD"
          name="password"
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder="password"
          autoComplete="current-password"
        />
        <span
          className={`border ${
            state.Theme.Theme === "light"
              ? "border-gray-300"
              : "border-stone-800"
          } rounded-xl cursor-pointer text-sm px-3 py-2.5`}
          onClick={togglePasswordVisibility}
        >
          {passwordVisible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </>
  );
}
