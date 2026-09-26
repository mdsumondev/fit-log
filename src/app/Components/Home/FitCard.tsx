import { ExerciseType } from "@/app/Type/exerciseType";
import Image from "next/image";
import Link from "next/link";
import { AiFillFire } from "react-icons/ai";
import { FaRegClock, FaRegStar } from "react-icons/fa";

const FitCard = ({ exercise }: { exercise: ExerciseType }) => {
  const {
    id,
    image,
    muscleGroups,
    name,
    equipment,
    duration,
    rating,
    caloriesBurned,
  } = exercise;

  return (
    <Link href={`/details/${id}`}>
      <div className="bg-[#15171D] rounded-md ">
        <Image
          src={image}
          alt={name}
          width={0}
          height={300}
          sizes="100vw"
          className="w-full h-auto"
        />
        <div className="p-6">
          <ul className="flex items-center gap-2">
            {muscleGroups.map((muscle) => (
              <li
                key={muscle}
                className="bg-[#c2f800FF] text-xs font-bold text-black rounded-4xl px-[10px] py-1 "
              >
                {muscle}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold mt-3 mb-1 text-white">{name}</h3>
          <p className="text-xs text-[#9ca3afFF]">{equipment}</p>

          <div>
            <ul className="flex gap-5 border border-[#20242eFF] rounded-sm mt-4 py-1 px-2">
              <li className="flex items-center gap-1 text-[#9ca3afFF]">
                <FaRegClock />
                {duration}
              </li>
              <li className="flex items-center gap-1 text-[#9ca3afFF]">
                <AiFillFire />
                {caloriesBurned} kcal
              </li>
              <li className="flex items-center gap-1 text-[#9ca3afFF]">
                <FaRegStar />
                {rating}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FitCard;
