import React from "react";
import { PaperContainer, PaperIcon } from "./paper.style";

const Paper = ({ handleClick, id }) => {
  return (
    <PaperContainer onClick={handleClick}>
      <PaperIcon id={id} viewBox="0 0 50 45" />
    </PaperContainer>
  );
};

export default Paper;
