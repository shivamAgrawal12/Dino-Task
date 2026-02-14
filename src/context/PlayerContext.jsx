import { createContext, useState } from "react";

export const PlayerContext = createContext(null);

export function PlayerProvider({ children }) {

  const [current, setCurrent] = useState(null);
  const [category, setCategory] = useState(null);
  const [mini, setMini] = useState(false);

  const value = {
    current,
    setCurrent,
    category,
    setCategory,
    mini,
    setMini,
  };

  return (
    <PlayerContext.Provider value={value}>
      {children}
    </PlayerContext.Provider>
  );
}
