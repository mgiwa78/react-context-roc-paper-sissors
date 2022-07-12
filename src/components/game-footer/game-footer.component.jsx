import { useContext } from "react";
import { RulesContext } from "../../context/rulesContext";
import Button from "../button/button.component";
import { GameFooterConteiner } from "./game-footer.styles";

const GameFooter = () => {
  const { state, setRulesState } = useContext(RulesContext);
  return (
    <GameFooterConteiner>
      <Button handleClick={() => setRulesState(true)}>Rules</Button>
    </GameFooterConteiner>
  );
};

export default GameFooter;
