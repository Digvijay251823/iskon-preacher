import React, { useState } from "react";
import SessionTable from "./SessionTable";
import CounseleeTable from "./CounceleeTable";

const CounselorDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("counselee"); // Default active tab is 'counselee'

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container mx-auto ml-[20vw]">
      <p className="p-10">Details</p>
      <div className="flex justify-start mb-4 border-b ">
        <button
          className={`mr-4 px-4 py-2 ${
            activeTab === "counselee"
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }`}
          onClick={() => handleTabChange("counselee")}
        >
          Counselee
        </button>
        <button
          className={`mr-4 px-4 py-2 ${
            activeTab === "sessions"
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }`}
          onClick={() => handleTabChange("sessions")}
        >
          Sessions
        </button>
        <button
          className={`mr-4 px-4 py-2 ${
            activeTab === "activities"
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }`}
          onClick={() => handleTabChange("activities")}
        >
          Activities
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "analytics"
              ? "bg-blue-500 text-white"
              : "text-blue-500"
          }`}
          onClick={() => handleTabChange("analytics")}
        >
          Analytics
        </button>
      </div>
      {/* Render content based on active tab */}
      {activeTab === "counselee" && <CounseleeTab />}
      {activeTab === "sessions" && <SessionsTab />}
      {activeTab === "activities" && <ActivitiesTab />}
      {activeTab === "analytics" && <AnalyticsTab />}
    </div>
  );
};

// Placeholder components for each tab
const CounseleeTab = () => (
  <div>
    <CounseleeTable />
  </div>
);
const SessionsTab = () => (
  <div>
    <SessionTable />
  </div>
);
const ActivitiesTab = () => <div>Activities Tab Content</div>;
const AnalyticsTab = () => <div>Analytics Tab Content</div>;

export default CounselorDetailsPage;
