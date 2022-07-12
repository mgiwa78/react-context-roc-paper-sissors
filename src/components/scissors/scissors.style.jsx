import styled from "styled-components/macro";

import { ReactComponent as scissor } from "../../images/icon-scissors.svg";

export const ScissorsContainer = styled.div`
  &::before {
    width: 100px;
    height: 100px;
    position: absolute;
    content: " ";
    z-index: -4;
    top: 0;
    left: 50%;
    transform: translate(-50%, -30px);
    border-radius: 100px;
    background: linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%));
  }
  &::after {
    width: 70px;
    height: 70px;
    position: absolute;
    border-radius: 100px;
    content: " ";
    border-top: 4px solid #b9b9b9;
    z-index: -3;
    background-color: white;
    top: 0;
    left: 50%;
    transform: translate(-50%, -18px);
  }

  position: relative;
  border-radius: 100px;
  display: flex;
  z-index: 2;
  margin-top: -20px;
  justify-content: center;
  align-items: center;
`;
export const ScissorsIcon = styled(scissor)`
  width: 36px;
  height: 49px;
  margin-top: -10px;
  background-position: center;
  background-size: cover;
`;
