import React from "react";

const ViewLocationItem = (props) => {
  return (
    <div>
      <h1>Carpark Name: {props.name}</h1>
      <h3>Current Price: {props.dynamicPrice}</h3>
      <p>Available Slots: {props.availableLots}</p>
      <p style={{ border: "1px solid black" }}></p>
    </div>
  );
};

export default ViewLocationItem;
