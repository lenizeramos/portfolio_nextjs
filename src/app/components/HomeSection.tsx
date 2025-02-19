import React from "react";
import Image from "next/image";
import SocialMediaIcons from "./SocialMediaIcons";
import SectionWrapper from "./SectionWrapper";

const HomeSection: React.FC = () => {
  return (
    <SectionWrapper id="home">
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
        <p className="text-3xl font-bold text-foreground">Leni Ramos</p>
        <p className="text-xl text-primaryColor">Web Developer</p>
        <SocialMediaIcons />
      </div>
    </SectionWrapper>
  );
};

export default HomeSection;
