"use client";

import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import H2Title from "./H2Title";
import { Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      imgSrc: "/images/unicareer.png",
      alt: "Unicareer - Job Plataform",
      href: "https://unicareer.online/",
      title: "Unicareer",
    },
    {
      id: 2,
      imgSrc: "/images/alpha_bites.png",
      alt: "Alpha Bites",
      href: "https://alpha-bites.vercel.app/",
      title: "Alpha Bites",
    },
    {
      id: 3,
      imgSrc: "/images/fridgefy_app.png",
      alt: "Fridgefy App",
      href: "https://github.com/lenizeramos/fridgefy-app",
      title: "Fridgefy App",
    },
    {
      id: 4,
      imgSrc: "/images/chat_app.png",
      alt: "Real-Time Chat App",
      href: "https://github.com/lenizeramos/chat-app",
      title: "Real-Time Chat App",
    },
    {
      id: 5,
      imgSrc: "/images/fakestore.png",
      alt: "Fake Store",
      href: "https://github.com/lenizeramos/fakestore",
      title: "Fake Store",
    },
    {
      id: 6,
      imgSrc: "/images/weather_app.png",
      alt: "Weather App",
      href: "https://github.com/lenizeramos/weather-app",
      title: "Weather App",
    },
  ];

  return (
    <SectionWrapper id="projects">
      <H2Title titleLabel={"Projects"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 50 }}
            className="project"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-96 h-96 overflow-hidden rounded-lg shadow-lg"
              title={project.title}
              aria-label={project.title}
            >
              <Image
                src={project.imgSrc}
                alt={project.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <p className="absolute bottom-0 left-0 right-0 text-2xl font-semibold text-white text-center bg-black bg-opacity-70 p-2 flex justify-center items-center gap-2">
                {project.title}
                <LinkIcon className="w-5 h-5" />
              </p>
            </a>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
