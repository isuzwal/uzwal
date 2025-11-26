
import { Code, DotIcon, Github,  Linkedin, MailIcon, Map, Twitter } from "lucide-react";
import { GoDotFill } from "react-icons/go";
import { SiPeerlist } from "react-icons/si";
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
      icon:<SiPeerlist className="size-5" />,
      lablename:"PeerList",
      link:"https://peerlist.io/lufffy"

    }
];


interface BIOProps{
  icons:React.ReactNode;
  data:string;
}
export const ShortBio:BIOProps[]=[
   {
    icons:<Code  className="size-5" />,
    data:"Full Stack developer"
   },
   {
    icons:<Map  className="size-5" />,
    data:"Nepal,Np"
   },
   {
  icons:<MailIcon  className="size-5" />,
  data:"ujjwalgaihre0@gmail.com"
   },
   {
   icons:<GoDotFill className="size-5 text-green-400  drop-shadow-[0_0_6px_#22c55e] " />,
   data:" Available for Hire"
   }

  ]