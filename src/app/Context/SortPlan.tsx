"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import { ExerciseType } from "../Type/exerciseType";

type SortPlanContextType = {
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

export const SortPlanContext = createContext<SortPlanContextType>({
  sortBy: "Duration",
  setSortBy: () => {},
});

export const sortExercises = (exercises: ExerciseType[], sortBy: string) => {
  const key =
    sortBy === "Calories"
      ? "caloriesBurned"
      : sortBy === "Rating"
        ? "rating"
        : "duration";

  return [...exercises].sort((first, second) => second[key] - first[key]);
};

const SortPlan = ({ children }: { children: ReactNode }) => {
  const [sortBy, setSortBy] = useState<string>("Duration");

  const dataPick: SortPlanContextType = {
    sortBy,
    setSortBy,
  };

  return (
    <SortPlanContext.Provider value={dataPick}>
      {children}
    </SortPlanContext.Provider>
  );
};

export default SortPlan;
