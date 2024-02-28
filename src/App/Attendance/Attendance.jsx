import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useMyContext } from "../../store/context";
import ToggleStatus from "./ToggleStatus";

const attendance = [
  {
    sessionName: "Introduction to Counseling",
    scheduledSessionName: "Session 1",
    description: "An introductory session to the field of counseling.",
    firstName: "John",
    lastName: "Doe",
    contactNumber: "123-456-7890",
    status: "approved",
    date: "2024-03-01",
  },
  {
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    scheduledSessionName: "Session 2",
    description: "Exploring the principles and techniques of CBT.",
    firstName: "Jane",
    lastName: "Smith",
    contactNumber: "987-654-3210",
    status: "pending",
    date: "2024-03-02",
  },
  {
    sessionName: "Group Therapy",
    scheduledSessionName: "Session 3",
    description: "Understanding the dynamics and benefits of group therapy.",
    firstName: "Alice",
    lastName: "Johnson",
    contactNumber: "456-789-0123",
    status: "approved",
    date: "2024-03-03",
  },
  {
    sessionName: "Art Therapy",
    scheduledSessionName: "Session 4",
    description:
      "Using artistic methods to explore emotions and improve well-being.",
    firstName: "Michael",
    lastName: "Brown",
    contactNumber: "789-012-3456",
    status: "pending",
    date: "2024-03-04",
  },
  {
    sessionName: "Family Counseling",
    scheduledSessionName: "Session 5",
    description:
      "Addressing family issues and improving communication within families.",
    firstName: "Sarah",
    lastName: "Adams",
    contactNumber: "234-567-8901",
    status: "approved",
    date: "2024-03-05",
  },
  {
    sessionName: "Mindfulness Meditation",
    scheduledSessionName: "Session 6",
    description:
      "Practicing mindfulness techniques for stress reduction and relaxation.",
    firstName: "David",
    lastName: "Wilson",
    contactNumber: "567-890-1234",
    status: "approved",
    date: "2024-03-06",
  },
  {
    sessionName: "Introduction to Counseling",
    scheduledSessionName: "Session 1",
    description: "An introductory session to the field of counseling.",
    firstName: "Emily",
    lastName: "Jones",
    contactNumber: "345-678-9012",
    status: "pending",
    date: "2024-03-01",
  },
  {
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    scheduledSessionName: "Session 2",
    description: "Exploring the principles and techniques of CBT.",
    firstName: "Chris",
    lastName: "Lee",
    contactNumber: "901-234-5678",
    status: "approved",
    date: "2024-03-02",
  },
  {
    sessionName: "Group Therapy",
    scheduledSessionName: "Session 3",
    description: "Understanding the dynamics and benefits of group therapy.",
    firstName: "Olivia",
    lastName: "Garcia",
    contactNumber: "678-901-2345",
    status: "pending",
    date: "2024-03-03",
  },
  {
    sessionName: "Art Therapy",
    scheduledSessionName: "Session 4",
    description:
      "Using artistic methods to explore emotions and improve well-being.",
    firstName: "Daniel",
    lastName: "Martinez",
    contactNumber: "123-456-7890",
    status: "approved",
    date: "2024-03-04",
  },
];

function Attendance() {
  const { state } = useMyContext();
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Attendance</h1>
      </div>
      <div
        className={`border mt-4 px-4 py-2 rounded-xl ${
          state.Theme.Theme === "light" ? "border-gray-300" : "border-stone-700"
        }`}
      >
        Pending <i className="text-red-500">10</i>
      </div>
      <div
        className={` overflow-x-auto my-6 w-[90vw] border rounded-lg ${
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
              <th className="text-xs text-gray-500 py-3">STATUS</th>
              <th className="text-xs text-gray-500 py-3">FIRST NAME</th>
              <th className="text-xs text-gray-500 py-3">LAST NAME</th>
              <th className="text-xs text-gray-500 py-3">CONTACT NUMBER</th>
              <th className="text-xs text-gray-500 py-3">
                SCHEDULED SESSION NAME
              </th>
              <th className="text-xs text-gray-500 py-3">SESSION NAME</th>
              <th className="text-xs text-gray-500 py-3">DESCRIPTION</th>

              <th className="text-xs text-gray-500 py-3">DATE</th>
            </tr>
          </thead>
          <tbody>
            {attendance?.map((attendance, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  <ToggleStatus status={attendance.status} />
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendance.firstName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendance.lastName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendance.contactNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendance.scheduledSessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendance.sessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendance.description}
                </td>

                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendance.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
