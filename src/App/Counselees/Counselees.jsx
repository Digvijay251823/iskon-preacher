import React from "react";
import { FiPlus } from "react-icons/fi";
import { useMyContext } from "../../store/context";

const counseleesData = [
  {
    firstName: "Alice",
    lastName: "Smith",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "alice.smith@example.com",
    address: "456 Elm St, City, Country",
    gender: "Female",
    age: 28,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Bob",
    lastName: "Johnson",
    contactNumber: "444-555-6666",
    whatsAppNumber: "444-555-6666",
    email: "bob.johnson@example.com",
    address: "789 Oak St, City, Country",
    gender: "Male",
    age: 35,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Charlie",
    lastName: "Brown",
    contactNumber: "777-888-9999",
    whatsAppNumber: "777-888-9999",
    email: "charlie.brown@example.com",
    address: "123 Pine St, City, Country",
    gender: "Male",
    age: 42,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Diana",
    lastName: "Lee",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "diana.lee@example.com",
    address: "456 Maple St, City, Country",
    gender: "Female",
    age: 30,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Ella",
    lastName: "Garcia",
    contactNumber: "444-555-6666",
    whatsAppNumber: "444-555-6666",
    email: "ella.garcia@example.com",
    address: "789 Cedar St, City, Country",
    gender: "Female",
    age: 25,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Frank",
    lastName: "Davis",
    contactNumber: "777-888-9999",
    whatsAppNumber: "777-888-9999",
    email: "frank.davis@example.com",
    address: "123 Walnut St, City, Country",
    gender: "Male",
    age: 40,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Grace",
    lastName: "Taylor",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "grace.taylor@example.com",
    address: "456 Birch St, City, Country",
    gender: "Female",
    age: 33,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Henry",
    lastName: "Martinez",
    contactNumber: "444-555-6666",
    whatsAppNumber: "444-555-6666",
    email: "henry.martinez@example.com",
    address: "789 Pine St, City, Country",
    gender: "Male",
    age: 38,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Ivy",
    lastName: "Anderson",
    contactNumber: "777-888-9999",
    whatsAppNumber: "777-888-9999",
    email: "ivy.anderson@example.com",
    address: "123 Elm St, City, Country",
    gender: "Female",
    age: 27,
    counselor: "John Doe",
    numberOfSessionsAttended: 30,
  },
  {
    firstName: "Jack",
    lastName: "Wilson",
    contactNumber: "111-222-3333",
    whatsAppNumber: "111-222-3333",
    email: "jack.wilson@example.com",
    address: "456 Oak St, City, Country",
    gender: "Male",
    age: 32,
    counselor: "Jane Smith",
    numberOfSessionsAttended: 30,
  },
];

function Counselees() {
  const { state } = useMyContext();
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center w-full lg:px-10 px-4 pt-10 justify-between">
        <h1 className="font-semibold text-2xl">Counselees</h1>
        <div>
          <button
            className={`flex items-center md:px-5 px-3 py-1.5 md:gap-5 gap-3 ${
              state.Theme.Theme === "light"
                ? "border-2 border-blue-300 rounded-xl shadow-md active:shadow-sm"
                : "bg-stone-800 border border-stone-700 rounded-xl transition-all duration-300 active:scale-95"
            }`}
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
        <table>
          <thead>
            <tr
              className={
                state.Theme.Theme === "light"
                  ? "border-b bg-gray-100 "
                  : "border-b border-b-stone-800 bg-stone-900"
              }
            >
              <th className="text-xs text-gray-500 py-3">FIRST NAME</th>
              <th className="text-xs text-gray-500 py-3">LAST NAME</th>
              <th className="text-xs text-gray-500 py-3">CONTACT NUMBER</th>
              <th className="text-xs text-gray-500 py-3">WHATSAPP NUMBER</th>
              <th className="text-xs text-gray-500 py-3">EMAIL</th>
              <th className="text-xs text-gray-500 py-3">ADDRESS</th>
              <th className="text-xs text-gray-500 py-3">GENDER</th>
              <th className="text-xs text-gray-500 py-3">AGE</th>
              <th className="text-xs text-gray-500 py-3">
                NUMBER OF SESSIONS ATTENDED
              </th>
            </tr>
          </thead>
          <tbody>
            {counseleesData?.map((counselor, index) => (
              <tr
                key={index}
                className={
                  state.Theme.Theme === "light"
                    ? "border-b"
                    : "border-b border-stone-800"
                }
              >
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.firstName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.lastName}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.contactNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.whatsAppNumber}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.email}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.address}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.gender}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.age}
                </td>
                <td className=" whitespace-nowrap text-center py-5 px-4">
                  {counselor.numberOfSessionsAttended}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Counselees;
