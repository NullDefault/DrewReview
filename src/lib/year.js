import { createContext, useContext, useState } from "react";

const yearContext = createContext(undefined);

export function ProvideYear({ children }) {
  const year = useProvideYear();
  return <yearContext.Provider value={year}>{children}</yearContext.Provider>;
}

export const useYear = () => {
  return useContext(yearContext);
};

function useProvideYear() {
  const [year, setYear] = useState(2021);

  return {
    year,
    setYear,
  };
}
