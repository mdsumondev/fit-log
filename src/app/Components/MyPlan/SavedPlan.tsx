import { exerciseContextProvider } from "@/app/Context/ExerciseContext";
import { ExerciseType } from "@/app/Type/exerciseType";
import { Suspense, useContext } from "react";
import MayPlanBlank from "./MyPlanBlank";
import PlanCard from "./PlanCard";

const SavedPlanTab = () => {
  const { savePlan } = useContext(exerciseContextProvider);

  return (
    <div>
      <Suspense fallback={<h1> Looding.... </h1>}>
        {savePlan.length > 0 ? (
          savePlan.map((item: ExerciseType, index: number) => (
            <PlanCard key={index} visivility="hidden" item={item} />
          ))
        ) : (
          <MayPlanBlank />
        )}
      </Suspense>
    </div>
  );
};

export default SavedPlanTab;
