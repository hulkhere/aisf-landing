import Image from "next/image";
import FIncLogo from "images/finc-logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full p-5 font-jakarta">
      <div className="w-full h-[75px] border-[1px] rounded-full border-white/[.15] flex justify-between items-center">
        <Link
          href="https://twitter.com/fdotinc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={FIncLogo}
            alt="F-Inc Logo"
            className="ml-10 h-[37px] w-[33px]"
          />
        </Link>
        <div className="flex items-center">
          <div className="hidden sm:flex gap-x-10 mr-10">
            <div>Events</div>
            <div>Speakers</div>
            <div>Sponsors</div>
          </div>
          <div className="relative w-40 h-10 mr-5 group -mt-1 container">
            <div className="absolute gradient-button w-[164px] -ml-0.5 h-12  rounded-full transition-all duration-300 ease-in-out"></div>
            <Link
              href="https://fdotinc.typeform.com/to/tpgvDnhX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black absolute -mt-[47px] z-50 group-hover:bg-[#222] transition-all duration-200 flex items-center justify-center font-bold rounded-full h-[44px] w-40 text-sm">
                REGISTER NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;