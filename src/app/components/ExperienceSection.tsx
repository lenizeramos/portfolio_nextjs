const ExperienceSection = () => {
  const experiences = [
    { id: 1, role: "Legal Assistant - CA", years: "2022 - 2024" },
    { id: 2, role: "Administrative Assistant - CA", years: "2019 - 2021" },
    { id: 3, role: "Volunteer - CA", years: "2019" },
    { id: 4, role: "Lawyer - BR", years: "2015 - 2019" },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="item-experience bg-white p-6 rounded-lg shadow-lg w-full sm:w-80"
          >
            <h3 className="text-xl font-semibold">{experience.role}</h3>
            <p className="text-gray-600">{experience.years}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
