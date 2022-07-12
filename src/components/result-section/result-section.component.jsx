import React, { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../context/playerContext";
import { ResultContext } from "../../context/resultContext";
import Button from "../button/button.component";
import {
  PlayAgain,
  ResultViewContainer,
  RoundResult,
} from "./result-section.styles";

const ResultView = () => {
  // const { playerOption, ChangePlayerOption, updateBotOption } =
  //   useContext(PlayerContext);
  const {
    showResult,
    ChangeResultState,
    getResult,
    result,
    score,
    updateScore,
  } = useContext(ResultContext);
  const [roundrResult, setroundrResult] = useState("");

  useEffect(() => {
    if (!result) return;
    setroundrResult(result);
    ChangeResultState(true);
    if (result === "you win") {
      updateScore(score++);
    }
  }, [result]);

  useEffect(() => {
    if (result === "You win") {
      const newScore = score + 1;
      updateScore(newScore);
    }
  }, [roundrResult]);

  const restart = () => {
    ChangeResultState(false);
  };

  return (
    <>
      {showResult && (
        <ResultViewContainer>
          <RoundResult> {roundrResult}</RoundResult>
          <Button handleClick={() => restart()} type="fill">
            Play Again
          </Button>
        </ResultViewContainer>
      )}
    </>
  );
};

export default ResultView;
