import React from 'react'
import faqImg from "../../../assets/faq/heroSection.png";

const HeroSection = ({image,title}) => {
    return (
        <div className="relative">
            <img
                src={image}
                alt="faqImg"
                className="h-[300px] sm:h-[300px] md:h-[500px] lg:h-[550px]  object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
                    {title}
                </h1>
            </div>

        </div>
    )
}
export default HeroSection
