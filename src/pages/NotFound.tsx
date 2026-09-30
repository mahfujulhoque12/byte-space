import { Link } from "react-router";

const NotFound = () => {
  return (
    <div
      className="bg-brand relative w-full min-h-screen flex flex-col justify-between"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >
      <div className="wrapper flex-1 flex flex-col items-center justify-center text-center px-4 relative py-20">
        {/* Massive 404 Background Text */}
        <span className="text-[28vw] md:text-[22rem] lg:text-[30rem] font-extrabold leading-none select-none tracking-tight bg-gradient-to-b from-[#D4FB20] via-[#D4FB20F5] to-[#D4FB20CF] to-[#D4FB209C] to-[#FFFFFF00] bg-clip-text text-transparent opacity-90 pointer-events-none">
          404
        </span>

        {/* Foreground Content */}
        <div className=" md:-mt-20 inset-0 flex flex-col items-center w-full justify-center z-10 space-y-6">
          <h1 className="heading-1 text-white-main">
            The page you are looking for doesn’t exist
          </h1>

          <p className="text-gray-300 text-sm md:text-base font-light mt-8">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link to="/" className="btn-1 mt-8">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
