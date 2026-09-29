import growth1 from "../../../public/home/growth/growth1.svg";
import right1 from "../../../public/home/growth/right-1.svg";

import boy from "../../../public/home/growth/boy.png";
import girl from "../../../public/home/growth/girl.png";
import girlFrame from "../../../public/home/growth/girlFrame.svg";
import { StartIcon } from "../../icons/Icon";
import { CircleCheck } from "lucide-react";
const items = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const Growth = () => {
  return (
    <div className="relative overflow-hidden bg-[#FDFDFD]">
      {/* 
   gradient 1
      */}
      <div
        className="absolute w-[1300px] h-[1300px] -top-[550px] -left-[300px] rounded-full pointer-events-none blur-[150px] opacity-80"
        style={{
          background: `
            radial-gradient(
              circle, 
              #CBFC01 0%, 
              rgba(203, 252, 1, 0.30) 25%, 
              rgba(203, 252, 1, 0) 70%
            )
          `,
        }}
      />
      {/* 
        
   gradient 2
      */}
      <div
        className="absolute w-[1300px] h-[1300px] -top-[550px] -right-[300px] rounded-full pointer-events-none blur-[140px] opacity-20"
        style={{
          background: `
            radial-gradient(
              circle, 
              #003BE2 0%, 
              rgba(0, 59, 226, 0.20) 45%, 
              rgba(0, 59, 226, 0) 75%
            )
          `,
        }}
      />

      <div className="wrapper relative z-10 pt-10 md:pt-[120px] grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left part start  */}
        <div className="mt-12">
          <h1 className="heading-2 text-black!">
            Your Path to Professional Growth Starts Here!
          </h1>
          <p className="mt-10 para-4 max-w-lg">
            Explore our curated selection of courses tailored to enhance your
            capabilities and accelerate your career journey. Whether you are
            looking to sharpen specific skills, gain industry expertise, or
            embark on a new career path entirely, we have the resources you
            need.
          </p>

          <div className="flex items-center gap-10 md:gap-14 mt-10">
            <div>
              <h3 className="heading-5">12K</h3>
              <p className="para-5 mt-2">Students</p>
            </div>

            <div>
              <h3 className="heading-5">70+</h3>
              <p className="para-5 mt-2">Courses</p>
            </div>

            <div>
              <h3 className="heading-5">16</h3>
              <p className="para-5 mt-2">Creators</p>
            </div>
          </div>
        </div>
        {/* left part end  */}
        {/* right part start  */}
        <div>
          <img src={growth1} alt="growth 1" className="" />

          {/* boy img */}
          <img
            src={boy}
            alt="boy"
            className="hidden lg:block lg:absolute lg:-right-[9%] lg:top-[20%]"
          />

          {/* Floating Badge 2: Learning Progress (Top Right) */}
          <div className="mt-5 lg:mt-0 lg:absolute lg:top-[52%] lg:right-[0%] bg-white rounded-2xl p-3 sm:p-4 shadow-lg z-20 text-gray-900 min-w-[130px] sm:min-w-[232px]">
            <p className="text-black font-medium text-sm text-start">
              Learning Progress
            </p>
            <h3 className="text-start text-[48px] font-semibold mt-0.5 leading-[120%]">
              55%
            </h3>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
              <div className="bg-lime h-1.5 rounded-full w-[55%]" />
            </div>
          </div>

          <img
            src={right1}
            alt="right 1"
            className="hidden md:block absolute top-[30%] -right-[5%] z-50"
          />
        </div>
        {/* right part end  */}
      </div>
      {/* girl part start  */}
      <div className="wrapper relative py-10 md:py-[120px]  grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* gradient 3 */}
        <div
          className="
    absolute
    w-[607px]
    h-[607px]
    top-[183px]
    -left-[508px]
    rounded-full
    pointer-events-none
    blur-[140px]
    opacity-20
    bg-[radial-gradient(circle,#003BE2_0%,#003BE2_23%,#003BE2_55%,transparent_100%)]
  "
        />

        {/* gradient 4 */}
        <div
          className="
    absolute
    w-[500px]
    h-[500px]
    -bottom-[20%]
    -left-[300px]
    rounded-full
    pointer-events-none
    blur-[140px]
    opacity-100
    bg-[radial-gradient(circle,#CBFC01_0%,#CBFC013B_70%,#CBFC010F_80%,#CBFC0100_100%)]
  "
        />

        {/* gradient 5 */}
        <div
          className="
    absolute
    w-[500px]
    h-[500px]
    -bottom-[20%]
    -right-[300px]
    rounded-full
    pointer-events-none
    blur-[140px]
    opacity-100
    bg-[radial-gradient(circle_at_center,#003BE2_0%,#003BE23B_45%,#003BE20F_55%,#003BE200_100%)]
  "
        />

        {/* left part start  */}
        <div className="relative ">
          {/* 1st card start */}
          <div className=" bg-blue rounded-2xl p-3 sm:p-4  text-gray-900 min-w-[130px] sm:w-[232px]">
            <p className="text-white font-medium text-base text-start">
              Total Revenue
            </p>
            <p className="text-xs font-normal text-white">July 1-28</p>
            <h3 className="text-start text-2xl font-semibold mt-2 leading-[120%] font-poppins text-white">
              $120.29
            </h3>
            <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
              <div className="bg-lime h-1.5 rounded-full w-[55%]" />
            </div>
          </div>
          {/* 1st card end */}
          {/* 2nd card start */}
          <div className=" bg-blue mt-8 rounded-2xl p-3 sm:p-4    w-full md:w-auto inline-block">
            <p className="text-white font-medium text-base text-start">
              Year to Date
            </p>
            <p className="text-xs font-normal text-white">2023</p>
            <h3 className="text-start text-2xl font-semibold mt-2 leading-[120%] font-poppins text-white">
              $1,200.38
            </h3>
            <button className="bg-lime px-1 py-0.5 rounded-3xl text-[10px] font-medium text-black mt-2">
              +125
            </button>
          </div>
          {/* 2nd card end */}

          <img
            src={girl}
            alt="girl"
            className="hidden md:block absolute right-0 -top-[6%]"
          />
          <img
            src={girlFrame}
            alt="girl-frame"
            className="hidden md:block absolute  right-[12%] top-[10%]"
          />

          {/* Floating Badge 3: Happy Students (Bottom Left) */}
          <div className="mt-5 md:mt-0 md:absolute md:bottom-[20%] md:right-[18%] bg-white rounded-2xl p-3 sm:p-4 shadow-lg z-20 text-gray-900 min-w-[160px] sm:min-w-[200px]">
            <div className="flex flex-col mb-2">
              <h4 className="para-2 md:text-start">Happy Students</h4>
              <p className="text-[10px] sm:text-xs font-normal text-[#82868E] flex justify-center md:justify-start items-center gap-1">
                4.5(240){" "}
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
        {/* left part end  */}

        {/* right part start  */}
        <div>
          <h1 className="heading-2 md:mt-[176px] text-black!">
            Create & Manage Courses Easily.
          </h1>
          <p className="mt-10 para-6">
            <span className="font-bold">ByteSpace</span> supports individuals or
            entities in the creation, publication, and administration of
            educational courses.{" "}
          </p>

          <div className="mt-10 space-y-4.5">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CircleCheck
                  className="h-6 w-6 shrink-0 fill-blue text-white"
                  strokeWidth={2}
                />
                <span className="text-lg font-medium text-black">{item}</span>
              </div>
            ))}
          </div>
        </div>
        {/* right part end  */}
      </div>
      {/* girl part end  */}
    </div>
  );
};

export default Growth;
