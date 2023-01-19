import React from "react";
import dummyCarparks from "../../Datas/Carpark";
import ViewLocationItem from "./ViewLocationItem";
import { Row, Col, Container } from "react-bootstrap";

const ViewLocationDisplay = () => {
  return (
    <div>
      <Container className="my-5">
        <h2 className="my-4 text-center">All parking locations available</h2>
      <Row className='g-4'>
        {dummyCarparks.map((dummyCarpark) => (
          <Col xs={6} md={4} lg={3}>
            <ViewLocationItem
              name={dummyCarpark.carparkName}
              basePrice={dummyCarpark.basePrice}
              dynamicPrice={dummyCarpark.dynamicPrice}
              totalLots={dummyCarpark.totalLots}
              availableLots={dummyCarpark.availableLots}
            />
          </Col>
        ))}
      </Row>
      </Container>
    </div>
  );
};

export default ViewLocationDisplay;
