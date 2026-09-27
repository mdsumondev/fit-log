import { exerciseContextProvider } from "@/app/Context/ExerciseContext";
import { ExerciseType } from "@/app/Type/exerciseType";
import { Suspense, useContext } from "react";
import { toast } from "react-toastify";
import MayPlanBlank from "./MyPlanBlank";
import PlanCard from "./PlanCard";

const SavedPlanTab = () => {
  const { savePlan, setSavePlans } = useContext(exerciseContextProvider);

  const handleRemoveItem = ({ id }: { id: number }) => {
    const updatedPlan = savePlan.filter((item) => item.id !== id);

    setSavePlans(updatedPlan);
    toast.error("Item removeds");
  };

  return (
    <div>
      <Suspense fallback={<h1> Looding.... </h1>}>
        {savePlan.length > 0 ? (
          savePlan.map((item: ExerciseType, index: number) => (
            <PlanCard
              key={index}
              visivility="hidden"
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

export default SavedPlanTab;
