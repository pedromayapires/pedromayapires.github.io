// GlobalContext.js
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [clientMap, setClientMap] = useState({
    1: { name: "Alice", status: "active" },
    2: { name: "Bob", status: "inactive" },
  });

  return (
    <GlobalContext.Provider value={{ clientMap, setClientMap }}>
      {children}
    </GlobalContext.Provider>
  );
};
