
import { Github, Linkedin, MailIcon, Twitter } from "lucide-react";

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface LinkProps {
  name: string;
  link: string;
}

export const Links: LinkProps[] = [
  {
    name: "Portfolio",
    link: "/",
  },
  {
    name: "Work",
    link: "/work",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

interface MediaLink {
  icon: React.ReactNode,
  lablename: string,
  link:string
}

export const SocialMedia: MediaLink[] = [
  {
    icon: <Twitter className="size-5" />,
    lablename: "X",
    link:"https://x.com/isuzwal"
  },
  {
    icon: <Github   className="size-5"/>,
    lablename: "Github",
    link:"https://github.com/isuzwal"
  },
  {
    icon: <Linkedin  className="size-5" />,
    lablename: "LinkedIn",
    link:"https://www.linkedin.com/in/isuzwal-9719ba289/"
  },
  {
    icon: <MailIcon   className="size-5"/>,
    lablename: "Gmail",
    link:"mailto:isuzwal@gamil.com"
  },
];
