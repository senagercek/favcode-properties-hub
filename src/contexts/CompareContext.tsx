import { createContext, useContext, useState, ReactNode } from "react";
import type { Property } from "@/data/properties";
import { properties } from "@/data/properties";

interface CompareContextType {
  compareIds: number[];
  toggleCompare: (id: number) => void;
  isComparing: (id: number) => boolean;
  getCompareProperties: () => Property[];
  clearCompare: () => void;
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareIds, setCompareIds] = useState<number[]>([]);

  const toggleCompare = (id: number) => {
    setCompareIds((prev) =>
      prev.includes(id)
        ? prev.filter((c) => c !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const isComparing = (id: number) => compareIds.includes(id);

  const getCompareProperties = () =>
    properties.filter((p) => compareIds.includes(p.id));

  const clearCompare = () => setCompareIds([]);

  return (
    <CompareContext.Provider value={{ compareIds, toggleCompare, isComparing, getCompareProperties, clearCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
};
