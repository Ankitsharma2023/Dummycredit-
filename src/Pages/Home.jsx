import React from "react";
import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-green-600 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-6xl text-white text-center mb-16 font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          CarbonEct
        </motion.h1>

        {/* Login Options Container */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          {/* Individual Login */}
          <motion.div
            onClick={() => navigate("/individual")}
            className="group relative w-64 h-64 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-white rounded-full shadow-lg transform transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-400/50">
              <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span className="text-white text-xl font-semibold">
                    Individual Login
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Management Login */}
          <motion.div
            onClick={() => navigate("/management")}
            className="group relative w-64 h-64 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-white rounded-full shadow-lg transform transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-green-400/50">
              <div className="absolute inset-2 bg-gradient-to-br from-emerald-600 to-green-800 rounded-full">
                <div className="h-full w-full flex flex-col items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-white mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="text-white text-xl font-semibold">
                    Management Login
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
