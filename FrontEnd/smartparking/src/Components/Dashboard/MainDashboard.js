import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RecentParkingDisplay } from "./RecentParkingDisplay";
import { UserContext } from "../../App";
import { Button, Container } from "react-bootstrap";
import { RxMagnifyingGlass } from "react-icons/rx"
import { MdHistory } from "react-icons/md"
import { AiOutlineEye } from "react-icons/ai"

export const MainDashboard = () => {
  // const contextData = useContext(UserContext);
  // const navigate = useNavigate();

  // const logout = () => {
  //   localStorage.setItem("login", false);
  //   contextData.loginAction(false);
  //   navigate("/login");
  // };

  return (
    <Container>
      
      <div className="my-5 d-flex justify-content-center">
        <Link to="/dashboard/locations">
          <Button className="mx-2"><big><AiOutlineEye /></big> View Locations</Button>
        </Link>
        <Link to="/dashboard/history">
          <Button className="mx-2"><big><MdHistory /></big> My History</Button>
        </Link>
      </div>
      
      <div className="my-5">
        <RecentParkingDisplay />
      </div>
      <div className="text-center map-image my-5">
        <Link to="/dashboard/search">
          <Button variant='outline-primary' className="search-carparks">Search available carparks <big><RxMagnifyingGlass /></big></Button>
        </Link>
      </div>
    </Container>
  );
};
