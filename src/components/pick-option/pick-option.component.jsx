import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../context/playerContext";
import { ResultContext } from "../../context/resultContext";
import Paper from "../paper/paper.component";
import Rock from "../rock/rock.component";
import Scissors from "../scissors/scissors.component";
import ShowResult from "../show-result/show-result.component";
import { ShowResultContainer } from "../show-result/show-result.styles";
import { PickBackground, PickOptionContainer } from "./pick-option.styles";

const PickOption = () => {
  const { showResult, ChangeResultState, getResult, result } =
    useContext(ResultContext);

  const { playerOption, ChangePlayerOption, botOption, updateBotOption } =
    useContext(PlayerContext);

  const [player, setPlayerTurn] = useState(null);
  const [bot, setBotTurn] = useState(null);
  const [resultShow, setResultShow] = useState(false);

  useEffect(() => {
    setResultShow(showResult);
  }, [showResult]);

  useEffect(() => {
    if (!player) return;

    ChangePlayerOption(player);
    setPlayerTurn(null);
    updateBotOption();
  }, [player]);

  useEffect(() => {
    // if (botOption !== undefined) {
    //   getResult(playerOption, botOption);
    // }
    if (!botOption) return;
    setBotTurn(botOption);
    getResult(playerOption, botOption);
    ChangeResultState(true);

    console.log(botOption);
  }, [botOption]);
  // useEffect(() => {
  //   console.log(result);
  // }, [result]);
  return (
    <>
      {resultShow ? (
        <ShowResult bot={bot} player={player}></ShowResult>
      ) : (
        <PickOptionContainer>
          <PickBackground viewBox="0 0 330 250" />
          <Rock
            handleClick={() => {
              setPlayerTurn("rock");
            }}
            result="result2"
          />
          <Scissors handleClick={() => setPlayerTurn("sissors")} />
          <Paper handleClick={() => setPlayerTurn("paper")} />{" "}
        </PickOptionContainer>
      )}
    </>
  );
};

export default PickOption;
