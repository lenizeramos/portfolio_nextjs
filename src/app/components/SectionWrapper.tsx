import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children }) => {
  return (
    <section
      id={id}
      className="min-h-screen w-full flex flex-col justify-center items-center bg-[linear-gradient(to_top,_#0b0b0b,_rgba(11,_11,_11,_0.7960784314))] p-8"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
