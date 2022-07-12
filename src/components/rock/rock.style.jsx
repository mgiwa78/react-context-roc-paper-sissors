import styled, { css } from "styled-components/macro";

import { ReactComponent as rock } from "../../images/icon-rock.svg";
import { ReactComponent as paper } from "../../images/icon-paper.svg";
import { ReactComponent as scissor } from "../../images/icon-scissors.svg";

export const PlayerContainer = styled.div`
  &::before {
    width: 100px;
    height: 100px;
    position: absolute;
    content: " ";
    z-index: -4;
    top: 0;
    left: 50%;
    transform: translate(-50%, -53px);
    border-radius: 100px;
    background: linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%));
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
    transform: translate(-50%, -40px);
  }

  position: relative;

  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  ${({ result }) => {
    return result === "result"
      ? css`
          margin: 0px !important;
        `
      : css`
          margin-right: 130px !important;
        `;
  }}
`;
export const PlayerIcon = styled(rock)`
  width: 36px;
  height: 36px;
  margin-top: -23px;
  background-position: center;
  background-size: cover;
`;
