import React from "react";
import { Card, Button } from "react-bootstrap";

const GroupCard = ({ title, description, image }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Join</Button>
      </Card.Body>
    </Card>
  );
};

export default GroupCard;
