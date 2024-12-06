import Logo from "../../../components/Logo.jsx";
import { Link } from "react-router-dom";
import Input from "../../../components/Input.jsx";
import PrimaryBtn from "../../public/components/PrimaryBtn.jsx";
import IconButton from "../components/IconButton.jsx";
import Apple from "../../../assets/icons/Apple.svg";
import Google from "../../../assets/icons/Google.svg";
import FacebookIcon from "../../../assets/icons/fb.svg";

const RegisterPage = () => {
  return (
    <section>
      <div className={"flex  items-center justify-center h-screen"}>
        <div className=" space-y-[40px]">
          {/* logo */}
          <div className={"text-center"}>
            <Link to={"/"}>
              <Logo className={"h-[70px] w-[70px] mx-auto"} />
            </Link>
            <h1 className={"text-3xl font-bold mb-1.5 text-headingPrimary"}>
              Create an account
            </h1>
            <p className={"text-sm text-[#525252]"}>
              Already have an account?
              <span className={"text-headingPrimary underline"}>
                <Link to={"/login"}>Sign in</Link>
              </span>
            </p>
          </div>

          {/* form */}
          <div className={"space-y-3"}>
            <Input label={"Name"} className={"h-8"} />
            <Input label={"Phone"} className={"h-8"} />
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
                  Save password
                </label>
              </div>
            </div>
          </div>

          <PrimaryBtn className={"w-full py-[8px] rounded-[8px]"}>
            Create an account
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

export default RegisterPage;
