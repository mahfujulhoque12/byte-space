import { Link } from "react-router";
import logosm from "../../public/favicon.svg";
import SignInLeft from "../components/signin/SignInLeft";
import SigninRight from "../components/signin/SigninRight";

const Signin = () => {
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
      <div className="wrapper">
        <Link to={"/"}>
          <img src={logosm} alt="logo" className="py-9" />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-35 pb-20 md:pb-30">
          {/* left part start  */}
          <div>
            <SignInLeft />
          </div>
          {/* left part end  */}
          {/* left right start  */}
          <div>
            <SigninRight />
          </div>
          {/* left right end  */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
