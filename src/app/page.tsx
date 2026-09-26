import { Suspense } from "react";
import FitCard from "./Components/Home/FitCard";
import Hero from "./Components/Home/Hero";
import { ExerciseType } from "./Type/exerciseType";

const exercise = async (): Promise<ExerciseType[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 120 },
    });

    return res.json();
  } catch (error) {
    throw new Error("Data not found");
  }
};

export default async function Home() {
  const exerciseDatas = await exercise();

  return (
    <>
      <section>
        <Hero />
      </section>

      <section
        id="library"
        className="container mx-auto mt-[64px] lg:px-0 px-4"
      >
        <div className="mb-[32px]">
          <h2 className="text-3xl font-bold text-white mb-1">THE LIBRARY</h2>
          <p className="text-sm text-[#9ca3afFF]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-[32px]">
          <Suspense fallback={"<p> Loading ..... </p>"}>
            {exerciseDatas.map((exercise, index) => (
              <FitCard key={index} exercise={exercise} />
            ))}
          </Suspense>
        </div>
      </section>
    </>
  );
}
