import Image from 'next/image';
import Link from 'next/link';
import SectionWrapper from "./SectionWrapper";
import H2Title from "./H2Title";

const ProjectsSection = () => {
  const projects = [
    { id: 1, imgSrc: '/images/coming_soon_1.jpg', alt: 'Coming Soon', href: 'https://github.com/lenizeramos' },
    { id: 2, imgSrc: '/images/coming_soon_2.jpg', alt: 'Coming Soon', href: 'https://github.com/lenizeramos' },
    { id: 3, imgSrc: '/images/coming_soon_1.jpg', alt: 'Coming Soon', href: 'https://github.com/lenizeramos' },
    { id: 4, imgSrc: '/images/coming_soon_2.jpg', alt: 'Coming Soon', href: 'https://github.com/lenizeramos' },
    { id: 5, imgSrc: '/images/coming_soon_1.jpg', alt: 'Coming Soon', href: 'https://github.com/lenizeramos' },
    { id: 6, imgSrc: '/images/coming_soon_2.jpg', alt: 'Coming Soon', href: 'https://github.com/lenizeramos' },
  ];

  return (
    <SectionWrapper id="projects" >
       <H2Title titleLabel={"Projects"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <Link href={project.href}>
              <Image
                src={project.imgSrc}
                alt={project.alt}
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
