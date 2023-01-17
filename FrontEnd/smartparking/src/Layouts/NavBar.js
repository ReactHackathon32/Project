import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <div style={{ border: "1px solid black" }}>
      This is NavBar
      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard/main">Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/search">Find me Parking</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">Parking History</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/locations">Parking Locations</NavLink>
          </li>
        </ul>
      </nav>
      <div style={{ border: "1px solid blue" }}>
        <Outlet />
      </div>
    </div>
  );
};
