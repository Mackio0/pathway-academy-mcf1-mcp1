import ContainerComponent from "../../../components/ContainerComponent.jsx";
import Logo from "../../../components/Logo.jsx";
import LoginImg from "../../../assets/login-signup-applyForm/SignIn.svg"
import {Link,} from "react-router-dom";
import Input from "../../../components/Input.jsx";
import PrimaryBtn from "../../public/components/PrimaryBtn.jsx";
import IconButton from "../components/IconButton.jsx";
import {Apple, Chrome, Facebook} from 'lucide-react';

const LoginPage = () => {
  return (
      <section>
          <div className={'p-5'}>
              <Logo className={"h-[40px]"}/>
          </div>
          <ContainerComponent className={"p-5 mt-10"}>
              <div className={"flex items-center justify-center"}>
                  <div className={"flex items-center justify-between gap-10"}>
                      <img src={LoginImg} className={"h-[300px] hidden md:block"} alt={"login"}/>

                      <div>
                          <div className={"space-y-5"}>

                              <div className={"text-center"}>
                                  <h1 className={"text-3xl font-bold mb-1.5 text-headingPrimary"}>Welcome Back</h1>
                                  <p className={"text-sm text-[#525252]"}>Don't have an account? <span
                                      className={"text-headingPrimary underline"}><Link
                                      to={'/signup'}>Create an account</Link></span>
                                  </p>
                              </div>

                              <div className={"space-y-3"}>
                                  <Input label={"Email"} className={"h-8"}/>
                                  <Input label={"Password"} className={"h-8"}/>
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
                                              Remember for 30 days
                                              .
                                          </label>
                                      </div>

                                      <div>
                                          <Link to={'/'} className={"text-headingPrimary underline"}>Forgot
                                              Password?</Link>
                                      </div>

                                  </div>
                              </div>

                              <PrimaryBtn className={'w-full py-2'}>Login to your account</PrimaryBtn>
                          </div>

                          <div className="my-5 flex items-center">
                              <div className="flex-grow h-px bg-paraTertiary"></div>
                              <span className="px-4 text-sm text-headingPrimary uppercase">or continue with</span>
                              <div className="flex-grow h-px bg-paraTertiary"></div>
                          </div>

                          <div className={"flex items-center gap-5"}>
                              <IconButton className={'w-full'}
                                          icon={<Chrome className={'text-headingPrimary size-5'}/>}> Google</IconButton>
                              <IconButton className={'w-full'}
                                          icon={<Facebook
                                              className={'text-headingPrimary size-5'}/>}> Facebook</IconButton>
                              <IconButton className={'w-full'}
                                          icon={<Apple className={'text-headingPrimary size-5'}/>}> Apple</IconButton>
                          </div>
                      </div>
                  </div>
              </div>

          </ContainerComponent>
      </section>
  )
}

export default LoginPage
