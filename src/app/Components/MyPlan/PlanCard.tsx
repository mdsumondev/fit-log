import { ExerciseType } from "@/app/Type/exerciseType";
import Image from "next/image";
import Link from "next/link";

const PlanCard = ({
  item,
  visivility,
}: {
  item: ExerciseType;
  visivility: string;
}) => {
  const { image, name, duration, caloriesBurned, equipment, rating, id } = item;

  return (
    <div className="w-full  mb-3 bg-[#111625] border border-gray-800 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
        <Image src={image} width={150} height={150} alt={name} />

        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="text-xl font-black uppercase tracking-wide text-white">
            {name}
          </h3>
          <p className="text-gray-400 text-sm font-medium">{equipment}</p>

          <div className="flex items-center justify-center sm:justify-start gap-4 text-xs font-semibold text-gray-300 mt-1">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-lime-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {duration} min
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-lime-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.431.67-.84 1.488-1.079 2.21-1.393-.207-2.731.355-3.513 1.484-.87 1.258-.87 2.89 0 4.148.87 1.257 2.22 1.82 3.613 1.613.239.722.648 1.54 1.079 2.21.208.322.477.65.822.88a1 1 0 001.45-.385c.345-.23.614-.558.822-.88.431-.67.84-1.488 1.079-2.21 1.393.207 2.731-.355 3.513-1.484.87-1.258.87-2.89 0-4.148-.87-1.257-2.22-1.82-3.613-1.613-.239-.722-.648-1.54-1.079-2.21a5.6 5.6 0 00-.822-.88z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              {caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-lime-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              {rating}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
        <Link href={`/details/${id}`}>
          <button className="w-full sm:w-auto px-5 py-2.5 rounded-full border border-gray-700 text-sm font-semibold text-gray-200 hover:bg-gray-800 transition">
            View Details
          </button>
        </Link>
        <button
          className={`w-full ${visivility} sm:w-auto px-6 py-2.5 rounded-full bg-[#ccff00] text-black font-extrabold text-sm hover:bg-lime-400 transition shadow-lg`}
        >
          Mark as Done
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
