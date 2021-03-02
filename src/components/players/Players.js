import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Players.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

const Players = (props) => {
  const { pic, name, salary } = props.player;
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Salary(in millions)$: {salary} </p>
          </Card.Text>
          <Button
            onClick={() => props.handlePlayer(props.player)}
            variant="outline-secondary"
          >
            <FontAwesomeIcon icon={faFutbol} /> <span>Select player</span>
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Players;
