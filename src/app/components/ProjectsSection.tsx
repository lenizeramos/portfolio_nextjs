import Image from 'next/image';
import Link from 'next/link';

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
    <section id="projects" className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
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
    </section>
  );
};

export default ProjectsSection;
