import React from "react";
import SocialMediaBtn from "../components/SocialMediaBtn";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FollowUsOn = ({ className, isTextWhite = false }) => {
  return (
    <div className={`mt-4 ${className}`}>
      <p
        className={`font-medium ${
          isTextWhite ? "text-heroPara" : "text-footerColor"
        }`}
      >
        Follow us on
      </p>
      <div className="flex items-center gap-3">
        <SocialMediaBtn iconSVG={<FaFacebookF />} />
        <SocialMediaBtn iconSVG={<FaInstagram />} />
        <SocialMediaBtn iconSVG={<FaXTwitter />} />
        <SocialMediaBtn iconSVG={<FaLinkedinIn />} />
        <SocialMediaBtn iconSVG={<FaYoutube />} />
      </div>
    </div>
  );
};

export default FollowUsOn;
