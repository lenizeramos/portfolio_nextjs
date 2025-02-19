import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

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
      href: "https://www.linkedin.com/in/x",
      ariaLabel: "LinkedIn icon",
      title: "LinkedIn",
      Icon: FaLinkedinIn,
    },
    {
      id: 3,
      href: "mailto:x",
      ariaLabel: "Email icon",
      title: "Email",
      Icon: IoMail,
    },
  ];
  return (
    <div className="flex gap-3 justify-center sm:justify-start">
      {contacts.map((contact) => (
        <Link
          key={contact.id}
          href={contact.href}
          title={contact.title}
          aria-label={contact.ariaLabel}
          className={className}
        >
          <contact.Icon />
        </Link>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
