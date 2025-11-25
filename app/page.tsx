"use client";
import { SocialMedia } from "@/types";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-medium font-mono min-h-screen">
      <div className=" flex flex-col gap-2  w-full  px-0 py-0 ">
        <div className="flex flex-col gap-1  relative">
          <div className=" relative border-b flex flex-col px-2 py-2  h-72">
            <div className="absolute z-10 inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 dark:from-background/80 dark:via-transparent dark:to-background/80" />
            <div className="absolute  z-10 inset-0 bg-gradient-to-b from-background/10 via-background/5  to-background/10 dark:from-background/30 dark:via-background/40 dark:to-background/50" />
            <Image src="/images/banner.jpg" alt="_banner" fill className="object-cover" />
            <div className=" absolute -bottom-8 left-2 rounded-full z-50   border-[3px] border-neutral-800">
              <Image
                src="/images/uzwal.jpg"
                alt="uzwal"
                width={100}
                height={100}
                className="rounded-full border-3 border-neutral-900 object-cover shadow-2xs"
              />
            </div>
          </div>
          <div className="flex  flex-col w-full  items-start justify-start p-0.5">
            <div className="flex justify-between mt-6  w-full relative ">
              <div className=" flex flex-col items-start px-2 ">
                <h1 className="font-mono text-[20px] sm:text-[24px] font-semibold  text-neutral-800 dark:text-neutral-100">
                  Uzwal Gaihre
                </h1>
                <p className="text-neutral-400 text-[16px] sm:text-[20px] font-mono font-medium">hello</p>
              </div>
              <div className="flex gap-3 items-center px-2 py-1.5 ">
                {SocialMedia.map((social) => (
                  <div
                    key={social.lablename}
                    className=" group relative border-2 rounded-md text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 dark:text-neutral-400 p-1 bg-neutral-100 shadow-[inset_0_2px_4px_rgba(250,250,250,1)]
              dark:bg-neutral-900 dark:shadow-[inset_0_2px_4px_rgba(40,40,40,1.5)]
              duration-200 ease-in-out
                 ">
                    <Link href={social.link} target="_blank">
                      {social.icon}
                    </Link>
                    <span
                      className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2  dark:bg-neutral-100 dark:text-neutral-700
                bg-neutral-800 text-white text-xs rounded px-2 py-1 opacity-0 
                group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                      {social.lablename}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}
