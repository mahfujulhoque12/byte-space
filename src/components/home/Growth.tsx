import growth1 from "../../../public/home/growth/growth1.svg";
import right1 from "../../../public/home/growth/right-1.svg";

import boy from "../../../public/home/growth/boy.png";

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
              rgba(203, 252, 1, 0.30) 40%, 
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

      <div className="wrapper relative z-10 py-[120px] grid grid-cols-1 sm:grid-cols-2 gap-10">
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
          <img src={boy} alt="boy" className="absolute -right-[9%] top-[20%]" />

          {/* Floating Badge 2: Learning Progress (Top Right) */}
          <div className="absolute top-[52%] right-[0%] bg-white rounded-2xl p-3 sm:p-4 shadow-lg z-20 text-gray-900 min-w-[130px] sm:min-w-[232px]">
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
            className="absolute top-[30%] -right-[5%] z-50"
          />
        </div>
        {/* right part end  */}
      </div>
    </div>
  );
};

export default Growth;
