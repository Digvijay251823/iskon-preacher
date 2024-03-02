import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMyContext } from "../../../store/context";
import {
  NOR as NORComponent,
  EJRB8A as EJRB8AComponent,
  AJRA8A as AJRA8AComponent,
  F8RCT as F8RCTComponent,
  N8RCT as N8RCTComponent,
  WUT as WUTComponent,
  ST as STComponent,
  PBR as PBRComponent,
  BNR as BNRComponent,
  PCH as PCHComponent,
  GCH as GCHComponent,
  CH as CHComponent,
  S as SComponent,
  AA as AAComponent,
  MIU as MIUComponent,
  FormListItems,
} from "./SadhanaFormConfig";

function ConfigureSadhana() {
  const { pathname } = useLocation();
  const { state } = useMyContext();
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const handleChange = (event, item) => {
    const { checked } = event.target;

    if (checked) {
      setCheckedItems((prevItems) => [...prevItems, item]);
    } else {
      setCheckedItems((prevItems) =>
        prevItems.filter((prevItem) => prevItem.id !== item.id)
      );
    }
  };

  return (
    <div>
      <div>
        <div
          className={`flex items-center gap-5 md:mx-10 mx-3 border-b md:w-max ${
            state.Theme.Theme === "light"
              ? "border-b-gray-300"
              : "border-b-stone-700"
          }`}
        >
          <Link to={"/counseler/sadhana"}>
            <button
              className={`py-3 px-3 ${
                pathname === "/counseler/sadhana"
                  ? "text-purple-700 border-b border-b-purple-700"
                  : "text-stone-400"
              }`}
            >
              Sadhana List
            </button>
          </Link>
          <Link to={"/counseler/configure"}>
            <button
              className={`py-3 px-3 ${
                pathname === "/counseler/configure"
                  ? "text-purple-700 border-b border-b-purple-700"
                  : "text-stone-400 "
              }`}
            >
              Configure Form
            </button>
          </Link>
        </div>
        <div className="flex relative">
          <div className="py-10 md:flex md:flex-col flex-row gap-2">
            {FormListItems?.map((item) => (
              <div key={item.id} className="px-5 whitespace-nowrap">
                <label
                  htmlFor={item.functionName}
                  className="flex items-center gap-2 font-semibold"
                >
                  <input
                    id={item.functionName}
                    name={item.functionName}
                    type="checkbox"
                    className={`h-5 w-5 accent-purple-700 appearance-none border rounded-lg ${
                      state.Theme.Theme === "light"
                        ? "border-gray-400"
                        : "border-stone-400"
                    } checked:bg-purple-700 checked:border-transparent checked:after:block`}
                    checked={checkedItems.some(
                      (checkedItem) => checkedItem.id === item.id
                    )}
                    onChange={(event) => handleChange(event, item)}
                  />
                  {item.type}
                </label>
              </div>
            ))}
          </div>
          <div className="mt-5 md:flex justify-center w-full hidden my-5">
            <div
              className={`mt-5 px-5 border rounded-3xl drop-shadow-lg ${
                state.Theme.Theme === "light"
                  ? "bg-white border-gray-300"
                  : "border-stone-700 bg-stone-900"
              }`}
            >
              <p className="text-center font-semibold text-gray-400">
                Preview Form
              </p>
              <h1 className="text-center font-bold text-xl py-8">
                Sadhana Form
              </h1>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <label className="font-semibold ">PHONE NUMBER</label>
                  <input
                    type="tel"
                    disabled={true}
                    className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
                      state.Theme.Theme === "light"
                        ? "border-gray-300"
                        : "border-stone-700 bg-stone-900"
                    }`}
                    placeholder="8888959287"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <button
                  className={`px-4 py-1.5 text-lg rounded-xl border my-5 ${
                    state.Theme.Theme === "light"
                      ? "border-blue-800 bg-blue-500 text-white"
                      : "border-stone-700 bg-blue-900"
                  } `}
                  type="submit"
                  disabled
                >
                  {isLoading ? "loading..." : "Search"}
                </button>
              </div>
              <p className="text-center p-5 text-gray-400">
                This form is to track your daily progress in the path of
                <i className="text-red-400 ml-2">Krsna consiousness</i>
              </p>
              <div className="flex flex-col gap-5">
                {checkedItems.map((item, index) => {
                  switch (item.functionName) {
                    case "NOR":
                      return (
                        <NORComponent key={index} label={"Number of Rounds "} />
                      );
                    case "EJRB8A":
                      return (
                        <EJRB8AComponent
                          key={index}
                          label={"Early Japa rounds before 8 AM "}
                        />
                      );
                    case "AJRA8A":
                      return (
                        <AJRA8AComponent
                          key={index}
                          label={"Early Japa rounds after 8 AM "}
                        />
                      );
                    // Add cases for other function names as needed
                    case "F8RCT":
                      return (
                        <F8RCTComponent
                          key={index}
                          label={"First 8 rounds completed time "}
                        />
                      );
                    case "N8RCT":
                      return (
                        <N8RCTComponent
                          key={index}
                          label={"Next 8 rounds completed time "}
                        />
                      );
                    case "WUT":
                      return (
                        <WUTComponent key={index} label={"Wake up time "} />
                      );
                    case "ST":
                      return <STComponent key={index} label={"Sleep time "} />;
                    case "PBR":
                      return (
                        <PBRComponent
                          key={index}
                          label={"Prabhupada Book Reading "}
                        />
                      );
                    case "BNR":
                      return (
                        <BNRComponent key={index} label={"Book Name Reading"} />
                      );
                    case "PCH":
                      return (
                        <PCHComponent
                          key={index}
                          label={"Prabhupada Class Hearing "}
                        />
                      );
                    case "GCH":
                      return (
                        <GCHComponent
                          key={index}
                          label={"Guru Class Hearing "}
                        />
                      );
                    case "CH":
                      return (
                        <CHComponent key={index} label={"Class Hearing "} />
                      );
                    case "S":
                      return <SComponent key={index} label={"Speaker "} />;
                    case "AA":
                      return (
                        <AAComponent key={index} label={"Attended Arthi"} />
                      );
                    case "MIU":
                      return (
                        <MIUComponent
                          key={index}
                          label={"Mobile/Internet-Usage"}
                        />
                      );
                    // Add more cases as needed
                    default:
                      return null;
                  }
                })}
              </div>
              {checkedItems?.length > 0 ? (
                <div className="flex justify-center w-full ">
                  <button
                    disabled={pathname !== `/sadhana`}
                    className={`px-4 py-1.5 text-lg rounded-xl border my-5 w-full ${
                      state.Theme.Theme === "light"
                        ? "border-blue-800 bg-blue-500 text-white"
                        : "border-stone-700 bg-blue-900"
                    } `}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <div className="text-center font-semibold my-10 text-gray-400">
                  No Configured Fields
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfigureSadhana;
