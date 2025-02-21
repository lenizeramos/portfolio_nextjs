import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "./SectionWrapper";
import H2Title from "./H2Title";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      imgSrc: "/images/alphaBites.png",
      alt: "Alpha Bites",
      href: "https://alpha-bites.vercel.app/",
      title: "Alpha Bites",
    },
    {
      id: 2,
      imgSrc: "/images/portfolio.png",
      alt: "Portfolio",
      href: "https://portfolio-nextjs-lyart-nine.vercel.app/",
      title: "Portfolio",
    },
    {
      id: 3,
      imgSrc: "/images/weather_app.png",
      alt: "Weather App",
      href: "https://github.com/lenizeramos/Weather-APP",
      title: "Weather App",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <H2Title titleLabel={"Projects"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <Link href={project.href}>
              <div className="relative w-full h-96">
                <Image
                  src={project.imgSrc}
                  alt={project.alt}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
                <p className="text-2xl font-semibold text-white text-center">
                  {project.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
