import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import CarbonTradingDashboard from "./Pages/Individual.jsx";
import CarbonTrackingDashboard from "./Pages/Management.jsx";
import EmissionCategoryDetail from "./Pages/EmissionCategoryDetail.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/individual" element={<CarbonTradingDashboard />} />
      <Route path="/management" element={<CarbonTrackingDashboard />} />
      <Route
        path="/category/:categoryName"
        element={<EmissionCategoryDetail />}
      />
    </Routes>
  );
}

export default App;
