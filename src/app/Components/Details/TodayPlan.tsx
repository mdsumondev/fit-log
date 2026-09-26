import { MdCheckBoxOutlineBlank } from "react-icons/md";

const TodayPlan = () => {
  return (
    <button className="bg-[#ccff00FF] text-sm font-bold px-[28px] py-[18px] rounded-xl flex items-center justify-center gap-1">
      <MdCheckBoxOutlineBlank />
      {`Add to today's plan`}
    </button>
  );
};

export default TodayPlan;
