import PageLanding from "./Pages/PageLanding";
import { Route, Routes } from "react-router-dom";
import PageLogin from "./Pages/PageLogin";
import PageRegister from "./Pages/PageRegister";
import PageDashboard from "./Pages/PageDashboard";
import { NewParking } from "./Components/Dashboard/NewParking";
import { ParkingHistory } from "./Components/Dashboard/ParkingHistory";
import { ParkingAvail } from "./Components/Dashboard/ParkingAvail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLanding />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/dashboard" element={<PageDashboard />} />
        <Route path="/dashboard/newParking" element={<NewParking />} />
        <Route path="/dashboard/history" element={<ParkingHistory />} />
        <Route path="/dashboard/availability" element={<ParkingAvail />} />
      </Routes>
    </div>
  );
}

export default App;
