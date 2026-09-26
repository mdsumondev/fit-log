import SaveForLater from "@/app/Components/Details/SaveForLater";
import TodayPlan from "@/app/Components/Details/TodayPlan";
import { ExerciseType } from "@/app/Type/exerciseType";
import Image from "next/image";

export const generateStaticParams = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  const data = await res.json();

  return data.map((detail: ExerciseType) => ({ details: `${detail.id}` }));
};

const DetailsPage = async ({
  params,
}: {
  params: Promise<{ details: string }>;
}) => {
  const { details } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${details}`);
  const exerciseDetails = await res.json();

  const {
    image,
    name,
    muscleGroups,
    equipment,
    difficulty,
    duration,
    caloriesBurned,
    sets,
    reps,
    rating,
    description,
    instructions,
  } = exerciseDetails;

  return (
    <div className="container mx-auto flex lg:flex-row flex-col lg:px-0 px-4 mt-12 gap-[56] mb-28">
      <div className="lg:w-1/2 w-full ">
        <Image
          src={image}
          width={0}
          height={0}
          alt={name}
          className="w-full h-auto rounded-md"
          sizes="100vw"
        ></Image>
      </div>
      <div>
        <h1 className="text-4xl font-bold text-white mb-3">{name}</h1>
        <p className="text-base text-[#9ca3afFF] mb-5">{description}</p>
        <ul className="flex items-center gap-2 mb-[28px]">
          {muscleGroups.map((muscle: string) => (
            <li
              key={muscle}
              className="bg-[#c2f800FF] text-xs font-bold text-black rounded-4xl px-[10px] py-1 "
            >
              {muscle}
            </li>
          ))}
        </ul>

        <div className="w-full max-w-md overflow-hidden rounded-xl border border-slate-800/80 bg-[#10141d] p-1 shadow-lg">
          <table className="w-full text-left text-sm text-slate-300">
            <tbody className="divide-y divide-slate-800/60">
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  EQUIPMENT
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-slate-100">
                  {equipment}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  DIFFICULTY
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-slate-100">
                  {difficulty}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  SETS
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-slate-100">
                  {sets}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  REPS
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-slate-100">
                  {reps}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  DURATION
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-slate-100">
                  {duration}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  CALORIES
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-slate-100">
                  {caloriesBurned}
                </td>
              </tr>
              <tr className="transition-colors hover:bg-slate-800/20">
                <td className="px-5 py-3.5 text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  RATING
                </td>
                <td className="px-5 py-3.5 text-right font-bold text-slate-100">
                  {rating}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="instructions mt-[32px]">
          <h3 className="text-lg font-bold mb-4 text-white">INSTRUCTIONS</h3>
          <ol>
            {instructions.map((instruction: string, index: number) => (
              <li key={index} className="text-sm text-[#d1d5dbFF] mb-3">
                {index + 1}. {instruction}
              </li>
            ))}
          </ol>
        </div>
        <div className="callToAction group mt-9 flex lg:gap-5 gap-2">
          <TodayPlan />
          <SaveForLater />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
