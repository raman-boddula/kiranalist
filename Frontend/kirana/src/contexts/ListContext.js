import React from "react";

export const ListContext = React.createContext();

export const ListContextProvider = ({ children }) => {
  const [list, setList] = React.useState([]);
  const handleList = (value) => {
    setList([...list, value]);
  };
  return (
    <ListContext.Provider value={{ list, handleList }}>
      {children}
    </ListContext.Provider>
  );
};
