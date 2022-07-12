import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GameHome from "./components/game-home/game-home.component";
import RulesProvider from "./context/rulesContext";
import GameRules from "./components/game-rules/games-rules.component";
import PlayerProvider from "./context/playerContext";
import ResultProvider, { ResultContext } from "./context/resultContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RulesProvider>
      <ResultProvider>
        <PlayerProvider>
          <GameHome />
        </PlayerProvider>
      </ResultProvider>
    </RulesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
