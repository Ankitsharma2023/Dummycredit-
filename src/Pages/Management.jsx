import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Fuel, ShoppingBag, Utensils, Car, Building } from "lucide-react";
import "react-circular-progressbar/dist/styles.css";

const CarbonTrackingDashboard = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState("month");
  const [selectedSociety, setSelectedSociety] = useState("Green Valley");

  const societies = [
    { name: "Green Valley", score: 850 },
    { name: "Eco Heights", score: 820 },
    { name: "Sustainable Plaza", score: 780 },
    { name: "Green Meadows", score: 750 },
    { name: "Eco Gardens", score: 720 },
  ];

  const timeData = {
    week: {
      creditsLeft: 180,
      footprint: 320,
      budget: 500,
      score: 850,
    },
    month: {
      creditsLeft: 133,
      footprint: 443,
      budget: 575,
      score: 820,
    },
    year: {
      creditsLeft: 1200,
      footprint: 3800,
      budget: 5000,
      score: 780,
    },
  };

  const emissions = {
    week: [
      {
        category: "Gas Stations",
        credits: 950,
        icon: <Fuel className="w-5 h-5" />,
      },
      {
        category: "Clothing And Accessories",
        credits: 820,
        icon: <ShoppingBag className="w-5 h-5" />,
      },
      {
        category: "Restaurants",
        credits: 650,
        icon: <Utensils className="w-5 h-5" />,
      },
      {
        category: "Transport",
        credits: 780,
        icon: <Car className="w-5 h-5" />,
      },
    ],
    month: [
      {
        category: "Gas Stations",
        credits: 1740,
        icon: <Fuel className="w-5 h-5" />,
      },
      {
        category: "Clothing And Accessories",
        credits: 1020,
        icon: <ShoppingBag className="w-5 h-5" />,
      },
      {
        category: "Restaurants",
        credits: 850,
        icon: <Utensils className="w-5 h-5" />,
      },
      {
        category: "Transport",
        credits: 820,
        icon: <Car className="w-5 h-5" />,
      },
    ],
    year: [
      {
        category: "Gas Stations",
        credits: 14500,
        icon: <Fuel className="w-5 h-5" />,
      },
      {
        category: "Clothing And Accessories",
        credits: 9800,
        icon: <ShoppingBag className="w-5 h-5" />,
      },
      {
        category: "Restaurants",
        credits: 8500,
        icon: <Utensils className="w-5 h-5" />,
      },
      {
        category: "Transport",
        credits: 9200,
        icon: <Car className="w-5 h-5" />,
      },
    ],
  };

  const currentData = timeData[period];

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase().replace(/ /g, "-")}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 mb-6 mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">
            Carbon Credit Tracking
          </h1>
          <select
            value={selectedSociety}
            onChange={(e) => setSelectedSociety(e.target.value)}
            className="p-2 border rounded-lg"
          >
            {societies.map((society) => (
              <option key={society.name} value={society.name}>
                {society.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          {["Week", "Month", "Year"].map((timeFrame) => (
            <button
              key={timeFrame}
              onClick={() => setPeriod(timeFrame.toLowerCase())}
              className={`px-4 py-2 rounded ${
                period === timeFrame.toLowerCase()
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {timeFrame}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 mb-6 mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 mb-4">
            <CircularProgressbar
              value={(currentData.creditsLeft / currentData.budget) * 100}
              text={`${currentData.creditsLeft} credits`}
              styles={buildStyles({
                pathColor: "#047857",
                textColor: "#1f2937",
                trailColor: "#e5e7eb",
              })}
            />
          </div>
          <p className="text-center">
            You have <strong>{currentData.creditsLeft} credits</strong> left in
            your budget.
          </p>
        </div>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 mb-6 mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Society Rankings
        </h2>
        <div className="space-y-3">
          {societies.map((society, index) => (
            <div
              key={society.name}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Building className="w-5 h-5 text-green-600" />
                </div>
                <span className="font-medium">{society.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Credit Score:</span>
                <span className="font-semibold">{society.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6 mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Top Credit Categories
        </h2>
        <div>
          {emissions[period].map((item, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.category)}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-2 cursor-pointer hover:bg-gray-200"
            >
              <div className="flex items-center">
                {item.icon}
                <span className="ml-2">{item.category}</span>
              </div>
              <span>{item.credits} credits</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarbonTrackingDashboard;
