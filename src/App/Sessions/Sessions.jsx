import React from "react";
import { useMyContext } from "../../store/context";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";

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

function Sessions() {
  const { state } = useMyContext();
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Sessions</h1>
        <div>
          <button
            className={`flex items-center md:px-5 px-3 py-1.5 md:gap-5 gap-3 ${
              state.Theme.Theme === "light"
                ? "border-2 border-blue-300 rounded-xl shadow-md active:shadow-sm"
                : "bg-stone-800 border border-stone-700 rounded-xl transition-all duration-300 active:scale-95"
            }`}
          >
            <FiPlus />
            Sessions
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
              <th className="text-xs text-gray-500 py-3">
                SCHEDULED SESSION NAME
              </th>
              <th className="text-xs text-gray-500 py-3">SESSION NAME</th>
              <th className="text-xs text-gray-500 py-3">DESCRIPTION</th>
              <th className="text-xs text-gray-500 py-3">
                DURATION IN MINUTES
              </th>
              <th className="text-xs text-gray-500 py-3">TOTAL ATTENDANCE</th>
              <th className="text-xs text-gray-500 py-3">CREATED BY</th>
              <th className="text-xs text-gray-500 py-3">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {sessions?.map((session, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.scheduledSessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.sessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.description}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.durationInMinutes}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.totalAttendance}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {session.createdBy}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  <div className="flex items-center gap-10 px-3">
                    <button className="hover:animate-bounce hover:text-red-500">
                      <FiTrash size={20} />
                    </button>
                    <button>
                      <FiEdit size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sessions;
