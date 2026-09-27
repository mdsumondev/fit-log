import { ExerciseType } from "@/app/Type/exerciseType";
import Image from "next/image";
import Link from "next/link";
import { AiFillFire } from "react-icons/ai";
import { FaRegClock, FaRegStar } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface PlanCardProps {
  item: ExerciseType;
  visivility: string;
  handleRemoveItem: ({ id }: { id: number }) => void;
}

const PlanCard = ({ item, visivility, handleRemoveItem }: PlanCardProps) => {
  const { image, name, duration, caloriesBurned, equipment, rating, id } = item;

  return (
    <div className="w-full mb-3 bg-[#111625] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <Image src={image} width={150} height={150} alt={name} />

        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="text-xl font-black uppercase tracking-wide text-white">
            {name}
          </h3>

          <p className="text-gray-400 text-sm font-medium">{equipment}</p>

          <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-gray-300 mt-1">
            <span className="flex items-center gap-1">
              <FaRegClock className="w-4 h-4 text-lime-400" />
              {duration} min
            </span>

            <span className="flex items-center gap-1">
              <AiFillFire className="w-4 h-4 text-lime-400" />
              {caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1">
              <FaRegStar className="w-4 h-4 text-lime-400" />

              {rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
        <Link
          href={`/details/${id}`}
          className="cursor-pointer px-6 py-2.5 rounded-full border border-gray-700 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition whitespace-nowrap"
        >
          View Details
        </Link>

        <button
          className={`lg:w-full ${visivility} sm:w-auto px-6 py-2.5 rounded-full bg-[#ccff00] text-black font-extrabold text-sm hover:bg-lime-400 transition shadow-lg`}
        >
          Mark as Done
        </button>

        <button
          onClick={() => handleRemoveItem({ id })}
          className="cursor-pointer"
        >
          <FaXmark className="text-white w-3" />
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
