import styled from "styled-components/macro";

import { ReactComponent as BGIcon } from "../../images/bg-triangle.svg";
// import { ReactComponent as rock } from "./icon-rock.svg";
// import { ReactComponent as paper } from "./icon-paper.svg";
// import { ReactComponent as scissor } from "./icon-scissors.svg";

export const PickOptionContainer = styled.div`
  height: 240px;
  margin-top: 20px;
  width: 230px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
export const PickBackground = styled(BGIcon)`
  width: 200px;
  height: 200px;
  position: absolute;
`;

export const UserOption = styled.div`
  position: absolute;
`;

export const UserOptionSvg = styled.div``;
export const RockSVG = styled.div`
  width: 60px;
  height: 60px;
`;
export const ScissorsSVG = styled.div`
  width: 50px;
  height: 50px;
`;
export const PaperSVG = styled.div`
  width: 50px;
  height: 50px;
`;
