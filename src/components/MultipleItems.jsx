import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import InstructorCard from "./InstructorCard.jsx";
import InstructorOneImg from "../assets/about-us/instructor/instructor-1.png";
import InstructorTwoImg from "../assets/about-us/instructor/instructor-2.png";
import InstructorThreeImg from "../assets/about-us/instructor/instructor-3.png";
import InstructorFourImg from "../assets/about-us/instructor/instructor-4.png";

const instructors = [
    {
        id: 1,
        name: "Johna Than Doe",
        title: "Professor at Sigma College",
        rating: 4.3,
        image: InstructorOneImg,
    },
    {
        id: 2,
        name: "Sarah Johnson",
        title: "Senior Lecturer",
        rating: 4.5,
        image: InstructorTwoImg,
    },
    {
        id: 3,
        name: "Michael Chen",
        title: "Associate Professor",
        rating: 4.8,
        image: InstructorThreeImg,
    },
    {
        id: 4,
        name: "Emma Williams",
        title: "Department Head",
        rating: 4.6,
        image: InstructorFourImg,
    },
    {
        id: 5,
        name: "Oliver Brown",
        title: "Professor at XYZ University",
        rating: 4.9,
        image: InstructorOneImg,
    }
];

const MultipleItems = () => {
    return (
        <div className={''}>
            <Swiper
                slidesPerView={"1"}

                spaceBetween={30}
                className="mySwiper"
                breakpoints={{
                    640: { // Tailwind's sm breakpoint
                        slidesPerView: 1,
                        spaceBetween: 20,

                    },
                    768: { // Tailwind's md breakpoint
                        slidesPerView: 2,
                        spaceBetween: 20,


                    },
                    1024: { // Tailwind's lg breakpoint
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1280 : {
                        slidesPerView: 4,
                        spaceBetween: 20,
                        centeredSlides: false
                    }
                }}
            >
                {instructors.map((instructor) => (
                    <SwiperSlide key={instructor.id}>
                        <InstructorCard instructor={instructor} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
export default MultipleItems
