import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { Leaf, Award, TrendingUp, Users } from "lucide-react";

const CarbonTradingDashboard = () => {
  const [selectedSociety, setSelectedSociety] = useState("Green Valley");
  const [activeTab, setActiveTab] = useState("overview");

  const monthlyData = [
    { month: "Jan", credits: 120, emissions: 80 },
    { month: "Feb", credits: 150, emissions: 75 },
    { month: "Mar", credits: 180, emissions: 70 },
    { month: "Apr", credits: 200, emissions: 65 },
  ];

  const sustainableActivities = [
    { activity: "Solar Panel Installation", credits: 50 },
    { activity: "Rainwater Harvesting", credits: 30 },
    { activity: "Waste Segregation", credits: 20 },
    { activity: "EV Charging Station", credits: 40 },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Carbon Trading Platform</h1>
        <div className="flex items-center space-x-4">
          <span className="font-medium">
            Selected Society: {selectedSociety}
          </span>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Trade Credits
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Stats Cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Available Credits</p>
              <p className="text-2xl font-bold">150</p>
            </div>
            <Leaf className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Carbon Footprint</p>
              <p className="text-2xl font-bold">75 tons</p>
            </div>
            <TrendingUp className="h-8 w-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Sustainability Score</p>
              <p className="text-2xl font-bold">85/100</p>
            </div>
            <Award className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Residents</p>
              <p className="text-2xl font-bold">450</p>
            </div>
            <Users className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Custom Tabs */}
      <div className="w-full">
        <div className="border-b border-gray-200">
          <div className="flex space-x-4">
            {["overview", "activities", "trading"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-green-500 text-green-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="mt-4">
          {activeTab === "overview" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">
                Carbon Credits vs Emissions
              </h2>
              <div className="h-[400px]">
                <LineChart
                  width={800}
                  height={400}
                  data={monthlyData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="credits"
                    stroke="#82ca9d"
                    name="Carbon Credits"
                  />
                  <Line
                    type="monotone"
                    dataKey="emissions"
                    stroke="#ff7300"
                    name="Emissions"
                  />
                </LineChart>
              </div>
            </div>
          )}

          {activeTab === "activities" && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4">Sustainable Activities</h2>
              <div className="space-y-4">
                {sustainableActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">{activity.activity}</p>
                      <p className="text-sm text-gray-500">
                        Credits Earned: {activity.credits}
                      </p>
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarbonTradingDashboard;
