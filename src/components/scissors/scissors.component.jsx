import React from "react";
import { ScissorsContainer, ScissorsIcon } from "./scissors.style";

const Scissors = ({ handleClick, id }) => {
  return (
    <ScissorsContainer onClick={handleClick}>
      <ScissorsIcon id={id} viewBox="0 0 50 45" />
    </ScissorsContainer>
  );
};

export default Scissors;
