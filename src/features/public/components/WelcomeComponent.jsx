
import { BadgeCheck } from 'lucide-react';
import PrimaryBtn from "./PrimaryBtn.jsx";

const WelcomeComponent = () => {
    const features = [
        "Access to exclusive webinars and workshops",
        "90% of students report skill improvement",
        "Courses aligned with industry standards"
    ];

    return (
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
                <span className="italic text-secondary text-sm md:text-lg lg:text-2xl font-kite">Welcome</span>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Empowering Your Journey to Success</h1>
                <p className="text-sm md:text-base lg:text-lg font-hind text-para1">
                    "Our platform offers expertly crafted courses, personalized learning paths, and round-the-clock
                    support to help you reach your goals faster."
                </p>
            </div>
            <ul className="space-y-2 md:space-y-3 lg:space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0 text-primary-600 mt-0.5"/>
                        <span className="text-sm md:text-base lg:text-lg text-gray-600">
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
            <PrimaryBtn className="py-2 px-4 md:py-3 md:px-6 rounded-md text-sm md:text-base lg:text-lg">
                Apply now
            </PrimaryBtn>
        </div>
    );
};
export default WelcomeComponent
