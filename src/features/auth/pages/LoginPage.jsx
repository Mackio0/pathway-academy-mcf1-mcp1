import ContainerComponent from "../../../components/ContainerComponent.jsx";
import Logo from "../../../components/Logo.jsx";
import LoginImg from "../../../assets/login-signup-applyForm/SignIn.svg";
import { Link } from "react-router-dom";
import Input from "../../../components/Input.jsx";
import PrimaryBtn from "../../public/components/PrimaryBtn.jsx";
import IconButton from "../components/IconButton.jsx";
import Apple from "../../../assets/icons/Apple.svg";
import Google from "../../../assets/icons/Google.svg";
import FacebookIcon from "../../../assets/icons/fb.svg";

const LoginPage = () => {
  return (
    <section>
      <div className={"flex items-center justify-center h-screen"}>
        <div className="space-y-[40px]">
          {/* logo */}
          <div className={"text-center"}>
            <Link to={"/"}>
              <Logo className={"h-[70px] w-[70px] mx-auto object-contain"} />
            </Link>
            <h1 className={"text-3xl font-bold mb-1.5 text-headingPrimary"}>
              Welcome Back
            </h1>
            <p className={"text-sm text-[#525252]"}>
              Don't have an account?{" "}
              <span className={"text-headingPrimary underline"}>
                <Link to={"/register"}>Create an account</Link>
              </span>
            </p>
          </div>

          {/* form */}
          <div className={"space-y-3"}>
            <Input label={"Email"} className={"h-8"} />
            <Input label={"Password"} className={"h-8"} />
            <div className={"flex items-center justify-between"}>
              <div className="flex items-center">
                <input
                  id="link-checkbox"
                  type="checkbox"
                  defaultValue=""
                  className="w-4 h-4 text-[#2C2C2C]  border-gray-300 rounded focus:ring-[#2C2C2C] focus:ring-2 "
                />
                <label
                  htmlFor="link-checkbox"
                  className="ms-2  text-headingPrimary "
                >
                  Remember for 30 days .
                </label>
              </div>

              <div>
                <Link to={"/"} className={"text-headingPrimary underline"}>
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>

          <PrimaryBtn className={"w-full py-2"}>
            Login to your account
          </PrimaryBtn>

          <div className="my-5 flex items-center">
            <div className="flex-grow h-px bg-para2"></div>
            <span className="px-4 text-sm text-headingPrimary uppercase">
              or continue with
            </span>
            <div className="flex-grow h-px bg-para2"></div>
          </div>

          <div className={"flex gap-[20px]"}>
            <IconButton icon={<img src={Google} alt={"google"} />}>
              {" "}
              Google
            </IconButton>
            <IconButton icon={<img src={FacebookIcon} alt={"facebook"} />}>
              {" "}
              Facebook
            </IconButton>
            <IconButton icon={<img src={Apple} alt={"apple"} />}>
              {" "}
              Apple
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
