"use client"
import Link from "next/link";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import Image from "next/image";
import { Links } from "@/types";
import { useState } from "react";



export const NavBar = () => {
    const [isActive ,setActive]=useState("Portfolio")
  return (
    <div className="flex border items-center justify-between px-2 py-2">
      <div className="border-2 rounded-[12px] dark:border-neutral-900  p-0   shadow-xl">
        <Image
          src="/images/uzwal.jpg"
          alt="profile"
          width={50}
          height={50}
          className="rounded-[10px]"
        />
      </div>
      <div className="flex  items-center  gap-10 px-5 py-1.5">
        {Links.map((link)=>(
            <Link 
            onClick={()=>setActive(link.name)}
             key={link.name}
             href={link.link} className={`cursor-pointer font-medium font-mono  ${isActive===link.name ? " dark:text-neutral-200 text-neutral-900":"dark:text-neutral-500 text-neutral-400"} ` }>
             {link.name}
        </Link>
        ))}
        <div
          className=" group w-8 h-8  px-1.5 py-0.5 flex items-center justify-center rounded-[10px]
            bg-zinc-100 border-neutral-200 shadow-[inset_0_4px_6px_rgba(210,210,210,1)] hover:bg-neutral-50
            dark:bg-neutral-900 dark:border-neutral-900 dark:hover:bg-neutral-800 duration-300 transition-all ease-in-out   dark:shadow-[inset_0_4px_6px_rgba(52,52,52,1)] ">
          <AnimatedThemeToggler className="group-hover:cursor-pointer   dark:text-neutral-300  text-neutral-600 " />
        </div>
      </div>
    </div>
  );
};
