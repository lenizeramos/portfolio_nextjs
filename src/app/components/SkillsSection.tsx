import Image from "next/image";
import H2Title from "./H2Title";
import SectionWrapper from "./SectionWrapper";

const SkillsSection = () => {
  const skills = [
    { id: 1, name: "HTML", imgSrc: "/images/html.png", alt: "HTML Icon" },
    { id: 2, name: "CSS", imgSrc: "/images/css.png", alt: "CSS Icon" },
    {
      id: 3,
      name: "JavaScript",
      imgSrc: "/images/js.png",
      alt: "JavaScript Icon",
    },
    { id: 4, name: "Git", imgSrc: "/images/git.png", alt: "Git Icon" },
    {
      id: 5,
      name: "Communicative",
      imgSrc: "/images/sound.png",
      alt: "Communicative Icon",
    },
    {
      id: 6,
      name: "Open-Minded",
      imgSrc: "/images/mind.png",
      alt: "Open-Minded Icon",
    },
  ];

  return (
    <SectionWrapper
      id="skills"
    >
      <H2Title titleLabel={"Skills"} />

      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <div key={skill.id} className="icon-skill text-center">
            <div className="font-semibold text-foreground">{skill.name}</div>
            <Image
              src={skill.imgSrc}
              alt={skill.alt}
              width={50}
              height={50}
              className="mx-auto mt-2"
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
