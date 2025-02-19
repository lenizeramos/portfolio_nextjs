import React from "react";
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100"
    >
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="flex flex-wrap mb-8">
        <div className="w-full md:w-1/2 p-4">
          <Image
            className="main-picture"
            src="/images/main_picture.JPG"
            alt="Main picture"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>

        <div className="w-full md:w-1/2 p-4">
          <picture className="text-about">
            <source
              media="(max-width: 600px)"
              srcSet="/images/about_mobile.png"
              type="image/jpg"
            />
            <Image
              className="text"
              src="/images/about_desktop.png"
              alt="Text about me"
              width={500}
              height={500}
              objectFit="cover"
            />
          </picture>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="w-full">
          <Image
            className="second-picture"
            src="/images/moraine_lake.jpg"
            alt="Second picture"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className="w-full">
          <Image
            className="third-picture"
            src="/images/paris.jpg"
            alt="Third picture"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className="w-full">
          <Image
            className="fourth-picture"
            src="/images/ny.jpg"
            alt="Fourth picture"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className="w-full">
          <Image
            className="fifth-picture"
            src="/images/las_vegas.jpg"
            alt="Fifth picture"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
