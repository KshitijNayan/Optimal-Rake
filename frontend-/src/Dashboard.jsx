// src/pages/Dashboard.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 300 },
  { name: "Wed", users: 500 },
  { name: "Thu", users: 200 },
  { name: "Fri", users: 450 },
  { name: "Sat", users: 250 },
  { name: "Sun", users: 300 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard Overview</h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-gray-700 transition">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-2">1,240</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-gray-700 transition">
          <h2 className="text-lg font-semibold">Active Sessions</h2>
          <p className="text-3xl font-bold mt-2">320</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-gray-700 transition">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold mt-2">$5,800</p>
        </div>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:bg-gray-700 transition">
          <h2 className="text-lg font-semibold">Errors</h2>
          <p className="text-3xl font-bold mt-2 text-red-400">12</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Weekly User Growth</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip />
            <Bar dataKey="users" fill="#60a5fa" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
