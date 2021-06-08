import { createContext, useContext, useState } from "react";

export const SelectedCategoryContext = createContext();

export default function SelectedCategoryContextProvider({ children }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <SelectedCategoryContext.Provider
      value={{ selectedCategory, setSelectedCategory }}
    >
      {children}
    </SelectedCategoryContext.Provider>
  );
}

export const useSelectedCategory = () => useContext(SelectedCategoryContext);
