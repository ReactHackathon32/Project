import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { getHistory } from "../../API/getHistory";
import { ParkingHistoryItem } from "./ParkingHistoryItem";

export const ParkingHistoryDisplay = () => {
  const [history, setHistory] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const token = localStorage.getItem("token")
  const userId = localStorage.getItem("userId")

  useEffect(() => {
    getHistory(token, userId)
      .then((response) => {
        setHistory(response.data)
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ? <>Page is loading</> :
        <Container>
          {history.map(each => (
            <ParkingHistoryItem
              key={each.parkingId}
              parkingId={each.parkingId}
              carparkName={each.carpark.carparkName}
              basePrice={each.carpark.basePrice}
              chargePrice={each.price}
              startTime={each.startTime}
              endTime={each.endTime}
            />
          ))}
        </Container>}
    </>

  );
};
