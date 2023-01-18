// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";

// export const NavBar = () => {
//   return (
//     <div style={{ border: "1px solid black" }}>
//       This is NavBar
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/dashboard/main">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/search">Find me Parking</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/history">Parking History</NavLink>
//           </li>
//           <li>
//             <NavLink to="/dashboard/locations">Parking Locations</NavLink>
//           </li>
//         </ul>
//       </nav>
//       <div style={{ border: "1px solid blue" }}>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

import React, {useState} from "react";
import { NavLink, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Logout } from "../Components/Auth/Logout";

export const NavBar = () => {

  //TODO: collapse navbar on selection
  return (
    <div>
       <Navbar bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand as={NavLink} to="/dashboard/main">My Dashboard</Navbar.Brand>
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
                  <Nav.Link as={NavLink} to="/dashboard/main">Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard/search">Search Parking</Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard/history">History</Nav.Link>
                  <Nav.Link as={NavLink} to="/dashboard/locations">All Locations</Nav.Link>
                  <Logout />
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
      <div>
        <Outlet />
      </div>
    </div>
  );
};
