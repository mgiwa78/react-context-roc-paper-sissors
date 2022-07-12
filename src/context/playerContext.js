import { createContext } from "react";
import { useState } from "react";
import Rock from "../components/rock/rock.component";

export const PlayerContext = createContext();

const PlayerProvider = ({ children }) => {
  const [playerOption, setPlayerOption] = useState(undefined);
  const [botOption, setbotOption] = useState(undefined);
  const ChangePlayerOption = (state) => {
    setPlayerOption(state);
  };
  const updateBotOption = () => {
    const num = Math.floor(Math.random() * 2) + 1;
    setbotOption({ 1: "rock", 2: "sissors", 3: "paper" }[num]);
  };
  return (
    <PlayerContext.Provider
      value={{ updateBotOption, botOption, playerOption, ChangePlayerOption }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
