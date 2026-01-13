import React from "react";

interface ParagraphLinkProps {
  href: string;
  children: React.ReactNode;
}

const ParagraphLink = ({ href, children }: ParagraphLinkProps) => {
  return (
    <a
      href={href}
      className="underline text-link hover:text-linkHover"
    >
      {children}
    </a>
  );
};

export default ParagraphLink;
