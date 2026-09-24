import Link from "next/link";

const Header = () => {
  const link = (
    <>
      <li>
        <Link
          href="/"
          className="text-base text-[#9ca3afFF] font-medium px-4 py-[6]"
        >
          Workouts
        </Link>
      </li>
      <li>
        <Link
          href="/my-plan"
          className="text-base text-[#9ca3afFF] font-medium  px-4 py-[6]"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-[#0c0d10F2] py-[26px] border border-b-[#1c1f26FF]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="log">
          <Link href="/">
            <h1 className="text-white text-lg font-bold font-oswald">FITLOT</h1>
          </Link>
        </div>
        <ul className="menu-items flex items-center">{link}</ul>
        <div className="header-actions flex gap-10 items-center">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-base text-[#d1d5dbFF] font-medium">Plan</span>
            <span className="bg-[#c2f800FF] text-base rounded-full p-1 flex justify-center items-center w-6 h-6">
              0
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-base text-[#d1d5dbFF] font-medium">Plan</span>
            <span className="border border-1 border-[#d1d5dbFF] text-[#d1d5dbFF] text-base rounded-full p-1 flex justify-center items-center w-6 h-6">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
