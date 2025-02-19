import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const className = "text-white hover:text-gray-400 cursor-pointer"

const SocialMediaIcons: React.FC = () => {
  return (
    <div>
      <div className="flex gap-3 justify-center sm:justify-start">
        <AiFillInstagram className={className}/>
        <FaFacebookF className={className} />
        <FaTwitter className={className} />
        <FaLinkedinIn className={className}/>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
