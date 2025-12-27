export interface MediaLink {
  icon: React.ReactNode;
  lablename: string;
  link: string;
}
export interface LinkProps {
  name: string;
  link: string;
}
export interface ChildrenProps {
  children: React.ReactNode;
}
export interface BioProps {
  icons: React.ReactNode;
  data: string;
}
export interface TechStackItem {
  name: string;
  icon: React.ReactNode;
}
export interface SkillsProps {
  icon: React.ReactNode;
  skill_name: string;
  lablename: string;
}
export interface ProjectProps {
  name: string;
  imageURL: string;
  description: string;
  liveURL: string;
  codeURL: string;
  techstack: TechStackItem[];
  type: 'building' | 'working';
}
export interface Passion {
  name: string;
}
export interface SocialMediaProps {
  name: string;
  icon: React.ReactNode;
  url: string;
}
export interface WorksProps {
  image: string;
  company_name: string;
  social_media: SocialMediaProps[];
  role: string;
  duration: string;
  descrption_1: string;
  descrption_2: string;
  tech: TechStackItem[];
}
