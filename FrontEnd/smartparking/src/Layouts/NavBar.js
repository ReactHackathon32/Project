import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <div>
      this is NavBar
      <Link to="/dashboard">Homepage</Link>
      <Link to="/dashboard/newParking">New Parking</Link>
      <Link to="/dashboard/history">Parking History</Link>
      <Link to="/dashboard/availability">Parking Availability</Link>
      {props.children}
    </div>
  );
};
