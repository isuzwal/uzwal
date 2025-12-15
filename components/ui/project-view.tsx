import { ProjectProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaCode } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { ProjectsData } from '@/types';
export const ProjectView = () => {
  return (
    <div className="p-2 flex w-full items-center justify-center ">
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
          date={project.date}
        />
      ))}
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
  date,
}: ProjectProps) => {
  return (
    <div>
      <div
        className=" border-3 rounded-lg  max-w-[26rem] mx-auto w-full p-2 dark:bg-neutral-950 dark:border-neutral-800/60
  bg-slate-50 border-slate-100 hover:bg-black/5       dark:hover:bg-white/5 duration-300 ease-in-out
      "
      >
        <div className="relative h-44 w-full  dark:border-neutral-800 border-neutral-300 rounded-[8px] overflow-hidden">
          <Image
            src={imageURL || '/images/unzwal.jpg'}
            alt={name}
            fill
            className="object-cover rounded-[6px]"
          />
        </div>
        <div className=" mt-1 p-1.5">
          <h1 className="w-full flex justify-between items-center font-mono font-semibold text-[16px] tracking-tight">
            {name}
            <span className="flex gap-1">
              <Link
                href={liveURL}
                className="group relative dark:bg-neutral-900 border-[1.5px] dark:border-neutral-800/90  rounded p-0.5 dark:text-neutral-400 duration-300 ease-in-out dark:hover:bg-white/10 dark:hover:text-neutral-200  items-center flex justify-center w-5 h-5
              bg-slate-50 hover:bg-slate-200/60 hover:text-neutral-600 text-neutral-400 border-slate-200"
              >
                <span
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 dark:bg-neutral-100 dark:text-neutral-700 font-mono font-semibold
                bg-neutral-800 text-white text-xs rounded px-2 py-1 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                >
                  Live
                </span>
                <TbWorld className="size-4" />
              </Link>
              <Link
                href={codeURL}
                className=" group relative dark:bg-neutral-900 border-[1.5px] dark:border-neutral-800/90  rounded p-0.5 dark:text-neutral-400 duration-300 ease-in-out group dark:hover:bg-white/10 dark:hover:text-neutral-200  items-center flex justify-center w-5 h-5
              bg-slate-50 hover:bg-slate-200/60 hover:text-neutral-600 text-neutral-400 border-slate-200"
              >
                <span
                  className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 dark:bg-neutral-100 dark:text-neutral-700 font-mono font-semibold
                bg-neutral-800 text-white text-xs rounded px-2 py-1 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                >
                  Code
                </span>
                <FaCode className="size-4" />
              </Link>
            </span>
          </h1>
          <div className=" flex justify-start items-center gap-1 mt-1 flex-wrap">
            <p className=" tracking-tight text-[12px] font-mono dark:text-neutral-300 text-neutral-600 text-start">
              {description}
            </p>
            <div className="w-full flex flex-wrap gap-1 mt-1">
              {techstack.map((tech: string, index: number) => (
                <button
                  key={index}
                  className="font-mono flex border dark:text-white cursor-pointer rounded-md px-2 gap-1 items-center justify-center py-1 
                dark:bg-neutral-900 dark:border-neutral-950 dark:shadow-[inset_0px_1px_2px_rgba(60,60,60,1),inset_2px_-6px_6px_rgba(30,30,30,0.5)] text-[11px]
                bg-white border-neutral-200 shadow-[inset_0px_1px_2px_rgba(200,200,200,0.5),inset_0px_-2px_2px_rgba(220,220,220,0.3)]"
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
