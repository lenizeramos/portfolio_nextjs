import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen w-full flex flex-col justify-center items-center bg-[linear-gradient(to_top,_var(--bgColorStart),_var(--bgColorEnd))] p-8 z-[-2]"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
