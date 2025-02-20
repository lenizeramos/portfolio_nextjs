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
  <Image
    className={className}
    src={src}
    alt={alt}
    width={width}
    height={height}
    objectFit={objectFit}
  />
);

const AboutSection: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <H2Title titleLabel={"About me"} />

      <div className="flex flex-wrap mb-8">
        <CustomImage
          src="/images/main_picture.JPG"
          alt="Main picture"
          width={400}
          height={500}
          className={`main-picture border-8 border-foreground`}
          objectFit="cover"
        />

        <div className="transform rotate-12 origin-center">
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
              width={400}
              height={500}
              objectFit="cover"
            />
          </picture>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        <CustomImage
          src="/images/moraine_lake.jpg"
          alt="Moraine Lake"
          width={200}
          height={500}
          className="second-picture transform -rotate-12 origin-center border-8 border-foreground"
          objectFit="cover"
        />
        <CustomImage
          src="/images/paris.jpg"
          alt="Paris"
          width={200}
          height={500}
          className="third-picture transform rotate-0 origin-center border-8 border-foreground"
          objectFit="cover"
        />
        <CustomImage
          src="/images/ny.jpg"
          alt="New York"
          width={200}
          height={500}
          className="fourth-picture transform rotate-12 origin-center border-8 border-foreground"
          objectFit="cover"
        />
        <CustomImage
          src="/images/las_vegas.jpg"
          alt="Las Vegas"
          width={200}
          height={500}
          className="fifth-picture transform -rotate-12 origin-center border-8 border-foreground"
          objectFit="cover"
        />
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
