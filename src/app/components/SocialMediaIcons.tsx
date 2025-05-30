import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const className = "text-foreground hover:text-primaryColor cursor-pointer text-2xl";

const SocialMediaIcons: React.FC = () => {
  const contacts = [
    {
      id: 1,
      href: "https://github.com/lenizeramos",
      ariaLabel: "GitHub icon",
      title: "GitHub",
      Icon: FaGithub,
    },
    {
      id: 2,
      href: "https://www.linkedin.com/in/lenizeramos",
      ariaLabel: "LinkedIn icon",
      title: "LinkedIn",
      Icon: FaLinkedinIn,
    },
    {
      id: 3,
      href: "mailto:lenizemr@gmail.com",
      ariaLabel: "Email icon",
      title: "Email",
      Icon: IoMail,
    },
  ];
  return (
    <div className="flex gap-3 justify-center sm:justify-start">
      {contacts.map((contact) => (
        <a
          key={contact.id}
          href={contact.href ?? "#"}
          target="_blank"
          rel="noopener noreferrer"
          title={contact.title}
          aria-label={contact.ariaLabel}
          className={className}
        >
          <contact.Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
