import React from "react";

const ContactInput = ({ id, register, errors, name, type = "text" }) => {
  return (
    <input
      id={id}
      {...register(name)}
      className={` ${
        errors?.Name?.message && "border-red-500 "
      } flex     w-full rounded border border-paraTertiary  px-3 py-2
                  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium 
                  placeholder:text-muted-foreground 
                    disabled:cursor-not-allowed disabled:opacity-50 
                  `}
      name={name}
      type={type}
    />
  );
};

export default ContactInput;
