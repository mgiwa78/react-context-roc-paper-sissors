import styled from "styled-components/macro";
import { ReactComponent as ruleSVG } from "../../images/image-rules.svg";
import { ReactComponent as exitSVG } from "../../images/icon-close.svg";

export const GameRulesContainer = styled.div`
  position: absolute;
  z-index: 10;
  background-color: white;
  width: 100vw;
  height: 100vh;
  padding: 40px 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  align-content: center;
  bottom: 0;
  left: 0;
`;
export const RulesTitle = styled.span`
  font-size: 30px;
  text-transform: uppercase;
  color: hsl(229, 25%, 31%);
  font-weight: 700;
`;
export const Rules = styled(ruleSVG)`
  width: 325px;
  height: 505px;
`;
export const RulesExit = styled(exitSVG)`
  color: black;
  fill: black;
`;
