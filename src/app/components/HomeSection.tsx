"use client";
import React from "react";
import Image from "next/image";
import SocialMediaIcons from "./SocialMediaIcons";
import { TypeAnimation } from "react-type-animation";

const HomeSection: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col md:flex-row justify-center items-center bg-[linear-gradient(to_top,_var(--bgColorStart),_var(--bgColorEnd))] p-8 gap-8"
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
      <div className="text-center md:text-left flex flex-col gap-2">
        <div>
          <p className="text-5xl font-bold text-foreground">Leni Ramos</p>
          <div className="text-3xl text-primaryColor">
            <TypeAnimation
              sequence={["Web Developer", 1000, "Mobile Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
