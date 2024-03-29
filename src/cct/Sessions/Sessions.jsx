import React, { useEffect, useRef, useState } from "react";
import { useMyContext } from "../../store/context";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";

import { MdKeyboardArrowDown } from "react-icons/md";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { RxCross1 } from "react-icons/rx";
import Modal from "../../App/components/Modal";
import AttendanceLink from "./AttendanceLink";

const sessionsCCT = [
  {
    id: 1,
    scheduledSessionName: "Session 1",
    sessionName: "Introduction to Counseling",
    description: "An introductory session to the field of counseling.",

    durationInMinutes: 60,
    totalAttendance: 30,
    status: "ONLINE",
    expired: true,
  },
  {
    id: 2,
    scheduledSessionName: "Session 2",
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    description: "Exploring the principles and techniques of CBT.",

    durationInMinutes: 90,
    totalAttendance: 30,
    status: "OFFLINE",
    expired: true,
  },
  {
    id: 3,
    scheduledSessionName: "Session 3",
    sessionName: "Group Therapy",
    description: "Understanding the dynamics and benefits of group therapy.",

    durationInMinutes: 120,
    totalAttendance: 30,
    status: "OFFLINE",
    expired: true,
  },
  {
    id: 4,
    scheduledSessionName: "Session 4",
    sessionName: "Art Therapy",
    description:
      "Using artistic methods to explore emotions and improve well-being.",

    durationInMinutes: 75,
    totalAttendance: 30,
    status: "ONLINE",
    expired: true,
  },
  {
    id: 5,
    scheduledSessionName: "Session 5",
    sessionName: "Family Counseling",
    description:
      "Addressing family issues and improving communication within families.",

    durationInMinutes: 90,
    totalAttendance: 30,
    status: "OFFLINE",
    expired: true,
  },
  {
    id: 6,
    scheduledSessionName: "Session 6",
    sessionName: "Mindfulness Meditation",
    description:
      "Practicing mindfulness techniques for stress reduction and relaxation.",

    durationInMinutes: 60,
    totalAttendance: 30,
    status: "ONLINE",
    expired: false,
  },
];

