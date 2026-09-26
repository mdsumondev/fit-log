"use client";
import { createContext, ReactNode, useState } from "react";

interface Actions {
  addPlan: unknown[];
  setAddPlan: React.Dispatch<React.SetStateAction<unknown[]>>;
  savePlan: unknown[];
  setSavePlans: React.Dispatch<React.SetStateAction<unknown[]>>;
}

export const exerciseContextProvider = createContext<Actions | null>(null);

const ExerciseContext = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<unknown[]>([]);
  const [savePlan, setSavePlans] = useState<unknown[]>([]);

  const actions: Actions = {
    addPlan,
    setAddPlan,
    savePlan,
    setSavePlans,
  };

  return (
    <exerciseContextProvider.Provider value={actions}>
      {children}
    </exerciseContextProvider.Provider>
  );
};

export default ExerciseContext;
