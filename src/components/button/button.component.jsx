import React from "react";
import { Btn } from "./button.style";

const Button = ({ handleClick, type, children }) => {
  return (
    <Btn onClick={handleClick} type={type}>
      {children}
    </Btn>
  );
};

export default Button;
