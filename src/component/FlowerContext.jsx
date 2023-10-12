import React, { createContext, useContext, useState } from 'react';

export const FlowerContext = createContext();

export function UserProvider({ children }) {
  const [flowerList, setFlowerList] = useState([]);

  const addFlower = (flower) => {
    setFlowerList([...flowerList, flower]);
  };

  return (
    <FlowerContext.Provider value={{ flowerList, addFlower }}>
      {children}
    </FlowerContext.Provider>
  );
}

export function useUserContext() {
  return useContext(FlowerContext);
}
