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

  const [planLoaded, setPlanLoaded] = useState(false);
  const [savedPlanLoaded, setSavedPlanLoaded] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("Plan");

    if (storedPlan) {
      try {
        const parsedPlan: ExerciseType[] = JSON.parse(storedPlan);
        setAddPlan(parsedPlan);
      } catch (error) {
        console.error("Failed to parse Plan:", error);
      }
    }

    setPlanLoaded(true);
  }, []);

  useEffect(() => {
    if (!planLoaded) return;

    localStorage.setItem("Plan", JSON.stringify(addPlan));
  }, [addPlan, planLoaded]);

  useEffect(() => {
    const storedSavedPlan = localStorage.getItem("Saved");

    if (storedSavedPlan) {
      try {
        const parsedSavedPlan: ExerciseType[] = JSON.parse(storedSavedPlan);

        setSavePlans(parsedSavedPlan);
      } catch (error) {
        console.error("Failed to parse Saved:", error);
      }
    }

    setSavedPlanLoaded(true);
  }, []);

  useEffect(() => {
    if (!savedPlanLoaded) return;

    localStorage.setItem("Saved", JSON.stringify(savePlan));
  }, [savePlan, savedPlanLoaded]);

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
