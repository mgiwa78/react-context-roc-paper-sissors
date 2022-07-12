import { createContext } from "react";
import { useState } from "react";

export const RulesContext = createContext();

const RulesProvider = ({ children }) => {
  const [state, setState] = useState(false);
  const setRulesState = (state) => setState(state);
  return (
    <RulesContext.Provider value={{ state, setRulesState }}>
      {children}
    </RulesContext.Provider>
  );
};

export default RulesProvider;
