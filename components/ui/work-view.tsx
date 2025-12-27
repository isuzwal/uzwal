import { Works } from '@/types';
import { WorksProps } from '@/types/types';
import Image from 'next/image';
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
  image,
  company_name,
  social_media,
  role,
  duration,
  descrption_1,
  descrption_2,
  tech,
}: WorksProps) => {
  const url = 'https://uzwal-in.vercel.app/';
  return (
    <div className=" w-full flex flex-col gap-1 mt-2  max-w-5xl mx-auto">
      <div className="flex   items-end  justify-start  w-full">
        <div className="rounded-lg border-2 dark:border-neutral-800  border-slate-200 ">
          <Image
            src={image}
            alt={company_name}
            height={50}
            width={50}
            className="object-contain rounded-[9px] blur-xs"
          />
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
        <span className="text-[13px]   flex gap-4 items-center  text-neutral-600  font-semibold mt-1">
          {duration}{' '}
          <GoDotFill className="size-3.5 text-green-400  drop-shadow-[0_0_6px_#22c55e] " />
        </span>
      </div>
      <div className="w-full flex flex-col gap-3 mb-2">
        <p className="text-neutral-600 tracking-tight text-[14px] dark:text-neutral-400  font-mono  font-medium">
          {descrption_1}
        </p>
        <p className="text-neutral-600 tracking-tight text-[14px] dark:text-neutral-400  font-mono  font-medium">
          {descrption_2}
        </p>
      </div>
      <div className=" w-full grid  grid-cols-2 sm:grid-cols-5  gap-1">
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
  );
};
