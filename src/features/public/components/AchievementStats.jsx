import { LineChart, Users, School, GraduationCap } from 'lucide-react'


const stats = [
    { icon: LineChart, value: "10K+", label: "Total Achievement" },
    { icon: Users, value: "160K+", label: "Students Enrolled" },
    { icon: School, value: "15K+", label: "Classes Complete" },
    { icon: GraduationCap, value: "10K+", label: "Certified Teachers" },
]

export default function AchievementStats() {
    return (
        <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
            {stats.map((stat, index) => (
                <li key={index} className="bg-primary-50 flex items-center text-center w-full justify-center p-4 rounded-[6px] gap-4">
                    <stat.icon className="text-primary-500 w-[30px] h-[30px] flex-shrink-0"/>
                    <div className="flex flex-col justify-center">
                        <h2 className="text-headingPrimary text-[25px] md:text-[31px] md:font-bold font-semibold leading-tight">{stat.value}</h2>
                        <p className="text-[12px] text-para1 font-medium font-hind md:text-[16px]">{stat.label}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}

