import React, { useState } from "react";

import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { useMyContext } from "../../store/context";
import contentActivities from "./Data";

function Activities() {
  const { state } = useMyContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">activitys</h1>
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
    </div>
  );
}

export default Activities;
