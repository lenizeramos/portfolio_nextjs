import React from "react";
import Image from "next/image";
import SocialMediaIcons from "./SocialMediaIcons";

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center bg-[#0b0b0b] p-8"
    >
      <div className="flex-shrink-0 mr-8">
        <Image
          src={"/images/avatar.png"}
          width={300}
          height={300}
          alt="avatar"
          className="rounded-full shadow-lg"
        />
      </div>
      <div className="text-center md:text-left">
        <p className="text-3xl font-bold text-white">Leni Ramos</p>
        <p className="text-xl text-[#ff007f]">Web Developer</p>
       <SocialMediaIcons/>
      </div>
    </section>
  );
};

export default HomeSection;
