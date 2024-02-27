import React from "react";
import { useNavigate } from "react-router-dom";

const Table = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      contactNumber: "123-456-7890",
      whatsAppNumber: "123-456-7890",
      email: "john.doe@example.com",
      address: "123 Main St, City, Country",
      gender: "Male",
      age: 35,
      numberOfSessions: 10,
      numberOfActiveCounselees: 5,
      numberOfAllCounselees: 15,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      contactNumber: "234-567-8901",
      whatsAppNumber: "234-567-8901",
      email: "jane.smith@example.com",
      address: "456 Elm St, City, Country",
      gender: "Female",
      age: 40,
      numberOfSessions: 15,
      numberOfActiveCounselees: 7,
      numberOfAllCounselees: 20,
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Johnson",
      contactNumber: "345-678-9012",
      whatsAppNumber: "345-678-9012",
      email: "michael.johnson@example.com",
      address: "789 Oak St, City, Country",
      gender: "Male",
      age: 45,
      numberOfSessions: 20,
      numberOfActiveCounselees: 8,
      numberOfAllCounselees: 25,
    },
    {
      id: 4,
      firstName: "Sarah",
      lastName: "Williams",
      contactNumber: "456-789-0123",
      whatsAppNumber: "456-789-0123",
      email: "sarah.williams@example.com",
      address: "123 Pine St, City, Country",
      gender: "Female",
      age: 38,
      numberOfSessions: 18,
      numberOfActiveCounselees: 6,
      numberOfAllCounselees: 22,
    },
    {
      id: 5,
      firstName: "David",
      lastName: "Brown",
      contactNumber: "567-890-1234",
      whatsAppNumber: "567-890-1234",
      email: "david.brown@example.com",
      address: "456 Maple St, City, Country",
      gender: "Male",
      age: 42,
      numberOfSessions: 22,
      numberOfActiveCounselees: 10,
      numberOfAllCounselees: 30,
    },
    {
      id: 6,
      firstName: "Emma",
      lastName: "Davis",
      contactNumber: "678-901-2345",
      whatsAppNumber: "678-901-2345",
      email: "emma.davis@example.com",
      address: "789 Walnut St, City, Country",
      gender: "Female",
      age: 37,
      numberOfSessions: 17,
      numberOfActiveCounselees: 9,
      numberOfAllCounselees: 26,
    },
    {
      id: 7,
      firstName: "James",
      lastName: "Miller",
      contactNumber: "789-012-3456",
      whatsAppNumber: "789-012-3456",
      email: "james.miller@example.com",
      address: "123 Cedar St, City, Country",
      gender: "Male",
      age: 39,
      numberOfSessions: 19,
      numberOfActiveCounselees: 8,
      numberOfAllCounselees: 27,
    },
    {
      id: 8,
      firstName: "Olivia",
      lastName: "Wilson",
      contactNumber: "890-123-4567",
      whatsAppNumber: "890-123-4567",
      email: "olivia.wilson@example.com",
      address: "456 Birch St, City, Country",
      gender: "Female",
      age: 41,
      numberOfSessions: 21,
      numberOfActiveCounselees: 11,
      numberOfAllCounselees: 31,
    },
    {
      id: 9,
      firstName: "William",
      lastName: "Taylor",
      contactNumber: "901-234-5678",
      whatsAppNumber: "901-234-5678",
      email: "william.taylor@example.com",
      address: "789 Cedar St, City, Country",
      gender: "Male",
      age: 44,
      numberOfSessions: 24,
      numberOfActiveCounselees: 12,
      numberOfAllCounselees: 33,
    },
    {
      id: 10,
      firstName: "Sophia",
      lastName: "Martinez",
      contactNumber: "012-345-6789",
      whatsAppNumber: "012-345-6789",
      email: "sophia.martinez@example.com",
      address: "123 Oak St, City, Country",
      gender: "Female",
      age: 36,
      numberOfSessions: 16,
      numberOfActiveCounselees: 7,
      numberOfAllCounselees: 23,
    },
  ];

  return (
    <div className="overflow-x-auto ml-[20vw]">
      <h1 className="p-10 font-semibold text-2xl">Counselor</h1>
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
                WhatsApp Number
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
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Number of Sessions
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Number of Active Counselees
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Number of All Counselees
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((counselor, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-50 cursor-pointer"
                    : "bg-white cursor-pointer"
                }
                onClick={() => navigate(`/counselor/${counselor.id}`)}
              >
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.firstName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.contactNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.whatsAppNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.gender}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.numberOfSessions}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.numberOfActiveCounselees}
                </td>
                <td className="px-6 py-4 whitespace-nowrap w-max">
                  {counselor.numberOfAllCounselees}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
