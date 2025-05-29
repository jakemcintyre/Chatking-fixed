import React from 'react';

const DashboardView = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Daily Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tasks */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-yellow-700">Tasks</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Call Emily Chen</li>
            <li>Delivery to 123 Main St</li>
            <li>Follow up with Alex</li>
            <li>Meeting with David Wilson</li>
            <li>Connect with Karen Lee</li>
          </ul>
        </div>

        {/* KingBot Morning Report */}
        <div className="bg-blue-900 text-white rounded-lg p-4">
          <h2 className="text-lg font-semibold">👑 KingBot</h2>
          <p className="text-sm">Morning Report</p>
          <ul className="mt-2 space-y-1">
            <li>Appointments: 3</li>
            <li>Follow-Ups: 1</li>
            <li>Emily Davis</li>
            <li>Michael Chen</li>
            <li>Sarah Williams</li>
          </ul>
        </div>

        {/* Reminders */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold text-gray-800">Reminders</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Send quote to John Kim</li>
            <li>Email updated proposal</li>
          </ul>
        </div>

        {/* Top Priorities */}
        <div className="bg-white shadow-md rounded-lg p-4 col-span-1 md:col-span-2 lg:col-span-1">
          <h2 className="text-lg font-semibold text-gray-800">Top Priorities</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700
