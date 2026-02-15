import { JSX } from "react";
import { ReactElement } from "react";

export interface navlinks {
  id: number;
  href: string;
  title: string;
}

export interface MobileMenuProps {
  open: boolean;
  handleClick: () => void;
}

export interface benefit {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface reviews {
  id: number;
  content: string;
}

export interface programs {
  id: number;
  image: string;
  title: string;
}

export interface faq {
  value: string;
  question: string;
  answer: string;
}

export interface Social {
  id: number;
  logo: ReactElement;
  href: string;
}

export interface bg {
  backgroundImage: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  backgroundRepeat: string;
}
