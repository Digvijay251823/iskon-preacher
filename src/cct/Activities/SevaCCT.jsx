import React, { useState } from "react";
import Modal from "../../App/components/Modal";
import { useMyContext } from "../../store/context";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import DateDisplay from "../../App/components/FormatDate";

const content = [
  {
    id: 3,
    description: null,
    sevaType: "Monring Program",
    counselerId: 1,
    counselerFirstName: "Digvijay",
    counselerLastName: "Edake",
    counselerWaNumber: "7620535741",
    counselerContactNumber: "7620535741",
    counselerEmail: null,
    sevaId: 11,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "19-02-2024",
    created: 1708345813251,
    modified: 1708345813251,
  },
  {
    id: 4,
    description: null,

    sevaType: "Deity",
    counselerId: 1,
    counselerFirstName: "Digvijay",
    counselerLastName: "Edake",
    counselerWaNumber: "7620535741",
    counselerContactNumber: "7620535741",
    counselerEmail: null,
    sevaId: 12,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "2024-02-19T00:00:00.000Z",
    created: 1708356760362,
    modified: 1708356760362,
  },
  {
    id: 5,
    description: null,

    sevaType: "Deity",
    counselerId: 8,
    counselerFirstName: "Aradhana",
    counselerLastName: "Bandari",
    counselerWaNumber: "8407984140",
    counselerContactNumber: "8407984140",
    counselerEmail: null,
    sevaId: 11,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "20-02-2024",
    created: 1708431739564,
    modified: 1708431739564,
  },
  {
    id: 6,
    description: null,

    sevaType: "Deity",
    counselerId: 10,
    counselerFirstName: "Hrishikesh",
    counselerLastName: "Bandari",
    counselerWaNumber: "0234567899",
    counselerContactNumber: "0234567899",
    counselerEmail: null,
    sevaId: 11,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "20-02-2024",
    created: 1708432510823,
    modified: 1708432510823,
  },
  {
    id: 7,
    description: null,

    sevaType: "Monring Program",
    counselerId: 12,
    counselerFirstName: "Hrishikesh",
    counselerLastName: "Bandari",
    counselerWaNumber: "0987654321",
    counselerContactNumber: "0987654321",
    counselerEmail: null,
    sevaId: 11,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "21-02-2024",
    created: 1708516566173,
    modified: 1708516566173,
  },
  {
    id: 8,
    description: null,
    sevaType: "Monring Program",
    counselerId: 12,
    counselerFirstName: "Hrishikesh",
    counselerLastName: "Bandari",
    counselerWaNumber: "0987654321",
    counselerContactNumber: "0987654321",
    counselerEmail: null,
    sevaId: 2,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "2024-02-01T00:00:00.000Z",
    created: 1708516648059,
    modified: 1708516648059,
  },
  {
    id: 9,
    description: null,

    sevaType: "Monring Program",
    counselerId: 12,
    counselerFirstName: "Hrishikesh",
    counselerLastName: "Bandari",
    counselerWaNumber: "0987654321",
    counselerContactNumber: "0987654321",
    counselerEmail: null,
    sevaId: 2,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "2023-12-12T00:00:00.000Z",
    created: 1708516718966,
    modified: 1708516718966,
  },
  {
    id: 10,
    description: null,

    sevaType: "Monring Program",
    counselerId: 12,
    counselerFirstName: "Hrishikesh",
    counselerLastName: "Bandari",
    counselerWaNumber: "0987654321",
    counselerContactNumber: "0987654321",
    counselerEmail: null,
    sevaId: 2,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "2023-12-12T00:00:00.000Z",
    created: 1708516718966,
    modified: 1708516718966,
  },
  {
    id: 11,
    description: null,

    sevaType: "Kitchen Seva",
    counselerId: 1,
    counselerFirstName: "Digvijay",
    counselerLastName: "Edake",
    counselerWaNumber: "7620535741",
    counselerContactNumber: "7620535741",
    counselerEmail: null,
    sevaId: 14,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "26-02-2024",
    created: 1708941407884,
    modified: 1708941407884,
  },
  {
    id: 12,
    description: null,
    sevaType: "Kitchen Seva",
    counselerId: 14,
    counselerFirstName: "Gaitri",
    counselerLastName: "Allum",
    counselerWaNumber: "9967590341",
    counselerContactNumber: "9967590341",
    counselerEmail: null,
    sevaId: 11,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "26-02-2024",
    created: 1708953356634,
    modified: 1708953356634,
  },
  {
    id: 13,
    description: null,
    sevaType: "Kitchen Seva",
    levelStatus: "ACTIVE",
    counselerId: 14,
    counselerFirstName: "Gaitri",
    counselerLastName: "Allum",
    counselerWaNumber: "9967590341",
    counselerContactNumber: "9967590341",
    counselerEmail: null,
    sevaId: 11,
    sevaDescription: null,
    rsvp: null,
    sevaDate: "26-02-2024",
    created: 1708953865729,
    modified: 1708953865729,
  },
];

function SevaCCT() {
  const { state } = useMyContext();
  const [isOpen, setIsOpen] = useState(false);
  const [SevaCCTArr, setSevaCCTArr] = useState([]);
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Seva</h1>
      </div>
      <div
        className={` overflow-x-auto my-10 w-[90vw] border rounded-lg ${
          state.Theme.Theme === "light"
            ? "border-stone-200"
            : "border-stone-800"
        }`}
      >
        <table className="w-full">
          <thead>
            <tr
              className={
                state.Theme.Theme === "light"
                  ? "border-b bg-gray-100 "
                  : "border-b border-b-stone-800 bg-stone-900"
              }
            >
              <th className="text-xs text-gray-500 py-3">Seva Name</th>
              <th className="text-xs text-gray-500 py-3">Seva Description</th>
              <th className="text-xs text-gray-500 py-3">Counseler Name</th>
              <th className="text-xs text-gray-500 py-3">
                Counseler Contact Number
              </th>
              <th className="text-xs text-gray-500 py-3">
                Counseler Whatsapp Number
              </th>
              <th className="text-xs text-gray-500 py-3">Seva Date</th>
            </tr>
          </thead>
          <tbody>
            {content?.map((seva, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {seva.sevaType}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {`null`}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {`${seva.counselerFirstName} ${seva.counselerLastName}`}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {seva.counselerContactNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  {seva.counselerWaNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-8">
                  <DateDisplay dateString={seva.created} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SevaCCT;
