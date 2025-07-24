import React from "react";
import GroupCard from "./GroupCard";
import { Row, Col } from "react-bootstrap";

const groups = [
  {
    id: 1,
    title: "Music Lovers",
    description: "A group for those who love music.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 2,
    title: "Fitness Freaks",
    description: "Workout and stay healthy together.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 3,
    title: "Book Club",
    description: "Let’s read and discuss books.",
    image: "https://via.placeholder.com/300x150",
  },
  {
    id: 4,
    title: "Travel Enthusiasts",
    description: "Explore the world with us.",
    image: "https://via.placeholder.com/300x150",
  },
];

const GroupList = () => (
  <Row>
    {groups.map((group) => (
      <Col xs={12} sm={6} lg={4} className="mb-4" key={group.id}>
        <GroupCard {...group} />
      </Col>
    ))}
  </Row>
);

export default GroupList;
