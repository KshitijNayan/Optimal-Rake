// src/pages/Dashboard.jsx
/*import React from "react";
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

      {/* Cards Section }
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

      {/* Chart Section }
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
}*/

import { StatsCard } from "./components/StatsCard";
import { SalesChart } from "./components/SalesChart";
import { RevenueChart } from "./components/RevenueChart";
import { TrafficChart } from "./components/TrafficChart";
import { RecentActivity } from "./components/RecentActivity";
import { PerformanceMetrics } from "./components/PerformanceMetrics";
import { 
  DollarSign, 
  Users, 
  CreditCard, 
  Activity,
  Menu,
  Bell,
  Search,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

export default function Dashboard() {
  return (
    <div className="h-full pt-16 w-full flex flex-col bg-background overflow-hidden">
      {/* Header */}
      <header className="border-b flex-shrink-0">
        <div className="flex h-14 items-center px-4 gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            <h1 className="font-semibold">Analytics Dashboard</h1>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4 max-w-[1600px] mx-auto">
          {/* Page Header */}
          <div>
            <h2 className="tracking-tight">Dashboard</h2>
            <p className="text-muted-foreground text-sm">
              Overview of your business metrics and analytics
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger style={{backgroundColor:'rgba(87, 233, 208, 1)', margin:'2px', border:'black'}} value="overview">Overview</TabsTrigger>
              <TabsTrigger style={{backgroundColor:'rgba(87, 233, 208, 1)', margin:'2px', border:'black'}} value="analytics">Analytics</TabsTrigger>
              <TabsTrigger style={{backgroundColor:'rgba(87, 233, 208, 1)', margin:'2px', border:'black'}} value="reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              {/* Stats Grid */}
              <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
                <StatsCard
                  title="Total Revenue"
                  value="45,231.89"
                  change="20.1"
                  trend="up"
                  icon={DollarSign}
                />
                <StatsCard
                  title="Active Users"
                  value="2,350"
                  change="12.5"
                  trend="up"
                  icon={Users}
                />
                <StatsCard
                  title="Total Orders"
                  value="1,234"
                  change="8.2"
                  trend="down"
                  icon={CreditCard}
                />
                <StatsCard
                  title="Conversion Rate"
                  value="3.24%"
                  change="5.7"
                  trend="up"
                  icon={Activity}
                />
              </div>

              {/* Charts Grid */}
              <div className="grid gap-4 lg:grid-cols-2">
                <SalesChart />
                <RecentActivity />
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <RevenueChart />
                <PerformanceMetrics />
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <TrafficChart />
                <PerformanceMetrics />
              </div>
              <div className="grid gap-4">
                <SalesChart />
              </div>
            </TabsContent>

            <TabsContent value="reports" className="space-y-4">
              <div className="grid gap-4 lg:grid-cols-2">
                <RevenueChart />
                <RecentActivity />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
