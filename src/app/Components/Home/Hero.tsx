import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse  container items-center mx-auto bg-[#15171dFF] rounded-md border-[#222630FF] border p-[56px] mt-[48px]">
      <div>
        <h5 className="text-xs font-bold text-[#c2f800] mb-5 lg:text-left text-center">
          WORKOUT LIBRARY
        </h5>
        <h1 className="lg:text-6xl text-4xl font-bold text-[#ffffffFF] mb-5 lg:w-2/3 lg:text-left text-center">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-base text-[#9ca3afFF] mb-5 lg:w-2/3 lg:text-left text-center">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <Link
          href="/my-plan"
          className="bg-[#c2f800FF] font-bold text-xs mx-auto px-[28px] py-[18px] text-center block lg:inline-block rounded-md"
        >
          BROWSE WORKOUTS
        </Link>
      </div>
      <div className="lg:w-1/2 mb-4 lg:mb-0">
        <Image
          src="/banner.png"
          width={500}
          height={500}
          alt="hero-image"
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
