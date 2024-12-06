import React from "react";
import { motion } from "framer-motion";

const LandingSection = ({ name, imgPath }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.6 } }}
      style={{
        backgroundImage: `url(${imgPath})`,
      }}
      className={`  lg:h-[89dvh] lg:w-full min-h-[200px] h-auto w-[100%] mx-auto sm:h-[327px] md:h-[427px] max-[600px] flex justify-center items-center border bg-center bg-cover bg-no-repeat`}
    >
      <h1 className=" lg:text-5xl text-3xl md:text-h2 sm:text-3xl text-heroPara font-bold ">
        {name}
      </h1>
    </motion.div>
  );
};

export default LandingSection;
