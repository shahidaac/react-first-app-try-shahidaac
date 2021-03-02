import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

const TeamCart = (props) => {
  const selectPlayer = props.select;
  let totalPlayers = 0;
  for (let k = 0; k < selectPlayer.length; k++) {
    const payment = selectPlayer[k];
    totalPlayers = totalPlayers + payment.salary;
  }
  return (
    <div className="teamCart">
      <Row>
        <Col md={4}>
          <h3>Selected players: {selectPlayer.length}</h3>
        </Col>
        <Col md={4}>
          <h3>Salary of the players: ${totalPlayers}</h3>
        </Col>
        <Col md={4}>
          <h4>
            I have selected <FontAwesomeIcon icon={faUsers} /> :
          </h4>
          <ol>
            {selectPlayer.map((player) => (
              <li>
                <span>{player.name}</span>
                <span> & Salary(in millions)$: {player.salary} </span>
              </li>
            ))}
          </ol>
        </Col>
      </Row>
    </div>
  );
};

export default TeamCart;
