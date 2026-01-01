import { Works } from '@/types';
import { WorksProps } from '@/types/types';

import Link from 'next/link';

import { GoDotFill } from 'react-icons/go';

export const WorkView = () => {
  return (
    <div className="border-b flex items-start  h-screen w-full justify-start p-2">
      {Works.map((data) => (
        <WorkViewCompoenst key={data.company_name} {...data} />
      ))}
    </div>
  );
};

const WorkViewCompoenst = ({
  company_name,
  social_media,
  role,
  duration,
  descrption_1,
  descrption_2,
  descrption_3,
  tech,
}: WorksProps) => {
  const url = 'https://uzwal-in.vercel.app/';
  return (
    <div className=" w-full flex flex-col gap-1 mt-2  max-w-5xl mx-auto">
      <div className="flex   items-end  justify-start  w-full">
        <div className="rounded-lg border dark:border-neutral-900 dark:bg-neutral-950 bg-slate-100 dark:shadow-[inset_0_2px_2px_rgba(55,55,55,1),inset_0px_-1px_1px_rgba(52,52,52,1)] border-slate-200 p-1.5 h-10 w-10 flex justify-center items-center">
          <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              className="text-neutral-800 dark:text-neutral-400"
              d="M.99 2.68a2.65 2.65 0 1 0 5.3 0a2.65 2.65 0 1 0-5.3 0m10.38 6.84H6.88l-3.3-2.63A1.62 1.62 0 0 0 .94 8.12L.19 16a1.62 1.62 0 0 0 1.25 1.74L7.19 19l.39 3.54a1.62 1.62 0 0 0 3.22-.36l-.52-4.68A1.6 1.6 0 0 0 9 16.1l-5.45-1.25l.34-3.55l1.4 1.13a1.65 1.65 0 0 0 1 .36h5.06a1.62 1.62 0 0 0 0-3.24Zm8.28-1.66a.74.74 0 0 0-.86.63l-.64 4.22h-3.27a.76.76 0 0 0-.74.76a.75.75 0 0 0 .75.74h3.91a.74.74 0 0 0 .73-.63l.74-4.86a.74.74 0 0 0-.62-.86m3.61 7.76h-10.2a.56.56 0 0 0-.56.56v1a.56.56 0 0 0 .56.56h1.3l-.44 5.35a.75.75 0 0 0 .69.81h.06a.76.76 0 0 0 .75-.69l.45-5.48h4.58l.46 5.48a.75.75 0 0 0 .74.69h.07a.74.74 0 0 0 .68-.81l-.4-5.37h1.3a.56.56 0 0 0 .56-.56v-1a.56.56 0 0 0-.6-.54"
            />
          </svg>
        </div>
        <div className=" flex  gap-6 items-end justify-start px-2 w-[60%] ">
          <div className="relative inline-block  p-0.5">
            <h1
              onCopy={(e) => {
                e.preventDefault();
                e.clipboardData.setData('text/plain', url);
              }}
              className=" blur-[14px] font-mono font-semibold text-[24px] dark:text-neutral-100 text-neutral-700 z-10 relative"
            >
              {company_name}
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
                  className="absolute bottom-full mb-2  font-mono  tracking-tight left-3 transform -translate-x-1/2  dark:bg-neutral-100 dark:text-neutral-700
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
      <div className=" flex items-center justify-start gap-6  p-0.5 w-full">
        <h2 className="font-mono  font-semibold text-[16px] text-neutral-800 dark:text-neutral-200">
          {role}
        </h2>
        <p className="   flex gap-4 items-end font-mono text-[10px] text-neutral-600  font-semibold mt-1">
          {duration}{' '}
          <span className="border rounded-md w-20 h-auto dark:text-neutral-200 text-neutral-800 dark:border-neutral-950 font-mono bg-slate-100 border-slate-100 dark:bg-neutral-900 text-[10px]  flex items-end justify-center gap-1 ">
            Working
            <GoDotFill className="size-3.5 text-green-400  " />
          </span>
        </p>
      </div>
      <div className="w-full flex flex-col gap-2 mb-2">
        <p className="text-neutral-600 tracking-tight text-[12px] dark:text-neutral-400  font-mono  font-medium">
          {descrption_1}
        </p>
        <p className="text-neutral-600 tracking-tight text-[12px] dark:text-neutral-400  font-mono  font-medium">
          {descrption_2}
        </p>
        <p className="text-neutral-600 tracking-tight text-[12px] dark:text-neutral-400  font-mono  font-medium">
          {descrption_3}
        </p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <h1 className="dark:text-neutral-200 text-neutral-900 text-[16px] font-semibold font-mono">
          Technologies & Tools
        </h1>
        <div className=" w-full grid  grid-cols-2  sm:grid-cols-4 lg:grid-cols-6  gap-1">
          {tech.map((data) => (
            <div
              key={data.name}
              className="  flex border max-w-xs w-full mx-auto  cursor-pointer rounded-md px-1 gap-2 items-center justify-center py-1
            dark:bg-neutral-950 dark:hover:bg-neutral-900/50 duration-500 transition-all  font-mono  tracking-tight ease-in-out dark:border-neutral-950 dark:shadow-[inset_0px_1px_2px_rgba(60,60,60,1)]
            hover:bg-neutral-300/40 bg-white border-neutral-200 shadow-[inset_0px_1px_2px_rgba(220,220,220,0.5)]"
            >
              <p className="">{data.icon}</p>
              <span className="text-[12px] flex items-center font-semibold text-neutral-700 dark:text-neutral-400">
                {data.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
