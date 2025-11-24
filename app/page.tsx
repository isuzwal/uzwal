"use client";
import { SocialMedia } from "@/types";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-medium font-mono min-h-screen">
      <div className="border-b-2 flex flex-col gap-2  w-full  px-2 py-4 ">
        <div className="w-28 h-28 rounded-full relative ">
          <Image
            src="/images/uzwal.jpg"
            alt="uzwal"
            fill
            className="rounded-full border-2 object-cover"
          />
        </div>
        <div className="flex gap-3 items-center px-2 py-1.5">
          {SocialMedia.map((social) => (
            <div
              key={social.lablename}
              className=" group relative border-2 rounded-md text-neutral-500 dark:text-neutral-400 p-1 bg-neutral-100 shadow-[inset_0_2px_4px_rgba(250,250,250,1)]
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque mollitia accusantium possimus beatae laboriosam reprehenderit veritatis natus sint similique assumenda. Doloribus ullam quidem nemo omnis dolores aut ratione voluptas rerum!
   
  
      </div>
    </div>
  );
}
