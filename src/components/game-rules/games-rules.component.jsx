import React, { useContext } from "react";
import { RulesContext } from "../../context/rulesContext";
import {
  GameRulesContainer,
  Rules,
  RulesExit,
  RulesTitle,
} from "./games-rules.styles";

const GameRules = () => {
  const { state, setRulesState } = useContext(RulesContext);
  console.log(state);
  return (
    <GameRulesContainer style={{ display: `${state ? "flex" : "none"}` }}>
      <RulesTitle>Rules</RulesTitle>
      <Rules viewBox="0 0 307 220" />
      <RulesExit onClick={() => setRulesState(false)} />
    </GameRulesContainer>
  );
};

export default GameRules;
