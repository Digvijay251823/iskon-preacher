import React, { useEffect, useState } from "react";
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
} from "../Sadhana/SadhanaForm/SadhanaFormConfig";
import { useMyContext } from "../../store/context";
import { useLocation } from "react-router-dom";

function SadhanaCounselee() {
  const [isLoading, setIsLoading] = useState(false);

  const [checkedItems, setCheckedItem] = useState([]);

  useEffect(() => {
    setCheckedItem([
      {
        id: 1,
        type: "Number of Rounds ",
        valueType: "Number",
        functionName: "NOR",
      },
      {
        id: 2,
        type: "Early Japa rounds before 8 AM ",
        valueType: "Number",
        functionName: "EJRB8A",
      },
      {
        id: 3,
        type: "Early Japa rounds after 8 AM ",
        valueType: "Number",
        functionName: "AJRA8A",
      },
      {
        id: 4,
        type: "First 8 rounds completed time ",
        valueType: "Time",
        functionName: "F8RCT",
      },
      {
        id: 5,
        type: "Next 8 rounds completed time ",
        valueType: "Time",
        functionName: "N8RCT",
      },
      { id: 6, type: "Wake up time ", valueType: "Time", functionName: "WUT" },
      { id: 7, type: "Sleep time ", valueType: "Time", functionName: "ST" },
      {
        id: 8,
        type: "Prabhupada Book Reading ",
        valueType: "Number",
        functionName: "PBR",
      },
      {
        id: 9,
        type: "Book Name Reading",
        valueType: "Text",
        functionName: "BNR",
      },
      {
        id: 10,
        type: "Prabhupada Class Hearing ",
        valueType: "Time",
        functionName: "PCH",
      },
      {
        id: 11,
        type: "Guru Class Hearing ",
        valueType: "Time",
        functionName: "GCH",
      },
      { id: 12, type: "Class Hearing ", valueType: "Time", functionName: "CH" },
      { id: 13, type: "Speaker ", valueType: "Text", functionName: "S" },
      {
        id: 14,
        type: "Attended Arthi",
        valueType: "Boolean",
        functionName: "AA",
      },
      {
        id: 15,
        type: "Mobile/Internet-Usage",
        valueType: "Time",
        functionName: "MIU",
      },
    ]);
  }, []);

  const [phoneNumber, setPhoneNumber] = useState("");
  const { state } = useMyContext();
  const { pathname } = useLocation();

  const handleChange = (e) => {
    console.log({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="flex justify-center py-5 w-full px-3">
        <div className="lg:flex h-screen items-center hidden">
          <img
            src={require("../../assets/Meditation.png")}
            height={300}
            alt="meditaion "
            className="fixed object-cover w-[380px] h-[350px]"
          />
        </div>
        <div className="lg:ml-[42vw]">
          <div
            className={`mt-5 px-5 border rounded-3xl drop-shadow-lg ${
              state.Theme.Theme === "light"
                ? "bg-white border-gray-300"
                : "border-stone-700 bg-stone-900"
            }`}
          >
            <h1 className="text-center font-bold text-xl py-8">Sadhana Form</h1>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold ">PHONE NUMBER</label>
                <input
                  type="tel"
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
                      <NORComponent
                        key={index}
                        onChange={handleChange}
                        label={"Number of Rounds "}
                      />
                    );
                  case "EJRB8A":
                    return (
                      <EJRB8AComponent
                        key={index}
                        onChange={handleChange}
                        label={"Early Japa rounds before 8 AM "}
                      />
                    );
                  case "AJRA8A":
                    return (
                      <AJRA8AComponent
                        key={index}
                        onChange={handleChange}
                        label={"Early Japa rounds after 8 AM "}
                      />
                    );
                  // Add cases for other function names as needed
                  case "F8RCT":
                    return (
                      <F8RCTComponent
                        key={index}
                        onChange={handleChange}
                        label={"First 8 rounds completed time "}
                      />
                    );
                  case "N8RCT":
                    return (
                      <N8RCTComponent
                        key={index}
                        onChange={handleChange}
                        label={"Next 8 rounds completed time "}
                      />
                    );
                  case "WUT":
                    return (
                      <WUTComponent
                        key={index}
                        onChange={handleChange}
                        label={"Wake up time "}
                      />
                    );
                  case "ST":
                    return (
                      <STComponent
                        key={index}
                        onChange={handleChange}
                        label={"Sleep time "}
                      />
                    );
                  case "PBR":
                    return (
                      <PBRComponent
                        key={index}
                        onChange={handleChange}
                        label={"Prabhupada Book Reading "}
                      />
                    );
                  case "BNR":
                    return (
                      <BNRComponent
                        key={index}
                        onChange={handleChange}
                        label={"Book Name Reading"}
                      />
                    );
                  case "PCH":
                    return (
                      <PCHComponent
                        key={index}
                        onChange={handleChange}
                        label={"Prabhupada Class Hearing "}
                      />
                    );
                  case "GCH":
                    return (
                      <GCHComponent
                        key={index}
                        onChange={handleChange}
                        label={"Guru Class Hearing "}
                      />
                    );
                  case "CH":
                    return (
                      <CHComponent
                        key={index}
                        onChange={handleChange}
                        label={"Class Hearing "}
                      />
                    );
                  case "S":
                    return (
                      <SComponent
                        key={index}
                        onChange={handleChange}
                        label={"Speaker "}
                      />
                    );
                  case "AA":
                    return (
                      <AAComponent
                        key={index}
                        onChange={handleChange}
                        label={"Attended Arthi"}
                      />
                    );
                  case "MIU":
                    return (
                      <MIUComponent
                        key={index}
                        onChange={handleChange}
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
  );
}

export default SadhanaCounselee;
