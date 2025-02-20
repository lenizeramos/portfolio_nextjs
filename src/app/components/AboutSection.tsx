import React from "react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import H2Title from "./H2Title";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  objectFit: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const CustomImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit,
}) => (
  <div className="w-full p-4">
    <Image
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      objectFit={objectFit}
    />
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <H2Title titleLabel={"About me"} />

      <div className="flex flex-wrap mb-8">
        <CustomImage
          src="/images/main_picture.JPG"
          alt="Main picture"
          width={500}
          height={500}
          className="main-picture"
          objectFit="cover"
        />

        <div className=" md:w-1/2 p-4">
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
        <CustomImage
          src="/images/moraine_lake.jpg"
          alt="Moraine Lake"
          width={500}
          height={500}
          className="second-picture"
          objectFit="cover"
        />
        <CustomImage
          src="/images/paris.jpg"
          alt="Paris"
          width={500}
          height={500}
          className="third-picture"
          objectFit="cover"
        />
        <CustomImage
          src="/images/ny.jpg"
          alt="New York"
          width={500}
          height={500}
          className="fourth-picture"
          objectFit="cover"
        />
        <CustomImage
          src="/images/las_vegas.jpg"
          alt="Las Vegas"
          width={500}
          height={500}
          className="fifth-picture"
          objectFit="cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
