import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Fuel, ArrowLeft, MapPin, ChevronRight } from "lucide-react";

const EmissionCategoryDetail = () => {
  const navigate = useNavigate();
  const { categoryName } = useParams();

  const categoryTitle = categoryName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <Fuel className="w-10 h-10 text-green-600" />
          <h1 className="text-2xl font-semibold">{categoryTitle}</h1>
          <div className="ml-auto px-4 py-1 bg-white rounded-full shadow-sm text-sm text-gray-600">
            kg CO2e
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Insights Panel */}
          <div className="col-span-7">
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-medium">Insights</h2>
              </div>

              <div className="space-y-6">
                <div className="border-b pb-4">
                  <div className="text-2xl font-semibold mb-2">797 kg CO2e</div>
                  <div className="text-gray-600">
                    emissions emitted from {categoryTitle.toLowerCase()} in the
                    last 12 months
                  </div>
                </div>

                <div className="border-b pb-4">
                  <div className="text-lg font-medium mb-2">
                    That's 11% of your Annual Carbon Budget
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "11%" }}
                    ></div>
                  </div>
                </div>

                <div className="pb-4">
                  <div className="text-gray-600 mb-4">
                    You emitted an average of 66 kg CO2e a month over the last
                    12 months
                  </div>
                  <div className="font-medium mb-2">
                    Your impact last month was higher than it was two months ago
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Last June</span>
                        <span>428 kg CO2e</span>
                      </div>
                      <div className="w-full bg-green-600 rounded-full h-2"></div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span>Last May</span>
                        <span>166 kg CO2e</span>
                      </div>
                      <div
                        className="w-full bg-green-600 rounded-full h-2"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Panel */}
          <div className="col-span-5">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-xl font-medium mb-6">Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Fuel className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-medium">76 - NW251063 ASD</div>
                        <div className="text-sm text-gray-500">
                          June 15, 2024
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">254.3</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmissionCategoryDetail;
