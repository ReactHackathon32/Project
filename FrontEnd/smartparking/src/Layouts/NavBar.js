import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = ({ children }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      This is NavBar
      <nav>
        <NavLink to="/dashboard/main">Home</NavLink>
        <NavLink to="/dashboard/newParking">New Parking</NavLink>
        <NavLink to="/dashboard/history">Parking History</NavLink>
        <NavLink to="/dashboard/availability">Parking Availability</NavLink>
      </nav>
      <div style={{ border: "1px solid yellow" }}>
        <Outlet />
      </div>
    </div>
  );
};
