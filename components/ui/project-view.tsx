import { ProjectProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { ProjectsData } from '@/types';
import { GoDotFill } from 'react-icons/go';
export const ProjectView = () => {
  return (
    <div className="p-2 flex w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mt-2 ">
        {ProjectsData.map((project: ProjectProps, index: number) => (
          <ProjectsComponents
            key={index}
            name={project.name}
            description={project.description}
            imageURL={project.imageURL}
            liveURL={project.liveURL}
            codeURL={project.codeURL}
            techstack={project.techstack}
            type={project.type}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectsComponents = ({
  name,
  description,
  imageURL,
  liveURL,
  codeURL,
  techstack,
  type,
}: ProjectProps) => {
  return (
    <div>
      <div
        className=" border-3 rounded-lg  max-w-[28rem] mx-auto w-full  dark:bg-neutral-950 dark:border-neutral-800/60
      bg-slate-50 border-slate-100 hover:bg-black/5       dark:hover:bg-white/5 duration-300 ease-in-out  "
      >
        <div className="relative h-60 w-full  dark:border-neutral-800 border-neutral-300 rounded-t-[8px] overflow-hidden group">
          <Image
            loading="lazy"
            src={imageURL || '/images/unzwal.jpg'}
            alt={name}
            fill
            className="object-cover rounded-t-[6px] group-hover:scale-110 duration-500 ease-in-out transition-all"
          />
        </div>
        <div className=" mt-1 p-1.5">
          <h1 className="w-full flex justify-between items-center font-mono font-semibold text-[16px] tracking-tight">
            <span className="flex  items-center gap-1 ">
              {name}{' '}
              {type == 'working' ? (
                <GoDotFill className="size-4 text-green-400  drop-shadow-[0_0_6px_#22c55e] " />
              ) : (
                <GoDotFill className="size-4 text-red-400  drop-shadow-[0_0_6px_#ef4444]  " />
              )}
            </span>
            <span className="flex gap-1">
              <Link
                href={liveURL}
                target="_blank"
                className="group relative dark:bg-neutral-900 border-[1.5px] dark:border-neutral-800/90  rounded p-0.5 dark:text-neutral-400 duration-300 ease-in-out dark:hover:bg-white/10 dark:hover:text-neutral-200  items-center flex justify-center w-5 h-5
              bg-slate-50 hover:bg-slate-200/60 hover:text-neutral-600 text-neutral-400 border-slate-200"
              >
                <span
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 dark:bg-neutral-100 dark:text-neutral-700 font-mono font-semibold
                bg-neutral-800 text-white text-[10px] rounded px-2 py-1 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                >
                  View Website
                </span>
                <TbWorld className="size-4" />
              </Link>
              <Link
                href={codeURL}
                target="_blank"
                className=" group relative dark:bg-neutral-900 border-[1.5px] dark:border-neutral-800/90  rounded p-0.5 dark:text-neutral-400 duration-300 ease-in-out group dark:hover:bg-white/10 dark:hover:text-neutral-200  items-center flex justify-center w-5 h-5
              bg-slate-50 hover:bg-slate-200/60 hover:text-neutral-600 text-neutral-400 border-slate-200"
              >
                <span
                  className="absolute  z-10 bottom-full mb-2 left-1/2 transform -translate-x-1/2 dark:bg-neutral-100 dark:text-neutral-700 font-mono font-semibold
                bg-neutral-800 text-white text-[10px] rounded px-2 py-1 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                >
                  View code
                </span>
                <FaCode className="size-4" />
              </Link>
            </span>
          </h1>
          <div className=" flex justify-start items-center gap-1 mt-1 flex-wrap">
            <p className=" tracking-wide  text-[12px] font-mono dark:text-neutral-300 text-neutral-600 text-start">
              {description}
            </p>
            <div className="w-full  grid grid-cols-3 gap-1 mt-1  ">
              {techstack.map((tech, index: number) => (
                <div
                  key={index}
                  className="font-mono flex border dark:text-white  rounded-md px-1 items-center justify-center py-1 
                dark:bg-neutral-900 dark:border-neutral-950 dark:shadow-[inset_0px_1px_2px_rgba(60,60,60,1),inset_2px_-6px_6px_rgba(30,30,30,0.5)] text-[11px]
                bg-white border-neutral-200 shadow-[inset_0px_1px_2px_rgba(200,200,200,0.5),inset_0px_-2px_2px_rgba(220,220,220,0.3)]"
                >
                  <p className="w-full flex gap-1 items-center justify-center  ">
                    {tech.icon}
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
