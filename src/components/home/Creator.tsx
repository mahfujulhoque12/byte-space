import left1 from "../../../public/home/creator/left1.svg";
import left2 from "../../../public/home/creator/left2.svg";
import left3 from "../../../public/home/creator/left3.svg";
import left4 from "../../../public/home/creator/left4.svg";
import right1 from "../../../public/home/creator/right1.svg";
import right2 from "../../../public/home/creator/right-2.svg";
import right3 from "../../../public/home/creator/right3.svg";

const Creator = () => {
  return (
    <div
      className="bg-brand relative w-full "
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      {/* left part fream image start  */}
      <img
        src={left1}
        alt="left1"
        className="hidden md:block absolute top-0 left-0"
      />
      <img
        src={left2}
        alt="left1"
        className="hidden md:block absolute top-4 left-[11%]"
      />
      <img
        src={left3}
        alt="left1"
        className="hidden md:block absolute bottom-[15%] left-0"
      />
      <img
        src={left4}
        alt="left1"
        className="hidden md:block absolute bottom-0 left-9"
      />
      {/* left part fream image end  */}

      {/* right part img frame image start  */}
      <img
        src={right1}
        alt="right-1"
        className="hidden md:block absolute top-1 right-[12%]"
      />
      <img
        src={right2}
        alt="right-2"
        className="hidden md:block absolute top-1 right-0"
      />
      <img
        src={right3}
        alt="right-2"
        className="hidden md:block absolute bottom-0 right-10"
      />
      {/* right part img frame image end  */}

      <div className="wrapper py-[85px]">
        <h1 className="heading-2 text-white! max-w-[600px] mx-auto text-center">
          Unlock Your Potential as a Creator with ByteSpace
        </h1>

        <p className="para-5 text-white! mt-10 max-w-[1000px] mx-auto text-center ">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="btn-1">Join as Creator</button>
        </div>
      </div>
    </div>
  );
};

export default Creator;
