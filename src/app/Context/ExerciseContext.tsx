"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

import { ExerciseType } from "../Type/exerciseType";

interface Actions {
  addPlan: ExerciseType[];
  setAddPlan: React.Dispatch<React.SetStateAction<ExerciseType[]>>;

  savePlan: ExerciseType[];
  setSavePlans: React.Dispatch<React.SetStateAction<ExerciseType[]>>;
}

export const exerciseContextProvider = createContext<Actions | null>(null);

const ExerciseContext = ({ children }: { children: ReactNode }) => {
  const [addPlan, setAddPlan] = useState<ExerciseType[]>([]);
  const [savePlan, setSavePlans] = useState<ExerciseType[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const myPlan = localStorage.getItem("Plan");

    if (myPlan) {
      try {
        const parsedPlan: ExerciseType[] = JSON.parse(myPlan);

        setAddPlan(parsedPlan);
      } catch (error) {
        console.error("Failed to parse saved plan:", error);
      }
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("Plan", JSON.stringify(addPlan));
    }
  }, [addPlan, isLoaded]);

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
