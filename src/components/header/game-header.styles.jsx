import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../../images/logo.svg";

export const HeaderLogo = styled(Logo)`
  height: auto;
  width: max-content;
`;

export const GameHeaderContainer = styled.div`
  border: solid 3px #ffffff77;
  border-radius: 8px;
  height: 120px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderScore = styled.div`
  width: 75px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
`;
export const ScoreTile = styled.div`
  color: hsl(229, 64%, 46%);
  font-size: 13px;
  font-weight: 500;
`;
export const Score = styled.div`
  font-size: 35px;
  margin-top: -6px;
  font-weight: 600;

  color: hsl(229, 25%, 31%);
`;
