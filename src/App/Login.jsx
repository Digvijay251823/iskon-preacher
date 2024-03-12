import { useMyContext } from "../store/context";
import LoginComponent from "./components/LoginForm";

export default function Login() {
  const { state } = useMyContext();
  return (
    <main
      className={`h-screen  flex items-center justify-center flex-col gap-5 ${
        state.Theme.Theme === "light"
          ? "bg-white text-black"
          : "bg-stone-950 text-white"
      }`}
    >
      <p className="text-4xl font-bold ">Sign in</p>
      <div className="flex items-center gap-1 font-semibold text-lg">
        <p>Don&apos;t have an account ? </p>{" "}
        <p className=" text-blue-500 hover:underline">Sign up</p>
      </div>
      <div
        className={`border md:p-8 p-5 md:rounded-[46px] rounded-[36px] md:w-[450px] mt-4 ${
          state.Theme.Theme === "light"
            ? "bg-[#f7fafa] border-gray-50"
            : "bg-stone-900 border-stone-800"
        }`}
      >
        <LoginComponent />
      </div>
    </main>
  );
}
