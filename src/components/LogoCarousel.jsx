import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import navigation styles (if needed)

// Import required Swiper modules
import {Autoplay, FreeMode, Navigation} from 'swiper/modules';

import Logo1 from '../assets/about-us/companyIcons/citi.svg';
import Logo2 from '../assets/about-us/companyIcons/citi.svg';
import Logo3 from '../assets/about-us/companyIcons/cisco.svg';
import Logo4 from '../assets/about-us/companyIcons/ericsson.svg';
import Logo5 from '../assets/about-us/companyIcons/vimeo.svg';
import Logo6 from '../assets/about-us/companyIcons/hewlett.svg';
import Logo7 from '../assets/about-us/companyIcons/samsung.svg';
import Logo8 from '../assets/about-us/companyIcons/volkswagen.svg';


const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8]; // Add more logos as needed

function LogoCarousel() {
    return (
        <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={32}
            slidesPerView="3"
            freeMode={true}
            loop={true}
            speed={3000}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: { // Tailwind's sm breakpoint
                    slidesPerView: 3,
                    spaceBetween: 20,

                },
                768: { // Tailwind's md breakpoint
                    slidesPerView: 5,
                    spaceBetween: 20,

                },
                1024: { // Tailwind's lg breakpoint
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1280 : {
                    slidesPerView: 7,
                    spaceBetween: 20,

                }
            }}
            className="logo-swiper overflow-hidden"
        >
            {logos.map((logo, index) => (
                <SwiperSlide key={index} className="flex justify-center items-center">
                    <img src={logo} alt={`Logo ${index + 1}`} className="w-14 h-14 object-contain" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default LogoCarousel;
