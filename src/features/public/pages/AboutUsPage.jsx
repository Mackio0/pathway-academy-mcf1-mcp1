
import {BadgeCheck, BookOpen, CircleDollarSign, GraduationCap, Laptop2} from "lucide-react";
import aboutImg from "../../../assets/about-us/heroOther/heroSection.png"

import AchievementStats from "../components/AchievementStats.jsx";
import Empowering from "../../../assets/about-us/heroOther/empowering.png"
import AboutCard from "../components/AboutCard.jsx";
import WelcomeComponent from "../components/WelcomeComponent.jsx";
import MultipleItems from "../../../components/MultipleItems.jsx";
import LogoCarousel from "../../../components/LogoCarousel.jsx";
import Facilities from "../../../assets/about-us/heroOther/facilities.png"
import FeedBackSlide from "../components/FeedBackSlide.jsx";
import {useFacilitieDataStore} from "../../../store/useFacilitieDataStore.js";

const AboutUsPage = () => {

    const data = [
        {
            IconDesign: Laptop2,
            title: "Learn from everywhere",
            description: "No boundaries—learn anytime, anywhere."
        },
        {
            IconDesign: CircleDollarSign,
            title: "Save Money",
            description: "Maximize your savings, minimize your costs—smart learning starts here."
        },
        {
            IconDesign: BookOpen,
            title: "Flexible learning",
            description: "Learn at your own pace, on your own terms"
        },
        {
            IconDesign: GraduationCap,
            title: "Unlimited certificates",
            description: "Earn unlimited certificates, unlock endless opportunities."
        }
    ];

    const {data : FacilitiesData} = useFacilitieDataStore()

  return (
      <section className="flex flex-col min-h-screen mt-10">
          {/* hero section */}
          <div className="relative w-full h-[300px] sm:h-[300px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
              <img
                  src={aboutImg}
                  alt="About Us Hero"
                  className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                      About Us
                  </h1>
              </div>

          </div>

          {/* why choose us
          */}
          <div className="container mx-auto px-4 py-12 space-y-[40px] md:space-y-[80px] lg:
          space-y-[120px]">
              <div>
                  <h2 className="text-[31px] font-semibold text-headingPrimary text-center mb-[40px]">
                      Why Choose Us
                  </h2>
                  {/*    card */}
                  <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'}>
                      {data.map((d, index) => {
                          return (
                              <div key={index}>
                                  <AboutCard {...d}/>
                              </div>
                          )
                      })}
                  </div>
              </div>

              <div className={'grid grid-cols-1 md:grid-cols-11 md:gap-[48px] md:items-center'}>
                  <img src={Empowering} alt="empowering"
                       className="w-full h-[316px] md:w-[522px] md:h-[491px] mx-auto object-contain col-span-5"/>
                  <div className={'col-span-5'}>
                      <WelcomeComponent/>
                  </div>
              </div>

              <AchievementStats/>

              {/*instructor*/}
              <div>
                  <div className={'text-center'}>
                      <h1 className={'text-[25px] font-semibold text-heading mb-1'}>Our Experience Instructor</h1>
                      <p className={'text-[16px] text-para1'}>
                          Learn from the best and achieve your goals with our exceptional instructors.
                      </p>
                  </div>
                  {/*instructor card slider*/}
                  <div className={"my-5 space-y-16"}>
                      <MultipleItems/>
                      <LogoCarousel/>
                  </div>
              </div>


              {/*facilities*/}
              <div className={'mb-5 grid grid-cols-1 md:grid-cols-11 md:gap-[48px] items-center'}>
                  <img src={Facilities} alt="Facilities"
                       className="w-[388px] h-[470px] md:w-[525px] md:h-[600px] mx-auto object-contain col-span-5"/>
                  <div className={'col-span-5 space-y-[20px]'}>
                      <h1 className={'text-heading font-semibold text-[25px] md:text-[31px] md:font-bold'}>Our
                          Facilities</h1>
                      <p className={'text-para1 text-[14px]'}>
                          Our platform is designed for learners with busy schedules, allowing you to learn whenever
                          it's convenient for you
                      </p>
                      <div>
                          <ul className={'space-y-5'}>
                              {
                                  FacilitiesData.map((d) => {
                                      return (
                                          <li key={d.id}>
                                              <div className={'flex items-center gap-1.5 mb-[12px]'}>
                                                  <BadgeCheck className={"h-5 w-5 flex-shrink-0 text-primary-600"}/>
                                                  <span className="text-[16px] font-semibold text-heading">
                                          {d.title}
                             </span>
                                              </div>
                                              <p className={'text-[14px] text-para1 leading-[22px]'}>
                                                  {d.description}
                                              </p>
                                          </li>
                                      )
                                  })

                              }

                          </ul>
                      </div>
                  </div>
              </div>


              {/*    feedback*/}
              <div>
                  <h1 className={'font-bold text-heading text-[25px] md:text-[31px] text-center mb-[30px]'}>Some
                      valuable feedback from
                      our students</h1>

                  <FeedBackSlide/>
              </div>


          </div>


      </section>
  )
}

export default AboutUsPage
