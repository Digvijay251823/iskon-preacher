import React from "react";

const CounseleeTable = () => {
  const data = [
    {
      id: 1,
      firstName: "Alice",
      lastName: "Smith",
      contactNumber: "111-222-3333",
      whatsAppNumber: "111-222-3333",
      email: "alice.smith@example.com",
      address: "456 Elm St, City, Country",
      gender: "Female",
      age: 28,
      counselor: "John Doe",
    },
    {
      id: 2,
      firstName: "Bob",
      lastName: "Johnson",
      contactNumber: "444-555-6666",
      whatsAppNumber: "444-555-6666",
      email: "bob.johnson@example.com",
      address: "789 Oak St, City, Country",
      gender: "Male",
      age: 35,
      counselor: "Jane Smith",
    },
    {
      id: 3,
      firstName: "Charlie",
      lastName: "Brown",
      contactNumber: "777-888-9999",
      whatsAppNumber: "777-888-9999",
      email: "charlie.brown@example.com",
      address: "123 Pine St, City, Country",
      gender: "Male",
      age: 42,
      counselor: "John Doe",
    },
    {
      id: 4,
      firstName: "Diana",
      lastName: "Lee",
      contactNumber: "111-222-3333",
      whatsAppNumber: "111-222-3333",
      email: "diana.lee@example.com",
      address: "456 Maple St, City, Country",
      gender: "Female",
      age: 30,
      counselor: "Jane Smith",
    },
    {
      id: 5,
      firstName: "Ella",
      lastName: "Garcia",
      contactNumber: "444-555-6666",
      whatsAppNumber: "444-555-6666",
      email: "ella.garcia@example.com",
      address: "789 Cedar St, City, Country",
      gender: "Female",
      age: 25,
      counselor: "John Doe",
    },
    {
      id: 6,
      firstName: "Frank",
      lastName: "Davis",
      contactNumber: "777-888-9999",
      whatsAppNumber: "777-888-9999",
      email: "frank.davis@example.com",
      address: "123 Walnut St, City, Country",
      gender: "Male",
      age: 40,
      counselor: "Jane Smith",
    },
    {
      id: 7,
      firstName: "Grace",
      lastName: "Taylor",
      contactNumber: "111-222-3333",
      whatsAppNumber: "111-222-3333",
      email: "grace.taylor@example.com",
      address: "456 Birch St, City, Country",
      gender: "Female",
      age: 33,
      counselor: "John Doe",
    },
    {
      id: 8,
      firstName: "Henry",
      lastName: "Martinez",
      contactNumber: "444-555-6666",
      whatsAppNumber: "444-555-6666",
      email: "henry.martinez@example.com",
      address: "789 Pine St, City, Country",
      gender: "Male",
      age: 38,
      counselor: "Jane Smith",
    },
    {
      id: 9,
      firstName: "Ivy",
      lastName: "Anderson",
      contactNumber: "777-888-9999",
      whatsAppNumber: "777-888-9999",
      email: "ivy.anderson@example.com",
      address: "123 Elm St, City, Country",
      gender: "Female",
      age: 27,
      counselor: "John Doe",
    },
    {
      id: 10,
      firstName: "Jack",
      lastName: "Wilson",
      contactNumber: "111-222-3333",
      whatsAppNumber: "111-222-3333",
      email: "jack.wilson@example.com",
      address: "456 Oak St, City, Country",
      gender: "Male",
      age: 32,
      counselor: "Jane Smith",
    },
  ];

  return (
    <div className=" ml-[20vw]">
      <h1 className="p-10 font-semibold text-2xl">Counselee</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                First Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Last Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contact Number
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Address
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Gender
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Age
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((counselee, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {counselee.firstName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {counselee.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {counselee.contactNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {counselee.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {counselee.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {counselee.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{counselee.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CounseleeTable;
