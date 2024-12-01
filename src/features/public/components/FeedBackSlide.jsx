import React, { useRef } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// Sample testimonial data
const testimonials = [
    {
        id: 1,
        name: "Nix Maxwell",
        image: "https://i.pravatar.cc/150?img=1",
        rating: 4.5,
        text: "Earning a certificate from a recognized institution is a significant advantage for career development."
    },
    {
        id: 2,
        name: "Sarah Johnson",
        image: "https://i.pravatar.cc/150?img=2",
        rating: 5,
        text: "The course content was exceptional and helped me advance in my career path significantly."
    },
    {
        id: 3,
        name: "Mike Peters",
        image: "https://i.pravatar.cc/150?img=3",
        rating: 4.5,
        text: "The practical knowledge gained from this program has been invaluable in my professional journey."
    },
    {
        id: 4,
        name: "Emily Davis",
        image: "https://i.pravatar.cc/150?img=4",
        rating: 5,
        text: "The flexibility of the online courses allowed me to balance my studies with work commitments."
    },
    {
        id: 5,
        name: "Alex Thompson",
        image: "https://i.pravatar.cc/150?img=5",
        rating: 4.5,
        text: "The instructors were highly knowledgeable and provided excellent support throughout the program."
    }
]

const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
        <Star
            key={index}
            className={`w-[16px] h-[16px] ${index < Math.floor(rating) ? "text-[#F7C32E] fill-current" : "text-gray-300"}`}
        />
    ));
};

export default function FeedBackSlide() {
    const swiperRef = useRef(null);

    return (
        <div className="relative pb-16">
            <Swiper
                modules={[Navigation, A11y]}
                centeredSlides={true}
                loop={true}
                speed={500}
                slidesPerView={1}
                spaceBetween={20}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                breakpoints={{
                    640: { slidesPerView: 1.5, spaceBetween: 20 },
                    768: { slidesPerView: 2, spaceBetween: 30 },
                    1024: { slidesPerView: 3, spaceBetween: 40 },
                    1280: { slidesPerView: 3, spaceBetween: 50 },
                }}
                className="pb-12 overflow-hidden"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                        {({ isActive }) => (
                            <div
                                className={`bg-[#EFFAF4] p-6 md:p-8 text-center rounded-[16px] shadow-md transition-all duration-300 h-full flex flex-col justify-between
                                            ${isActive ? 'scale-110 shadow-lg z-10 ' : 'scale-100 opacity-70'}`}
                            >
                                <div className="flex flex-col items-center gap-4 rounded-[16px]">
                                    <div className="flex items-center gap-4 mb-[16px]">
                                        <img
                                            src={testimonial.image}
                                            alt={`${testimonial.name}'s profile picture`}
                                            className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover"
                                        />
                                        <div className="text-left">
                                            <h3 className="text-[16px] font-semibold mb-1">
                                                {testimonial.name}
                                            </h3>
                                            <div className="flex items-center gap-1">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-[16px] md:text-lg text-gray-700 font-hind flex-grow">
                                        "{testimonial.text}"
                                    </p>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 mt-6">
                <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="text-black w-5 h-5" />
                </button>
                <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    aria-label="Next slide"
                >
                    <ChevronRight className="text-black w-5 h-5" />
                </button>
            </div>

            <style jsx global>{`
                .swiper {
                    overflow: hidden;
                }
                .swiper-wrapper {
                    align-items: stretch;
                }
                .swiper-slide {
                    height: auto;
                }
            `}</style>
        </div>
    );
}