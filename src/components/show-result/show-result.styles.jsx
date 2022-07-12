import styled from "styled-components/macro";
import Paper from "../paper/paper.component";
import Rock from "../rock/rock.component";
export const ShowResultContainer = styled.div`
  height: 200px;
  margin-top: 100px;
  width: 300px;
  max-width: 360px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const PlayerOption = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  width: 120px;
  height: 90px;
  position: relative;
`;
export const HouseOption = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  position: relative;

  width: 140px;
`;
export const OptionTitle = styled.span`
  text-transform: uppercase;
  height: max-content;
  position: absolute;
  color: white;
  width: 140px;
  right: 50%;
  transform: translate(50%);
  bottom: 0px;
`;
export const HouseTitle = styled(OptionTitle)`
  margin-top: 20px !important;
`;
export const PlayerTitle = styled(OptionTitle)`
  margin-top: 20px !important;
`;

export const RockResult = styled(Rock)``;
export const PaperResult = styled(Paper)``;
