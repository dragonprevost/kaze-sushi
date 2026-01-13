import Link from "next/link";
import { ReactNode } from "react";

interface StyledLinkProps {
  href: string;
  children: ReactNode;
  className?: string; // Optional prop to allow additional custom styles
}

export default function StyledLink({
  href,
  children,
  className,
}: StyledLinkProps) {
  return (
    <Link href={href}>
      <span
        className={`underline text-link hover:text-linkHover hover:underline-offset-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-attention ${className}`}
      >
        {children}
      </span>
    </Link>
  );
}
