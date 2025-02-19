import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center bg-bgColorStart pb-8 border-t border-gray-700">
      <div className="text-center mt-8 pt-4">
        <p className="text-sm text-foreground">
          &copy; 2025. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
