import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useMyContext } from "../../store/context";
import Modal from "../../App/components/Modal";
import { RxCross1 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateDisplay from "../../App/components/FormatDate";

const counselersData = [
  {
    initiatedName: "Krishna Das	",
    contactNumber: 1112223333,
    gender: "Male",
    age: 28,
    counseleesCount: 34,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "80%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "80%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Nityananda Das	",
    contactNumber: 4445556666,
    gender: "Male",
    age: 35,
    counseleesCount: 67,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "66%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "66%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Balram Das	",
    contactNumber: 7778889999,
    gender: "Male",
    age: 42,
    counseleesCount: 45,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "74%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "74%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Gaurangi DD	",
    contactNumber: 1112223333,
    gender: "Female",
    age: 30,
    counseleesCount: 23,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "83%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "83%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Radha DD	",
    contactNumber: 4445556666,
    gender: "Female",
    age: 25,
    counseleesCount: 78,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "100%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "100%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Ram Das	",
    contactNumber: 7778889999,
    gender: "Male",
    age: 40,
    counseleesCount: 23,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "45%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "45%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Krishna Sakhi DD	",
    contactNumber: 1112223333,
    gender: "Female",
    age: 33,
    counseleesCount: 23,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "74%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "74%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Prem Bhakta Das	",
    contactNumber: 4445556666,
    gender: "Male",
    age: 38,
    counseleesCount: 56,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "77%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "77%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Vaishnavi DD	",
    contactNumber: 7778889999,
    gender: "Female",
    age: 27,
    counseleesCount: 67,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "63%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "63%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
  {
    initiatedName: "Gaur Bhakta Das	",
    contactNumber: 1112223333,
    gender: "Male",
    age: 32,
    counseleesCount: 45,
    CBMAttendancecount6Months: 30,
    CBMAttendancePercent6Months: "88%",
    CBMAttendanceCount2Months: 30,
    CBMAttendancePercent2Months: "88%",
    templeMorningProgramLastSixMonths: 70,
    templeMorningProgramLastTwoMonths: 30,
    counseleeMeetingCountLast6Months: 30,
    counseleeMeetingCountLast2Months: 10,
    CounseleeMeetingOfflineAttendanceMax: 70,
    CounseleeMeetingOfflineAttendanceMin: 30,
    CounseleeMeetingOfflineAttendanceAvg: 70,
    CounseleeMeetingOnilneAttendanceMax: 30,
    CounseleeMeetingOnlineAttendanceMin: 70,
    CounseleeMeetingOnlineAttendanceAvg: 30,
    lastCounseleeMeetingDate: "12-03-2024",
  },
];

function CounselersCCT() {
  const { state } = useMyContext();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col whitespace-nowrap items-center">
      <div className="flex items-center w-full lg:px-10 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Counselers</h1>
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
            Counselee
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
        <div className="flex w-[200px]">
          <table>
            <thead className="">
              <tr
                className={`h-[119px] ${
                  state.Theme.Theme === "light"
                    ? "border-b-2 border-gray-400 bg-gray-100 "
                    : "border-b-2 border-b-stone-600 bg-stone-900"
                }`}
              >
                <th className="text-xs text-gray-500 py-3 px-4">
                  INITIATED NAME
                </th>
                <th className="text-xs text-gray-500 py-3 px-4">
                  CONTACT NUMBER
                </th>
                <th className="text-xs text-gray-500 py-3 px-4">GENDER</th>
                <th className="text-xs text-gray-500 py-3 px-4">AGE</th>
                <th
                  className={`text-xs text-gray-500 py-3 whitespace-break-spaces ${
                    state.Theme.Theme === "light"
                      ? "border-r border-l border-gray-200 bg-yellow-200"
                      : "border-r border-l border-stone-800 bg-yellow-950"
                  }`}
                >
                  COUNSELEES COUNT
                </th>
              </tr>
            </thead>
            <tbody>
              {counselersData?.map((counselor, index) => (
                <tr
                  key={index}
                  className={
                    state.Theme.Theme === "light"
                      ? "border-b"
                      : "border-b border-stone-800"
                  }
                >
                  <td className=" whitespace-nowrap text-center py-2 px-4">
                    {counselor.initiatedName}
                  </td>
                  <td className=" whitespace-nowrap text-center py-2 px-4">
                    {counselor.contactNumber}
                  </td>
                  <td className=" whitespace-nowrap text-center py-2 px-4">
                    {counselor.gender}
                  </td>
                  <td className=" whitespace-nowrap text-center py-2 px-4">
                    {counselor.age}
                  </td>
                  <td
                    className={`whitespace-nowrap text-center py-2 ${
                      state.Theme.Theme === "light"
                        ? "bg-yellow-200"
                        : "bg-yellow-950"
                    }`}
                  >
                    {counselor.counseleesCount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div
            className={`flex flex-col items-center ${
              state.Theme.Theme === "light" ? "bg-pink-200" : "bg-pink-950"
            }`}
          >
            <h1
              className={`h-[60px] w-full text-center text-gray-500 py-2 font-bold text-xs ${
                state.Theme.Theme === "light"
                  ? "border-b bg-pink-200 "
                  : "border-b border-b-stone-800 bg-pink-950 "
              }`}
            >
              CBM Attended
            </h1>
            <table>
              <thead>
                <tr
                  className={`h-[59px] ${
                    state.Theme.Theme === "light"
                      ? "border-b-2 border-b-gray-400 bg-pink-200 "
                      : "border-b-2 border-b-stone-600 bg-pink-950"
                  }`}
                >
                  <th
                    className={`text-xs text-gray-500 py-3 whitespace-break-spaces`}
                  >
                    COUNT (6M)
                  </th>
                  <th className="text-xs text-gray-500 py-3 ">%(6M)</th>
                  <th
                    className={`text-xs text-gray-500 py-3 whitespace-break-spaces`}
                  >
                    COUNT (2M)
                  </th>
                  <th className="text-xs text-gray-500 py-3 px-4">%(2M)</th>
                </tr>
              </thead>
              <tbody>
                {counselersData?.map((counselor, index) => (
                  <tr
                    key={index}
                    className={
                      state.Theme.Theme === "light"
                        ? "border-b"
                        : "border-b border-stone-800"
                    }
                  >
                    <td className=" whitespace-nowrap text-center py-2 px-4">
                      {counselor.CBMAttendancecount6Months}
                    </td>
                    <td className=" whitespace-nowrap text-center py-2 px-4">
                      {counselor.CBMAttendancePercent6Months}
                    </td>
                    <td className=" whitespace-nowrap text-center py-2 px-4">
                      {counselor.CBMAttendanceCount2Months}
                    </td>
                    <td className=" whitespace-nowrap text-center py-2 px-4">
                      {counselor.CBMAttendancePercent2Months}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className={`flex flex-col items-center ${
              state.Theme.Theme === "light" ? "bg-pink-200" : "bg-pink-950"
            }`}
          >
            <h1
              className={`h-[60px] w-full text-center text-gray-500 py-2 font-bold text-xs  ${
                state.Theme.Theme === "light"
                  ? "border-b bg-purple-200 "
                  : "border-b border-b-stone-800 bg-purple-950 "
              }`}
            >
              TEMPLE MORNING PROGRAM
            </h1>
            <table>
              <thead>
                <tr
                  className={`h-[59px] ${
                    state.Theme.Theme === "light"
                      ? "border-b-2 border-b-gray-400 bg-purple-200 "
                      : "border-b-2 border-b-stone-600 bg-purple-950 "
                  }`}
                >
                  <th
                    className={`text-xs text-gray-500 py-3 whitespace-break-spaces`}
                  >
                    LAST (6M)
                  </th>
                  <th
                    className={`text-xs text-gray-500 py-3 whitespace-break-spaces`}
                  >
                    LAST (2M)
                  </th>
                </tr>
              </thead>
              <tbody>
                {counselersData?.map((counselor, index) => (
                  <tr
                    key={index}
                    className={` ${
                      state.Theme.Theme === "light"
                        ? "border-b bg-purple-200 "
                        : "border-b border-b-stone-800 bg-purple-950 "
                    }`}
                  >
                    <td className=" whitespace-nowrap text-center py-2 px-4">
                      {counselor.counseleesCount}
                    </td>
                    <td className=" whitespace-nowrap text-center py-2 px-4">
                      {counselor.contactNumber}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div
            className={`flex flex-col items-center ${
              state.Theme.Theme === "light" ? "bg-blue-200" : "bg-blue-950"
            }`}
          >
            <h1
              className={`h-[45px] w-full text-center text-gray-500 py-2 font-bold text-xs  ${
                state.Theme.Theme === "light"
                  ? "border-b bg-cyan-100 "
                  : "border-b border-b-stone-800 bg-cyan-950 "
              }`}
            >
              COUNSELEE MEETING
            </h1>
            <div className="flex">
              <table>
                <thead>
                  <tr
                    className={`h-[74px] border-r ${
                      state.Theme.Theme === "light"
                        ? "border-b-2 border-b-gray-400 border-r border-r-gray-200 bg-cyan-100 "
                        : "border-b-2 border-r border-b-stone-600 bg-cyan-950 border-r-stone-600"
                    }`}
                  >
                    <th
                      className={`text-xs text-gray-500 py-3 whitespace-break-spaces border-r ${
                        state.Theme.Theme === "light"
                          ? "border-r-gray-200"
                          : "border-r-stone-700"
                      }`}
                    >
                      COUNT (6M)
                    </th>
                    <th
                      className={`text-xs text-gray-500 py-3 whitespace-break-spaces`}
                    >
                      COUNT 2M
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {counselersData?.map((counselor, index) => (
                    <tr
                      key={index}
                      className={
                        state.Theme.Theme === "light"
                          ? "border-b border-r bg-cyan-100 border-r-gray-200"
                          : "border-b border-r border-b-stone-800 bg-cyan-950 border-r-stone-700"
                      }
                    >
                      <td
                        className={`whitespace-nowrap text-center py-2 px-4 border-r ${
                          state.Theme.Theme === "light"
                            ? "border-r-gray-200"
                            : "border-r-stone-700"
                        }`}
                      >
                        {counselor.counseleesCount}
                      </td>
                      <td className=" whitespace-nowrap text-center py-2 px-4">
                        {counselor.contactNumber}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div>
                <h1
                  className={`text-center text-gray-500 py-2 font-bold text-xs border-r ${
                    state.Theme.Theme === "light"
                      ? "border-b bg-cyan-100 border-r-gray-200"
                      : "border-b border-b-stone-800 bg-cyan-950 border-r-gray-700"
                  }`}
                >
                  OFFLINE ATTENDANCE
                </h1>
                <table>
                  <thead>
                    <tr
                      className={
                        state.Theme.Theme === "light"
                          ? "border-b-2 border-b-gray-400 border-r bg-cyan-100 "
                          : "border-b-2 border-r border-b-stone-600 bg-cyan-950 "
                      }
                    >
                      <th
                        className={`text-xs text-gray-500 py-3 px-4 border-r ${
                          state.Theme.Theme === "light"
                            ? "border-r-gray-200"
                            : "border-r-stone-700"
                        }`}
                      >
                        MIN
                      </th>
                      <th
                        className={`text-xs text-gray-500 py-3 px-4 border-r ${
                          state.Theme.Theme === "light"
                            ? "border-r-gray-200"
                            : "border-r-stone-700"
                        }`}
                      >
                        MAX
                      </th>
                      <th
                        className={`text-xs text-gray-500 py-3 px-4 border-r ${
                          state.Theme.Theme === "light"
                            ? "border-r-gray-200"
                            : "border-r-stone-700"
                        }`}
                      >
                        AVG
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {counselersData?.map((counselor, index) => (
                      <tr
                        key={index}
                        className={
                          state.Theme.Theme === "light"
                            ? "border-b border-r bg-cyan-100 "
                            : "border-b border-r border-b-stone-800 bg-cyan-950 "
                        }
                      >
                        <td
                          className={`whitespace-nowrap text-center py-2 px-4 border-r ${
                            state.Theme.Theme === "light"
                              ? "border-r-gray-200"
                              : "border-r-stone-700"
                          }`}
                        >
                          {counselor.CounseleeMeetingOfflineAttendanceMin}
                        </td>
                        <td
                          className={`whitespace-nowrap text-center py-2 px-4 border-r ${
                            state.Theme.Theme === "light"
                              ? "border-r-gray-200"
                              : "border-r-stone-700"
                          }`}
                        >
                          {counselor.CounseleeMeetingOfflineAttendanceMax}
                        </td>
                        <td
                          className={`whitespace-nowrap text-center py-2 px-4 border-r ${
                            state.Theme.Theme === "light"
                              ? "border-r-gray-200"
                              : "border-r-stone-700"
                          }`}
                        >
                          {counselor.CounseleeMeetingOfflineAttendanceAvg}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <h1
                  className={`w-full text-center text-gray-500 py-2 font-bold text-xs border-r ${
                    state.Theme.Theme === "light"
                      ? "border-b bg-cyan-100 border-r-gray-200"
                      : "border-b border-b-stone-800 bg-cyan-950 border-r-gray-700"
                  }`}
                >
                  ONLINE ATTENDANCE
                </h1>
                <table>
                  <thead>
                    <tr
                      className={
                        state.Theme.Theme === "light"
                          ? "border-b-2 border-b-gray-400 border-r bg-cyan-100 "
                          : "border-b-2 border-r border-b-stone-600 bg-cyan-950 "
                      }
                    >
                      <th
                        className={`text-xs text-gray-500 py-3 px-4 border-r ${
                          state.Theme.Theme === "light"
                            ? "border-r-gray-200"
                            : "border-r-stone-700"
                        }`}
                      >
                        MIN
                      </th>
                      <th
                        className={`text-xs text-gray-500 py-3 px-4 border-r ${
                          state.Theme.Theme === "light"
                            ? "border-r-gray-200"
                            : "border-r-stone-700"
                        }`}
                      >
                        MAX
                      </th>
                      <th
                        className={`text-xs text-gray-500 py-3 px-4 border-r ${
                          state.Theme.Theme === "light"
                            ? "border-r-gray-200"
                            : "border-r-stone-700"
                        }`}
                      >
                        AVG
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {counselersData?.map((counselor, index) => (
                      <tr
                        key={index}
                        className={
                          state.Theme.Theme === "light"
                            ? "border-b bg-cyan-100 "
                            : "border-b border-b-stone-800 bg-cyan-950 "
                        }
                      >
                        <td
                          className={`whitespace-nowrap text-center py-2 px-4 border-r ${
                            state.Theme.Theme === "light"
                              ? "border-r-gray-200"
                              : "border-r-stone-700"
                          }`}
                        >
                          {counselor.CounseleeMeetingOnlineAttendanceMin}
                        </td>
                        <td
                          className={`whitespace-nowrap text-center py-2 px-4 border-r ${
                            state.Theme.Theme === "light"
                              ? "border-r-gray-200"
                              : "border-r-stone-700"
                          }`}
                        >
                          {counselor.CounseleeMeetingOnilneAttendanceMax}
                        </td>
                        <td
                          className={`whitespace-nowrap text-center py-2 px-4 border-r ${
                            state.Theme.Theme === "light"
                              ? "border-r-gray-200"
                              : "border-r-stone-700"
                          }`}
                        >
                          {counselor.CounseleeMeetingOnlineAttendanceAvg}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <table>
                <thead>
                  <tr
                    className={`h-[74px] ${
                      state.Theme.Theme === "light"
                        ? "border-b-2 border-b-gray-400 border-r bg-cyan-100 "
                        : "border-b-2 border-r border-b-stone-600 bg-cyan-950 border-r-stone-700"
                    }`}
                  >
                    <th
                      className={`text-xs text-gray-500 py-3 whitespace-break-spaces`}
                    >
                      LAST MEETING DATE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {counselersData?.map((counselor, index) => (
                    <tr
                      key={index}
                      className={
                        state.Theme.Theme === "light"
                          ? "border-b bg-cyan-100 "
                          : "border-b border-b-stone-800 bg-cyan-950 "
                      }
                    >
                      <td className=" whitespace-nowrap text-center py-2 px-4">
                        {counselor.lastCounseleeMeetingDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddCounselerCCT isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default CounselersCCT;

function AddCounselerCCT({ isOpen, onClose }) {
  const { state } = useMyContext();
  const [isOpenSelection, setIsOpenSelection] = useState(false);

  const [FIRSTNAME, setFirstName] = useState("");
  const [LASTNAME, setLastName] = useState("");
  const [WANUMBER, setWaNumber] = useState("");
  const [CONTACTNUMBER, setContactNumber] = useState("");
  const [GENDER, setGender] = useState("");
  const [DOB, setDob] = useState("");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <button
        className={`absolute right-10 flex items-center gap-2 border top-5 p-2 rounded-xl ${
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
            <form action="" className="flex flex-col whitespace-nowrap gap-3">
              <div className="flex flex-col whitespace-nowrap gap-1">
                <label htmlFor="firstName">FIRST NAME</label>
                <input
                  type="text"
                  name="firstName"
                  className={`py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="John"
                  value={FIRSTNAME}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col whitespace-nowrap gap-1">
                <label htmlFor="lastName">LAST NAME</label>
                <input
                  type="text"
                  name="lastName"
                  className={`py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="Doe"
                  value={LASTNAME}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex flex-col whitespace-nowrap gap-1">
                <label htmlFor="waNumber">WHATSAPP NUMBER</label>
                <input
                  type="tel"
                  name="waNumber"
                  className={`py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="7878909023"
                  value={WANUMBER}
                  onChange={(e) => setWaNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col whitespace-nowrap gap-1">
                <label htmlFor="contactNumber">CONTACT NUMBER</label>
                <input
                  type="tel"
                  name="contactNumber"
                  className={`py-1.5 text-lg border rounded-xl ${
                    state.Theme.Theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-stone-900 border-stone-700"
                  }`}
                  placeholder="7878909023"
                  value={CONTACTNUMBER}
                  onChange={(e) => setContactNumber(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="flex flex-col whitespace-nowrap gap-1">
                  <label htmlFor="contactNumber">GENDER</label>
                  <MenuIconAndDropDown
                    isSelectionOpen={isOpenSelection}
                    toggleSelection={(value) => setIsOpenSelection(value)}
                    setSelected={(value) => setGender(value)}
                  />
                </div>
                <div className="flex flex-col whitespace-nowrap gap-1">
                  <label htmlFor="contactNumber">DATE OF BIRTH</label>
                  <ReactDatePicker
                    onChange={(e) => setDob(e)}
                    value={DOB}
                    className={`py-1.5 text-lg border rounded-xl ${
                      state.Theme.Theme === "light"
                        ? "bg-white border-gray-300"
                        : "bg-stone-900 border-stone-700"
                    }`}
                    placeholderText="select date"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
}

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
        className={`flex items-center justify-between border px-2 py-2 rounded-xl gap-5 ${
          state.Theme.Theme === "light"
            ? "border-gray-300"
            : "border-stone-800 bg-stone-900"
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
          className={`origin-top-left absolute left-0 mt-2 w-full rounded-lg shadow-lg ${
            state.Theme.Theme === "light"
              ? "bg-white border-gray-300"
              : "bg-stone-900 border border-stone-800"
          } ring-1 ring-black ring-opacity-5 focus:outline-none py-1 px-1`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ul className="flex flex-col whitespace-nowrap gap-3" role="none">
            <li
              onClick={() => {
                setSelectedOption("Male");
                setSelected("MALE");
                toggleSelection(false);
              }}
              className={`px-2 py-1.5 rounded-lg ${
                state.Theme.Theme === "light"
                  ? "hover:bg-gray-100"
                  : "hover:bg-stone-700"
              }`}
            >
              Male
            </li>
            <li
              onClick={() => {
                setSelectedOption("Female");
                setSelected("FEMALE");
                toggleSelection(false);
              }}
              className={`px-2 py-1.5 rounded-lg ${
                state.Theme.Theme === "light"
                  ? "hover:bg-gray-100"
                  : "hover:bg-stone-700"
              }`}
            >
              Female
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
