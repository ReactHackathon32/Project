import React from "react";
import { MainDashboard } from "../Components/Dashboard/MainDashboard";
import { NavBar } from "../Layouts/NavBar";

const PageDashboard = () => {
  return (
    <div>
      <NavBar>
        This is dashboarding page
        <MainDashboard />
      </NavBar>
    </div>
  );
};

export default PageDashboard;
