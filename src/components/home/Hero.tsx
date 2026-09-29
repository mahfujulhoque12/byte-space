import { Search } from "lucide-react";
import Navbar from "../navbar/Navbar";
import leftfbig from "../../../public/home/left-f-big.svg";
import boyImg from "../../../public/home/boy.svg";
import roundShape from "../../../public/home/round-shape.svg";
import right1 from "../../../public/home/right.svg";
import right2 from "../../../public/home/right-2.svg";
import right3 from "../../../public/home/right-last.svg";

import left2 from "../../../public/home/left-2.svg";
import left3 from "../../../public/home/left3.svg";

import { StartIcon } from "../../icons/Icon";

const Hero = () => {
  return (
    <div
      className="bg-brand relative w-full"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      {/* left img big  */}
      <img
        src={leftfbig}
        alt="left fram"
        className="absolute hidden md:block left- top-1/4"
      />
      <img
        src={left2}
        alt="left fram"
        className="absolute hidden z-0 md:block left-[10%] top-[54%]"
      />
      <img
        src={left3}
        alt="left fram"
        className="absolute hidden md:block left-0 top-[70%] z-20"
      />

      {/* right part imgs  */}
      <img
        src={right1}
        alt="right 1"
        className="absolute right-0 hidden md:block top-1/4"
      />
      <img
        src={right2}
        alt="right-2"
        className="absolute hidden md:block right-[10%] top-[50%]"
      />
      <img
        src={right3}
        alt="right-2"
        className="absolute right-0 top-[68%] hidden md:block"
      />

      {/* right part imgs end */}

      <Navbar />
      <div className="wrapper relative z-10 flex flex-col items-center justify-center text-center text-white pt-20">
        <h1 className="heading-1">Get Access to Hundreds Courses Available</h1>
        <p className=" para-1 mt-8">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        {/* search part start  */}
        <div className="mt-15 flex w-full max-w-xl flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-0">
          {/* Input Field with Magnifying Glass Icon */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full rounded-full bg-white py-3.5 pl-13 pr-6 text-base text-gray-800 placeholder-[#82868E] outline-none transition-all focus:ring-2 focus:ring-lime/50"
            />
          </div>

          {/* Search Button */}
          <button type="submit" className="btn-1">
            Search
          </button>
        </div>
        {/* search part end  */}

        {/* boy img part start */}

        {/* Main Boy Image Container */}

        <div className=" z-10 flex flex-col md:flex-none justify-center md:items-end mt-6 mb-6">
          {/* Background Shape Image */}
          <img
            src={roundShape}
            alt="round shape"
            width={1200}
            height={650}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 "
          />

          {/* Boy Image */}
          <img
            src={boyImg}
            alt="Student holding laptop"
            className="relative z-10 w-full h-auto object-contain drop-shadow-xl"
          />

          {/* Floating Badge 1: UI/UX Design (Top Left) */}
          <div
            className="
    flex justify-center
    md:absolute md:top-[60%] md:left-1/5
    bg-white rounded-2xl
    p-3 sm:p-4
    shadow-lg z-20
    text-gray-900
    min-w-[140px] sm:min-w-[180px]
  "
          >
            <div>
              <h4 className="para-2 text-start">UI/UX Design</h4>

              <p className="text-[10px] sm:text-xs text-[#82868E] mt-0.5">
                200 Courses &bull; 1000+ Students
              </p>
            </div>
          </div>

          {/* Floating Badge 2: Learning Progress (Top Right) */}
          <div className=" mt-5 md:mt-0 flex flex-col justify-center md:absolute md:top-[60%] md:right-[25%] bg-white rounded-2xl p-3 sm:p-4 shadow-lg z-20 text-gray-900 min-w-[130px] sm:min-w-[232px]">
            <p className="text-black font-medium text-sm md:text-start">
              Learning Progress
            </p>
            <h3 className="md:text-start text-[48px] font-semibold mt-0.5 leading-[120%]">
              55%
            </h3>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
              <div className="bg-lime h-1.5 rounded-full w-[55%]" />
            </div>
          </div>

          {/* Floating Badge 3: Happy Students (Bottom Left) */}
          <div className="mt-5 md:mt-0 flex flex-col justify-center md:absolute md:bottom-[6%] md:left-[18%] bg-white rounded-2xl p-3 sm:p-4 shadow-lg z-40 text-gray-900 min-w-[160px] sm:min-w-[200px]">
            <div className="flex flex-col mb-2">
              <h4 className="para-2 md:text-start">Happy Students</h4>
              <p className="text-[10px] sm:text-xs font-normal text-[#82868E] flex justify-self-auto md:justify-start justify-center  items-center gap-1">
                4.5(240)
                <span className="text-lime">
                  <StartIcon />
                </span>
              </p>
            </div>

            {/* Avatars */}
            <div className="flex items-center justify-center md:justify-start -space-x-2">
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=1"
                alt="user"
              />
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=2"
                alt="user"
              />
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=4"
                alt="user"
              />
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=1"
                alt="user"
              />
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=1"
                alt="user"
              />
              <img
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
                src="https://i.pravatar.cc/100?img=3"
                alt="user"
              />

              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white bg-lime text-[10px] sm:text-xs font-bold flex items-center justify-center text-gray-900">
                2K+
              </div>
            </div>
          </div>
        </div>

        {/* boy img part end */}
      </div>
    </div>
  );
};

export default Hero;
