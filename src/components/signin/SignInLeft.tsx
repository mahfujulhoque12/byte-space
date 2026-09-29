import img1 from "../../../public/auth/top.png";
import img2 from "../../../public/auth/back.svg";
import { ChartIcon, StartIcon } from "../../icons/Icon";
import { IoStar } from "react-icons/io5";

import left1 from "../../../public/auth/left1.svg";
import left2 from "../../../public/auth/left2.svg";
import left3 from "../../../public/auth/left3.svg";

const SignInLeft = () => {
  return (
    <div>
      <h4 className="heading-3 text-white!">Sign in with ease</h4>
      <p className="para-6 text-white! mt-4 max-w-[500px]">
        Experience a seamless and efficient sign-in process that grants you
        instant access to a world of knowledge.
      </p>

      {/* card part start  */}
      <div className="mt-[87px] relative">
        <img
          src={left1}
          alt="left1"
          className="hidden lg:block absolute top-3 z-999 left-6"
        />
        <img
          src={left2}
          alt="left2"
          className="hidden lg:block absolute -bottom-[22%] z-999 -left-4"
        />
        <img
          src={left3}
          alt="left3"
          className="hidden lg:block absolute bottom-0 z-999 -right-4"
        />
        {/* back cart start  */}
        <div className="pt-25 w-full z-20">
          <div className=" rounded-3xl bg-[#fff] p-4 border border-[#CED0D3] max-w-[373px] shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Image & Overlay Meta Header */}
            <div className="relative rounded-xl overflow-hidden  mb-4">
              <img src={img2} alt="Image one" className="w-full h-full " />
            </div>

            {/* Content Details */}
            <div className="px-1">
              {/* Title & Rating */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="heading-3">Build Digital Asset</h3>
                <div className="flex items-center gap-1 text-lg font-normal text-[#4F4F4F] shrink-0 mt-0.5">
                  <span>4.5</span>
                  <span className="text-[#CED0D3]">
                    <IoStar className="text-lime" size={19} />
                  </span>
                </div>
              </div>

              {/* Author */}
              <p className="text-xs text-gray-600 mt-0.5">
                by
                <span className="text-blue pl-2"> purepearl studio</span>
              </p>

              {/* Level & Avatars */}
              <div className="flex items-center gap-3 mt-4">
                {/* Level badge */}
                <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1 text-xs text-[#4B4C53] font-medium">
                  <span className="text-gray-500 font-bold">
                    <ChartIcon />
                  </span>
                  <span>Beginner</span>
                </div>

                {/* Avatar Stack */}
                <div className="flex items-center -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=11"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=12"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=13"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=14"
                    alt="user"
                  />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#000] text-[10px] font-bold flex items-center justify-center text-white">
                    +26
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4  flex items-baseline gap-1">
                <span className="text-xl font-semibold text-blue">$ 25</span>
                <span className="text-xs text-[#4F4F4F] font-normal">
                  /lifetime
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* back cart end  */}

        {/* top cart start */}
        <div className="mt-5 sm:mt-0 sm:absolute z-50 w-full flex justify-end sm:right-10 sm:top-0">
          <div className=" rounded-3xl bg-[#fff] p-4 border border-[#CED0D3] max-w-[373px] shadow-sm hover:shadow-md transition-shadow duration-200">
            {/* Image & Overlay Meta Header */}
            <div className="relative rounded-xl overflow-hidden  mb-5">
              <img src={img1} alt="Image one" className="w-full h-full " />
            </div>

            {/* Content Details */}
            <div className="px-1">
              {/* Title & Rating */}
              <div className="flex items-start justify-between gap-2">
                <h3 className="heading-3">the Power of Big Data</h3>
                <div className="flex items-center gap-1 text-lg font-normal text-[#4F4F4F] shrink-0 mt-0.5">
                  <span>4.5</span>
                  <span className="text-[#CED0D3]">
                    <IoStar className="text-lime" size={19} />
                  </span>
                </div>
              </div>

              {/* Author */}
              <p className="text-xs text-gray-600 mt-0.5">
                by
                <span className="text-blue pl-2"> purepearl studio</span>
              </p>

              {/* Level & Avatars */}
              <div className="flex items-center gap-3 mt-4">
                {/* Level badge */}
                <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1 text-xs text-[#4B4C53] font-medium">
                  <span className="text-gray-500 font-bold">
                    <ChartIcon />
                  </span>
                  <span>Beginner</span>
                </div>

                {/* Avatar Stack */}
                <div className="flex items-center -space-x-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=11"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=12"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=13"
                    alt="user"
                  />
                  <img
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                    src="https://i.pravatar.cc/100?img=14"
                    alt="user"
                  />
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#000] text-[10px] font-bold flex items-center justify-center text-white">
                    +26
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-4  flex items-baseline gap-1">
                <span className="text-xl font-semibold text-blue">$ 25</span>
                <span className="text-xs text-[#4F4F4F] font-normal">
                  /lifetime
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* top cart end */}

        {/* std start  */}
        <div className="mt-5 md:mt-0 flex flex-col justify-center md:absolute md:-bottom-[16%] right-10 bg-lime rounded-2xl p-3  sm:p-4 shadow-lg z-40 text-gray-900 min-w-[160px] text-center sm:min-w-[258px]">
          <div className="flex flex-col mb-2">
            <h4 className="para-2 lg:text-start">Happy Students</h4>
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
              className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=1"
              alt="user"
            />
            <img
              className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=2"
              alt="user"
            />
            <img
              className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=4"
              alt="user"
            />
            <img
              className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=1"
              alt="user"
            />
            <img
              className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=1"
              alt="user"
            />
            <img
              className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border-2 border-white object-cover"
              src="https://i.pravatar.cc/100?img=3"
              alt="user"
            />

            <div className="w-6 h-6 sm:w-11 sm:h-11 rounded-full border-2 border-white bg-black text-[10px] sm:text-xs font-bold flex items-center justify-center text-white">
              2K+
            </div>
          </div>
        </div>
      </div>
      {/* card part end  */}
    </div>
  );
};

export default SignInLeft;
