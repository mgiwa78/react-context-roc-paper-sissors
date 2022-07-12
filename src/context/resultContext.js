import { createContext } from "react";
import { useState } from "react";

export const ResultContext = createContext();

const ResultProvider = ({ children }) => {
  const [showResult, setResultState] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const ChangeResultState = (state) => setResultState(state);
  const updateScore = (newScore) => {
    console.log(newScore);
    setScore(newScore);
  };
  const getResult = (playerOption, botOption) => {
    if (playerOption === "rock") {
      if (botOption === "sissors") {
        setResult("You win");
      }
      if (botOption === "paper") {
        setResult("You lose");
      }
    }
    if (playerOption === "paper") {
      if (botOption === "sissors") {
        setResult("You lose");
      }
      if (botOption === "rock") {
        setResult("You win");
      }
    }
    if (playerOption === "sissors") {
      if (botOption === "rock") {
        setResult("You lose");
      }
      if (botOption === "paper") {
        setResult("You win");
      }
    }
    if (botOption === playerOption) {
      setResult("draw");
    }
  };
  return (
    <ResultContext.Provider
      value={{
        getResult,
        score,
        updateScore,
        result,
        showResult,
        ChangeResultState,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export default ResultProvider;
