"use client";

import { ExerciseType } from "@/app/Type/exerciseType";
import { useEffect, useState } from "react";

interface CalculationProps {
  activeTabDatas: ExerciseType[];
}

const Calcualtion = ({ activeTabDatas }: CalculationProps) => {
  const [time, setTime] = useState<number>(0);
  const [calories, setCalories] = useState<number>(0);

  useEffect(() => {
    let totalDuration = 0;
    let totalCalories = 0;

    for (const data of activeTabDatas) {
      totalDuration += data.duration;
      totalCalories += data.caloriesBurned;
    }

    setTime(totalDuration);
    setCalories(totalCalories);
  }, [activeTabDatas]);

  return (
    <div className="w-full mx-auto my-6">
      <div className="grid grid-cols-1 md:grid-cols-3 bg-[#111319] border border-gray-800/80 rounded-2xl overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-800/60 shadow-xl">
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider mb-2">
            Exercises
          </span>

          <span className="text-4xl sm:text-5xl font-black text-[#a3e635] font-sans tracking-tight">
            {activeTabDatas.length}
          </span>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider mb-2">
            Minutes
          </span>

          <span className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight">
            {time}
          </span>
        </div>

        <div className="p-6 md:p-8 flex flex-col justify-between">
          <span className="text-xs sm:text-sm font-medium text-gray-400 tracking-wider mb-2">
            Calories
          </span>

          <span className="text-4xl sm:text-5xl font-black text-white font-sans tracking-tight">
            {calories}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Calcualtion;
