import styled from "styled-components/macro";

import { ReactComponent as paper } from "../../images/icon-paper.svg";

export const PaperContainer = styled.div`
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
    background: linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%));
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
export const PaperIcon = styled(paper)`
  width: 36px;
  height: 59px;
  margin-top: -15px;
  background-position: center;
  background-size: cover;
`;
