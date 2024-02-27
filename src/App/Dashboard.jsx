import React from "react";

function Dashboard() {
  return (
    <div className="bg-white shadow-md p-8 rounded-lg md:ml-[20vw]">
      <h1 className="p-10 font-semibold text-2xl">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {/* Dashboard cards */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Counselors</h3>
          <p className="text-gray-700">10</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total Counselees</h3>
          <p className="text-gray-700">25</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Total CCL Entries</h3>
          <p className="text-gray-700">5</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
}

export default Dashboard;
