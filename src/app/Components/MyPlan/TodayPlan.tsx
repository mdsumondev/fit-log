"use client";

import { exerciseContextProvider } from "@/app/Context/ExerciseContext";
import { ExerciseType } from "@/app/Type/exerciseType";
import { useContext } from "react";
import MayPlanBlank from "./MyPlanBlank";
import PlanCard from "./PlanCard";

const TodayPlan = () => {
  const { addPlan } = useContext(exerciseContextProvider);

  return (
    <div>
      {addPlan.length > 0 ? (
        addPlan.map((item: ExerciseType, index: number) => (
          <PlanCard key={index} item={item} />
        ))
      ) : (
        <MayPlanBlank />
      )}
    </div>
  );
};

export default TodayPlan;
