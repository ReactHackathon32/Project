import React, { Dashboard } from "react";
import NewParking from "../Components/Dashboard/NewParking";

const dummyCarpark = [
  {
    carparkId: "1",
    carparkName: "AE15",
    basePrice: "3.6",
    dynamicPrice: "4.5",
    totalLots: "300",
    availableLots: "28",
  },
  {
    carparkId: "1",
    carparkName: "HE12",
    basePrice: "3.6",
    dynamicPrice: "4.0",
    totalLots: "300",
    availableLots: "28",
  },
  {
    carparkId: "1",
    carparkName: "HE12",
    basePrice: "3.6",
    dynamicPrice: "4.2",
    totalLots: "300",
    availableLots: "28",
  },
  {
    carparkId: "1",
    carparkName: "HE12",
    basePrice: "3.6",
    dynamicPrice: "4.2",
    totalLots: "300",
    availableLots: "28",
  },
];

class Carpark extends Dashboard {
  render() {
    return (
      <div>
        <NewParking dummyCarpark={dummyCarpark} />
      </div>
    );
  }
}

export default Carpark;
