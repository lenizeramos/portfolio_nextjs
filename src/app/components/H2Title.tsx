import React from "react";

interface TitleProps {
  titleLabel: string;
}

const H2Title: React.FC<TitleProps> = ({ titleLabel }) => {
  return (
    <h2 className="text-3xl font-bold mb-6 text-primaryColor">
      {titleLabel}
    </h2>
  );
};

export default H2Title;