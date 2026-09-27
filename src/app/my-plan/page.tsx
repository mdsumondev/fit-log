"use client";

import { useContext, useState } from "react";
import Calcualtion from "../Components/MyPlan/Calcualtion";
import SavedPlanTab from "../Components/MyPlan/SavedPlan";
import SortPlanItem from "../Components/MyPlan/SortPlanItem";
import TodayPlan from "../Components/MyPlan/TodayPlan";
import { exerciseContextProvider } from "../Context/ExerciseContext";

const MayPlanPage = () => {
  const [activeTab, setActiveTab] = useState("Today’s Plan");

  const { addPlan, savePlan } = useContext(exerciseContextProvider);

  const handleTabs = (input: string) => {
    setActiveTab(input);
  };

  return (
    <div className="px-3 lg:px-0">
      <section className="container mx-auto">
        <Calcualtion
          activeTabDatas={activeTab === "Today’s Plan" ? addPlan : savePlan}
        />
      </section>

      <section className="container mx-auto">
        <div className="flex mb-6 items-center justify-between w-full p-3 text-white flex-wrap">
          <div className="flex items-center bg-[#131924] border border-[#273042] p-1 rounded-2xl lg:w-auto w-screen lg:mb-0 mb-3 ">
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

          <SortPlanItem />
        </div>

        {activeTab === "Today’s Plan" ? <TodayPlan /> : <SavedPlanTab />}
      </section>
    </div>
  );
};

export default MayPlanPage;
