import React from "react";
import { Card } from "react-bootstrap";

const ViewLocationItem = (props) => {
  return (

    <Card style={{}}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">$ {props.dynamicPrice} / hr <br /></Card.Subtitle>
        <Card.Text>
          {props.availableLots} lots available
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ViewLocationItem;
