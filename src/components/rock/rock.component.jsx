import React from "react";
import { PlayerContainer, PlayerIcon } from "./rock.style";

const Rock = ({ handleClick, id, result }) => {
  return (
    <PlayerContainer onClick={handleClick} result={result}>
      <PlayerIcon id={id} viewBox="0 0 50 45" />
    </PlayerContainer>
  );
};

export default Rock;
