import { CiBookmark } from "react-icons/ci";

const SaveForLater = () => {
  return (
    <button className="bg-transparent border border-[#374151FF]  text-sm font-bold text-white px-[28px] py-[18px] rounded-xl flex items-center justify-center gap-1">
      <CiBookmark />
      Save for later
    </button>
  );
};

export default SaveForLater;
