import { Code, Github, Linkedin, MailIcon, Map, Twitter } from 'lucide-react';
import { JSX } from 'react';
import { GoDotFill } from 'react-icons/go';
import { SiPeerlist } from 'react-icons/si';
export interface ChildrenProps {
  children: React.ReactNode;
}

export interface LinkProps {
  name: string;
  link: string;
}

export const Links: LinkProps[] = [
  {
    name: 'Projects',
    link: '/projects',
  },

  {
    name: 'Work',
    link: '/work',
  },
];

interface MediaLink {
  icon: React.ReactNode;
  lablename: string;
  link: string;
}

export const SocialMedia: MediaLink[] = [
  {
    icon: <Twitter className="size-4" />,
    lablename: 'X',
    link: 'https://x.com/isuzwal',
  },
  {
    icon: <Github className="size-4" />,
    lablename: 'Github',
    link: 'https://github.com/isuzwal',
  },
  {
    icon: <Linkedin className="size-4" />,
    lablename: 'LinkedIn',
    link: 'https://www.linkedin.com/in/isuzwal-9719ba289/',
  },
  {
    icon: <SiPeerlist className="size-4" />,
    lablename: 'PeerList',
    link: 'https://peerlist.io/lufffy',
  },
];

interface BIOProps {
  icons: React.ReactNode;
  data: string;
}
export const ShortBio: BIOProps[] = [
  {
    icons: <Code className="size-4" />,
    data: 'Full Stack developer',
  },
  {
    icons: <Map className="size-4" />,
    data: 'Nepal,Np',
  },
  {
    icons: <MailIcon className="size-4" />,
    data: 'ujjwalgaihre0@gmail.com',
  },
  {
    icons: <GoDotFill className="size-4 text-green-400  drop-shadow-[0_0_6px_#22c55e] " />,
    data: ' Available for Hire',
  },
];

