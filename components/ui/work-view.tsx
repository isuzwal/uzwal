import { Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import { BiWorld } from 'react-icons/bi';

export const WorkView = () => {
  return (
    <div className="border-b flex items-start  h-screen w-full justify-start p-2">
      <div className=" w-full flex flex-col gap-1  max-w-3xl mx-auto">
        <div className="flex   items-end  justify-start  w-full">
          <div className="rounded-lg border-2 dark:border-neutral-900  border-slate-200 ">
            <Image
              src="/images/uzwal.jpg"
              alt="Frist"
              height={60}
              width={60}
              className="object-contain rounded-[9px]"
            />
          </div>
          <div className=" flex  gap-2 items-center justify-start px-2 w-[60%] ">
            <h1 className="font-mono font-semibold text-[24px] dark:text-neutral-100 text-neutral-700">
              Uzwal Gaihre
            </h1>
            <div className="flex gap-2 items-center text-[16px]  mt-2 group   duration-300 ease-in-out transition-all cursor-pointer p-1">
              <BiWorld className="size-3.5 dark:group-hover:text-neutral-400 dark:text-neutral-200  cursor-pointer group-hover:text-neutral-700 text-neutral-500" />
            </div>
          </div>
        </div>
        <div className=" flex items-center  justify-start gap-4  p-0.5 w-full">
          <h2 className="font-mono font-medium text-[16px] text-neutral-600 dark:text-neutral-400">
            Duration
          </h2>
          <span className="text-[10px]  text-neutral-500  font-medium mt-1">Working</span>
        </div>
      </div>
    </div>
  );
};
