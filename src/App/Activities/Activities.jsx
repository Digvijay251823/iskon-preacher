import React, { useState } from "react";

import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { useMyContext } from "../../store/context";
import contentActivities from "./Data";
import { activityData } from "./AcitivitiesData";
import DateDisplay from "../components/FormatDate";

function Activities() {
  const { state } = useMyContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Activities</h1>
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
              <th className="text-xs text-gray-500 py-3">ACTIVITIY TYPE</th>
              <th className="text-xs text-gray-500 py-3">
                ACTIVITY DESCRIPTION
              </th>
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
                SCHEDULED SESSION NAME
              </th>
              <th className="text-xs text-gray-500 py-3">SESSION NAME</th>
              <th className="text-xs text-gray-500 py-3">RSVP</th>
              <th className="text-xs text-gray-500 py-3">ACTIVITY DATE</th>
            </tr>
          </thead>
          <tbody>
            {activityData?.map((activity, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.activityName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.activityDescription ? (
                    activity.activityDescription
                  ) : (
                    <p className="text-gray-400">empty</p>
                  )}
                </td>
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
                  {activity.participantWaNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.scheduledSessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.sessionName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.rsvp ? (
                    <p>{activity.rsvp}</p>
                  ) : (
                    <p className="text-gray-400">empty</p>
                  )}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {activity.activityName === "Attendance" ? (
                    <>{activity.activityDate}</>
                  ) : (
                    <DateDisplay dateString={activity.activityDate} />
                  )}
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
