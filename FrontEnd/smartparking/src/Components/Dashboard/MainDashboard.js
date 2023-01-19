import React from "react";
import { Link } from "react-router-dom";
import { RecentParkingDisplay } from "./RecentParkingDisplay";
import { Button, Container } from "react-bootstrap";
import { RxMagnifyingGlass } from "react-icons/rx"
import { MdHistory } from "react-icons/md"
import { AiOutlineEye, AiFillHome } from "react-icons/ai"

// TODO : implement isLoading to prevent user from clicking before fetch is completed

export const MainDashboard = () => {

  return (
    <Container className="my-5">
      <h2 className="text-center"><big><AiFillHome /></big> Home</h2>
      <div className="my-5 d-flex justify-content-center">
        <Link to="/dashboard/locations">
          <Button variant='dark' className="mx-2"><big><AiOutlineEye /></big> All Locations</Button>
        </Link>
        <Link to="/dashboard/history">
          <Button variant="outline-dark" className="mx-2"><big><MdHistory /></big> My History</Button>
        </Link>
      </div>
      <div className="my-5">
        <RecentParkingDisplay />
      </div>
      <div className="text-center map-image my-5 rounded">
        <Link to="/dashboard/search">
          <Button variant='outline-dark' className="search-carparks">Search available carparks <big><RxMagnifyingGlass /></big></Button>
        </Link>
      </div>
    </Container>
  );
};