function SessionsCCT() {
  const { state } = useMyContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">CBM Sessions</h1>
        <div>
          <button
            className={`flex items-center md:px-5 px-3 py-1.5 md:gap-5 gap-3 ${
              state.Theme.Theme === "light"
                ? "border-2 border-blue-300 rounded-xl shadow-md active:shadow-sm"
                : "bg-stone-800 border border-stone-700 rounded-xl transition-all duration-300 active:scale-95"
            }`}
            onClick={() => setIsOpen(true)}
          >
            <FiPlus />
            CBM Sessions
          </button>
        </div>
      </div>
      <div
        className={` overflow-x-auto my-10 w-[90vw] border rounded-lg ${
          state.Theme.Theme === "light"
            ? "border-stone-200"
            : "border-stone-800"
        }`}
      >
        <table>
          <thead>
            <tr
              className={
                state.Theme.Theme === "light"
                  ? "border-b bg-gray-100 "
                  : "border-b border-b-stone-800 bg-stone-900"
              }
            >
              <th className="text-xs text-gray-500 py-3">SESSION NAME</th>
              <th className="text-xs text-gray-500 py-3">DESCRIPTION</th>
              <th className="text-xs text-gray-500 py-3">STATUS</th>
              <th className="text-xs text-gray-500 py-3">
                DURATION IN MINUTES
              </th>
              <th className="text-xs text-gray-500 py-3">TOTAL ATTENDANCE</th>

              <th className="text-xs text-gray-500 py-3">DELETE</th>
              <th className="text-xs text-gray-500 py-3">RSVP LINKS</th>
              <th className="text-xs text-gray-500 py-3">ATTENDANCE LINKS</th>
            </tr>
          </thead>
          <tbody>
            {sessionsCCT?.map((session, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.sessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.description}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  <div>
                    {session.status === "ONLINE" ? (
                      <p className="text-yellow-500">ONLINE</p>
                    ) : (
                      <p className="text-green-500">OFFLINE</p>
                    )}
                  </div>
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.durationInMinutes}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.totalAttendance}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  <div className="flex items-center gap-10 px-3">
                    <button className="hover:animate-bounce hover:text-red-500 text-red-400">
                      <FiTrash size={20} />
                    </button>
                  </div>
                </td>
                <td>
                  {session.expired ? (
                    <div className="text-gray-400 text-center text-xl">
                      expired
                    </div>
                  ) : (
                    <div>
                      <AttendanceLink
                        disabled={session.sessionId}
                        TYPE={"rsvp"}
                      />
                    </div>
                  )}
                </td>
                <td>
                  {session.expired ? (
                    <div className="text-gray-400 text-center text-xl">
                      expired
                    </div>
                  ) : (
                    <div>
                      <AttendanceLink
                        disabled={session.sessionId}
                        TYPE={"attendance"}
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <CreateSession isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default SessionsCCT;

function CreateSession({ isOpen, onClose }) {
  const { state } = useMyContext();

  const [FIRSTNAME, setFirstName] = useState("");
  const [LASTNAME, setLastName] = useState("");
  const [GENDER, setGender] = useState("");
  const [DOB, setDob] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <button
        className={`absolute md:right-10 right-5 flex items-center gap-2 border top-5 p-2 rounded-xl ${
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
        className={`flex items-center justify-center lg:gap-5 ${
          state.Theme.Theme === "light"
            ? "bg-white border-gray-300"
            : "bg-stone-900"
        } min-h-screen w-screen`}
      >
        <div className="lg:block hidden">
          <img
            src={require("../../assets/counselle.png")}
            height={400}
            className="h-[400px]"
            alt="addcounsellee"
          />
        </div>
        <div
          className={`rounded-3xl items-center md:p-5 p-3 ${
            state.Theme.Theme === "light" ? "bg-white" : "bg-stone-800"
          }`}
        >
          <div className="lg:w-[500px] w-[90vw]">
            <p className="text-center pb-5 font-bold text-red-400 text-xl">
              CBM SESSIONS
            </p>
            <form action="" className="PX-5 flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="font-semibold" htmlFor="firstName">
                  SESSION NAME
                </label>
                <input
                  type="text"
                  name="sessionName"
                  className={`px-4 py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="session name"
                  value={FIRSTNAME}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-semibold" htmlFor="lastName">
                  DESCRIPTION
                </label>
                <textarea
                  name="description"
                  className={`px-4 py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="Doe"
                  value={LASTNAME}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <label className="font-semibold" htmlFor="contactNumber">
                    SCHEDULE DATE
                  </label>
                  <ReactDatePicker
                    onChange={setDob}
                    value={DOB}
                    className={`px-4 py-1.5 text-lg border rounded-xl ${
                      state.Theme.Theme === "light"
                        ? "bg-white border-gray-300"
                        : "bg-stone-900 border-stone-700"
                    }`}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold">MODE OF ATTENDANCE</p>
                <div className="flex items-center gap-5">
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <label className="font-semibold" htmlFor="contactNumber">
                      OFFLINE
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" />
                    <label className="font-semibold" htmlFor="contactNumber">
                      ONLINE
                    </label>
                  </div>
                </div>
              </div>
              <button
                className={`flex items-center w-full justify-center font-semibold border my-5 rounded-xl py-2 ${
                  state.Theme.Theme === "light"
                    ? "border-blue-800 bg-blue-500 text-white"
                    : "border-stone-700 bg-blue-900"
                }`}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function MenuIconAndDropDown({ setSelected }) {
  const [isSelectionOpen, toggleSelection] = useState(false);
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
            {sessionsCCT?.map((session, index) => (
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
