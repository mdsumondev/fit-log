"use client";

import { exerciseContextProvider } from "@/app/Context/ExerciseContext";
import { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import { toast } from "react-toastify";

const SaveForLater = ({ saveExercise }) => {
  const { savePlan, setSavePlans } = useContext(exerciseContextProvider);

  const handleSavePlan = () => {
    const alreadyAdded = savePlan.find((plan) => plan.id === saveExercise.id);

    if (!alreadyAdded) {
      setSavePlans([...savePlan, saveExercise]);
      toast.success(`${saveExercise.name} save successfully`);
    } else {
      toast.error(`${saveExercise.name} already save for later`);
    }
  };

  return (
    <button
      onClick={() => handleSavePlan()}
      className="bg-transparent border border-[#374151FF]  text-sm font-bold text-white px-[28px] py-[18px] rounded-xl flex items-center justify-center gap-1"
    >
      <CiBookmark />
      Save for later
    </button>
  );
};

export default SaveForLater;
