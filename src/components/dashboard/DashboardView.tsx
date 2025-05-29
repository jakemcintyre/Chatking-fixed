import React from 'react';

const DashboardView = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="text-2xl font-bold">Daily Dashboard</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Tasks</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Call Emily Chen</li>
            <li>Delivery to 123 Main St</li>
            <li>Follow up with Alex</li>
            <li>Meeting with David Wilson</li>
            <li>Connect with Karen Lee</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Reminders</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Send quote to John Kim</li>
            <li>Email updated proposal</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="font-semibold text-lg mb-2">Top Priorities</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Prepare for meeting with David Wilson</li>
            <li>Follow up with Alex</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
