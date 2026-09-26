import Link from "next/link";

const MayPlanBlank = () => {
  return (
    <div className="flex flex-col justify-center items-center py-[97px] border-dashed border-[#a1a1aaFF] border rounded-md">
      <h3 className="text-xl font-bold text-white mb-2">NOTHING HERE YET</h3>
      <p className="text-xs text-[#a1a1aaFF] mb-6">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/#library"
        className="bg-[#c2f800FF] font-bold text-xs mx-auto px-[28px] py-[18px] text-center block lg:inline-block rounded-md"
      >
        BROWSE WORKOUTS
      </Link>
    </div>
  );
};

export default MayPlanBlank;

<h3>NOTHING HERE YET</h3>;
