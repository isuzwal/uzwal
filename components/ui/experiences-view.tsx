import { InterTeachnologies } from '@/types';
import Link from 'next/link';
import { BiWorld } from 'react-icons/bi';
import { FaTwitter } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

export const Experiences = () => {
  const social_media = [
    {
      name: 'Website',
      icon: <BiWorld className="size-4" />,
      url: 'https://uzwal-in.vercel.app/',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter className="size-4" />,
      url: 'https://x.com/isuzwal',
    },
  ];

  const url = 'https://uzwal-in.vercel.app/';
  return (
    <div className="w-full mt-2 border-b p-2">
      <h1 className="text-[20px] dark:text-neutral-200 text-neutral-900 font-semibold font-mono tracking-tight">
        Work Experience
      </h1>
      <div className=" flex  flex-col gap-2 ">
        <div className="flex  flex-col  items-start  mt-2 gap-3 p-0.5">
          <div className="flex gap-1 w-full">
            <div
              className="w-10 h-10 rounded-md flex justify-center items-center   dark:bg-neutral-900 dark:border-neutral-950 dark:shadow-[inset_0px_1px_2px_rgba(55,55,55,1),_inset_2px_-6px_6px_rgba(30,30,30,0.5)]
             bg-slate-50 border-neutral-200 shadow-[inset_0px_1px_2px_rgba(200,200,200,0.5),_inset_0px_-2px_2px_rgba(220,220,220,0.3)]"
            >
              <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="dark:text-neutral-400 text-neutral-800"
                >
                  <path
                    strokeMiterlimit="10"
                    d="M1.808 3.37a2.456 2.456 0 1 0 4.912 0a2.456 2.456 0 0 0-4.912 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.413 9.7h-.008l-4.15.024L4.211 7.27c-.029-.024-.062-.04-.093-.061a2 2 0 0 0-.147-.1a1.4 1.4 0 0 0-.162-.068c-.037-.01-.071-.028-.109-.042a2 2 0 0 0-.225-.045c-.021 0-.04-.01-.062-.012h-.1a1.48 1.48 0 0 0-1.2.545L2.1 7.5c-.025.03-.042.065-.064.1s-.065.09-.092.14a2 2 0 0 0-.069.165c-.014.037-.031.07-.043.109a1.5 1.5 0 0 0-.043.215c0 .025-.012.047-.014.07v.015l-.708 7.347a1.5 1.5 0 0 0 1.159 1.6l5.321 1.217l.36 3.27a1.5 1.5 0 0 0 1.659 1.33a1.5 1.5 0 0 0 1.327-1.656l-.477-4.33a1.5 1.5 0 0 0-1.157-1.3l-5.08-1.16l.321-3.278L5.788 12.4c.267.215.6.332.942.332h.009l4.683-.027a1.5 1.5 0 0 0-.009-3zm7.558-.137l-.686 4.493l-3.611.028m-2.209 2.657H22.94m-8.058 0l-.413 6.042m6.054-6.042l.413 6.042"
                  />
                </g>
              </svg>
            </div>
            <div className=" w-full flex flex-col  justify-end">
              <div className=" flex  gap-6 justify-between px-2">
                <div className="relative inline-block  p-0.5">
                  <h1
                    onCopy={(e) => {
                      e.preventDefault();
                      e.clipboardData.setData('text/plain', url);
                    }}
                    className=" blur-[14px] font-mono font-semibold  text-[16px] lg:text-[24px] dark:text-neutral-100 text-neutral-700 z-10 relative"
                  >
                    EasyMy Learing
                  </h1>
                </div>
                <div className=" flex gap-3 items-center  ">
                  {social_media.map((social) => (
                    <div
                      key={social.name}
                      className=" group relative  text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 dark:text-neutral-400  duration-200 ease-in-out "
                    >
                      <Link href={social.url} target="_blank">
                        {social.icon}
                      </Link>
                      <span
                        className="absolute bottom-full mb-1  font-mono  tracking-tight left-3 transform -translate-x-1/2  dark:bg-neutral-100 dark:text-neutral-700
                      bg-neutral-800 text-white text-xs rounded px-2 py-1 opacity-0 
                        group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                      >
                        {social.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 justify-start ">
            <div className="flex gap-3 w-full  items-center">
              <h1 className="text-[16px] font-mono dark:text-neutral-300 text-neutral-900 font-semibold ">
                Frontend Developer Inter
              </h1>
              <span className="text-[8px] w-14 h-[14px]   flex justify-center items-center   dark:border-neutral-800 dark:bg-neutral-900 bg-slate-100 border-slate-200  rounded-lg">
                Working <GoDotFill className="size-2.5 text-green-400  mt-0.5 " />
              </span>
            </div>
            <div className="flex flex-col p-0">
              <h1 className="text-[12px] dark:text-neutral-400 text-neutral-600 font-mono font-medium">
                Oct 2025 - Present
              </h1>
              <span className="text-[12px]  dark:text-neutral-400 text-neutral-600 font-medium">
                Remote
              </span>
            </div>
          </div>
        </div>
        <div className="mt-1 w-full  flex flex-col gap-2">
          <h1 className="dark:text-neutral-200 text-neutral-900 text-[16px] font-semibold font-mono">
            Technologies & Tools
          </h1>
          <div className="grid  gap-1 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6">
            {InterTeachnologies.map((icon) => (
              <>
                <div
                  className="  flex border max-w-[316px] w-full mx-auto dark:text-white cursor-pointer rounded-md px-2 gap-2 items-center justify-center py-1.5 
                dark:bg-neutral-900 dark:border-neutral-950 dark:shadow-[inset_0px_1px_2px_rgba(60,60,60,1),_inset_2px_-6px_6px_rgba(30,30,30,0.5)]
                bg-white border-neutral-200 shadow-[inset_0px_1px_2px_rgba(200,200,200,0.5),_inset_0px_-2px_2px_rgba(220,220,220,0.3)]
                "
                >
                  <span className="">{icon.icon}</span>
                  <p className="text-[12px]">{icon.name}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="w-full flex gap-3 flex-col items-start font-mono text-[12px] font-medium text-neutral-700 dark:text-neutral-300">
          <p>
            Focused on designing and developing clean, scalable, and user-friendly interfaces that
            enhance the overall user experience. I translated design concepts into responsive,
            high-quality UI components and ensured consistency across different devices and
            browsers.
          </p>
          <p>
            My role involved integrating and managing client-side APIs, handling application state
            efficiently, and working closely with designers and backend engineers to deliver
            features end-to-end. I actively optimized performance by improving load times, reducing
            unnecessary re-renders, and following best practices for modern frontend development.
          </p>
          <p>
            Implemented robust backend API integrations to fetch and update data securely, ensuring
            seamless communication between frontend and backend services.
          </p>
        </div>
      </div>
    </div>
  );
};
