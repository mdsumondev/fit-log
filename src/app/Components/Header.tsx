"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { exerciseContextProvider } from "../Context/ExerciseContext";

const Header = () => {
  const { addPlan } = useContext(exerciseContextProvider);
  const [open, setOpen] = useState(false);

  const handleHamburger = () => {
    setOpen(!open);
  };

  const link = (
    <>
      <li className="mb-2 lg:mb-0">
        <Link
          href="/"
          className="text-base text-[#9ca3af] font-medium px-4 py-1.5"
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className="text-base text-[#9ca3af] font-medium px-4 py-1.5"
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <header className="bg-[#0c0d10F2] py-[26px] border-b border-[#1c1f26]">
      <div className="container mx-auto hidden lg:flex justify-between items-center px-4">
        <div>
          <Link href="/">
            <h1 className="text-white text-lg font-bold font-oswald">FITLOT</h1>
          </Link>
        </div>

        <ul className="flex items-center">{link}</ul>

        <div className="flex gap-6 items-center">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-base text-[#d1d5db] font-medium">Plan</span>

            <span className="bg-[#c2f800] text-base rounded-full flex justify-center items-center w-6 h-6">
              {addPlan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-base text-[#d1d5db] font-medium">Plan</span>

            <span className="border border-[#d1d5db] text-[#d1d5db] text-base rounded-full flex justify-center items-center w-6 h-6">
              0
            </span>
          </Link>
        </div>
      </div>

      <div className="px-4 lg:hidden">
        <div className="flex justify-between items-center">
          <div onClick={handleHamburger}>
            {open ? (
              <FaXmark className="w-6 h-6 text-white" />
            ) : (
              <FaBars className="w-6 h-6 text-white" />
            )}
          </div>

          <div>
            <Link href="/">
              <h1 className="text-white text-lg font-bold font-oswald">
                FITLOT
              </h1>
            </Link>
          </div>

          <div className="flex gap-3 items-center">
            <Link href="/my-plan" className="flex items-center gap-1">
              <span className="text-sm text-[#d1d5db] font-medium">Plan</span>

              <span className="bg-[#c2f800] text-sm rounded-full flex justify-center items-center w-6 h-6">
                0
              </span>
            </Link>

            <Link href="/my-plan" className="flex items-center gap-1">
              <span className="text-sm text-[#d1d5db] font-medium">Plan</span>

              <span className="border border-[#d1d5db] text-[#d1d5db] text-sm rounded-full flex justify-center items-center w-6 h-6">
                0
              </span>
            </Link>
          </div>
        </div>

        <ul
          className={`bg-[#0c0d10F2] absolute w-full top-[80px] py-10 ${open ? "left-0" : "-left-[100%]"}  transition-all transition-all`}
        >
          {link}
        </ul>
      </div>
    </header>
  );
};

export default Header;
