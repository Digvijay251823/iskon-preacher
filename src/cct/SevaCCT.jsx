import React, { useCallback, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMyContext } from "../store/context";
import { MdKeyboardArrowDown } from "react-icons/md";

const SERVER_ENDOPOINT =
  "https://counsellor-portal-env.eba-mbtr2c2r.ap-south-1.elasticbeanstalk.com/counsellor-portal";

const sevas = [
  "Mangal Arthi",
  "Morning Japa",
  "Guru Puja",
  "SB Class",
  " Deity Worship Seva",
  "Other Seva",
];

function Seva() {
  const [dataArr, setDataArr] = useState([]);
  const [SelectedCounselor, setSelectedCounselor] = useState({});
  const [selectedSevas, setSelectedSevas] = useState([]);

  const [formData, setFormData] = useState({
    mangalAarti: false,
    morningJapa: false,
    sbClass: false,
    deityWorshipSeva: false,
    otherSeva: false,
    guruPuja: false,
    location: "NVCC_TEMPLE",
  });
  const { state, dispatch } = useMyContext();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${SERVER_ENDOPOINT}/counsellor/`);
        if (response.ok) {
          const responseData = await response.json();
          setDataArr(responseData.content);
        } else {
          const errorData = await response.json();
          dispatch({
            type: "SHOW_TOAST",
            payload: { type: "ERROR", message: errorData.message },
          });
        }
      } catch (error) {
        dispatch({
          type: "SHOW_TOAST",
          payload: { type: "ERROR", message: error.message },
        });
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    const date = new Date().toISOString();
    setFormData((prevData) => ({
      ...prevData,
      counsellorId: SelectedCounselor.id,
      spouseName: SelectedCounselor.name,
      programDate: date,
    }));
  }, [SelectedCounselor]);

  const handleChange = (e) => {
    const { name, checked, value } = e.target;

    if (checked) {
      setSelectedSevas([...selectedSevas, value]);
    } else {
      setSelectedSevas(selectedSevas.filter((item) => item !== value));
    }
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const header = new Headers();
    header.append("Content-Type", "application/json");
    try {
      const response = await fetch(
        `${SERVER_ENDOPOINT}/counsellor-morning-program/record`,
        { method: "POST", headers: header, body: JSON.stringify(formData) }
      );
      if (response.ok) {
        const responseData = await response.json();
        dispatch({
          type: "SHOW_TOAST",
          payload: { type: "SUCCESS", message: responseData.message },
        });
      } else {
        if (response.status === 409) {
          dispatch({
            type: "SHOW_TOAST",
            payload: {
              type: "ERROR",
              message: "You have already filled the form",
            },
          });
          return;
        }
        const errorData = await response.json();
        dispatch({
          type: "SHOW_TOAST",
          payload: {
            type: "ERROR",
            message: errorData.message || errorData.title,
          },
        });
      }
    } catch (error) {
      dispatch({
        type: "SHOW_TOAST",
        payload: {
          type: "ERROR",
          message: error.message || "Unexpected error happend",
        },
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center py-5 w-full px-3">
        <div className="lg:flex h-screen items-center hidden">
          <img
            src={require("../assets/Meditation.png")}
            height={300}
            alt="meditaion "
            className="fixed object-cover w-[380px] h-[350px]"
          />
        </div>
        <div className="lg:ml-[42vw]">
          <form
            className={`mt-5 px-5 border rounded-3xl drop-shadow-lg ${
              state.Theme.Theme === "light"
                ? "bg-white border-gray-300"
                : "border-stone-700 bg-stone-900"
            }`}
            onSubmit={handleSubmit}
          >
            <div>
              <h1 className="font-bold text-xl pt-8 px-4">
                Morning Program Attendance
              </h1>
              <p className="px-4 text-gray-500 ">
                Select one values each as we are tracking the family Details
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full mt-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-semibold ">Select Name</label>
                <MenuIconAndDropDown
                  DataArr={dataArr}
                  setSelected={(value) => setSelectedCounselor(value)}
                />
              </div>
              <div className="flex flex-col gap-2 w-full mt-5">
                <label className="font-semibold ">Select Location</label>
                <MenuIconAndDropDown
                  position={"up"}
                  DataArr={[
                    { name: "NVCC_TEMPLE" },
                    { name: "HINJEWADI_CENTER" },
                    { name: "MAYAPUR_TEMPLE" },
                    { name: "CAMP_TEMPLE" },
                  ]}
                  defaultVal={"NVCC Temple"}
                  setSelected={(value) => {
                    setFormData((prev) => ({
                      ...prev,
                      location: value.name,
                    }));
                  }}
                />
              </div>
            </div>
            <div>
              <h1 className="my-5 font-bold text-lg">
                You can select multiple sevas
              </h1>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 ">
                {sevas?.map((item, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <input
                      type="checkbox"
                      id={item}
                      value={item}
                      className="h-5 w-5"
                      name={item}
                      onChange={handleChange}
                    />
                    <label htmlFor={item} className="font-semibold text-lg">
                      {item}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center w-full ">
              <button
                disabled={Object.keys(SelectedCounselor).length === 0}
                className={`px-4 py-1.5 text-lg rounded-xl border my-5 w-full ${
                  state.Theme.Theme === "light"
                    ? `${
                        Object.keys(SelectedCounselor).length === 0
                          ? "border-blue-300 bg-blue-300 text-blue-200"
                          : "border-blue-800 bg-blue-500 text-white"
                      }`
                    : `${
                        Object.keys(SelectedCounselor).length === 0
                          ? "border-stone-900 bg-blue-950 text-stone-800"
                          : "border-stone-700 bg-blue-900"
                      }`
                } `}
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Seva;

function MenuIconAndDropDown({ setSelected, DataArr, defaultVal, position }) {
  const [isSelectionOpen, toggleSelection] = useState(false);
  const { state } = useMyContext();
  const menuRef = useRef();
  const [selectedOption, setSelectedOption] = useState("");
  const [modalStyle, setModalStyle] = useState({
    transform: "scale(0.95)",
    opacity: 0,
  });
  useEffect(() => {
    if (defaultVal) {
      setSelectedOption(defaultVal);
    }
  }, [defaultVal]);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isSelectionOpen) {
      // Open modal animation
      setTimeout(() => {
        setModalStyle({
          transform: "scale(1)",
          opacity: 1,
        });
      }, 50); // Delay the transition slightly for better visual effect
    } else {
      // Close modal animation
      setModalStyle({
        transform: "scale(0.95)",
        opacity: 0,
      });
      setTimeout(() => {
        setIsClosing(false);
      }, 3000); // Adjust this duration according to your transition duration
    }
  }, [isSelectionOpen]);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    toggleSelection(false);
  }, [toggleSelection]);

  // Attach click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSelection, closeModal]);
  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        type="button"
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-700 bg-stone-900"
        }`}
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
        onClick={() => toggleSelection(!isSelectionOpen)}
      >
        {selectedOption === "" ? "Select" : selectedOption}
        <MdKeyboardArrowDown />
      </button>
      {isSelectionOpen && (
        <div
          className={`origin-top-left absolute ${
            position === "up" ? "bottom-0 mb-12" : "mt-2 right-0"
          } w-full rounded-lg shadow-lg z-[1000] ${
            state.Theme.Theme === "light"
              ? "bg-white border-gray-300"
              : "bg-stone-900 border border-stone-700"
          } ring-1 ring-black ring-opacity-5 focus:outline-none py-1 px-1`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          style={{
            ...modalStyle,
            transition: "transform 0.2s ease-out, opacity 0.2s ease-out",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col gap-3" role="none">
            {DataArr?.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedOption(item.name);
                  setSelected(item);
                  toggleSelection(false);
                }}
                className={`px-2 py-1.5 rounded-lg ${
                  item.name === selectedOption && "bg-blue-300"
                } ${
                  state.Theme.Theme === "light"
                    ? "hover:bg-gray-100 "
                    : "hover:bg-stone-700"
                }`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
