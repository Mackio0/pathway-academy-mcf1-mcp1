
import { BadgeCheck } from 'lucide-react';
import PrimaryBtn from "./PrimaryBtn.jsx";

const WelcomeComponent = () => {
    const features = [
        "Access to exclusive webinars and workshops",
        "90% of students report skill improvement",
        "Courses aligned with industry standards"
    ]
    return (
        <div className={"space-y-5"}>
            <div className={"mt-4 space-y-1.5 md:space-y-3"}>
                <span className={'italic text-secondary text-sm md:text-[25px] font-kite'}>Welcome</span>

                <h1 className={'text-[25px] md:text-[31px] font-semibold '}>Empowering Your Journey to Success</h1>

                <p className={'text-sm md:text-[20px] font-hind text-para1'}>
                    "Our platform offers expertly crafted courses, personalized learning paths, and round-the-clock
                    support to help you reach your goals faster."
                </p>
            </div>
            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <BadgeCheck className={"h-5 w-5 flex-shrink-0 text-primary-600 mt-0.5"}/>
                        <span className="text-sm md:text-[16px] text-gray-600">
              {feature}
            </span>
                    </li>
                ))}
            </ul>
            <PrimaryBtn className={"py-2 px-3 rounded-md"}>
                Apply now
            </PrimaryBtn>
        </div>
    )
}
export default WelcomeComponent
