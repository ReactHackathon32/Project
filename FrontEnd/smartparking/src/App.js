import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLanding from "./Pages/PageLanding";
import PageLogin from "./Pages/PageLogin";
import PageRegister from "./Pages/PageRegister";
import { NavBar } from "./Layouts/NavBar";
import { MainDashboard } from "./Components/Dashboard/MainDashboard";
import { NewParkingDisplay } from "./Components/Dashboard/NewParkingDisplay";
import { SearchLocations } from "./Components/Dashboard/SearchLocations";
import { ParkingHistoryDisplay } from "./Components/Dashboard/ParkingHistoryDisplay";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { PageResetPassword } from "./Pages/PageResetPassword";
import ViewLocationDisplay from "./Components/Dashboard/ViewLocationDisplay";

export const UserContext = createContext();

function App() {
  const getUserLogin = localStorage.getItem("login") === "true";
  const [userLogin, setUserLogin] = useState(getUserLogin);
  const [userDetails, setUserDetails] = useState({ "token": '', "userId": '' })

  // console.log("userDetails in App.js:", userDetails);

  return (
    <div className="App">
      <UserContext.Provider value={{ loginAction: setUserLogin }}>
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/login" element={<PageLogin setUserDetails={setUserDetails} />} />
          <Route path="/register" element={<PageRegister />} />
          <Route path="/resetpassword" element={<PageResetPassword />} />
          {userLogin && (
            <>
              <Route path="/dashboard" element={<NavBar userDetails={userDetails} />}>
                <Route path="/dashboard/main" element={<MainDashboard />} />
                <Route
                  path="/dashboard/newParking"
                  element={<NewParkingDisplay />}
                />
                <Route
                  path="/dashboard/history"
                  element={<ParkingHistoryDisplay />}
                />
                <Route
                  path="/dashboard/locations"
                  element={<ViewLocationDisplay />}
                />
                <Route path="/dashboard/search" element={<SearchLocations />} />
              </Route>
            </>
          )}
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
