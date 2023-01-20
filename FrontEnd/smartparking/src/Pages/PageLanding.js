import React from "react";
import { Link } from "react-router-dom";
import bg from "../assets/bg.mp4";
import { Button } from "react-bootstrap";
import { FaParking } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";

export const PageLanding = () => {
  return (
    <div>
      <div id="bg-video">
        <video src={bg} autoPlay loop muted />
      </div>
      <div id="cta">
        <h1 className="display-4">
          DynaPark <FaParking className="mb-2" />
        </h1>
        <big>
          <p>Providing you with the cheapest parking nearby</p>
        </big>
        <Link className="me-2" to="/login">
          <Button variant="dark">
            <BiLogIn /> Login
          </Button>
        </Link>
        <Link className="ms-2" to="/register">
          <Button variant="outline-dark">
            <BsFillPencilFill /> Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PageLanding;
