import React from "react";

function SessionTable() {
  const sessions = [
    {
      id: 1,
      scheduledSessionName: "Session 1",
      sessionName: "Introduction to Counseling",
      description: "An introductory session to the field of counseling.",
      createdBy: "John Doe",
      durationInMinutes: 60,
    },
    {
      id: 2,
      scheduledSessionName: "Session 2",
      sessionName: "Cognitive Behavioral Therapy (CBT)",
      description: "Exploring the principles and techniques of CBT.",
      createdBy: "Jane Smith",
      durationInMinutes: 90,
    },
    {
      id: 3,
      scheduledSessionName: "Session 3",
      sessionName: "Group Therapy",
      description: "Understanding the dynamics and benefits of group therapy.",
      createdBy: "Alice Johnson",
      durationInMinutes: 120,
    },
    {
      id: 4,
      scheduledSessionName: "Session 4",
      sessionName: "Art Therapy",
      description:
        "Using artistic methods to explore emotions and improve well-being.",
      createdBy: "Michael Brown",
      durationInMinutes: 75,
    },
    {
      id: 5,
      scheduledSessionName: "Session 5",
      sessionName: "Family Counseling",
      description:
        "Addressing family issues and improving communication within families.",
      createdBy: "Sarah Adams",
      durationInMinutes: 90,
    },
    {
      id: 6,
      scheduledSessionName: "Session 6",
      sessionName: "Mindfulness Meditation",
      description:
        "Practicing mindfulness techniques for stress reduction and relaxation.",
      createdBy: "David Wilson",
      durationInMinutes: 60,
    },
  ];
  return (
    <div className="pb-20">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Scheduled Session Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Session Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Description
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Created By
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Duration (minutes)
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sessions.map((session) => (
              <tr key={session.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {session.scheduledSessionName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {session.sessionName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {session.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {session.createdBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {session.durationInMinutes}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  {/* Add edit button or actions here */}
                  <button className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SessionTable;
