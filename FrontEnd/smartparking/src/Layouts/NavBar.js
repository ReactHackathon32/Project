import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <div>
      this is NavBar
      <Link to="/dashboard/newParking">New Parking</Link>
      <Link to=""></Link>
      <Link></Link>
      {props.children}
    </div>
  );
};
