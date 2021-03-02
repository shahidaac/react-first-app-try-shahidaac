import React, { useState, useEffect } from "react";
import TeamCart from "../teamCart/TeamCart";
import Players from "../players/Players";
import Row from "react-bootstrap/Row";

const PlayersData = () => {
  const [PlayersData, setPlayersData] = useState([]);
  useEffect(() => {
    fetch("./fakeData/FakePlayerData.json")
      .then((res) => res.json())
      .then((data) => setPlayersData(data));
  }, []);

  const [select, setSelect] = useState([]);
  const handlePlayer = (player) => {
    const newPlayer = [...select, player];
    setSelect(newPlayer);
  };
  return (
    <div className="Container">
      <TeamCart select={select}></TeamCart>
      <Row>
        {PlayersData.map((player) => (
          <Players
            key={player.id}
            handlePlayer={handlePlayer}
            player={player}
          ></Players>
        ))}
      </Row>
    </div>
  );
};

export default PlayersData;
