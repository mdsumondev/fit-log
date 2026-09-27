import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-16  bg-[#090a0d] border border-t-[#1a1d24]">
      <div className="container mx-auto py-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex items-center gap-1 lg:mb-0 mb-3 ">
          <Image
            src="/logo.png"
            width={20}
            height={0}
            alt="logo"
            className="rotate-140"
          />
          <h2 className="text-sm text-bold text-white">FITLOG</h2>
        </div>
        <div>
          <p className="text-xs text-[#6b7280FF]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
