import React from "react";
import { dummyOngoingParking } from "../../Datas/CompletedParking";
import { ParkingHistoryItem } from "./ParkingHistoryItem";

export const ParkingHistoryDisplay = () => {
  return (
    <div>
      {dummyOngoingParking.map(each => (
        <ParkingHistoryItem
          key={each.parkingId}
          parkingId={each.parkingId}
          userId={each.user.userId}
          carparkId={each.carpark.carparkId}
          price={each.price}
        />
      ))}
    </div>
  );
};
