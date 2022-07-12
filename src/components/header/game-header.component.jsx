import { useContext, useEffect, useState } from "react";
import { ResultContext } from "../../context/resultContext";
import {
  GameHeaderContainer,
  HeaderScore,
  LogoContainer,
  Score,
  ScoreTile,
} from "./game-header.styles";
import { HeaderLogo } from "./game-header.styles";

const GameHeader = () => {
  const { score } = useContext(ResultContext);

  const [displayScore, setDisplayScore] = useState(0);
  useEffect(() => {
    setDisplayScore(score);
  }, [score]);
  return (
    <GameHeaderContainer>
      {/* <LogoContainer> */}
      <HeaderLogo viewBox="0 0 160 100" />
      {/* </LogoContainer> */}
      <HeaderScore>
        <ScoreTile>Score</ScoreTile>
        <Score>{displayScore}</Score>
      </HeaderScore>
    </GameHeaderContainer>
  );
};

export default GameHeader;
