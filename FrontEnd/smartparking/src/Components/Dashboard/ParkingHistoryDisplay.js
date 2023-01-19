import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getHistory } from "../../API/getHistory";
import { ParkingHistoryItem } from "./ParkingHistoryItem";
import { MdHistory} from 'react-icons/md';

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
        <Container className="my-5">
          <h2 className="my-4 text-center"><big><MdHistory /></big> My Parking History</h2>
          <Row className='g-4'>

          
          {history.map(each => (
            <Col xs={6} md={4} lg={3}>
            <ParkingHistoryItem
              key={each.parkingId}
              parkingId={each.parkingId}
              carparkName={each.carpark.carparkName}
              basePrice={each.carpark.basePrice}
              chargePrice={each.price}
              startTime={each.startTime}
              endTime={each.endTime}
            />
            </Col>
          ))}
          </Row>
        </Container>}
    </>

  );
};
