"use client";

import { exerciseContextProvider } from "@/app/Context/ExerciseContext";
import { SortPlanContext, sortExercises } from "@/app/Context/SortPlan";
import { ExerciseType } from "@/app/Type/exerciseType";
import { Suspense, useContext } from "react";
import { toast } from "react-toastify";
import MayPlanBlank from "./MyPlanBlank";
import PlanCard from "./PlanCard";

const TodayPlan = () => {
  const { addPlan, setAddPlan } = useContext(exerciseContextProvider);
  const { sortBy } = useContext(SortPlanContext);
  const sortedPlan = sortExercises(addPlan, sortBy);

  const handleRemoveItem = ({ id }: { id: number }) => {
    const updatedPlan = addPlan.filter((item) => item.id !== id);

    setAddPlan(updatedPlan);
    toast.error("Item removeds");
  };

  return (
    <div>
      <Suspense
        fallback={
          <h3 className="w-full h-full flex items-center justify-center">
            Loading workouts…
          </h3>
        }
      >
        {sortedPlan.length > 0 ? (
          sortedPlan.map((item: ExerciseType) => (
            <PlanCard
              key={item.id}
              visivility="inline-block"
              item={item}
              handleRemoveItem={handleRemoveItem}
            />
          ))
        ) : (
          <MayPlanBlank />
        )}
      </Suspense>
    </div>
  );
};

export default TodayPlan;
