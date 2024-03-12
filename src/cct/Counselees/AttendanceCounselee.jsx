import React, { useEffect, useRef, useState } from "react";
import { useMyContext } from "../../store/context";

import { MdKeyboardArrowDown } from "react-icons/md";
import { FiClock } from "react-icons/fi";

const sessions = [
  {
    id: 1,
    scheduledSessionName: "Session 1",
    sessionName: "Introduction to Counseling",
    description: "An introductory session to the field of counseling.",
    createdBy: "John Doe",
    durationInMinutes: 60,
    totalAttendance: 30,
  },
  {
    id: 2,
    scheduledSessionName: "Session 2",
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    description: "Exploring the principles and techniques of CBT.",
    createdBy: "Jane Smith",
    durationInMinutes: 90,
    totalAttendance: 30,
  },
  {
    id: 3,
    scheduledSessionName: "Session 3",
    sessionName: "Group Therapy",
    description: "Understanding the dynamics and benefits of group therapy.",
    createdBy: "Alice Johnson",
    durationInMinutes: 120,
    totalAttendance: 30,
  },
  {
    id: 4,
    scheduledSessionName: "Session 4",
    sessionName: "Art Therapy",
    description:
      "Using artistic methods to explore emotions and improve well-being.",
    createdBy: "Michael Brown",
    durationInMinutes: 75,
    totalAttendance: 30,
  },
  {
    id: 5,
    scheduledSessionName: "Session 5",
    sessionName: "Family Counseling",
    description:
      "Addressing family issues and improving communication within families.",
    createdBy: "Sarah Adams",
    durationInMinutes: 90,
    totalAttendance: 30,
  },
  {
    id: 6,
    scheduledSessionName: "Session 6",
    sessionName: "Mindfulness Meditation",
    description:
      "Practicing mindfulness techniques for stress reduction and relaxation.",
    createdBy: "David Wilson",
    durationInMinutes: 60,
    totalAttendance: 30,
  },
];

function AttendanceCounselee() {
  const { state } = useMyContext();
  const [isOpenSelection, setIsOpenSelection] = useState(false);

  const [FIRSTNAME, setFirstName] = useState("");
  const [LASTNAME, setLastName] = useState("");
  const [WANUMBER, setWaNumber] = useState("");
  const [CONTACTNUMBER, setContactNumber] = useState("");
  const [GENDER, setGender] = useState("");
  const [DOB, setDob] = useState("");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen overflow-x-hidden">
      <h1 className="font-semibold text-red-500 text-xl mb-10">Attendance</h1>

      <div className={`flex items-center justify-center lg:gap-5  w-screen`}>
        <div className="lg:block hidden">
          <img
            src={require("../../assets/sessionsSchedule.png")}
            height={400}
            className="h-[400px]"
            alt="addcounsellee"
          />
        </div>
        <div
          className={`rounded-3xl flex flex-col items-center md:p-5 p-3 ${
            state.Theme.Theme === "light" ? "bg-white" : "bg-stone-800"
          }`}
        >
          <div className="lg:w-[500px] w-[90vw]">
            <p className="font-semibold">YOUR PHONE NUMBER</p>
            <input
              type="text"
              className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 w-full ${
                state.Theme.Theme === "light"
                  ? "border-gray-300"
                  : "border-stone-700 bg-stone-900"
              }`}
              placeholder="7878909023"
            />
            <button
              className={`flex items-center w-full justify-center font-semibold border my-5 rounded-xl py-2 ${
                state.Theme.Theme === "light"
                  ? "border-blue-800 bg-blue-500 text-white"
                  : "border-stone-700 bg-blue-900"
              }`}
            >
              SEARCH NUMBER
            </button>
          </div>
          <div className="lg:w-[500px] w-[90vw]">
            <div className="mb-5">
              <div className="flex items-center gap-3 text-xl font-bold">
                <FiClock />
                <h1 className="">SELECT A SESSION</h1>
              </div>
              <p className="text-gray-400">
                select a session below that you want to mark your attendance of
              </p>
            </div>

            <form action="" className="PX-5 flex flex-col gap-3">
              <div className="flex flex-col gap-1 w-full">
                <p className="font-semibold"> * LATEST SESSION</p>
                <label
                  htmlFor="contactNumber"
                  className="flex items-center gap-3 font-semibold"
                >
                  <input type="radio" />
                  {sessions[0].sessionName}
                </label>
              </div>
              <div className="flex items-center text-gray-400 gap-5 justify-center">
                <div className="border w-[50px]"></div>
                <div>or</div>
                <div className="border w-[50px]"></div>
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label htmlFor="contactNumber" className="font-semibold">
                  PREVIOUS SESSIONS
                </label>
                <MenuIconAndDropDown
                  isSelectionOpen={isOpenSelection}
                  toggleSelection={(value) => setIsOpenSelection(value)}
                  setSelected={(value) => setGender(value)}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AttendanceCounselee;

function MenuIconAndDropDown({
  isSelectionOpen,
  toggleSelection,
  setSelected,
}) {
  const { state } = useMyContext();
  const menuRef = useRef();
  const [selectedOption, setSelectedOption] = useState("");

  // Attach click outside listener
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        toggleSelection(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleSelection]);
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
          className={`origin-top-left absolute left-0 mt-2 w-full rounded-lg shadow-lg z-[1000] ${
            state.Theme.Theme === "light"
              ? "bg-white border-gray-300"
              : "bg-stone-900 border border-stone-700"
          } ring-1 ring-black ring-opacity-5 focus:outline-none py-1 px-1`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul className="flex flex-col gap-3" role="none">
            {sessions?.map((session, index) => (
              <li
                key={index}
                onClick={() => {
                  setSelectedOption(session.sessionName);
                  setSelected(session.sessionName);
                  toggleSelection(false);
                }}
                className={`px-2 py-1.5 rounded-lg ${
                  state.Theme.Theme === "light"
                    ? "hover:bg-gray-100"
                    : "hover:bg-stone-700"
                }`}
              >
                {session.sessionName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