interface SkillsProps {
  icon: JSX.Element;
  skill_name: string;
  lablename: string;
}
export const Skills: SkillsProps[] = [
  {
    icon: (
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path
          fill="#00bcd4"
          d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6"
        />
        <path fill="#00bcd4" d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2" />
        <path
          fill="#00bcd4"
          d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z"
        />
        <path
          fill="#00bcd4"
          d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369"
        />
      </svg>
    ),
    skill_name: 'React',
    lablename: 'React',
  },

  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 128 128">
        <path
          fill="#83CD29"
          d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772c8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086c-3.146 1.783-3.726 2.02-6.677 3.043c-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 0 0 4.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066c-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566c0 7.466 4.059 16.512 23.453 16.512c14.039 0 22.088-5.455 22.088-15.109c0-9.572-6.467-12.084-20.082-13.886c-13.762-1.819-15.16-2.738-15.16-5.962c0-2.658 1.184-6.203 11.374-6.203c9.105 0 12.461 1.954 13.842 8.091c.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396c.24-.272.367-.613.335-.979c-.891-10.568-7.912-15.493-22.112-15.493c-12.631 0-20.166 5.334-20.166 14.275c0 9.698 7.497 12.378 19.622 13.577c14.505 1.422 15.633 3.542 15.633 6.395c0 4.955-3.978 7.066-13.309 7.066z"
        />
      </svg>
    ),
    skill_name: 'Node.js',
    lablename: 'Node.js',
  },

  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <g fill="none">
          <g clipPath="url(#akarIconsNextjsFill0)">
            <path
              fill="currentColor"
              d="M11.214.006c-.052.005-.216.022-.364.033c-3.408.308-6.6 2.147-8.624 4.974a11.88 11.88 0 0 0-2.118 5.243c-.096.66-.108.854-.108 1.748s.012 1.089.108 1.748c.652 4.507 3.86 8.293 8.209 9.696c.779.251 1.6.422 2.533.526c.364.04 1.936.04 2.3 0c1.611-.179 2.977-.578 4.323-1.265c.207-.105.247-.134.219-.157a211.64 211.64 0 0 1-1.955-2.62l-1.919-2.593l-2.404-3.559a342.499 342.499 0 0 0-2.422-3.556c-.009-.003-.018 1.578-.023 3.51c-.007 3.38-.01 3.516-.052 3.596a.426.426 0 0 1-.206.213c-.075.038-.14.045-.495.045H7.81l-.108-.068a.44.44 0 0 1-.157-.172l-.05-.105l.005-4.704l.007-4.706l.073-.092a.644.644 0 0 1 .174-.143c.096-.047.133-.051.54-.051c.478 0 .558.018.682.154c.035.038 1.337 2 2.895 4.362l4.734 7.172l1.9 2.878l.097-.063a12.318 12.318 0 0 0 2.465-2.163a11.947 11.947 0 0 0 2.825-6.135c.096-.66.108-.854.108-1.748s-.012-1.088-.108-1.748C23.24 5.75 20.032 1.963 15.683.56a12.6 12.6 0 0 0-2.498-.523c-.226-.024-1.776-.05-1.97-.03Zm4.913 7.26a.473.473 0 0 1 .237.276c.018.06.023 1.365.018 4.305l-.007 4.218l-.743-1.14l-.746-1.14v-3.066c0-1.983.009-3.097.023-3.151a.478.478 0 0 1 .232-.296c.097-.05.132-.054.5-.054c.347 0 .408.005.486.047Z"
            />
          </g>
          <defs>
            <clipPath id="akarIconsNextjsFill0">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </g>
      </svg>
    ),
    skill_name: 'Next.js',
    lablename: 'Next.js',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 384">
        <path
          fill="#0ACF83"
          d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64"
        />
        <path
          fill="#A259FF"
          d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64"
        />
        <path fill="#F24E1E" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" />
        <path fill="#FF7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" />
        <path
          fill="#1ABCFE"
          d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64"
        />
      </svg>
    ),
    skill_name: 'Figma',
    lablename: 'Figma',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
        <g fill="none">
          <rect width="256" height="256" fill="#023430" rx="60" />
          <path
            fill="#10AA50"
            d="M171.173 107.591c-10.537-46.481-32.497-58.855-38.099-67.602A99.398 99.398 0 0 1 126.949 28c-.296 4.13-.84 6.73-4.35 9.862c-7.047 6.283-36.977 30.673-39.496 83.486c-2.347 49.242 36.2 79.605 41.292 82.744c3.916 1.927 8.685.041 11.012-1.728c18.581-12.752 43.969-46.75 35.786-94.773"
          />
          <path
            fill="#B8C4C2"
            d="M128.545 177.871c-.97 12.188-1.665 19.27-4.129 26.235c0 0 1.617 11.603 2.753 23.894h4.019a223.446 223.446 0 0 1 4.384-25.732c-5.203-2.56-6.827-13.702-7.027-24.397Z"
          />
          <path
            fill="#12924F"
            d="M135.565 202.275c-5.258-2.429-6.779-13.806-7.013-24.404a499.824 499.824 0 0 0 1.136-52.545c-.276-9.194.13-85.158-2.265-96.28a92.425 92.425 0 0 0 5.651 10.936c5.602 8.754 27.569 21.128 38.099 67.609c8.203 47.941-17.047 81.849-35.608 94.684Z"
          />
        </g>
      </svg>
    ),
    skill_name: 'MongoDB',
    lablename: 'MongoDB',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20.493 6.725c.256-.334.652-.53 1.073-.53h.34l-4.392 5.743L22 17.803h-.34a1.35 1.35 0 0 1-1.073-.53l-3.576-4.676l-3.577 4.676a1.35 1.35 0 0 1-1.072.53h-.34l4.485-5.865l-4.391-5.743h.34c.42 0 .817.196 1.072.53l3.482 4.554z"
        />
        <path
          fill="currentColor"
          fill-rule="evenodd"
          d="M5.563 17.146c1.924.702 3.936-.094 4.959-1.647c.2-.305.53-.498.896-.498h.255c-.94 2.437-3.72 3.856-6.363 2.905C3.287 17.178 2 15.179 2 13.029V10.8a5.01 5.01 0 0 1 5.486-4.981c2.593.243 4.521 2.523 4.521 5.127V12.6H2.801v.444c0 1.802 1.069 3.485 2.762 4.102m1.44-10.55a4.21 4.21 0 0 0-4.202 4.202V11.8h8.406v-1a4.21 4.21 0 0 0-4.203-4.204"
          clipRule="evenodd"
        />
      </svg>
    ),
    skill_name: 'Express.js',
    lablename: 'Express.js',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
        <g fill="none">
          <rect width="256" height="256" fill="#2396ED" rx="60" />
          <path
            fill="#fff"
            d="M141.187 122.123h20.717v-18.744h-20.717v18.744Zm-24.662 0h20.716v-18.744h-20.716v18.744Zm-24.17 0h20.717v-18.744H92.355v18.744Zm-24.17 0H88.41v-18.744H68.186v18.744Zm-24.662 0H64.24v-18.744H43.523v18.744Zm24.663-22.69h20.223V80.69H68.186v18.743Zm24.17 0h20.716V80.69H92.355v18.743Zm24.169 0h20.716V80.69h-20.716v18.743Zm0-22.69h20.716V58h-20.716v18.744ZM228 113.739s-8.879-8.386-27.129-5.426c-1.973-14.305-17.264-22.69-17.264-22.69s-14.304 17.264-3.946 36.501c-2.959 1.48-7.892 3.453-15.291 3.453H28.726c-2.467 9.372-2.467 71.521 65.602 71.521c48.832 0 85.333-22.689 102.597-64.123C222.574 134.948 228 113.738 228 113.738Z"
          />
        </g>
      </svg>
    ),
    skill_name: 'Docker',
    lablename: 'Docker',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 432 416">
        <path
          fill="currentColor"
          d="M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"
        />
      </svg>
    ),
    skill_name: 'GitHub',
    lablename: 'GitHub',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754a1.31 1.31 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 0 1-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 0 1-.325.713z"
        />
      </svg>
    ),
    skill_name: 'Prisma',
    lablename: 'Prisma',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 236">
        <path fill="#E24329" d="m128.075 236.075l47.104-144.97H80.97l47.104 144.97Z" />
        <path fill="#FC6D26" d="m128.075 236.074l-47.104-144.97H16.816l111.259 144.97Z" />
        <path
          fill="#FCA326"
          d="M16.816 91.104L.275 142.006a10.95 10.95 0 0 0 3.98 12.235l123.82 89.833z"
        />
        <path fill="#E24329" d="M16.816 91.105h64.155L52.822 5.15a5.49 5.49 0 0 0-10.454 0z" />
        <path fill="#FC6D26" d="m128.075 236.074l47.104-144.97h64.155z" />
        <path
          fill="#FCA326"
          d="m239.259 91.104l16.54 50.902a10.95 10.95 0 0 1-3.98 12.235l-123.744 89.833z"
        />
        <path fill="#E24329" d="M239.259 91.105h-64.155l28.149-85.954a5.49 5.49 0 0 1 10.454 0z" />
      </svg>
    ),
    skill_name: 'GitLab',
    lablename: 'GitLab',
  },
];

// Work Interface
export interface WorkProps {
  company: string;
  position: string;
  link: string;
  daterange: string;
  responsibilities: string[];
}

export interface ProjectProps {
  name: string;
  imageURL: string;
  description: string;
  liveURL: string;
  codeURL: string;
  techstack: string[];
  date: string;
  type: 'building' | 'working';
}

export const ProjectsData: ProjectProps[] = [
  {
    name: 'Truly',
    imageURL: '/images/uzwal.jpg',
    description:
      'Truly is a modern blog web application that allows users to create, share, and discover engaging content with a clean and intuitive interface.',
    liveURL: '    https://truly-blog-app.vercel.app/',
    codeURL: '/',
    techstack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Express.js', 'Node.js'],
    date: '2024',
    type: 'working',
  },
];
