import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-background pb-8">
      <div className="text-center mt-8 pt-4">
        <p className="text-sm text-foreground">
          &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
