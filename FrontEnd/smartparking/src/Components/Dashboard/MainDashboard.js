import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecentParkingDisplay } from "./RecentParkingDisplay";
import { UserContext } from "../../App";
import { Button, Container } from "react-bootstrap";
import { RxMagnifyingGlass } from "react-icons/rx"

export const MainDashboard = () => {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.setItem("login", false);
    contextData.loginAction(false);
    navigate("/login");
  };

  return (
    <Container>
      
      <div className="d-flex justify-content-center">
        <Link to="/dashboard/locations">
          <Button className="mx-2 my-4">View Locations</Button>
        </Link>
        <Link to="/dashboard/history">
          <Button className="mx-2 my-4">My History</Button>
        </Link>
      </div>
      <div>
        <RecentParkingDisplay />
      </div>
      <div>
        This is MAP
      </div>
      
      <div>
        <Link to="/dashboard/search">
          <Button variant='outline-dark'>Search carparks <big><RxMagnifyingGlass /></big></Button>
        </Link>
      </div>
    </Container>
  );
};
