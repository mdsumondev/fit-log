"use client";

import { exerciseContextProvider } from "@/app/Context/ExerciseContext";
import { ExerciseType } from "@/app/Type/exerciseType";
import { Suspense, useContext } from "react";
import MayPlanBlank from "./MyPlanBlank";
import PlanCard from "./PlanCard";

const TodayPlan = () => {
  const { addPlan } = useContext(exerciseContextProvider);

  return (
    <div>
      <Suspense fallback={<h1> Looding.... </h1>}>
        {addPlan.length > 0 ? (
          addPlan.map((item: ExerciseType, index: number) => (
            <PlanCard key={index} visivility="inline-block" item={item} />
          ))
        ) : (
          <MayPlanBlank />
        )}
      </Suspense>
    </div>
  );
};

export default TodayPlan;
