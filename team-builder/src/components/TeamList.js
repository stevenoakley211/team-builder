import React from "react";
import styled from 'styled-components'

const Player = styled.div`
  background: skyblue;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
  width: 100%;
  max-width: 250px;
  padding: 10px;
  margin: 16px auto;
  text-align: left;
`
const TeamList = props => {
  return (
    <div>
      {props.players.map(player => (
        <Player key={player.id}>
          <p>{player.name}</p>
          <p>{player.email}</p>
          <p>{player.role}</p>
        </Player>
      ))}
    </div>
  );
};

export default TeamList;
