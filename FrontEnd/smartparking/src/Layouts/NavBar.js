import React, { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Logout } from "../Components/Auth/Logout";
import CurrentParkingOverlay from "../Components/Dashboard/CurrentParkingOverlay";
import { UserContext } from "../App";
import context from "react-bootstrap/esm/AccordionContext";

//TODO: collapse navbar on selection
//TODO: (Zin) pass down fetched data with NavLink to next components

export const NavBar = () => {
  const contextData = useContext(UserContext)
  console.log("context Parked in NavBar:", contextData.isParked);
  console.log("context Parked in NavBar:", typeof contextData.isParked);
  return (
    <div>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Brand as={Link} to="/dashboard/main">My Dashboard</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title >
                My Dashboard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/dashboard/main">Home</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/search">Search Parking</Nav.Link>
                <Nav.Link as={Link} to="/dashboard/history">My History</Nav.Link>
                <Nav.Link className="mb-2" as={Link} to="/dashboard/locations">All Locations</Nav.Link>
                <Logout />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <CurrentParkingOverlay isShowing={contextData.isParked} />
      <div>
        <Outlet />
      </div>
    </div>
  );
};
