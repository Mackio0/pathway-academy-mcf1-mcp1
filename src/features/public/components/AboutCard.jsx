import React from 'react'

const AboutCard = ({IconDesign,description,title}) => {

    return (
        <article className="">
            <div className="flex flex-col items-center text-center space-y-4 border md:border-none lg:border-none border-paraTertiary p-4 rounded-[6px]">
                <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center">
                    <IconDesign className="w-[18px] h-[18px] text-primary-500"/>
                </div>

                <div className="space-y-2">
                    <h3 className="text-[16px] md:[20px] font-semibold font-kite text-heading">
                        {title}
                    </h3>
                    <p className="text-para1 text-[14px] font-hind">
                        {description}
                    </p>
                </div>
            </div>
        </article>
    )
}
export default AboutCard
