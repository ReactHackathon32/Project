import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLanding from "./Pages/PageLanding";
import PageLogin from "./Pages/PageLogin";
import PageRegister from "./Pages/PageRegister";
import { NavBar } from "./Layouts/NavBar"
import { ViewLocations } from "./Components/Dashboard/ViewLocations";
import { MainDashboard } from "./Components/Dashboard/MainDashboard";
import { NewParkingDisplay } from "./Components/Dashboard/NewParkingDisplay";
import { SearchLocations } from "./Components/Dashboard/SearchLocations";
import { ParkingHistoryDisplay } from "./Components/Dashboard/ParkingHistoryDisplay";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLanding />} />
        <Route path="/login" element={<PageLogin />} />
        <Route path="/register" element={<PageRegister />} />
        <Route path="/dashboard" element={<NavBar />}>
          <Route path="/dashboard/main" element={<MainDashboard />} />
          <Route path="/dashboard/newParking" element={<NewParkingDisplay />} />
          <Route path="/dashboard/history" element={<ParkingHistoryDisplay />} />
          <Route path="/dashboard/locations" element={<ViewLocations />} />
          <Route path="/dashboard/search" element={<SearchLocations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
