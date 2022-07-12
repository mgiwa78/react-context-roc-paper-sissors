import GameRules from "../game-rules/games-rules.component";
import PickOption from "../pick-option/pick-option.component";
import { PickBackground } from "../pick-option/pick-option.styles";
import ResultView from "../result-section/result-section.component";
import { GameBodyContainer } from "./game-body.styles";

const GameBody = () => {
  return (
    <GameBodyContainer>
      <GameRules />
      <PickOption />
      <ResultView />
    </GameBodyContainer>
  );
};

export default GameBody;
