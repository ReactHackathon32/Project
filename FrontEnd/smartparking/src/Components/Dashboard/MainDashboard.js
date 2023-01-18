import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecentParkingDisplay } from "./RecentParkingDisplay";
import { UserContext } from "../../App";

export const MainDashboard = () => {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("login", false);
    contextData.loginAction(false);
    navigate("/login");
  };

  return (
    <div>
      This is MainDashboard component
      <div>
        <Link to="/dashboard/locations">
          <button>View Locations</button>
        </Link>
      </div>
      <div
        style={{ width: "500px", height: "200px", border: "1px solid black" }}
      >
        This is MAP
      </div>
      <div
        style={{ width: "500px", height: "auto", border: "1px solid black" }}
      >
        <RecentParkingDisplay />
      </div>
      <div>
        <Link to="/dashboard/search">
          <button>Search for parking locations</button>
        </Link>
      </div>
      <div>
        <button onClick={logout} type="button">
          logout
        </button>
      </div>
    </div>
  );
};
