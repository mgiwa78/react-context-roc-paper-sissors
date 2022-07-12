import { useContext } from "react";
import { PlayerContext } from "../../context/playerContext";
import { ResultContext } from "../../context/resultContext";
import Paper from "../paper/paper.component";
import Rock from "../rock/rock.component";
import Scissors from "../scissors/scissors.component";
import {
  HouseOption,
  OptionTitle,
  PlayerOption,
  ShowResultContainer,
} from "./show-result.styles";

const ShowResult = () => {
  const { showResult, ChangeResultState, getResult, result } =
    useContext(ResultContext);

  const { playerOption, ChangePlayerOption, botOption, updateBotOption } =
    useContext(PlayerContext);

  const getOption = (option) => {
    console.log("set", option);
    switch (option) {
      case "rock":
        return <Rock result={"result"} />;
      case "sissors":
        return <Scissors />;
      case "paper":
        return <Paper />;
      default:
        return "";
    }
  };

  return (
    <ShowResultContainer>
      <div className=""></div>
      <PlayerOption>
        {getOption(playerOption)}
        <OptionTitle>You Picked</OptionTitle>
      </PlayerOption>
      <HouseOption>
        {getOption(botOption)}
        <OptionTitle>The House Picked</OptionTitle>
      </HouseOption>
    </ShowResultContainer>
  );
};

export default ShowResult;
