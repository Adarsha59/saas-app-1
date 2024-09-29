// TotalCredit.tsx
import { createContext } from "react";

interface TotalUsageContextType {
  totalUsage: number;
  setTotalUsage: React.Dispatch<React.SetStateAction<number>>;
}

// Set default value as null or a default state
export const TotalUsageContext = createContext<
  TotalUsageContextType | undefined
>(undefined);
