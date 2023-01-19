import React, { useEffect, useState } from "react";
import ViewLocationItem from "./ViewLocationItem";
import { Row, Col, Container } from "react-bootstrap";
import { getCarparks } from "../../API/getCarparks";
import { AiOutlineEye } from "react-icons/ai"

const ViewLocationDisplay = () => {
  const [carparks, setCarparks] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getCarparks()
      .then((response) => {
        console.log("response.data in ViewLocationDisplay:", response.data);
        setCarparks(response.data)
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading ? <div>Page is Still Loading</div> :
        <div>
          <Container className="my-5">
            <h2 className="my-4 text-center"><big><AiOutlineEye /></big> All Parking Locations</h2>
            <Row className='g-4'>
              {carparks.map((carpark) => (
                <Col xs={6} md={4} lg={3}>
                  <ViewLocationItem
                    name={carpark.carparkName}
                    basePrice={carpark.basePrice}
                    dynamicPrice={carpark.dynamicPrice}
                    totalLots={carpark.totalLots}
                    availableLots={carpark.availableLots}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      }
    </>


  );
};

export default ViewLocationDisplay;
