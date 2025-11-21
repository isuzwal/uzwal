export interface ChildrenProps {
  children: React.ReactNode;
}

export interface LinkProps {
  name: string;
  link:string;
}

export const Links: LinkProps[] = [
  {
    name: "Portfolio",
    link:"/"
  },
  {
    name: "Work",
    link:"/work"
  },
  {
    name: "Projects",
    link:"/projects"
  },
];