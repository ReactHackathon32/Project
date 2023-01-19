import React from "react";
import { Button, Card } from "react-bootstrap";
export const NewParkingItem = ({ id, name, dynamicPrice, avail }) => {
  return (
    <>
      <h2 className="text-center mt-5 mb-4">NEW PARKING DETAILS</h2>
      <div className="map-image"></div>
      <h4 className="text-center mt-5 mb-3">Dynamic Pricing</h4>
      <div className="d-flex justify-content-center">
        <div
          className="d-flex justify-content-center rounded align-items-center"
          style={{ backgroundColor: "white", width: "300px", height: "150px" }}
        >
          <div className="pe-4">
            Ends At
            <br />
            (TIME)
          </div>
          <div
            style={{
              float: "left",
              height: "70px",
              width: "2px",
              backgroundColor: "black",
            }}
          ></div>
          <div className="ps-4">
            Cost
            <br />
            (PRICE)
          </div>
        </div>
      </div>
      {/* <Button className='me-2' variant='dark'>Ends At<br />(TIME)</Button>
                    <Button className='ms-2' variant='outline-dark'>Cost<br />(PRICE)</Button> */}
      <div className="text-center my-5">
        <h3>Carpark Name: {name}</h3>
        <h5 className="text-muted">Current Price: $ {dynamicPrice} / 30mins</h5>
        <h5>Available Lots: {avail}</h5>
        <Button variant="dark">Park Here</Button>
      </div>
    </>
  );
};
