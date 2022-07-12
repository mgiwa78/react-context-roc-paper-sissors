import GameBody from "../game-body/game-body.component";
import GameFooter from "../game-footer/game-footer.component";
import GameHeader from "../header/game-header.component";
import { GameHomeContainer } from "./game-home.styles";

const GameHome = () => {
  return (
    <GameHomeContainer>
      <GameHeader />
      <GameBody />
      <GameFooter />
    </GameHomeContainer>
  );
};

export default GameHome;
