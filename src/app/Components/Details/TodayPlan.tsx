"use client";

import { exerciseContextProvider } from "@/app/Context/ExerciseContext";
import { useContext } from "react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { toast } from "react-toastify";

const TodayPlan = ({ planExercise }) => {
  const { addPlan, setAddPlan } = useContext(exerciseContextProvider);

  const handleplan = () => {
    const alreadyAdded = addPlan.find((plan) => plan.id === planExercise.id);

    if (!alreadyAdded) {
      setAddPlan([...addPlan, planExercise]);
      toast.success(`Added to today's plan`);
    } else {
      toast.error(`${planExercise.name} already added your plan`);
    }
  };

  return (
    <button
      onClick={() => handleplan()}
      className="bg-[#ccff00FF] text-sm font-bold px-[28px] py-[18px] rounded-xl flex items-center justify-center gap-1"
    >
      <MdCheckBoxOutlineBlank />
      {`Add to today's plan`}
    </button>
  );
};

export default TodayPlan;
