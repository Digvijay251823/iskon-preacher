import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useMyContext } from "../../store/context";
import Modal from "../components/Modal";
import ConfigureSadhanaForm from "./SadhanaForm/ConfigureSadhana";
import { FiPlus } from "react-icons/fi";
import contentActivities from "../Activities/Data";

const sessionsCCT = [
  {
    id: 1,
    scheduledSessionName: "Session 1",
    sessionName: "Introduction to Counseling",
    description: "An introductory session to the field of counseling.",
    createdBy: "John Doe",
    durationInMinutes: 60,
    totalAttendance: 30,
    status: "ONLINE",
  },
  {
    id: 2,
    scheduledSessionName: "Session 2",
    sessionName: "Cognitive Behavioral Therapy (CBT)",
    description: "Exploring the principles and techniques of CBT.",
    createdBy: "Jane Smith",
    durationInMinutes: 90,
    totalAttendance: 30,
    status: "OFFLINE",
  },
  {
    id: 3,
    scheduledSessionName: "Session 3",
    sessionName: "Group Therapy",
    description: "Understanding the dynamics and benefits of group therapy.",
    createdBy: "Alice Johnson",
    durationInMinutes: 120,
    totalAttendance: 30,
    status: "OFFLINE",
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
    status: "ONLINE",
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
    status: "OFFLINE",
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
    status: "ONLINE",
  },
];

function Sadhana() {
  const { pathname } = useLocation();
  const { state } = useMyContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Sadhana</h1>
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
            Configure Form
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
                PARTICIPANT FIRST NAME
              </th>
              <th className="text-xs text-gray-500 py-3">
                PARTICIPANT LAST NAME
              </th>
              <th className="text-xs text-gray-500 py-3">
                PARTICIPANT CONTACT NUMBER
              </th>
              <th className="text-xs text-gray-500 py-3">
                PARTICIPANT WHATSAPP NUMBER
              </th>
              <th className="text-xs text-gray-500 py-3">
                EARLY JAPA ROUNDS BEFORE 8 AM{" "}
              </th>
              <th className="text-xs text-gray-500 py-3">
                EARLY JAPA ROUNDS AFTER 8 AM
              </th>
              <th className="text-xs text-gray-500 py-3">
                FIRST 8 ROUNDS COMPLETED
              </th>
              <th className="text-xs text-gray-500 py-3">
                NEXT 8 ROUNDS COMPLETED TIME
              </th>
              <th className="text-xs text-gray-500 py-3">NUMBER OF ROUNDS</th>
              <th className="text-xs text-gray-500 py-3">
                OTHER CLASS HEARING
              </th>
              <th className="text-xs text-gray-500 py-3">
                PRABHUPADA CLASS HEARING
              </th>
              <th className="text-xs text-gray-500 py-3">
                PRABHU PADA BOOK READING
              </th>
              <th className="text-xs text-gray-500 py-3">
                NON PRABHUPADA BOOK READING
              </th>
            </tr>
          </thead>
          <tbody>
            {contentActivities?.map((activity, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.participantFirstName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.participantLastName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.participantContactNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.earlyJapaRoundsAfter8AM}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.earlyJapaRoundsAfter8AM}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.first8RoundsCompletedTime}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.next8RoundsCompletedTime}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.numberOfRounds}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.otherClassHearing}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.prabhupadaClassHearing}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.prabhupadaBookReading}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.nonPrabhupadaBookReading}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ConfigureSadhana isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

const ConfigureSadhana = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ConfigureSadhanaForm onClose={onClose} />
    </Modal>
  );
};

export default Sadhana;
