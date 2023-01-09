import { createContext, useState } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filteredSize, setFilteredSize] = useState(0);

  return (
    <FilterContext.Provider value={{ filteredSize, setFilteredSize }}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;
