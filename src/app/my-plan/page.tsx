"use client";

import { useContext, useState } from "react";
import Calcualtion from "../Components/MyPlan/Calcualtion";
import SavedPlan from "../Components/MyPlan/SavedPlan";
import TodayPlan from "../Components/MyPlan/TodayPlan";
import { exerciseContextProvider } from "../Context/ExerciseContext";

const MayPlanPage = () => {
  const [activeTab, setActiveTab] = useState("Today’s Plan");
  const [sortBy, setSortBy] = useState("Duration");

  const { addPlan, savePlan } = useContext(exerciseContextProvider);

  const handleTabs = (input: string) => {
    setActiveTab(input);
  };

  return (
    <div>
      <section className="container mx-auto">
        <Calcualtion
          activeTabDatas={activeTab === "Today’s Plan" ? addPlan : savePlan}
        />
      </section>

      <section className="container mx-auto">
        <div className="flex mb-6 items-center justify-between w-full p-3 text-white">
          <div className="flex items-center bg-[#131924] border border-[#273042] p-1 rounded-2xl">
            <div className="flex items-center gap-1">
              <label
                className={`px-4 py-2 rounded-xl cursor-pointer text-sm font-medium transition-colors ${
                  activeTab === "Today’s Plan"
                    ? "bg-[#273042] text-white"
                    : "text-[#8e9aae]"
                }`}
              >
                <input
                  type="radio"
                  name="datatype"
                  value="Today’s Plan"
                  checked={activeTab === "Today’s Plan"}
                  onChange={(e) => handleTabs(e.currentTarget.value)}
                  className="hidden"
                />
                Today’s Plan
              </label>

              <label
                className={`px-4 py-2 rounded-xl cursor-pointer text-sm font-medium transition-colors ${
                  activeTab === "Saved"
                    ? "bg-[#273042] text-white"
                    : "text-[#8e9aae]"
                }`}
              >
                <input
                  type="radio"
                  name="datatype"
                  value="Saved"
                  checked={activeTab === "Saved"}
                  onChange={(e) => handleTabs(e.currentTarget.value)}
                  className="hidden"
                />
                Saved
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-[#8e9aae] text-sm">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#131924] border border-[#273042] rounded-xl px-4 py-2 text-white text-sm font-bold outline-none cursor-pointer"
            >
              <option value="Duration">Duration</option>
              <option value="Difficulty">Difficulty</option>
              <option value="Name">Name</option>
              <option value="Rating">Rating</option>
            </select>
          </div>
        </div>

        {activeTab === "Today’s Plan" ? <TodayPlan /> : <SavedPlan />}
      </section>
    </div>
  );
};

export default MayPlanPage;
