"use client";

import { SortPlanContext } from "@/app/Context/SortPlan";
import { useContext } from "react";

const SortPlanItem = () => {
  const { setSortBy, sortBy } = useContext(SortPlanContext);

  return (
    <div className="flex items-center space-x-3">
      <span className="text-[#8e9aae] text-sm">Sort By</span>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="bg-[#131924] border border-[#273042] rounded-xl px-4 py-2 text-white text-sm font-bold outline-none cursor-pointer"
      >
        <option value="Duration">Duration</option>

        <option value="Calories">Calories</option>

        <option value="Rating">Rating</option>
      </select>
    </div>
  );
};

export default SortPlanItem;
