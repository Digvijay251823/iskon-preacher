import React, { useState } from "react";
import { useLocation } from "react-router-dom";
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
import { RxCross1 } from "react-icons/rx";

function ConfigureSadhana({ onClose }) {
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
    <div className="h-screen w-screen overflow-y-auto">
      <button
        className={`absolute right-5 top-5 flex items-center gap-2 border p-2 rounded-xl md:z-0 z-[2000] ${
          state.Theme.Theme === "light"
            ? "bg-white border-gray-300"
            : "bg-stone-700 border-stone-600"
        }`}
        onClick={onClose}
      >
        <RxCross1 />
        close
      </button>
      <div
        className={`fixed z-[1000] md:w-[50vw] w-full left-0 top-0 bottom-0 ${
          state.Theme.Theme === "light"
            ? " bg-gradient-to-br from-slate-100 to-purple-300"
            : "bg-gradient-to-r from-stone-950 to-purple-950"
        }`}
      >
        <div className="px-5 py-5">
          <p className=" text-xl font-bold ">Configure Form</p>
          <p className="text-gray-500">
            select some fields below to customize the sadhana form
          </p>
        </div>
        <div className="flex flex-col gap-2 py-5">
          {FormListItems?.map((item, index) => (
            <div key={index} className="mx-10 flex items-center gap-2">
              <input
                type="checkbox"
                name="checkbox"
                id={item.type}
                className="w-5 h-5 "
                onChange={(e) => handleChange(e, item)}
              />
              <label htmlFor={item.type} className="font-semibold">
                {item.type}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-20">
        <div
          className={`px-5 border rounded-3xl drop-shadow-lg w-[40vw] ml-auto mx-10 ${
            state.Theme.Theme === "light"
              ? "bg-white border-gray-300"
              : "border-stone-700 bg-stone-900"
          }`}
        >
          <p className="text-center font-semibold text-gray-400">
            Preview Form
          </p>
          <h1 className="text-center font-bold text-xl py-8">Sadhana Form</h1>
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
                  return <WUTComponent key={index} label={"Wake up time "} />;
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
                    <GCHComponent key={index} label={"Guru Class Hearing "} />
                  );
                case "CH":
                  return <CHComponent key={index} label={"Class Hearing "} />;
                case "S":
                  return <SComponent key={index} label={"Speaker "} />;
                case "AA":
                  return <AAComponent key={index} label={"Attended Arthi"} />;
                case "MIU":
                  return (
                    <MIUComponent key={index} label={"Mobile/Internet-Usage"} />
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
  );
}

export default ConfigureSadhana;
/** */
