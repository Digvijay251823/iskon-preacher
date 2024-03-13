import React from "react";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useMyContext } from "../../store/context";
import ToggleStatus from "./ToggleStatus";

const attendanceCCT = [
  {
    sessionName: "Introduction to Counseling",
    scheduledSessionName: "Session 1",
    description: "An introductory session to the field of counseling.",
    firstName: "John",
    lastName: "Doe",
    contactNumber: "123-456-7890",
    status: "ONLINE",
    rsvp: "YES",
    date: "2024-03-01",
  },
  {
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    scheduledSessionName: "Session 2",
    description: "Exploring the principles and techniques of CBT.",
    firstName: "Jane",
    lastName: "Smith",
    contactNumber: "987-654-3210",
    status: "OFFLINE",
    rsvp: "NO",
    date: "2024-03-02",
  },
  {
    sessionName: "Group Therapy",
    scheduledSessionName: "Session 3",
    description: "Understanding the dynamics and benefits of group therapy.",
    firstName: "Alice",
    lastName: "Johnson",
    contactNumber: "456-789-0123",
    status: "ONLINE",
    rsvp: "YES",
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
    status: "OFFLINE",
    rsvp: "NO",
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
    status: "ONLINE",
    rsvp: "YES",
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
    status: "ONLINE",
    rsvp: "YES",
    date: "2024-03-06",
  },
  {
    sessionName: "Introduction to Counseling",
    scheduledSessionName: "Session 1",
    description: "An introductory session to the field of counseling.",
    firstName: "Emily",
    lastName: "Jones",
    contactNumber: "345-678-9012",
    status: "OFFLINE",
    rsvp: "NO",
    date: "2024-03-01",
  },
  {
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    scheduledSessionName: "Session 2",
    description: "Exploring the principles and techniques of CBT.",
    firstName: "Chris",
    lastName: "Lee",
    contactNumber: "901-234-5678",
    status: "ONLINE",
    rsvp: "YES",
    date: "2024-03-02",
  },
  {
    sessionName: "Group Therapy",
    scheduledSessionName: "Session 3",
    description: "Understanding the dynamics and benefits of group therapy.",
    firstName: "Olivia",
    lastName: "Garcia",
    contactNumber: "678-901-2345",
    status: "OFFLINE",
    rsvp: "NO",
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
    status: "ONLINE",
    rsvp: "YES",
    date: "2024-03-04",
  },
];

function AttendanceCCT() {
  const { state } = useMyContext();
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">AttendanceCBM</h1>
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
              <th className="text-xs text-gray-500 py-3">RSVP</th>
              <th className="text-xs text-gray-500 py-3">NAME</th>

              <th className="text-xs text-gray-500 py-3">CONTACT NUMBER</th>

              <th className="text-xs text-gray-500 py-3">SESSION NAME</th>
              <th className="text-xs text-gray-500 py-3">DESCRIPTION</th>

              <th className="text-xs text-gray-500 py-3">DATE</th>
            </tr>
          </thead>
          <tbody>
            {attendanceCCT?.map((attendanceCCT, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendanceCCT.status === "ONLINE" ? (
                    <div className="text-yellow-500">ONLINE</div>
                  ) : (
                    <div className="text-green-500">OFFLINE</div>
                  )}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendanceCCT.rsvp}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {`${attendanceCCT.firstName}${attendanceCCT.lastName}`}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendanceCCT.contactNumber}
                </td>

                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendanceCCT.sessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendanceCCT.description}
                </td>

                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {attendanceCCT.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AttendanceCCT;
