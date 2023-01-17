import React from "react";
import { useLocation } from "react-router-dom";
import dummyCarparks from "../../Datas/Carpark";
import { NewParkingItem } from "./NewParkingItem";

export const NewParkingDisplay = () => {
  // Extracting the selected carparkID from prev path/route
  const location = useLocation()
  const curCarparkId = location.state.carpark
  console.log("useLocation", location);
  console.log("curCarParkId", curCarparkId);

  // extract the carpark data object from dataSource

  const curCarpark = dummyCarparks.filter(carpark => carpark.carparkId == curCarparkId)
  console.log("curCarpark", curCarpark);

  return (
    <div>
      {curCarpark.map(carpark => (
        <NewParkingItem
          key={carpark.carparkId}
          id={carpark.id}
          name={carpark.carparkName}
          dynamicPrice={carpark.dynamicPrice}
          avail={carpark.availableLots}
        />
      ))}
    </div>
  )
}
